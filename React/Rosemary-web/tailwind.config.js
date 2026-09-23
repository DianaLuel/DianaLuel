/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
       backgroundColor: '#201b7a',   // example: your clinic’s primary color
      hoverColor: '#ee217f',
      brightColor: '#a20874',

      }
    },
  },
  plugins: [],
}

