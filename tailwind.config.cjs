import daisyui from "daisyui"
import typography from "@tailwindcss/typography"

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			'autumn'
		]
	},
	plugins: [
		typography(),
		daisyui	
	],
};
