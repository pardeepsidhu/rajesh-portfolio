const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
        animation: {
          "slide-down": "slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
          "slide-up": "slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        },
        keyframes: {
          "slide-down": {
            from: { height: "0px" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "slide-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0px" },
          },
        },
      },
  },
  plugins: [
    // rest of the code
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
