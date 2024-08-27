"use client";
import { signinForm } from "@/utilities/SigninForm";
import { Box, Button, PasswordInput, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const SigninForm = () => {
	const form = useForm(signinForm);

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
				Sign In
			</Button>
		</Box>
	);
};

export default SigninForm;
