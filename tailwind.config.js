/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4F0E8',
        paper: '#FFFCF7',
        ink: '#1F1A17',
        mute: '#6B645C',
        line: '#E4DCD0',
        brand: {
          DEFAULT: '#A3202C',
          dark: '#861924',
        },
        gold: {
          DEFAULT: '#7A5E2A',
          soft: '#E7D7B1',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 18px 40px -28px rgba(31, 26, 23, 0.45)',
      },
      keyframes: {
        spotlight: {
          '0%': { opacity: '0', transform: 'translate(-8%, -30%) scale(0.85)' },
          '100%': { opacity: '1', transform: 'translate(0, 0) scale(1)' },
        },
      },
      animation: {
        spotlight: 'spotlight 1.8s ease 0.3s 1 forwards',
      },
    },
  },
  plugins: [],
}
