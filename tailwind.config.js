/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Montserrat, sans-serif',
        'heading': 'Bebas Neue, sans-serif',
      },
      colors: {
        'primary': '#FF00E8',
        'secondary': '#00B6FF',
      }
    },
  },
  plugins: [],
}

