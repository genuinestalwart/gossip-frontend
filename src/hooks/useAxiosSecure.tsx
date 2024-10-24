import { logOut } from "@/lib/utils/auth.util";
import axios from "axios";
import { Session } from "next-auth";
import { useEffect } from "react";

const axiosSecure = axios.create({
	baseURL: "https://gs-gossip-backend.vercel.app",
});

const useAxiosSecure = (session: Session | null) => {
	useEffect(() => {
		const secureRequest = axiosSecure.interceptors.request.use(
			async (config) => {
				const token = session?.user?.accessToken;
				config.headers.Authorization = `Bearer ${token}`;
				return config;
			},
			(error) => Promise.reject(error)
		);

		const secureResponse = axiosSecure.interceptors.response.use(
			(response) => response,
			async (error) => {
				if ([401, 403, 404].includes(error.response.status)) {
					await logOut();
				}

				return Promise.reject(error);
			}
		);

		return () => {
			axiosSecure.interceptors.request.eject(secureRequest);
			axiosSecure.interceptors.response.eject(secureResponse);
		};
	}, [session?.user?.accessToken]);

	return axiosSecure;
};
export default useAxiosSecure;
