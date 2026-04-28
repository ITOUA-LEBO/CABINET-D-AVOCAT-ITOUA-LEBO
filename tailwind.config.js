/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          300: '#f0d080',
          400: '#d4a843',
          500: '#b8860b',
          600: '#9a7209',
        },
      },
    },
  },
  plugins: [],
}
