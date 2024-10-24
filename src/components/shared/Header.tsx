import { Flex, Group, Title } from "@mantine/core";
import Logo from "@/components/misc/Logo";
import Navbar from "@/components/misc/Navbar";
import { auth } from "@/lib/configs/auth.config";
import NavDrawer from "@/components/misc/NavDrawer";

const Header = async () => {
	const session = await auth();

	return (
		<Flex
			align='center'
			className='h-16'
			component='header'
			justify='space-between'
			px='xl'>
			<Group gap='xs'>
				<Logo className='h-12 w-12' />

				<Title component='div' order={1} tt='uppercase'>
					Gossip
				</Title>
			</Group>

			<Navbar session={session} />
			<NavDrawer session={session} />
		</Flex>
	);
};

export default Header;
