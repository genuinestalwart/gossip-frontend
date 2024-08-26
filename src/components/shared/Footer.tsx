import { ActionIcon, Flex, Group, Text } from "@mantine/core";
import {
	IconBrandDiscordFilled,
	IconBrandGithubFilled,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";

const Footer = () => {
	return (
		<Flex
			align='center'
			bg='primary.6'
			bottom={0}
			component='footer'
			justify='space-between'
			pos='absolute'
			px='xl'
			py='lg'
			w='100%'>
			<Text style={{ color: "black", fontWeight: 600 }}>
				Gossip &copy; 2024 - All rights reserved.
			</Text>

			<Group gap='lg'>
				<ActionIcon aria-label='Discord' variant='filled'>
					<IconBrandDiscordFilled color='black' />
				</ActionIcon>

				<ActionIcon aria-label='X' variant='filled'>
					<IconBrandX color='black' />
				</ActionIcon>

				<ActionIcon aria-label='GitHub' variant='filled'>
					<IconBrandGithubFilled color='black' />
				</ActionIcon>

				<ActionIcon aria-label='LinkedIn' variant='filled'>
					<IconBrandLinkedin color='black' />
				</ActionIcon>
			</Group>
		</Flex>
	);
};

export default Footer;
