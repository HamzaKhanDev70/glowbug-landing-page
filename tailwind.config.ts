import type { Config } from "tailwindcss";

const config:Config={

  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // screens: {
      //   sm: '480px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
      // fontFamily: {
      //   grotesk: ['"Right Grotesk"', 'sans-serif'],
      //   groteskDark: ['"Right Grotesk Dark"', 'sans-serif'],
      //   groteskMedium: ['"Right Grotesk Medium"', 'sans-serif'],
      //   inter: ['"Inter"', 'sans-serif'],
      // },
      // fontSize: {
      //   headingXL: ['72px', { lineHeight: '1.1' }],
      //   headingL: ['56px', { lineHeight: '1.2' }],
      //   headingM: ['48px', { lineHeight: '1.3' }],
      //   headingS: ['26px', { lineHeight: '1.4' }],
      //   headingXS: ['22px', { lineHeight: '1.4' }],
      //   body: ['16px', { lineHeight: '1.7' }],
      // },
      // colors: {
      //   brand: '#FFE300',
      //   white: '#FFFFFF',
      //   lightText: '#D9D9D9',
      // },
      
    },
    variants: {
      extend: {},
      fontSize: ['responsive', 'hover', 'focus'],},
    
  },
  plugins: [],
}
export default config;