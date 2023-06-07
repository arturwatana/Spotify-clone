/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "90.9%": "90.9%",
        57: "14.46rem",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [],
};
