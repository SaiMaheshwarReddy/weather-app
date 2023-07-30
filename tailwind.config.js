/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway"],
      },
      rotate: {
        170: "170deg",
      },
      colors: {
        // blue: "#1E213A",
        // lightblue: "#626475",
        // darkBlue: "#3C47E9",
        blue: {
          200: "#3C47E9",
          400: "#616475",
          700: "#626475",
          900: "#1E213A"
        },
        black: "#100E1D",
        grey: {
          300: "#E7E7EB",
          600: "#6E707A",
          900: "#A09FB1",
        },
        yellow: {
          500: "#FFEC65"
        }
      },
    },
  },
  plugins: [],
};
