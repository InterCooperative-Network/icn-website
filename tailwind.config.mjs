/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'midnight-navy': 'var(--color-midnight-navy)',
				'accent-glow': 'var(--color-accent-glow)',
				'slate-gray': 'var(--color-slate-gray)',
				'light-slate': 'var(--color-light-slate)',
				'white': 'var(--color-white)',
				'bg-secondary': 'var(--color-bg-secondary)',
				'accent-emerald': 'var(--color-accent-emerald)',
				'accent-gold': 'var(--color-accent-gold)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				'border': 'var(--color-border)',
				'nav-active-link': 'var(--color-nav-active-link)',
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