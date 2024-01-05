/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#dfdfdf",
        yellow: "#febb2f",
        black: "#191919"
      },
      fontFamily: {
        "stylest": ['Kumar One Outline', 'system-ui']
      }
    },
  },
  plugins: [],
}