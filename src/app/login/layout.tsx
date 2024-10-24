import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { auth } from "@/lib/configs/auth.config";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
	description:
		"A dynamic voice communication platform designed for seamless collaboration and engaging interactions. Elevate your group discussions with crystal-clear audio, real-time connectivity, and robust features tailored for effective teamwork and social engagement.",
	// keywords: [""],
	// metadataBase: new URL(""),
	// openGraph: { images: "/logo.png" },
	title: "Register | Gossip",
};

const LoginLayout = async ({ children }: { children: React.ReactNode }) => {
	const session = await auth();

	if (session) {
		redirect("/manage");
	}

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default LoginLayout;
