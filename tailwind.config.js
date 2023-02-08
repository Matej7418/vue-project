/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      textDecoration: ['hover'],
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        72: '18rem',
      },
    },
  },
};