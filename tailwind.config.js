/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ink: "#1a1a2e",
        rice: "#f5f0e8",
        cinnabar: "#c23616",
        indigo: "#2c3e6b",
        gold: "#b8860b",
        soot: "#4a4a4a",
        mist: "#8b8b8b",
      },
      fontFamily: {
        brush: ["'Ma Shan Zheng', 'STKaiti', 'KaiTi', serif"],
        song: ["'Noto Serif SC', 'STSong', 'SimSun', serif"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out forwards",
        slideUp: "slideUp 0.8s ease-out forwards",
        inkSpread: "inkSpread 1.2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        inkSpread: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      backgroundImage: {
        "ink-gradient": "linear-gradient(to bottom, #1a1a2e, #2c3e6b)",
      },
    },
  },
  plugins: [],
};
