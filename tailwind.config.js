/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './terms.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      colors: {
        fayra: {
          paper: '#090d0c',
          green: '#c9ab73',
          gold: '#d3b46f',
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
