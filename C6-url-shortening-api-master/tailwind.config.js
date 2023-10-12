/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {
      fontFamily: {
        "Poppins": ['"Poppins"', 'sans-serif']
      },
      colors: {
        Cyan: 'hsl(180, 66%, 49%)',
        DarkViolet: 'hsl(257, 27%, 26%)',
        Red: 'hsl(0, 87%, 67%)',
        Gray: 'hsl(0, 0%, 90%)',
        GrayishViolet: 'hsl(257, 7%, 63%)',
        VeryDarkBlue: 'hsl(255, 11%, 22%)',
        VeryDarkViolet: 'hsl(260, 8%, 14%)'
      }
    },
  },
  plugins: [],
}

