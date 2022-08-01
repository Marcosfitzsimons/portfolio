/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'secondary-font': ['"Clicker Script"', 'cursive'],
      }
    },
  },
  daisyui: {
    themes: [
      {
        default: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#147B74", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray
        },
        red: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#c4032a", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
        pink: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#df4996", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray
        },
        blue: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#207ecc", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
