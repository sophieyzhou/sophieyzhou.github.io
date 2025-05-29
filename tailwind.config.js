/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFCFA",     // soft background
        primary: "#004225",        // dark green
        secondary: "#93C572",      // light green
        neutral: {
          dark: "#48435C",         // muted dark
          light: "#D8D6D9",        // muted light
        },
      },
      fontFamily: {
        header: ["'Lora'", "serif"],
        body: ["'Roboto'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
