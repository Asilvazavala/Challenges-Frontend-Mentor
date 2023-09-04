/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "KumbhSans": ['"Kumbh Sans"', 'sans-serif']
      },
      colors: {
        VeryDarkDesaturatedBlue: 'hsl(238, 29%, 16%)',
        SoftRed: 'hsl(14, 88%, 65%)',
        GradSoftViolet: 'hsl(273, 75%, 66%)',
        GradSoftBlue: 'hsl(240, 73%, 65%)',
        VeryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
        DarkGrayishBlue: 'hsl(240, 6%, 50%)',
        DividerLightGrayishBlue: 'hsl(240, 5%, 91%)'
      }
    },
  },
  plugins: [],
}

