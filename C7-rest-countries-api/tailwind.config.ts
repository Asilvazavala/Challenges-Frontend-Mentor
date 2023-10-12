import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        DarkBlueDM: 'hsl(209, 23%, 22%)',
        VeryDarkBlueDM: 'hsl(207, 26%, 17%)',
        VeryDarkBlueLM: 'hsl(200, 15%, 8%)',
        DarkGrayLM: 'hsl(0, 0%, 52%)',
        VeryLightGrayLM: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        "Nunito Sans": ['Nunito Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}
export default config
