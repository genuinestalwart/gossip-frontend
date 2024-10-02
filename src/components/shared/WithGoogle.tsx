import { Button, Divider, Space, Text } from "@mantine/core";
import Link from "next/link";
import { useState } from "react";

interface Props {
	disabled: boolean;
	login: boolean;
	setDisabled: Function;
}

const WithGoogle: React.FC<Props> = ({ disabled, login, setDisabled }) => {
	const [loading, setLoading] = useState<boolean>(false);

	const handleClick = () => {
		setDisabled(true);
		setLoading(true);
	};

	return (
		<>
			<Divider my='sm' label='OR' labelPosition='center' />

			<Button
				color='primary.6'
				disabled={disabled}
				loading={loading}
				mx='md'
				onClick={() => handleClick()}
				size='md'
				variant='outline'>
				{login ? "Log In" : "Register"} with Google
			</Button>

			<Space h='xs' />

			<Text size='sm' ta='center'>
				{login ? "Don't" : "Already"} have an account?{" "}
				<Link
					className='text-primary hover:underline'
					href={login ? "/register" : "/login"}>
					{login ? "Create a new one." : "Log in instead."}
				</Link>
			</Text>
		</>
	);
};

export default WithGoogle;
