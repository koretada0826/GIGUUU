/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#27a844',
          yellow: '#f5b81e',
          blue: '#2ba0e0',
          red: '#e63946',
          pink: '#e5397f',
          purple: '#7b3f98',
        },
      },
      fontFamily: {
        sans: ['"Hiragino Sans"', '"Hiragino Kaku Gothic ProN"', 'Meiryo', 'sans-serif'],
        display: ['"Inter"', '"Hiragino Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
