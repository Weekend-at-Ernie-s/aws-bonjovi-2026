/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
          '22': '4rem',
          // '15': '3.75rem',
          // '128': '32rem',
          // '144': '36rem',
        }
    },
    colors: {
      'squid-ink': '#232F3E',
      'stonehouse': '#DACAA8',
      'pueblo': '#ECCD94',
      'pueblo-25': 'rgba(236, 205, 148, 0.25)',
      'springwood': '#B6BE5E',
      'abajo': '#4B5834',
      'vintage': '#494531',
      'white': '#FFFFFF',
    },
    fontFamily: {
      'body': ['Amazon Ember', 'Helvetica Neue', 'roboto', 'arial', 'sans-serif']
    }
  },
  plugins: [],
}
