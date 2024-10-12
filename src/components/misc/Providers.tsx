"use client";
import { theme } from "@/utilities/configs/theme";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const client = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={client}>
			<MantineProvider defaultColorScheme='dark' theme={theme}>
				<Notifications limit={5} />
				{children}
			</MantineProvider>
		</QueryClientProvider>
	);
};

export default Providers;
