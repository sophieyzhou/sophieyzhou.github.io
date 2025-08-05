/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // All your source files
    "./public/index.html",        // Optional, if you use Tailwind classes in HTML
  ],
  theme: {
    extend: {
      colors: {
        background: "#F6F5F4",     // soft background
        primary: "#0A3D16",        // dark green
        secondary: "#91BF91",      // light green
        accent: "#EB9DA5",         // pink accent
        neutral: {
          dark: "#1B1816",         // muted dark
          light: "#F6F5F4",        // muted light
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