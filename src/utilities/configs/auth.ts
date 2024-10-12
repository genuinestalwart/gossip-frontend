import NextAuth from "next-auth";
import providers from "@/utilities/configs/providers";

export const { auth, handlers, signIn, signOut } = NextAuth({
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.accessToken = user.accessToken;
				token.createdAt = user.createdAt;
				token.email = user.email;
				token.id = user.id;
			}

			return token;
		},
		async session({ session, token }) {
			session.user.accessToken = token.accessToken as string;
			session.user.createdAt = token.createdAt as number;
			session.user.email = token.email as string;
			session.user.id = token.id as string;

			return session;
		},
	},
	debug: false,
	logger: { debug: () => {}, error: () => {}, warn: () => {} },
	...providers,
	session: { strategy: "jwt" },
});
