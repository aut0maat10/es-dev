/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#7eeaa8",
          "secondary": "#c93267",
          "accent": "#c49c2f",
          "neutral": "#23222A",
          "base-100": "#2F3437",
          "info": "#71D2EF",
          "success": "#57EADC",
          "warning": "#A66B11",
          "error": "#E9252F",
        }
      },
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "dracula", "cmyk", "night", "coffee", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
