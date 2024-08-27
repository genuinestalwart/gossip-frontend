import { UseFormInput } from "@mantine/form";

export const signupForm: UseFormInput<Record<string, any>> = {
	initialValues: { email: "", name: "", password: "" },
	mode: "uncontrolled",
	validate: {
		email: (v) =>
			/^([a-z0-9]+(\.[^\WA-Z_]+)*){6,30}@((([a-z0-9-](?!--)){3,}\.)+[a-z]{2,})$/.test(
				v
			)
				? null
				: "Invalid Email Address. If you think that's a valid email but still showing this error, please contact the developer.",
		name: (v) =>
			v.length > 4 && v.length < 51
				? null
				: "Your name must be 5-50 characters long.",
		password: (v) =>
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/.test(
				v
			)
				? null
				: "Your password must contain at least 1 small letter, 1 big letter, 1 number and 1 special character and must be 8-32 characters long.",
	},
};
