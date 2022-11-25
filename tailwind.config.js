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
          "primary": "#0e1217", // veryDarkGray
          "secondary": "#171b22", // darkGray
          "accent": "#0d9488", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray
        },
        pink: {
          "primary": "#0e1217", // veryDarkGray
          "secondary": "#171b22", // darkGray
          "accent": "#db2777", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray
        },
        indigo: {
          "primary": "#0e1217", // veryDarkGray
          "secondary": "#171b22", // darkGray
          "accent": "#818cf8", // themeColor
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
        yellow: {
          "primary": "#0e1217", // veryDarkGray
          "secondary": "#171b22", // darkGray
          "accent": "#eab308",
          "neutral": "#f8fffe", // veryLightGray
          "base-100": "#e5e0df", // lightGray df4996
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
