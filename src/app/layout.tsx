import type { Metadata } from "next";
import { Orbitron, Saira } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import "@/app/globals.css";
import "@fontsource-variable/saira";
import "@fontsource-variable/orbitron";
import { ColorSchemeScript } from "@mantine/core";
import Providers from "@/components/misc/Providers";

const orbitron = Orbitron({
	weight: ["400", "500", "600", "700", "800", "900"],
	variable: "--font-orbitron",
	subsets: ["latin"],
	style: ["normal"],
	display: "swap",
});

const saira = Saira({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-saira",
	subsets: ["latin"],
	style: ["italic", "normal"],
	display: "swap",
});

export const metadata: Metadata = {
	description:
		"A dynamic voice communication platform designed for seamless collaboration and engaging interactions. Elevate your group discussions with crystal-clear audio, real-time connectivity, and robust features tailored for effective teamwork and social engagement.",
	// keywords: [""],
	// metadataBase: new URL(""),
	// openGraph: { images: "/logo.png" },
	title: "Home | Gossip",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html
			className={`${orbitron.variable} ${saira.variable}`}
			lang='en'
			suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
			</head>

			<body className='antialiased bg-neutral-950 font-saira text-white'>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};

export default RootLayout;
