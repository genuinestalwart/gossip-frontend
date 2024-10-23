# Gossip | Frontend

> *A dynamic voice communication platform designed for seamless collaboration and engaging interactions. Elevate your group discussions with crystal-clear audio, real-time connectivity, and robust features tailored for effective teamwork and social engagement.*

## Technologies Used

- Next.js
- Mantine UI
- TailwindCSS
- TypeScript
- Next Auth
- Axios
- Tanstack React Query

## Documentation

If you want to create this project on your own, do the following steps:

1. Create an app-router based next.js app with tailwindcss and typescript. Then, install the necessary packages.

    ```bash
    npx create-next-app@latest
    npm i @mantine/core @mantine/hooks @mantine/form @mantine/notifications @fontsource-variable/orbitron @fontsource-variable/saira @tabler/icons-react next-auth@beta axios @tanstack/react-query
    npm i -D postcss-preset-mantine postcss-simple-vars
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

3. Generate the auth secret environment variable for Next Auth.

    ```bash
    npx auth secret
    ```

4. Import your fonts and other css files in `app/layout.tsx` file; Add your custom colors and font variables in `tailwind.config.ts` file.
5. Define your own theme for Mantine UI and add it via the provider in `app/layout.tsx` file.
