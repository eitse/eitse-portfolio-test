/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sanityDev/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        xs: { max: "400px" },
      },
    },
  },
  plugins: [
    // ...
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwind-scrollbar-hide"),
  ],
};
