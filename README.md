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
    npm install @mantine/core @mantine/hooks @fontsource-variable/orbitron @fontsource-variable/saira @tabler/icons-react
    npm install --save-dev postcss-preset-mantine postcss-simple-vars
    ```

2. Add these lines in `postcss.config.mjs`.

    ```js
    plugins: {
        "postcss-import": {}, // this line
        "tailwindcss/nesting": {}, // this line
        tailwindcss: {},
    },
    ```
