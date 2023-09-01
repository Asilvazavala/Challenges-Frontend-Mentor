/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "Outfit": ['"Outfit"', 'sans-serif']
      },
      colors: {
        SoftBlue: 'hsl(215, 51%, 70%)',
        Cyan: 'hsl(178, 100%, 50%)',
        VeryDarkBlueMainBG: 'hsl(217, 54%, 11%)',
        VeryDarkBlueCardBG: 'hsl(216, 50%, 16%)',
        VeryDarkBlueLine: 'hsl(215, 32%, 27%)',
        OutBlueBg: 'hsl(217, 54%, 12%)',
        ShadowBlueBg: 'hsl(217, 54%, 3%)',
        White: 'hsl(0, 0%, 100%)'
      }
    },
  },
  plugins: [],
}

