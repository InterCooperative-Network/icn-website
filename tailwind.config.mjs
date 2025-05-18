/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'bg': 'var(--color-bg)',
				'bg-secondary': 'var(--color-bg-secondary)',
				'accent-teal': 'var(--color-accent-teal)',
				'accent-emerald': 'var(--color-accent-emerald)',
				'accent-gold': 'var(--color-accent-gold)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				'border': 'var(--color-border)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'], // Ensure Inter is primary
			},
			height: {
				'header': 'var(--header-height)',
			}
		},
	},
	plugins: [],
} 