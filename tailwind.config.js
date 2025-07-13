/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#fdf4f1',
          100: '#fbe8e1',
          200: '#f6d0c2',
          300: '#efb09e',
          400: '#e58769',
          500: '#d4633f',
          600: '#c54d35',
          700: '#a43d2d',
          800: '#87342a',
          900: '#6f2f28',
        },
        linen: {
          50: '#fefefe',
          100: '#fdfcfc',
          200: '#fbf7f4',
          300: '#f8f1eb',
          400: '#f3e8dc',
          500: '#ede0d0',
          600: '#e4d4c1',
          700: '#d8c4a9',
          800: '#cab08d',
          900: '#b89968',
        },
        olive: {
          50: '#f7f8f5',
          100: '#eef0e8',
          200: '#dde2d2',
          300: '#c4ccb4',
          400: '#a8b392',
          500: '#8e9976',
          600: '#727c5e',
          700: '#5a624c',
          800: '#4a5040',
          900: '#3f4437',
        },
        lavender: {
          50: '#faf9fb',
          100: '#f4f2f7',
          200: '#ebe7f0',
          300: '#ddd5e4',
          400: '#c9bdd5',
          500: '#b3a3c3',
          600: '#9b86ad',
          700: '#856e96',
          800: '#6f5c7c',
          900: '#5d4e66',
        },
        skyblue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'olive-fall': 'olive-fall 3s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'olive-fall': {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}