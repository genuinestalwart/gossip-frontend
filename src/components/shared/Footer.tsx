import { ActionIcon, Anchor, Flex, Group, Text } from "@mantine/core";
import {
	IconBrandDiscordFilled,
	IconBrandGithubFilled,
	IconBrandLinkedin,
	IconBrandX,
} from "@tabler/icons-react";

const socialLinks = [
	{
		icon: <IconBrandDiscordFilled />,
		label: "Discord",
		href: "https://dsc.gg/genuinestalwart",
	},
	{ icon: <IconBrandX />, label: "X", href: "https://x.com/genuinestalwart" },
	{
		icon: <IconBrandGithubFilled />,
		label: "GitHub",
		href: "https://github.com/genuinestalwart/gossip-frontend",
	},
	{
		icon: <IconBrandLinkedin />,
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/nasifrahman23/",
	},
];

const Footer = () => {
	return (
		<Flex
			align='center'
			bg='neutral.9'
			component='footer'
			justify='space-between'
			px='xl'
			py='md'>
			<Text style={{ fontWeight: 600 }}>
				Gossip &copy; 2024 - All rights reserved.
			</Text>

			<Group gap='lg'>
				{socialLinks.map((item, i) => (
					<Anchor
						display='inline-flex'
						href={item.href}
						key={i}
						target='_blank'>
						<ActionIcon aria-label={item.label} variant='filled'>
							{item.icon}
						</ActionIcon>
					</Anchor>
				))}
			</Group>
		</Flex>
	);
};

export default Footer;
