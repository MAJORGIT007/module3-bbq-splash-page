/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#FFF",
      "darkgrey": "#404040",
      "orange": "#F18119"
    },
    extend: {
      backgroundImage: {
        'splash-image': "url('./assets/ribs.jpg')"
      }
    },
  },
  plugins: [],
}
