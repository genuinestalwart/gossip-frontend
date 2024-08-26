"use client";
import { Group } from "@mantine/core";
import ActiveLink from "@/components/shared/ActiveLink";

const links = [
	{ path: "/", text: "Home" },
	{ path: "/feedback", text: "Feedback" },
	{ path: "/login", text: "Login" },
];

const Navbar = () => {
	return (
		<Group gap='xl'>
			{links.map((item, i) => (
				<ActiveLink
					className={(active: boolean) =>
						`font-medium ${
							active
								? "text-primary"
								: "hover:underline underline-offset-2"
						}`
					}
					href={item.path}
					key={i}>
					{item.text}
				</ActiveLink>
			))}
		</Group>
	);
};

export default Navbar;
