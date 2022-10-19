/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: '375px',
			sm: '600px',
			md: '1024px',
			lg: '1200px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Noto Sans Mono', 'Poppins', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [],
};
