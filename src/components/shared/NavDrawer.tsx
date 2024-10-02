"use client";
import { logOut } from "@/utilities/functions/next-auth";
import { Burger, Button, Drawer, Stack } from "@mantine/core";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const linksA = [
	{ path: "/", text: "Home" },
	{ path: "/feedback", text: "Feedbacks" },
];

const linksB = [
	{ path: "/login", text: "Log In" },
	{ path: "/register", text: "Register" },
];

const linksC = [
	{ path: "/manage", text: "Manage Rooms" },
	{ path: "/profile", text: "View Profile" },
];

const NavDrawer = ({ session }: { session: Session | null }) => {
	const [open, setOpen] = useState<boolean>(false);
	const pathname = usePathname();
	const color = (active: boolean) => (active ? "primary.6" : "neutral.9");
	const links = session ? [...linksA, ...linksC] : [...linksA, ...linksB];

	return (
		<>
			<Burger
				aria-label='Toggle Navbar'
				className='sm:hidden'
				onClick={() => setOpen(!open)}
				opened={open}
			/>

			<Drawer
				className='sm:hidden'
				offset={8}
				onClose={() => setOpen(false)}
				opened={open}
				overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
				size='100%'>
				<Stack>
					{links.map((item, i) => (
						<Link href={item.path} key={i} scroll={false}>
							<Button
								color={color(item.path === pathname)}
								fullWidth>
								{item.text}
							</Button>
						</Link>
					))}

					{session && (
						<Button
							color='red.6'
							fullWidth
							onClick={async () => await logOut()}>
							Log Out
						</Button>
					)}
				</Stack>
			</Drawer>
		</>
	);
};

export default NavDrawer;
