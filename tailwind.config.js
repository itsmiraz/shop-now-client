/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fc7202",

          "secondary": "#053f5c",



          "accent": "#ffffff",

          "neutral": "#ffffff",

          "base-100": "#ffffff",



          "info": "#ff8e00",



        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
