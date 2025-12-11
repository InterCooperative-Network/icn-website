/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Core palette
				'midnight': 'var(--color-midnight)',
				'midnight-navy': 'var(--color-midnight-navy)',
				'soft-black': 'var(--color-soft-black)',

				// Accent colors
				'accent-primary': 'var(--color-accent-primary)',
				'accent-glow': 'var(--color-accent-glow)',
				'accent-secondary': 'var(--color-accent-secondary)',
				'accent-tertiary': 'var(--color-accent-tertiary)',
				'accent-purple': 'var(--color-accent-purple)',
				'accent-blue': 'var(--color-accent-blue)',

				// Supporting colors
				'sky-blue': 'var(--color-sky-blue)',
				'mint-green': 'var(--color-mint-green)',
				'solar-amber': 'var(--color-solar-amber)',

				// Neutrals
				'white': 'var(--color-white)',
				'light-slate': 'var(--color-light-slate)',
				'slate-gray': 'var(--color-slate-gray)',

				// Background
				'bg-secondary': 'var(--color-bg-secondary)',
				'bg-tertiary': 'var(--color-bg-tertiary)',
				'bg-elevated': 'var(--color-bg-elevated)',

				// Border
				'border': 'var(--color-border)',
				'border-hover': 'var(--color-border-hover)',

				// Semantic
				'success': 'var(--color-success)',
				'warning': 'var(--color-warning)',
				'error': 'var(--color-error)',
				'info': 'var(--color-info)',

				// Legacy aliases
				'nav-active-link': 'var(--color-nav-active-link)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				'solar-yellow': 'var(--color-solar-yellow)',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Lexend', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
			},
			height: {
				'header': 'var(--header-height)',
			},
			borderRadius: {
				'2xl': 'var(--radius-2xl)',
				'xl': 'var(--radius-xl)',
				'lg': 'var(--radius-lg)',
				'md': 'var(--radius-md)',
				'sm': 'var(--radius-sm)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glow-strong': 'var(--shadow-glow-strong)',
				'2xl': 'var(--shadow-2xl)',
				'xl': 'var(--shadow-xl)',
				'lg': 'var(--shadow-lg)',
				'md': 'var(--shadow-md)',
				'sm': 'var(--shadow-sm)',
				'inner': 'var(--shadow-inner)',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeInScale: {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 229, 191, 0.15)', opacity: '0.8' },
					'50%': { boxShadow: '0 0 40px rgba(0, 229, 191, 0.25)', opacity: '1' },
				},
				'glow-pulse': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.7' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				shimmer: {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' },
				},
			},
			animation: {
				'float': 'float 5s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'fade-in-scale': 'fadeInScale 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'gradient': 'gradient-shift 4s ease infinite',
				'shimmer': 'shimmer 2s linear infinite',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-mesh': 'var(--gradient-mesh)',
			},
			transitionDuration: {
				'fast': '150ms',
				'normal': '250ms',
				'slow': '400ms',
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
			},
		},
	},
	plugins: [],
} 