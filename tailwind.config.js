/** @type {import('tailwindcss').Config} */
export default {
	// purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // TODO: See prod
	content: ['node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}', 'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'],
	plugins: [
		// eslint-disable-next-line no-undef
		require('flowbite/plugin'),
	],
	theme: {
		extend: {},
	},
};
