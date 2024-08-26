import { Flex, Group, Title } from "@mantine/core";
import Logo from "@/components/shared/Logo";
import Navbar from "@/components/shared/Navbar";

const Header = () => {
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

			<Navbar />
		</Flex>
	);
};

export default Header;
