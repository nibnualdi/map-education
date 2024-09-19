/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "kaushan": ['Kaushan Script', 'cursive'],
        "poppins": ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}