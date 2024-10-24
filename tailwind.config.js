/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#d5dde7',
          300: '#abc3d5',
          400: '#7fa0bf',
          500: '#5c7fa3',
          600: '#456587',
          700: '#385270',
          800: '#2f445d',
          900: '#2a3b4f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}