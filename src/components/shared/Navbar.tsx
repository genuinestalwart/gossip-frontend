"use client";
import { Group } from "@mantine/core";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import NavMenu from "@/components/shared/NavMenu";

const linksA = [
	{ path: "/", text: "Home" },
	{ path: "/feedback", text: "Feedbacks" },
];

const linksB = [
	{ path: "/login", text: "Log In" },
	{ path: "/register", text: "Register" },
];

const className = (active: boolean) =>
	`font-medium ${
		active ? "text-primary" : "hover:underline underline-offset-2"
	}`;

const Navbar = ({ session }: { session: Session | null }) => {
	const pathname = usePathname();
	const links = session ? linksA : [...linksA, ...linksB];

	useEffect(() => {
		console.log(session);
	}, [session]);

	return (
		<Group gap='xl' visibleFrom='xs'>
			{links.map((item, i) => (
				<Link
					className={className(item.path === pathname)}
					href={item.path}
					key={i}
					scroll={false}>
					{item.text}
				</Link>
			))}

			{session && (
				<>
					<Link
						className={className("/manage" === pathname)}
						href='/manage'
						scroll={false}>
						Rooms
					</Link>

					<NavMenu session={session} />
				</>
			)}
		</Group>
	);
};

export default Navbar;
