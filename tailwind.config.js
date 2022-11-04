/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      colors: {
        DarkModeElements: "hsl(209, 23%, 22%)",
        DarkModeBackground: "hsl(207, 26%, 17%)",
        LightModeText: "hsl(200, 15%, 8%)",
        LightModeInput: "hsl(0, 0%, 52%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        DarkModeTextLightModeElements: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
