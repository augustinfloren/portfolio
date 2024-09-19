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
      fontSize: {
        sm: '0.75rem',
        base: '1rem',
        medium: '1.777rem',
        large: '2.369rem',
        xl: '5.61rem',
        
      },
      fontFamily: {
        display: 'bricolage grotesque, sans-serif',
        body: 'inter, sans-serif',
      }
    },
  },
  plugins: [],
}

