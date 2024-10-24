"use client";
import { signupForm } from "@/lib/forms/SignupForm";
import {
	Box,
	Button,
	Card,
	PasswordInput,
	Space,
	TextInput,
	Title,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import WithGoogle from "@/components/shared/WithGoogle";
import { useState } from "react";
import { signInWithCredentials } from "@/lib/utils/auth.util";

interface Props {
	disabled: boolean;
	names: object;
	setDisabled: Function;
}

const SignUpForm: React.FC<Props> = ({ disabled, names, setDisabled }) => {
	const [loading, setLoading] = useState<boolean>(false);
	const form = useForm(signupForm);

	const handleSubmit = async (data: any) => {
		const credentials = { ...data, ...names };
		setDisabled(true);
		setLoading(true);
		await signInWithCredentials(credentials, " ");
	};

	return (
		<Card radius='lg'>
			<Title order={1} ta='center' style={{ color: "white" }}>
				Get Started With Us!
			</Title>

			<Space h='lg' />

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
					Sign Up
				</Button>
			</Box>

			<Space h='xs' />

			<WithGoogle
				disabled={disabled}
				login={false}
				setDisabled={setDisabled}
			/>
		</Card>
	);
};

export default SignUpForm;
