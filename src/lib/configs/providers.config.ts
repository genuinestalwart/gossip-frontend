import { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";
import axiosAuth from "@/lib/configs/axios.config";
import Google from "next-auth/providers/google";

const logInWithCredentials = async (email: string, password: string) => {
	try {
		const credentials = { email, password };
		const { data } = await axiosAuth.post("/auth/login", credentials);
		return data;
	} catch (error) {
		return null;
	}
};

const registerWithCredentials = async (credentials: object) => {
	try {
		const { data } = await axiosAuth.post("/auth/register", credentials);
		return data;
	} catch (error) {
		return null;
	}
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
		Google({
			clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
			clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
		}),
	],
} satisfies NextAuthConfig;
