/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors:{
        gray:"#F7F7F7",
        gray2:"#4C4C4C",
        gray3:"#EDEDED",
        gray4:"#f9f9f9",
        darkgray :"#1F1F1F",
        lightgray:"#8E8E8E",
        sidebar:"#34444C",
        sidebarLink:"#B7C0CD",
        orange:"#ED9843",
        btnHover:"#EA8116",
        yellow:"#ffbc34",
        blue:"#009efb",
        blue2:"#0d6efd",
        black2:"#4f4f4f",
        green:"#76CF64",
        green2:"#68B757"

      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff9b44",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        }
      }

    ]
  }
};
