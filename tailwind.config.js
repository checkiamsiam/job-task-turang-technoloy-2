/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'circle': "url('/src/asset/bg-circle.png')",
      },
    }
  },
  plugins: [require("daisyui")],
}