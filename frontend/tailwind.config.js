/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        vitto: {
          navy: '#080f2b',
          red: '#d62839',
          steel: '#1f2a4a',
          light: '#dbe4ff',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(214,40,57,.35), 0 10px 40px rgba(214,40,57,.15)',
      },
    },
  },
  plugins: [],
};
