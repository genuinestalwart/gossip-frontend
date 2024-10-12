import NextAuth from "next-auth";

declare module "next-auth" {
	interface User {
		accessToken: string;
		createdAt: number;
		email: string;
		id: string;
	}
}
