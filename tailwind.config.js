/** @type {import('tailwindcss').Config} */

const neon_pink = '#EF529C'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        red: '#EF4523',
        dark: '#2D2830',
        light: '#EBE5C8',
        neonPink: neon_pink,
        softYellow: '#FFBD59',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        kagitingan: ['var(--font-kagitingan)'],
        yellowtail: ['var(--font-yellowtail)'],
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': {
            opacity: '0',
            transform: 'scale(0%)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(100%)',
          }
        }
      },
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
