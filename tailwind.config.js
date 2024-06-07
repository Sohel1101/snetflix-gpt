/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orbt':'rgb(229,9,20)',
        'bltr': '#080604',
        'grip': '#333333'
      }
    },
  },
  plugins: [],
}