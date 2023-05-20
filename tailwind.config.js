/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#8C0327",

          "secondary": "#D85251",

          "accent": "#D59B6A",

          "neutral": "#826A5C",

          "base-100": "#F1F1F1",

          "info": "#42ADBB",

          "success": "#499380",

          "warning": "#E97F14",

          "error": "#DF1A2F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

