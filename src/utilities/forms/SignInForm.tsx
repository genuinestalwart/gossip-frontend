import { Text, Title } from "@mantine/core";
import { UseFormInput } from "@mantine/form";
import { NotificationData } from "@mantine/notifications";

export const signinForm: UseFormInput<Record<string, any>> = {
	initialValues: { email: "", password: "" },
	mode: "uncontrolled",
	validate: {
		email: (v) =>
			/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/.test(
				v
			)
				? null
				: "Invalid Email Address. If you think that's a valid email but still showing this error, please contact the developer.",
		password: (v) =>
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/.test(
				v
			)
				? null
				: "Your password must contain at least 1 small letter, 1 big letter, 1 number and 1 special character and must be 8-32 characters long.",
	},
};

export const notifyData: NotificationData = {
	autoClose: false,
	color: "white",
	message: <Text c='white'>Incorrect credentials. Please try again.</Text>,
	position: "bottom-right",
	styles: {
		root: { backgroundColor: "red" },
		closeButton: { color: "white" },
	},
	title: (
		<Title c='white' fw={800} order={5}>
			Log In Failed
		</Title>
	),
};
