/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        green: {
          700: '#00875F',
          500: '#00B37E',
        },
        red: {
          400: '#F75A68',
          700: '#AA2834',
        },
        gray: {
          700: '#121214',
          600: '#202024',
          500: '#29292E',
          400: '#323238',
          300: '#7C7C8A',
          200: '#C4C4CC',
          100: '#E1E1E6',
        },
      },
      fontSize: {
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
      },
      fontFamily: {
        'roboto-regular': ['Roboto_400Regular'],
        'roboto-bold': ['Roboto_700Bold']
      },
    },
  },
  plugins: [],
}