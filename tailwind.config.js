const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    letterSpacing: {
      widest: "0.2em",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
