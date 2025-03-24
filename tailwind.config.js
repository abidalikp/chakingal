/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        "raw-primary": "var(--raw-primary)",
        primary: "var(--primary)",
        "primary-2": "var(--primary-2)",
        "primary-3": "var(--primary-3)",
        "primary-4": "var(--primary-4)",
        "primary-5": "var(--primary-5)",
        "secondary-5": "var(--secondary-5)",
        "secondary-4": "var(--secondary-4)",
        "secondary-3": "var(--secondary-3)",
        "secondary-2": "var(--secondary-2)",
        secondary: "var(--secondary)",
        "raw-secondary": "var(--raw-secondary)",
      },
    },
  },
  plugins: [],
};
