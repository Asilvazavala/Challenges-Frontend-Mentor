/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      'publicSans': ['"Public Sans"', 'sans-serif'],
    },
		extend: {
			borderColor: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops, #00ff00, #00bfff))',
      },
			colors: {
				DarkBlue: "hsl(233, 26%, 24%)",
				LimeGreen: "hsl(136, 65%, 51%)",
				BrightCyan: "hsl(192, 70%, 51%)",
				GrayishBlue: "hsl(233, 8%, 62%)",
				LightGrayishBlue: "hsl(220, 16%, 96%)",
				VeryLightGray: "hsl(0, 0%, 98%)",
				White: "hsl(0, 0%, 100%)",
			}
		},
	},
	plugins: [],
}
