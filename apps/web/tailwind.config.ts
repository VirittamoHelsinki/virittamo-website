import type { Config } from "tailwindcss";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                'virittamo-pink': '#f4a3c5',
                'virittamo-grey': '#e0e0e0',
                'virittamo-green': '#54b99a',
                'virittamo-white': '#ffffff',
                'virittamo-black': '#050505',
                'virittamo-light-violet': '#e0deec',
                'virittamo-yellow': '#ffea77'
            },
        },
    },
    plugins: [],
} satisfies Config;
