/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('./src/assets/house.jpg')",
        img2: "url('./src/assets/img.jpg')",
      },
      colors: {
        "primary-bg": "#E4E3EB",
      },
    },
  },
  plugins: [],
};
