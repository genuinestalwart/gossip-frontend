"use client";
import { signupForm } from "@/utilities/SignupForm";
import { Box, Button, PasswordInput, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const SignupForm = () => {
	const form = useForm(signupForm);

	const handleSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<Box
			bg='neutral.10'
			className='rounded-xl'
			component='form'
			onSubmit={form.onSubmit(handleSubmit)}
			p='md'>
			<TextInput
				key={form.key("name")}
				label='Your Name'
				withAsterisk
				{...form.getInputProps("name")}
			/>

			<Space h='xs' />

			<TextInput
				autoComplete='email'
				key={form.key("email")}
				label='Your Email'
				type='email'
				withAsterisk
				{...form.getInputProps("email")}
			/>

			<Space h='xs' />

			<PasswordInput
				autoComplete='new-password'
				key={form.key("password")}
				label='Your Password'
				withAsterisk
				{...form.getInputProps("password")}
			/>

			<Space h='lg' />

			<Button
				color='primary.6'
				fullWidth
				size='md'
				style={{ color: "black" }}
				type='submit'>
				Sign Up
			</Button>
		</Box>
	);
};

export default SignupForm;
