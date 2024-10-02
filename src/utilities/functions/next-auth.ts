"use server";
import { signIn, signOut } from "@/utilities/configs/auth";
export const logOut = async () => await signOut();

export const signInWithCredentials = async (credentials: object) => {
	await signIn("credentials", credentials);
};
