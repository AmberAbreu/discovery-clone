/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      basta_green: '#85c540',
      basta_yellow: '#ffc507',
      basta_purple: '#01A2E2',
      basta_blue: '#D04D9E',
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/hero1.png')",
      },
    },
    fontFamily: {
      sans: ['Raleway'],
    },
  },
  plugins: [],
}
