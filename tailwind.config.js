/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#300d38',
        secondary: '#890075',
        tertiary: '#ffa900',
        bodyText: '#090325',
        cardText: '#607d8b',
        background: '#f9f7f2',
        cream: '#ffdfb1'        
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.15) 0px 0px 20px 0px',
        dogCard: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        header: '0 1px 0 0 rgba(12,14,28,.12)',
        select: '0 0 1px #890075'
      },
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: false, // adds responsive and modifier utility classes
    logs: false
  },
}

