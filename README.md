# Gossip | Frontend

> *A dynamic voice communication platform designed for seamless collaboration and engaging interactions. Elevate your group discussions with crystal-clear audio, real-time connectivity, and robust features tailored for effective teamwork and social engagement.*

## Technologies Used

- Next.js
- Mantine UI

## Documentation

If you want to create this project on your own, do the following steps:

1. Create an app-router based next.js app with tailwindcss and typescript. Then, install the necessary packages.

    ```bash
    npx create-next-app@latest
    npm install @mantine/core @mantine/hooks @mantine/form @fontsource-variable/orbitron @fontsource-variable/saira @tabler/icons-react
    npm install --save-dev postcss-preset-mantine postcss-simple-vars
    ```

2. Update the `postcss.config.mjs` file.

    ```js
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
    ```

3. Import your fonts and other css files in `app/layout.tsx` file; Add your custom colors and font variables in `tailwind.config.ts` file.
4. Define your own theme for Mantine UI and add it via the provider in `app/layout.tsx` file.
