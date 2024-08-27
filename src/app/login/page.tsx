"use client";
import SigninForm from "@/components/login/SigninForm";
import SignupForm from "@/components/login/SignupForm";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { Box, Button, Card, Divider, Space, Text, Title } from "@mantine/core";
import { useState } from "react";

const LoginPage = () => {
	const [login, setLogin] = useState(true);

	return (
		<>
			<Header />

			<Box className='container' component='main'>
				<Card maw='50ch' mx='auto' my='xl' radius='lg'>
					<Title order={1} ta='center' style={{ color: "white" }}>
						{login ? "Welcome Back, User!" : "Get Started With Us!"}
					</Title>

					<Space h='lg' />
					{login ? <SigninForm /> : <SignupForm />}
					<Divider my='sm' label='OR' labelPosition='center' />

					<Button
						color='primary.6'
						mx='md'
						size='md'
						style={{ color: "black" }}>
						{login ? "Signin" : "Signup"} with Google
					</Button>

					<Space h='xs' />

					<Text size='sm' ta='center'>
						{login ? "Don't" : "Already"} have an account?{" "}
						<Text
							c='primary.6'
							className='hover:underline'
							onClick={() => setLogin(!login)}
							span
							style={{ cursor: "pointer" }}>
							{login ? "Create a new one." : "Try login instead."}
						</Text>
					</Text>
				</Card>
			</Box>

			<Footer />
		</>
	);
};

export default LoginPage;
