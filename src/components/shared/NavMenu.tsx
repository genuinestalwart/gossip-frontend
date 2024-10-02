"use client";
import { logOut } from "@/utilities/functions/next-auth";
import {
	Avatar,
	Button,
	Menu,
	MenuDivider,
	MenuDropdown,
	MenuTarget,
	Text,
} from "@mantine/core";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({ session }: { session: Session }) => {
	const pathname = usePathname();
	const color = (active: boolean) => (active ? "primary.6" : "neutral.9");

	return (
		<Menu>
			<MenuTarget>
				<Avatar
					alt='no avatar found'
					className='cursor-pointer'
					color='primary.6'
					src={session.user?.image || null}
				/>
			</MenuTarget>

			<MenuDropdown p='md'>
				<Avatar
					alt='no avatar found'
					color='primary.6'
					mx='auto'
					size='xl'
					src={session.user?.image || null}
				/>

				<Text my='xs' size='lg'>
					{session.user?.name || "Genuine Stalwart"}
				</Text>

				<MenuDivider />

				<Link href='/profile' scroll={false}>
					<Button
						color={color("/profile" === pathname)}
						fullWidth
						my='md'>
						View Profile
					</Button>
				</Link>

				<Button
					color='red.6'
					fullWidth
					onClick={async () => await logOut()}>
					Log Out
				</Button>
			</MenuDropdown>
		</Menu>
	);
};

export default NavMenu;
