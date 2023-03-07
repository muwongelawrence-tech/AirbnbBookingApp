module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        seconds_bg: "url('/public/images/bg2.jpg')",
        logo_bg: "url('/public/images/logo.png')",
        radiography_bg: "url('/public/images/bg.jpg')"

      },

      colors : {
        "dark-purple": "#081A51",
        "light-white" : "rgba(255,255,255,0.17)",
        "radiography-gray": "#fafafa",
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("@tailwindcss/line-clamp")],
};
