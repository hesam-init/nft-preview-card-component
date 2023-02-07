/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontSize: {
        normal: "1.125rem",
      },
      colors: {
        cyan: "hsl(178, 100%, 50%)",
        light: "hsl(215, 51%, 70%)",
        "dark-main": "hsl(217, 54%, 11%)",
        "dark-card": "hsl(216, 50%, 16%)",
        "dark-line": "hsl(215, 32%, 27%)",
      },
    },
  },
  plugins: [],
};
