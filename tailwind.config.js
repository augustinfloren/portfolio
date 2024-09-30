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
        section: '72px',
        'mobile-section': '52px',
        'mobile-title': '36px',
        'mobile-card': '21px',
        'mobile-btn': '9px',
      },
      fontSize: {
        sm: 'clamp(0.9rem, 0.971rem + -0.19vw, 0.8rem)',
        base: 'clamp(1rem, 0.821rem + 0.476vw, 1.25rem)',
        medium: 'clamp(1.44rem, 1.352rem + 0.234vw, 1.563rem)',
        large: 'clamp(1.424rem, 1.046rem + 1.008vw, 1.953rem)',
        xl: 'clamp(2.986rem, 2.394rem + 1.579vw, 3.815rem)',
        'mobile-sm': '1rem',
        'mobile-base': '1.2rem',
        'mobile-medium': '1.44rem',
        'mobile-large': '1.728rem',
        'mobile-xl': '2.986rem',
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

