import NextAuth from "next-auth";
import providers from "@/lib/configs/providers.config";
import axiosAuth from "@/lib/configs/axios.config";

const logInWithGoogle = async (credentials: object) => {
	try {
		const { data } = await axiosAuth.post("/auth/google", credentials);
		return data;
	} catch (error) {
		return null;
	}
};

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
			delete session.user.image;
			delete session.user.name;
			return session;
		},
		async signIn({ account, profile, user }) {
			if (account?.provider === "google") {
				const data = await logInWithGoogle({
					email: profile?.email,
					email_verified: profile?.email_verified,
					image: profile?.picture,
					name: profile?.name,
				});

				if (data) {
					user.accessToken = data.accessToken;
					user.createdAt = data.createdAt;
					user.email = data.email;
					user.id = data.id;
				}
			}

			return true;
		},
	},
	debug: false,
	logger: { debug: () => {}, error: () => {}, warn: () => {} },
	...providers,
	session: { strategy: "jwt" },
});
