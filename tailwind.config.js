/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#300d38',
        secondary: '#899975',
        tertiary: '#ffa900',
        text: '#090325',
        background: '#f9f7f2',
        cream: '#ffdfb1'        
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.15) 0px 0px 20px 0px'
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

