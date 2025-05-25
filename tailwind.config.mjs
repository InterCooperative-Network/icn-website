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
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 1s ease-out forwards', // forwards keeps it at 100% opacity
				'fade-in-delay-200': 'fadeIn 1s ease-out 200ms forwards',
				'fade-in-delay-400': 'fadeIn 1s ease-out 400ms forwards',
				'fade-in-delay-600': 'fadeIn 1s ease-out 600ms forwards',
			},
		},
	},
	plugins: [],
} 