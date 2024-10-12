"use server";
import { signIn, signOut } from "@/utilities/configs/auth";
export const logOut = () => signOut();

export const signInWithCredentials = (cred: object, register: string) =>
	signIn("credentials", { ...cred, register });
