/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        davico: {
          green: '#0D5A3A',
          'green-dark': '#09422A',
          navy: '#101D2D',
          'navy-dark': '#0B141F',
          orange: '#E07026',
          'orange-dark': '#C85D1A',
          cream: '#FAF7F2',
          'cream-dark': '#F2ECE1',
        },
      },
      fontFamily: {
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Manrope"', 'sans-serif'],
        heading: ['"Manrope"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      },
    },
  },
  plugins: [],
}
