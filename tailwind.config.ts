import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00F1C7",
        dark: {
          0: "#000000",
          100: "#1B1B1B",
          200: "#2C2C2C",
        },
        gray: {
          100: "#999999",
          200: "#3D3D3D",
          300: "#232323",
          400: "#5E5E5E"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
