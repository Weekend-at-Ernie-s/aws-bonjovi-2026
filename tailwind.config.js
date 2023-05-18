/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
          '16': '4rem',
          '18': '4.5rem', // 72px
          '19': '4.75rem', // 76px
          '108': '27rem', // 432px
          // '15': '3.75rem',
          // '128': '32rem',
          // '144': '36rem',
        },
      height: {
        '22': '5.5rem', // 88px
        '108': '27rem', // 432px
        '148': '37rem', // 
        '168': '42rem', // 672px
        '174': '43.5rem', // 696px
        '196': '49rem', // 784px
      },
        // max height 165 384 592 696
      maxHeight: {
        '148': '37rem', // 592px
        '174': '43.5rem', // 696px
      },
      maxWidth: {
        '8xl': '87rem', // 1392px
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
      'swiper-gray': '#232f3e1a',
      'button-gray': '#232f3e33',
    },
    fontFamily: {
      'body': 'Amazon Ember, Helvetica Neue, roboto, arial, sans-serif',
      'display': 'Amazon Ember, Helvetica Neue, roboto, arial, sans-serif',
      'sans': 'Amazon Ember, Helvetica Neue, roboto, arial, sans-serif',
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '2rem', // 32px
      '4xl': '2.25rem',
      '5xl': '3rem', // 48px
      '6xl': '3.5rem', // 56px
      '7xl': '4rem', // 64px
      '8xl': '6rem', // 96px
      '9xl': '7rem' // 112px
    },
    screens: {
      'sm': '425px',
      'md': '1024px',
      'lg': '1440px',
      'xl': '1920px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
