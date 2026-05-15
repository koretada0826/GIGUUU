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
          green: '#16a34a',
          pink: '#e7268a',
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
