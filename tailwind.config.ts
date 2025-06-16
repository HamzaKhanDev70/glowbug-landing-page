import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            inter: ["Inter", "sans-serif"],
            grotesk: ['"Right Grotesk"', 'sans-serif'],
          },
      colors: {
        dark: {
          100: "#d4d4d8",
          200: "#a1a1aa",
          300: "#71717a",
          400: "#52525b",
          500: "#3f3f46",
          600: "#2a2a2f",
          700: "#1f1f23",
          800: "#18181b",
          900: "#121214",
        },
      },
    },
  },
  plugins: [],
};

export default config;