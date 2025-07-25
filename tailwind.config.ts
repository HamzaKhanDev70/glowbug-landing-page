import type { Config } from "tailwindcss";

const config:Config={

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
   
      fontFamily: {
          groteskTight: ['"Right Grotesk Tight"', 'sans-serif'],
        groteskCompact: ['"Right Grotesk Compact"', 'sans-serif'],
        groteskLight: ['"Right Grotesk Light"', 'sans-serif'],
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