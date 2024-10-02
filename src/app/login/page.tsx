"use client";
import ForgotForm from "@/components/login/ForgotForm";
import SignInForm from "@/components/login/SignInForm";
import WithGoogle from "@/components/shared/WithGoogle";
import { Box, Card, Space, Text, Title } from "@mantine/core";
import { useState } from "react";

const LoginPage = () => {
	const [disabled, setDisabled] = useState<boolean>(false);
	const [login, setLogin] = useState<boolean>(true);

	return (
		<Box className='container min-h-[calc(100vh_-_4rem)]' component='main'>
			<Card maw='50ch' mx='auto' my='xl' radius='lg'>
				<Title order={1} ta='center' style={{ color: "white" }}>
					{login ? "Welcome Back, User!" : "We've Got You Covered!"}
				</Title>

				<Space h='lg' />
				{login ? (
					<SignInForm disabled={disabled} setDisabled={setDisabled} />
				) : (
					<ForgotForm />
				)}

				{!disabled && (
					<Text
						c='primary.6'
						className='hover:underline'
						mt='xs'
						onClick={() => setLogin(!login)}
						size='sm'
						style={{ cursor: "pointer" }}>
						{login ? "Forgot" : "Remember"} password?
					</Text>
				)}

				{login && (
					<WithGoogle
						disabled={disabled}
						login
						setDisabled={setDisabled}
					/>
				)}
			</Card>
		</Box>
	);
};

export default LoginPage;
