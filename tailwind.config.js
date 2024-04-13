/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9"
      },
      fontFamily: {
        serif: ["Bellefair", "sans-serif"],
        condensed: ["Barlow Condensed", "sans-serif"],
        sans: ["Barlow", "sans-serif"],
      },
      fontSize: {
        xs: "0.875rem",
        sm: "1rem",
        md: "1.125rem",
        lg: "1.625rem",
        xl: "1.75rem",
        "2xl": "2rem",
        "3xl": "3.5rem",
        "4xl": "6.25rem",
        "5xl": "9.375rem",
      }
    },
  },
  plugins: [],
}

