/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#baddff',
          300: '#7cc3ff',
          400: '#38a8ff',
          500: '#0090ff',
          600: '#0070cc',
          700: '#005299',
          800: '#003666',
          900: '#001833',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      },
    },
  },
  plugins: [],
};