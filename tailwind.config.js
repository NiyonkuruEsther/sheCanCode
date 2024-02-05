/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        orange: "#FF6A16",
        darkBlue: "#190482"
      },
      screens: {
        sm: { max: "900px" },
        md: { max: "1050px" }
      }
    }
  },
  plugins: []
};
