/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
  theme: {
    extend: {
      backgroundImage: {
        forsideweb: "url('/src/assets/images/forsideweb.png')",
        forsidemobil: "url('/img/footer-texture.png')",
      },

      fontFamily: {
        albert: ['"Albert Sans"', "sans-serif"],
        outfit: ['"Outfit"', "sans-serif"],
      },
      colors: {
        beige: {
          100: "#FDFDFC",
          200: "#FCFBF9",
          300: "#FAFAF5",
          400: "#F9F8F2",
          500: "#F7F6EF",
          600: "#C6C5BF",
          700: "#94948F",
          800: "#636260",
          900: "#313130",
        },
        darkblue: {
          100: "#CCD5D5",
          200: "#99ABAB",
          300: "#668181",
          400: "#335757",
          500: "#002D2D",
          600: "#002D2D",
          700: "#001B1B",
          800: "#001212",
          900: "#000909",
        },
        blue: {
          100: "#CCEDEB",
          200: "#99DAD7",
          300: "#66C8C3",
          400: "#33B5AF",
          500: "#00A39B",
          600: "#00827C",
          700: "#00625D",
          800: "#00413E",
          900: "#00211F",
        },
        orange: {
          100: "#FCDECD",
          200: "#FABE9B",
          300: "#F79D69",
          400: "#F57D37",
          500: "#F25C05",
          600: "#C24A04",
          700: "#913703",
          800: "#612502",
          900: "#301201",
        },
        white: {
          100: "#ffffff",
        },
      },
      dropShadow: {
        drop: "-2px 2px 10px rgba(0, 0, 0, 0.25)",
      },
      innerShadow: {
        inner: "inset 1px -2px 10px 0 rgba(0, 0, 0, 0.10)",
      },
      innerShadowMobil: {
        inner: "inset 1px -1px 10px 0 rgba(0, 0, 0, 0.05)",
      },
    },
  },
};
