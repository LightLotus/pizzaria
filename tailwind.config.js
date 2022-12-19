/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        popin: {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
        popout: {
          "0%": { right: "0" },
          "100%": { right: "100%" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
