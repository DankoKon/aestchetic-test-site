/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F8F4ED',
          200: '#F0E8DA',
          300: '#E8DCC8',
          400: '#DCCBB0',
        },
        sage: {
          50: '#F2F5F0',
          100: '#DCE5D6',
          200: '#B9C9B0',
          300: '#94A98A',
          400: '#6E8463',
          500: '#566B4D',
          600: '#425539',
          700: '#34422D',
          800: '#28331F',
        },
        rose: {
          50: '#FBF3F0',
          100: '#F5E4DD',
          200: '#EBC9BD',
          300: '#DFAD9C',
          400: '#D0927C',
          500: '#C17860',
          600: '#A85F4A',
          700: '#8A4A39',
          800: '#6D3A2E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 20px -4px rgba(94, 83, 68, 0.08)',
        'soft-lg': '0 8px 40px -8px rgba(94, 83, 68, 0.12)',
        'soft-xl': '0 20px 60px -12px rgba(94, 83, 68, 0.15)',
        'inner-soft': 'inset 0 1px 3px rgba(94, 83, 68, 0.06)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-up': 'fade-up 0.7s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'slide-down': 'slide-down 0.4s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
