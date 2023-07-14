/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#18122B",
        secondary: "#635985",
        subtext: "#443C68",
        footer: "#130E21",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};