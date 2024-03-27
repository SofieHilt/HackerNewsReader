/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Space Mono", "ui-sans-serif"],
    },
    extend: {
      dropShadow: {
        "3xl": "-20px 20px 15px rgba(0, 0, 0, 0.35)",

        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.35)",
          "0 45px 65px rgba(0, 0, 0, 0.35)",
        ],
      },
    },
  },
  plugins: [],
};
