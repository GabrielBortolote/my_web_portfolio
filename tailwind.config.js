/** @type {import('tailwindcss').Config} */

const neon_pink = '#EF529C'

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    letterSpacing:{
      widest: '.25em'
    },
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
    },
  },
  plugins: [],
};
