const { Urbanist } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "535px",
        slg: "980px",
        sxl: "1200px",
        "3xl": "1680px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        themeColor: "#0d9a9a",
        colorLightGray: "#f1f1f1",
        sectionBG: "#f2f3f3",
        footerBG: "#f2f5f7",
        borderGray: "#dedede",
        colorBlack: "#1c1d1e",
        colorWhite: "#ffffff",
        colorGray: "#504f4f",
        themePrimary: "#00dfb8",
        themeSecondary: "#00b6cf",
        themeLight: "#f3fdff",
      },
      backgroundImage: {
        "gradient-custom":
          "linear-gradient(277.16deg, #02e1b8 0.58%, #00b5d4 100%)",
        "gradient-usecase": "linear-gradient(180deg, #fffefc 0%, #fff2ef 100%)",
      },
    },
  },
  plugins: [],
};
