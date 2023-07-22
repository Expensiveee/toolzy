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
          100: "#d4d4d4",
          200: "#a8a8a8",
          300: "#7d7d7d",
          400: "#515151",
          500: "#262626",
          600: "#1e1e1e",
          700: "#171717",
          800: "#0f0f0f",
          900: "#080808",
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
