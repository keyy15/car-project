/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "#b20000",
      },
      boxShadow: {
        custom: "0px 1px 4px rgba(0, 0, 0, 0.16)",
      },
    },
  },
  plugins: [],
};
