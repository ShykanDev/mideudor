/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        merienda: ['Merienda', 'sans-serif'],
        spicy: ['Spicy Rice', 'cursive'],
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
