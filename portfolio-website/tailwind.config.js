/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,css}"],
  theme: {
    extend: {
      colors:{
        "portfolio-bg":"#092635",
        "portfolio-light":"#1B4242",
        "portfolio-lighter":"#5C8374",
        "portfolio-lightest":"#9EC8B9",
      },
     
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

