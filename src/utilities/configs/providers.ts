import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import axiosAuth from "@/utilities/configs/axiosAuth";

const logInWithCredentials = async (email: string, password: string) => {
	const { data } = await axiosAuth.post("/auth/login", { email, password });
	return data;
};

const registerWithCredentials = async (credentials: object) => {
	const { data } = await axiosAuth.post("/auth/register", credentials);
	return data;
};

export default {
	providers: [
		credentials({
			authorize: async ({
				email,
				firstName,
				fullName,
				password,
				register,
			}) => {
				const credentials = { email, firstName, fullName, password };
				let user = null;
				user = await logInWithCredentials(
					(email as string).toLowerCase(),
					password as string
				);

				if (!user && register) {
					user = await registerWithCredentials(credentials);
				}

				return user;
			},
			credentials: {
				email: { type: "email" },
				firstName: { type: "text" },
				fullName: { type: "text" },
				password: { type: "password" },
				register: { type: "text" },
			},
		}),
	],
} satisfies NextAuthConfig;
