/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			NeoDunggeunmoPro: ["NeoDunggeunmoPro", "sans-serif", '"PF스타더스트"'],
		},
		screens: {
			small: { min: "320px", max: "479px" },
			medium: { min: "480px", max: "767px" },
			tablet: { min: "768px" },
		},
		extend: {},
	},
	plugins: [],
};
