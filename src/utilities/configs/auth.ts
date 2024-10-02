import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import axiosPublic from "@/utilities/configs/axios";

const loginUser = async (email: any, password: any) => {
	const { data } = await axiosPublic.post("/login", { email, password });
	return data;
};

const registerUser = async (credentials: object) => {
	const { data } = await axiosPublic.post("/register", credentials);
	return data;
};

export const { auth, handlers, signIn, signOut } = NextAuth({
	providers: [
		credentials({
			authorize: async ({ email, firstName, fullName, password }) => {
				const credentials = { email, firstName, fullName, password };
				let user = null;
				user = await loginUser(email, password);

				if (!user) {
					user = await registerUser(credentials);
				}

				return user;
			},
			credentials: {
				email: {},
				firstName: {},
				fullName: {},
				password: {},
			},
		}),
	],
});
