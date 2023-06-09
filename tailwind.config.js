/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      h1: "2.80rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      1: "1px",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        primary: "#121212",
        card: "#272727",
        fullblack: "#000000",
        green: "#1ED760",
      },
      spacing: {
        "90.9%": "90.9%",
        57: "14.46rem",
        "93%": "93%",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [],
};
