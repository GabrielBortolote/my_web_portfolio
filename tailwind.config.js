/** @type {import('tailwindcss').Config} */

const neon_pink = '#EF529C'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red': '#EF4523',
        'dark': '#2D2830',
        'light': '#EBE5C8',
        'neon-pink': neon_pink,
        'soft-yellow': '#FFBD59',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        kagitingan: ['var(--font-kagitingan)'],
        yellowtail: ['var(--font-yellowtail)'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        flicker: {
          '10%, 30%, 50%, 75%, 90%, 95%, 99%': {
            'text-shadow': `
              0 0 4px #fff,
              0 0 11px #fff,
              0 0 19px #fff,
              0 0 40px ${neon_pink},
              0 0 80px ${neon_pink},
              0 0 90px ${neon_pink},
              0 0 100px ${neon_pink},
              0 0 150px ${neon_pink}
            `
          },
          '9%, 11%, 29%, 31%, 49%, 51%, 74%, 76%, 89%, 91%, 94%, 96%, 98%, 100%': {
            'text-shadow': 'none'
          },
        },
        'pulsate-glow': {
          '100%': {
            'text-shadow': `
              0 0 4px #fff,
              0 0 11px #fff,
              0 0 19px #fff,
              0 0 40px ${neon_pink},
              0 0 80px ${neon_pink},
              0 0 90px ${neon_pink},
              0 0 100px ${neon_pink},
              0 0 150px ${neon_pink}
            `
          },
          '0%': {
            'text-shadow': `
              0 0 2px #fff,
              0 0 4px #fff,
              0 0 6px #fff,
              0 0 10px ${neon_pink},
              0 0 45px ${neon_pink},
              0 0 55px ${neon_pink},
              0 0 70px ${neon_pink},
              0 0 80px ${neon_pink};
            `
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        flicker: 'flicker 5s linear 1',
        'pulsate-glow': 'pulsate-glow 2s infinite alternate',
      },
    },
  },
  plugins: [],
};
