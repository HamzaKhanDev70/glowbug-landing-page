import type { Config } from "tailwindcss";

const config:Config={

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
   
      fontFamily: {
            grotesk: ['"Right Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
       
      },
      
    },
    variants: {
      extend: {},
      fontSize: ['responsive', 'hover', 'focus'],},
    
  },
  plugins: [],
}
export default config;