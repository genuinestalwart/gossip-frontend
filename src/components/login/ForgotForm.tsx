"use client";
import { forgotForm } from "@/lib/forms/ForgotForm";
import { Box, Button, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const ForgotForm = () => {
	const form = useForm(forgotForm);

	const handleSubmit = (data: any) => {};

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

			<Space h='lg' />

			<Button
				color='primary.6'
				fullWidth
				size='md'
				style={{ color: "black" }}
				type='submit'>
				Send Verification Mail
			</Button>
		</Box>
	);
};

export default ForgotForm;
