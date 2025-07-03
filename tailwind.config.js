/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#3AB0FF',
          DEFAULT: '#008DDA',
          dark: '#005F99',
        },
        themeblue: '#233977',
        lightblue: '#6894C0',
        themegreen: '#1aa79c',
        themedark:'rgba(5, 19, 29, 1)',
        lightgrey:'rgba(250, 250, 250, 1)',
        themeblack: 'rgba(30, 30, 30, 1)',
        // themegreen: '#19A79B',
        underlineColor:'rgba(250, 250, 250, 1)',
      },
      fontFamily: {
        teko: ['Teko'],
        interFont: ['Inter'],
      },
    },
  },
  plugins: [],
}
