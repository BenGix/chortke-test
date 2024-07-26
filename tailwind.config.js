/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(to right, #42d2ac  0%, #78d484  100%)",
      },
      textColor: {
        dark: "#313131",
      },
      backgroundColor: {
        light: "#f5f5f5",
        dark: "#313131",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
