/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'midnight-navy': 'var(--color-midnight-navy)',
				'accent-glow': 'var(--color-accent-glow)',
				'accent-primary': 'var(--color-accent-primary)',
				'accent-purple': 'var(--color-accent-purple)',
				'accent-blue': 'var(--color-accent-blue)',
				'slate-gray': 'var(--color-slate-gray)',
				'light-slate': 'var(--color-light-slate)',
				'white': 'var(--color-white)',
				'bg-secondary': 'var(--color-bg-secondary)',
				'bg-tertiary': 'var(--color-bg-tertiary)',
				'border': 'var(--color-border)',
				'success': 'var(--color-success)',
				'warning': 'var(--color-warning)',
				'error': 'var(--color-error)',
				// Legacy colors for compatibility
				'accent-emerald': 'var(--color-accent-emerald)',
				'accent-gold': 'var(--color-accent-gold)',
				'text-primary': 'var(--color-text-primary)',
				'text-secondary': 'var(--color-text-secondary)',
				'nav-active-link': 'var(--color-nav-active-link)',
			},
			fontFamily: {
				'sans': ['Inter', 'sans-serif'],
				'display': ['Lexend', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
			},
			height: {
				'header': 'var(--header-height)',
			},
			borderRadius: {
				'xl': 'var(--radius-xl)',
				'lg': 'var(--radius-lg)',
				'md': 'var(--radius-md)',
				'sm': 'var(--radius-sm)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'xl': 'var(--shadow-xl)',
				'lg': 'var(--shadow-lg)',
				'md': 'var(--shadow-md)',
				'sm': 'var(--shadow-sm)',
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
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgb(50 255 210 / 0.3)' },
					'50%': { boxShadow: '0 0 30px rgb(50 255 210 / 0.5)' },
				},
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				float: 'float 6s ease-in-out infinite',
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
				'fade-in-delay-200': 'fadeIn 1s ease-out 200ms forwards',
				'fade-in-delay-400': 'fadeIn 1s ease-out 400ms forwards',
				'fade-in-delay-600': 'fadeIn 1s ease-out 600ms forwards',
				'fade-in-delay-800': 'fadeIn 1s ease-out 800ms forwards',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient': 'gradient-shift 3s ease infinite',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
			},
			transitionDuration: {
				'fast': 'var(--transition-fast)',
				'normal': 'var(--transition-normal)',
				'slow': 'var(--transition-slow)',
			},
		},
	},
	plugins: [],
} 