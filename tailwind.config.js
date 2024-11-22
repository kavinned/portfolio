/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: "var(--primary)",
				"primary-hover": "var(--primary-hover)",
				"bg-primary": "var(--bg-primary)",
				"bg-secondary": "var(--bg-secondary)",
				"text-primary": "var(--text-primary)",
				"text-secondary": "var(--text-secondary)",
				"border-color": "var(--border-color)",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
		},
	},
	plugins: [],
};
