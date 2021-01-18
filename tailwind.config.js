const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-blue": colors.lightBlue,
        teal: colors.teal,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover", "group-focus"],
    },
  },
  plugins: [],
};
