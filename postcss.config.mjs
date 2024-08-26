/** @type {import('postcss-load-config').Config} */

const config = {
	plugins: {
		"postcss-import": {},
		"tailwindcss/nesting": {},
		tailwindcss: {},
		"postcss-preset-mantine": {},
		"postcss-simple-vars": {
			variables: {
				"mantine-breakpoint-xs": "32em",
				"mantine-breakpoint-sm": "48em",
				"mantine-breakpoint-md": "64em",
				"mantine-breakpoint-lg": "80em",
				"mantine-breakpoint-xl": "96em",
			},
		},
	},
};

export default config;
