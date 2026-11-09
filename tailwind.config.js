/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './terms.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        fayra: {
          paper: '#f5f3ed',
          green: '#203d32',
          gold: '#b89357',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
