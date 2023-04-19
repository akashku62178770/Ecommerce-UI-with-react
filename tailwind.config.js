/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root",
  theme: {
    fontFamily: {
      roboto: ['"Roboto"', "sans-serif"],
      gothic: ['"Gothic A1"', "sans-serif"],
      montserrat: ['"Montserrat"', "sans-serif"],
      raleway: ['"Raleway"', "sans-serif"],
      sanchez: ['"Sanchez"', "serif"],
      yatra: ['"Yatra One"', "cursive"],
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      orange: "#F36F2E",
      red: "#Ff0000",
      deepOrage: "#ff9100",
      veryLightBrown: "#E6DACC",
      LightBrown: "#C8B59E",
      brown: "#876156",
      darkBrown: "#543B31",
      rectangleBrown: "#B27C5E",
      disabled: "#9e9e9e",
      green: "#43a047",
    },
    extend: {
      animation: {
        slideup: "slideup 1s ease-in-out",
        slidedown: "slidedown 1s ease-in-out",
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        sliderightmenu: "sliderightmenu 200ms ease-in-out",
        wave: "wave 1.2s linear infinite",
        slowfade: "slowfade 0.2s ease-in-out",
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: "translateY(20%)" },
          to: { opacity: 1, transform: "none" },
        },
        slidedown: {
          from: { opacity: 0, transform: "translateY(-25%)" },
          to: { opacity: 1, transform: "none" },
        },
        slideleft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        sliderightmenu: {
          from: { opacity: 0, transform: "translateX(200px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/aspect-ratio")],
};
