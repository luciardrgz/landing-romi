/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        'monstera': '#4a5d4e', 
        'cafe': {
          50: '#fdf8f6',
          200: '#eaddca',
          600: '#8b5e3c',
          800: '#4b3621',
        },
      },
    },
  },
  plugins: [],
}