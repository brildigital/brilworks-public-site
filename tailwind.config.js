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
        smallDesktop: "1366px",
        "3xl": "1680px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Urbanist: ["Urbanist", "sans-serif"],
        Figtree: "var(--global-font)",
      },
      colors: {
        themeColor: "#017eeb",
        navyBlue: "#000d1e",
        themeSecondary: "#00dbd3",
        colorLightGray: "#f1f1f1",
        sectionBG: "var(--section-bg)",
        colorYellow: "#FEDC7A",
        footerBG: "#f2f5f7",
        borderGray: "var(--border-gray)",
        colorBlack: "var(--color_black)",
        colorWhite: "#ffffff",
        colorGray: "#504f4f",
        themeLight: "#f2f9fe",
        // Cyberpunk theme colors
        "cyber-navy": "var(--cyber-navy)",
        "cyber-blue": "var(--cyber-blue)",
        "cyber-orange": "var(--cyber-orange)",
        "cyber-purple": "var(--cyber-purple)",
        "cyber-dark": "var(--cyber-dark)",
        "cyber-gray": "var(--cyber-gray)",

        accent: "	#00ffff",
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
        "cyber-gradient":
          "linear-gradient(135deg, rgb(17, 24, 39), rgb(29, 35, 48), rgb(17, 24, 39))",
      },
      dropShadow: {
        "book-shadow": "10px 10px 15px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "mvp-neural-pulse": "mvpNeuralPulse 6s ease-in-out infinite",
        "mvp-circuit-flow": "mvpCircuitFlow 20s linear infinite",
        "mvp-float-rotate": "mvpFloatRotate 15s ease-in-out infinite",
        "mvp-float-rotate-reverse": "mvpFloatRotate 12s ease-in-out infinite reverse",
        "mvp-data-flow": "mvpDataFlow 8s ease-in-out infinite",
        "mvp-holographic": "mvpHolographic 10s ease-in-out infinite",
        "mvp-fade-up": "mvpFadeUp 0.6s ease-out forwards",
        "mvp-fade-in": "mvpFadeIn 0.6s ease-out forwards",
        "mvp-slide-up": "mvpSlideUp 0.6s ease-out forwards",
      },
      keyframes: {
        mvpNeuralPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        mvpCircuitFlow: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100px, -100px)" },
        },
        mvpFloatRotate: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        mvpDataFlow: {
          "0%, 100%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { transform: "translateX(100%)", opacity: "1" },
        },
        mvpHolographic: {
          "0%, 100%": { opacity: "1" },
          "25%": { opacity: "0.8" },
          "50%": { opacity: "0.6" },
          "75%": { opacity: "0.9" },
        },
        mvpFadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        mvpFadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        mvpSlideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
