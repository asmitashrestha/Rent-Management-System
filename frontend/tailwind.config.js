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
        "fb-blue": "#0071FF",
        coffee: "#6F4E37",
      },
    },
  },
  plugins: [],
};
