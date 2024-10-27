import type { Config } from 'tailwindcss';
import { withUt } from "uploadthing/tw";

export default withUt({
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: []
} as Config);
