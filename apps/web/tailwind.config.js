/** @type {import('tailwindcss').Config} */
import { RIPPLE_DURATION } from "./constants";

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffd3da",
          200: "#ffa6b6",
          300: "#ff7a91",
          400: "#ff4d6d",
          500: "#ff2148",
          600: "#cc1a3a",
          700: "#99142b",
          800: "#660d1d",
          900: "#33070e",
        },
        dark: {
          100: "#d2d2d2",
          200: "#a6a6a6",
          300: "#797979",
          400: "#4d4d4d",
          500: "#202020",
          600: "#1a1a1a",
          700: "#131313",
          800: "#0d0d0d",
          900: "#060606",
        },
      },
      keyframes: {
        "ripple-out": {
          "0%": {
            transform: "scale(0)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(4)",
            opacity: 0,
          },
        },
      },
      animation: {
        ripple: `ripple-out ${RIPPLE_DURATION}ms ease-out forwards`,
      },
    },
  },
  plugins: [],
};
