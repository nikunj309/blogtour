/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '5%, 10%': { transform: 'translateX(3ch)' },
          '15%, 20%': { transform: 'translateX(6ch)' },
          '25%, 30%': { transform: 'translateX(9ch)' },
          '35%, 40%': { transform: 'translateX(12ch)' },
          '45%, 50%': { transform: 'translateX(15ch)' },
          '55%, 60%': { transform: 'translateX(18ch)' },
          '65%, 70%': { transform: 'translateX(21ch)' },
          '75%, 80%': { transform: 'translateX(24ch)' },
          '85%, 90%': { transform: 'translateX(27ch)' },
          '95%, 100%': { transform: 'translateX(30ch)' },
        },
      },

      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
      },
    },
  },
  plugins: [],
}
