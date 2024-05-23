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
    },
  },
  plugins: [],
};
