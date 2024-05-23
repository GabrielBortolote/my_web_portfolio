/** @type {import('tailwindcss').Config} */
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
        'neon-pink': '#EF529C',
        'soft-yellow': '#FFBD59',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        kagitingan: ['var(--font-kagitingan)'],
        yellowtail: ['var(--font-yellowtail)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
