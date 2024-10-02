import { UseFormInput } from "@mantine/form";

export const namesForm: UseFormInput<Record<string, any>> = {
	initialValues: { firstName: "", fullName: "" },
	mode: "uncontrolled",
	validate: {
		firstName: (v) =>
			v.length > 2 && v.length < 11
				? null
				: "Your first name must be 3-10 characters long.",
		fullName: (v) =>
			v.length > 4 && v.length < 51
				? null
				: "Your full name must be 5-50 characters long.",
	},
};
