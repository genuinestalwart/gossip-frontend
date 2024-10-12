import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import axiosAuth from "@/utilities/configs/axiosAuth";

const loginUser = async (email: string, password: string) => {
	const { data } = await axiosAuth.post("/login", { email, password });
	return data;
};

const registerUser = async (credentials: object) => {
	const { data } = await axiosAuth.post("/register", credentials);
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
				user = await loginUser(
					(email as string).toLowerCase(),
					password as string
				);

				if (!user && register) {
					user = await registerUser(credentials);
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
