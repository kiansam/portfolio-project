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
      tightest: "-.01em",
      widest: "0.2em",
    },
    extend: {
      backgroundImage: (theme) => ({
        "back-svg": "url('/images/bg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
