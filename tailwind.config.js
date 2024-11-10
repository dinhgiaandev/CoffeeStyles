/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif']
      },
      colors: {
        'light-coffee': '#C89F96'
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      animation: {
        slideDown: "slideDown 0.4s ease-in-out"
      },
      backgroundImage: {
        "slider-bg": 'url("./assets/slider.jpg")'
      }
    },
  },
  plugins: [],
}

