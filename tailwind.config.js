import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
        boska: ['Boska', 'serif'],
        switzer: ['Switzer', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        supreme: ['Supreme', 'sans-serif'],
        rowan: ['Rowan', 'serif'],
        quilon: ['Quilon', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        excon: ['Excon', 'sans-serif'],
        synonym: ['Synonym', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e'
        }
      },
      animation: {
        'color-pulse': 'colorPulse 2s infinite',
      },
      keyframes: {
        colorPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' }
        }
      }
    },
  },
  plugins: [],
}