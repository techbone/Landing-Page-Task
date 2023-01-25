/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        HomeBackground: "#011b1a",
        AppGreen: "#c7ffca",
      },
    },
  },
  plugins: [],
};
