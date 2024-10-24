import { UseFormInput } from "@mantine/form";

export const forgotForm: UseFormInput<Record<string, any>> = {
	initialValues: { email: "" },
	mode: "uncontrolled",
	validate: {
		email: (v) =>
			/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/.test(
				v
			)
				? null
				: "Invalid Email Address. If you think that's a valid email but still showing this error, please contact the developer.",
	},
};
