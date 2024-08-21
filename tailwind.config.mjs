/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'Work_Sans': ['Work Sans Variable', 'sans-serif']
			  },
			  colors:{
				'primary': '#2f1533',
				'secondary': '#f9f0ff',
				'tertiary': '#6B6B6B' 
			  }
		}
	}
}
