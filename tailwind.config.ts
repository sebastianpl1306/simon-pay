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
          100: "#1B1B1B"
        },
        gray: {
          100: "#999999",
          200: "#3D3D3D"
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
