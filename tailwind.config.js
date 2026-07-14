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
        '148': '37rem', // 592px
        '166.5': '41.625rem', // 666px
        '168': '42rem', // 672px
        '174': '43.5rem', // 696px
        '196': '49rem', // 784px
        '225': '56.25rem', // 900px
        '250': '62.5rem', // 1000px
        '270': '67.5rem', // 1080px
        '352': '88rem', // 1408px
        '480': '120rem', // 1920px
      },
      width: {
        '85.25': '21.3125rem', // 341px
        '192': '48rem', // 768px
        '296': '74rem', // 1184px
        '348': '87rem', // 1392px
      },
      maxHeight: {
        '148': '37rem', // 592px
        '174': '43.5rem', // 696px
      },
      maxWidth: {
        '192': '48rem',
        '8xl': '87rem', // 1392px
      },
      right: {
        '1/8': '12.5%',
      },
      backgroundSize:{
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'static-wide': '1800px',
      },
      padding: {
        '120': '30rem', // 480px
      },
    },
    colors: {
      'squid-ink': '#161D26',
      'squid-ink-50': 'rgba(35, 47, 62, 0.5)', // todo
      'stonehouse': 'rgba(240, 235, 212, 1)',
      'stonehouse-light': '#d9a9d5',
      'pueblo': '#351D69',
      'pueblo-25': 'rgba(236, 205, 148, 0.25)', // todo
      'springwood': '#F6A20D',
      'springwood-dark': 'rgba(80, 121, 94, 1)',
      'abajo': '#5E8A87',
      'vintage': '#192819',
      'white': '#FFFFFF',
      'swiper-gray': 'rgba(240, 235, 212, 0.50);',
      'button-gray': '#232f3e33',
      'photo-gray': '#ede2d5',
      'antique-white': '#FAE9D5',
      'transparent': 'transparent',
      'black': 'black',
      'pearl-jam-orange': '#F93',
      'pearl-jam-purple': '#0F102D',
      'pearl-jam-blue': '#351D69',
      'pearl-jam-yellow': 'rgba(255, 153, 51)',
      'coldplay-dark': 'rgba(15, 16, 45, 1)',
      'coldplay-darkish': 'rgba(53, 29, 105, 1)',
      'town-orange': 'rgba(255, 153, 51, 1)',
      'acl-pink': '#EAC1D7',
      'acl-dark-pink': '#F03250',
      'acl-red': '#F0E1D2',
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
      'md': '650px',
      'lg': '1440px',
      'xl': '1920px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
