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

        text: "#050316",
        background: "#fbfbfe",
        primary: "#2f27ce",
        secondary: "#dddbff",
        accent: "#443dff",
        optional: "#2274A5",
      },
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Poppins",
        body: "Poppins",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
