
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				purple: {
					100: '#e9d5ff',
					200: '#d8b4fe',
					300: '#c084fc',
					400: '#a855f7',
					500: '#9333ea',
					600: '#7e22ce',
					700: '#6b21a8',
					800: '#581c87',
					900: '#4c1d95'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in-up": {
					"0%": { opacity: "0", transform: "translateY(20px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"fade-in": {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				"fade-out": {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},
				"slide-in-right": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"slide-out-right": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
				"glow": {
					"0%, 100%": { boxShadow: "0 0 10px 2px rgba(132, 90, 223, 0.3)" },
					"50%": { boxShadow: "0 0 20px 5px rgba(132, 90, 223, 0.6)" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-glow": {
					"0%, 100%": { 
						boxShadow: "0 0 15px 5px rgba(132, 90, 223, 0.4)",
						transform: "scale(1)"
					},
					"50%": { 
						boxShadow: "0 0 25px 8px rgba(132, 90, 223, 0.7)",
						transform: "scale(1.03)"
					},
				},
				"soft-pulse": {
					"0%, 100%": { opacity: "0.8" },
					"50%": { opacity: "1" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in-up": "fade-in-up 0.6s ease-out",
				"fade-in": "fade-in 0.4s ease-out",
				"fade-out": "fade-out 0.4s ease-out",
				"slide-in-right": "slide-in-right 0.3s ease-out",
				"slide-out-right": "slide-out-right 0.3s ease-out",
				"glow": "glow 3s infinite",
				"float": "float 6s ease-in-out infinite",
				"pulse-glow": "pulse-glow 4s infinite ease-in-out",
				"soft-pulse": "soft-pulse 2s infinite ease-in-out",
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'hero-gradient': 'linear-gradient(135deg, rgba(74, 47, 189, 0.5) 0%, rgba(130, 91, 220, 0.3) 100%)',
				'card-gradient': 'linear-gradient(135deg, rgba(30, 30, 50, 0.6) 0%, rgba(40, 40, 80, 0.3) 100%)',
				'glow-gradient': 'radial-gradient(circle at center, rgba(130, 91, 220, 0.8) 0%, rgba(130, 91, 220, 0) 70%)',
				'purple-gradient': 'linear-gradient(135deg, rgba(55, 32, 94, 0.9) 0%, rgba(33, 16, 69, 0.95) 100%)',
				'purple-glow': 'radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0) 70%)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
