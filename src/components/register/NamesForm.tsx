"use client";
import { namesForm } from "@/lib/forms/NamesForm";
import { Box, Button, Card, Space, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import WithGoogle from "@/components/shared/WithGoogle";

interface Props {
	disabled: boolean;
	names: { firstName: string; fullName: string };
	setActiveStep: Function;
	setDisabled: Function;
	setNames: Function;
}

const NamesForm: React.FC<Props> = ({
	disabled,
	names,
	setActiveStep,
	setDisabled,
	setNames,
}) => {
	const form = useForm(namesForm);

	const handleSubmit = (data: any) => {
		setNames(data);
		setActiveStep(1);
	};

	useEffect(() => {
		form.setValues({
			firstName: names.firstName || "",
			fullName: names.fullName || "",
		});
	}, [names]);

	return (
		<Card radius='lg'>
			<Title order={1} ta='center' style={{ color: "white" }}>
				Introduce Yourself!
			</Title>

			<Space h='lg' />

			<Box
				bg='neutral.10'
				className='rounded-xl'
				component='form'
				onSubmit={form.onSubmit(handleSubmit)}
				p='md'>
				<TextInput
					defaultValue={names.firstName}
					disabled={disabled}
					label='Your First Name'
					withAsterisk
					{...form.getInputProps("firstName")}
				/>

				<Space h='xs' />

				<TextInput
					defaultValue={names.fullName}
					disabled={disabled}
					label='Your Full Name'
					withAsterisk
					{...form.getInputProps("fullName")}
				/>

				<Space h='lg' />

				<Button
					color='primary.6'
					disabled={disabled}
					fullWidth
					size='md'
					style={{ color: "black" }}
					type='submit'>
					Next
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

export default NamesForm;
