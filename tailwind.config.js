/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "eerie-black": "#1A1927",
        "light-gray": "#D1D1D4",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
