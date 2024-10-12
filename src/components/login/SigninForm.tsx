"use client";
import { signInWithCredentials } from "@/utilities/actions/authAliases";
import { notifyData, signinForm } from "@/utilities/forms/SignInForm";
import { Box, Button, PasswordInput, Space, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";

interface Props {
	disabled: boolean;
	setDisabled: Function;
}

const SignInForm: React.FC<Props> = ({ disabled, setDisabled }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm(signinForm);

	const handleSubmit = async (data: any) => {
		setDisabled(true);
		setLoading(true);

		try {
			await signInWithCredentials(data, "");
		} catch (error) {
			showNotification(notifyData);
			setDisabled(false);
			setLoading(false);
		}
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
				disabled={disabled}
				label='Your Email'
				type='email'
				withAsterisk
				{...form.getInputProps("email")}
			/>

			<Space h='xs' />

			<PasswordInput
				autoComplete='new-password'
				disabled={disabled}
				label='Your Password'
				withAsterisk
				{...form.getInputProps("password")}
			/>

			<Space h='lg' />

			<Button
				color='primary.6'
				disabled={disabled}
				fullWidth
				loading={loading}
				size='md'
				style={{ color: "black" }}
				type='submit'>
				Log In
			</Button>
		</Box>
	);
};

export default SignInForm;
