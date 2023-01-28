/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'fade-in': {
          '0%': { opacity: 0,
            transform: 'translateY(-10px)' },
          '100%': { opacity: 1,
            transform: 'translateY(0px)' },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'text': {
          '0%, 100%': {
             'background-size':'200% 200%',
              'background-position': 'left center'
          },
          '50%': {
             'background-size':'200% 200%',
              'background-position': 'right center'
          }
      },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-in-out',
        'fade-out': 'fade-out 0.2s ease-in-out',
        'text':'text 5s ease-in-out infinite',
      },
    },
  },
  plugins: [ 
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  },
}