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
        large: '100px',
        'mobile-section': '52px',
        'mobile-title': '36px',
        'mobile-card': '21px',
        'mobile-btn': '9px',
      },
      fontSize: {
        badge: '0.3rem',
        xs: 'clamp(0.3rem, 0.971rem + -0.19vw, 0.8rem)',
        sm: 'clamp(0.9rem, 0.971rem + -0.19vw, 0.8rem)',
        base: 'clamp(1rem, 0.821rem + 0.476vw, 1.25rem)',
        medium: 'clamp(1.44rem, 1.352rem + 0.234vw, 1.563rem)',
        large: 'clamp(1.424rem, 1.046rem + 1.008vw, 1.953rem)',
        xl: 'clamp(2.986rem, 2.394rem + 1.579vw, 3.815rem)',
      },
      letterSpacing: {
        shrink: 'clamp(-0.5rem, -0.2rem, 0)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },      
      lineHeight: {
        'title': '48px',
      }
    },
  },
  plugins: [],
}

