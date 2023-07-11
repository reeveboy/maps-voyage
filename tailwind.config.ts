import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F4F4F4",
        dark: "#040503",
        primary: "#1B9789",
        white: "#FFFFFF",
      },
      fontFamily: {
        cursive: ["Shadows Into Light", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
