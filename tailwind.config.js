/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rob': ['Roboto', "sans-serif"],
      },
      maxWidth: {
        container: '1750px',
      },
      colors: {
        'primary': '#5E3BEE',
        'text-primary': '#282938',
      },
      boxShadow: {
        "nav-shadow": "0px 5.333333492279053px 80px 0px rgba(0, 0, 0, 0.10)",
        "project-shadow": "0px 5.33px 32px 0px rgba(0, 0, 0, 0.15)"
      },
      screens: {
        container: '1750px',
      },
    },
    
  },
  plugins: [],
}