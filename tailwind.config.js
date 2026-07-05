/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6D28D9',
        secondary: '#7C3AED',
        surface: '#F8F5FF',
        card: '#FFFFFF',
        accent: '#EC4899',
        border: '#E5E7EB',
      },
      boxShadow: {
        soft: '0 24px 50px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [],
}

