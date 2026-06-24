import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          light: '#243660',
          dark: '#111C33',
          deeper: '#0D1526',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B96A',
          dark: '#A8872E',
          pale: '#F5EDD4',
        },
        slate: {
          site: '#F4F6F9',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0D1526 0%, #1B2A4A 50%, #243660 100%)',
        'gold-gradient': 'linear-gradient(135deg, #A8872E 0%, #C9A84C 50%, #D4B96A 100%)',
        'section-gradient': 'linear-gradient(180deg, #F4F6F9 0%, #ffffff 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(201, 168, 76, 0)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'sm-md': '6px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(27, 42, 74, 0.08)',
        'card-hover': '0 8px 40px rgba(27, 42, 74, 0.16)',
        'gold': '0 4px 20px rgba(201, 168, 76, 0.3)',
      },
      maxWidth: {
        'site': '1280px',
      }
    },
  },
  plugins: [],
}
export default config
