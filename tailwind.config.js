import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "rasm": "url('./src/assets/bg.png)"
      }
    },
    colors: {
      ...colors,
      primary: "green",
      lorem: "gold"
    },
    fontFamily: {
      "edu": ["Edu"]
    }
  },
  plugins: [],
}