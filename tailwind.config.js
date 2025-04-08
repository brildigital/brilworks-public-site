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
      spacing: {
        7.5: "30px",
      },
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
        themeColor: "#017eeb",
        navyBlue: "#000D1E",
        colorLightGray: "#f1f1f1",
        sectionBG: "#FAFAFA",
        colorYellow: "#FEDC7A",
        footerBG: "#f2f5f7",
        borderGray: "#dedede",
        vividBlue: "#017eeb",
        // colorBlack: "#1c1d1e",
        colorBlack: "#212121",
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
        "blue-gradient":
          "linear-gradient(87.38deg, #0182EA 35.49%, #0182EA 43.25%, #01DBD4 51.02%)",
        "new-gradient":
          "linear-gradient(126.47deg, #0182EA 1.83%, #0182EA 34.84%, #01DBD4 67.84%, #01DBD4 93.78%)",
        "theme-gradient":
          "linear-gradient(180.48deg, #007AEB 5.43%, #008CE7 30.86%, #00DBD3 72.46%)",
        "tab-gradient": "linear-gradient(90deg, #017EEB 0%, #000D1E 100%)",
        "text-gradient":
          "linear-gradient(147.18deg, #007AEB 8.92%, #008CE7 40.42%, #00DBD3 84.49%)",
      },
      dropShadow: {
        "book-shadow": "10px 10px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
