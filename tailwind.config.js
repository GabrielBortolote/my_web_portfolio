/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#EF4523',
        'primary-dark': '#2D2830',
        'primary-light': '#EBE5C8',
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
