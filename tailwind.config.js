module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				montserrat: 'montserrat',
			},
			colors: {
				space: '#466362',
				green: '#35CE8D',
				yellow: '#E2C044',
				dark: '#230C0F',
				sky: '#5ADBFF',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
