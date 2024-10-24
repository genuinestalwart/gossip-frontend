"use server";
import { signIn, signOut } from "@/lib/configs/auth.config";
export const logOut = () => signOut();
export const signInWithGoogle = () => signIn("google");

export const signInWithCredentials = (cred: object, register: string) =>
	signIn("credentials", { ...cred, register });
