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
        pink: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#db2777", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray
        },
        indigo: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#818cf8", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
        yellow: {
          "primary": "#151515", // veryDarkGray
          "secondary": "#222222", // darkGray
          "accent": "#eab308",
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
