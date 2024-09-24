/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "jakarta-plus": ["Plus Jakarta Sans", 'sans-serif'],
      }
    },
  },
  plugins: [],
}