/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      allMobile: { min: "320px", max: "640px" },
      allTab: { min: "641px", max: "1023px" },
      allDekstop: { min: "1023px" },
    },
    extend: {
      colors: {
        primarry: "#FFD527",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    logs: false,
  },
};
