"use client";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { User } from "@/types/global";
import { logOut } from "@/lib/utils/auth.util";
import {
	Avatar,
	Button,
	Loader,
	Menu,
	MenuDivider,
	MenuDropdown,
	MenuTarget,
	Text,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Session } from "next-auth";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = ({ session }: { session: Session }) => {
	const pathname = usePathname();
	const axiosSecure = useAxiosSecure(session);
	const color = (active: boolean) => (active ? "primary.6" : "neutral.9");

	const { data: user = null, isLoading } = useQuery<User | null>({
		enabled: !!session,
		queryKey: ["user", session?.user],
		queryFn: async () => {
			const { data } = await axiosSecure.get(
				`/user/${session?.user?.id}`
			);

			return data;
		},
	});

	return isLoading ? (
		<Loader color='primary.6' />
	) : (
		<Menu>
			<MenuTarget>
				<Avatar
					alt='no avatar found'
					className='cursor-pointer'
					color='primary.6'
					src={user?.avatar || null}
				/>
			</MenuTarget>

			<MenuDropdown p='md'>
				<Avatar
					alt='no avatar found'
					color='primary.6'
					mx='auto'
					size='xl'
					src={user?.avatar || null}
				/>

				<Text fw={700} my='xs' size='lg' ta='center'>
					{user?.fullName}
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
