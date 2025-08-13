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
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};