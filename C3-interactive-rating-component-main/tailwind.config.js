/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Overpass": ['"Overpass"', 'sans-serif']
      },
      colors: {
        Orange: 'hsl(25, 97%, 53%)',
        White: 'hsl(0, 0%, 100%)',
        LightGrey: 'hsl(217, 12%, 63%)',
        MediumGrey: 'hsl(216, 12%, 54%)',
        DarkBlue: 'hsl(213, 19%, 18%)',
        DarkBlueGrad: '#141A22',
        Circle: 'hsla(217, 12%, 63%, 0.086)',
        VeryDarkBlue: 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}
