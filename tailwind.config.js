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
      },
      colors: {
        themeColor: "#0D9A9A",
        colorLightGray: "#f1f1f1",
        sectionBG: "#F2F3F3",
        footerBG: "#F2F5F7",
        borderGray: "#DEDEDE",
        colorBlack: "#1c1d1e",
        colorWhite: "#ffffff",
        colorGray: "#504F4F",
        themePrimary: "#00dfb8",
        themeSecondary: "#00b6cf",
        themeLight: "#F3FDFF",
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
