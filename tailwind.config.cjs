/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Manrope: ['Manrope', 'sans-serif'],
			},
			colors: {
				BurntOrange: '#D87D4A',
				Dark: '#101010',
				VeryLightGrey: '#F1F1F1',
				WhiteSmoke: '#FAFAFA',
				LightBeige: '#FBAF85',
				White: '#FFFFFF',
				VeryBlack: '#000000',
			},
			backgroundImage:{
				HomeHero: 'url(assets/home/mobile/image-header.jpg)'
			}
		},
	},
	plugins: [],
};
