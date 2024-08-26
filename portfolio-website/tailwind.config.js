/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js,css}"],
  theme: {
    extend: {
      colors:{
        "portfolio-bg":"#405D72",
        "portfolio-light":"#758694",
        "portfolio-ligther":"#F7E7DC",
        "portfolio-lightest":"#FFF8F3",
      }
    },
  },
  plugins: [],
}

