/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './js/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary : '#fefffd',
        background : '#f5f5f5',
        secondary : '#ededed',
        text: '#585858',
        accent: { 
          light: '#00bcff', 
          dark: '#0062ff',
        }
      },
      spacing: {
        btn: '8px',
        title: '50px', 
        card: '34px',
        badge: '3px',
        section: '104px',
        "mobile-title": '36px',
        "mobile-card": '21px',
        "mobile-btn": "9px",
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.25rem',
        medium: '1.563rem',
        large: '1.953rem',
        xl: '3.815rem',
        "mobile-sm": '1rem',
        "mobile-base": '1.2rem',
        "mobile-medium": '1.44rem',
        "mobile-large": '1.728rem',
        "mobile-xl": '2.986rem',
      },
      fontFamily: {
        display: 'bricolage grotesque, sans-serif',
        body: 'inter, sans-serif',
      },
      lineHeight: {
        'title': '48px',
      }
    },
  },
  plugins: [],
}

