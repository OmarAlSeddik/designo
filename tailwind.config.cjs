/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: "'Jost', sans-serif;",
      },
      fontSize: {
        h1: ["clamp(2.00rem, calc(1.29rem + 3.57vw), 3.00rem)", "1"],
        h2: ["clamp(1.75rem, calc(1.21rem + 2.68vw), 2.50rem)", "1.2"],
        h3: ["1.25rem", "1.3"],
        body: ["clamp(0.94rem, calc(0.89rem + 0.22vw), 1.00rem)", "1.625"],
      },
      colors: {
        peach: "#E7816B",
        lightPeach: "FFAD9B",
        black: "#1D1C1E",
        darkGrey: "#333136",
        white: "#FFFFFF",
        lightGrey: "#F1F3F5",
      },
    },
  },
  plugins: [],
};
