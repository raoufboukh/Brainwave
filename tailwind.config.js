/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      md:"540px",
      lg:"768px",
      xl:"992px",
      '2xl':"1180px"
    },
    container:{
      center:true,
      padding:{
        DEFAULT: "16px",
        xl:'50px',
        md: "32px"
      }
    },
    fontFamily:{
      roboto : ["Roboto", 'sans-serif'],
      robotoSlab : ["Roboto Slab", 'serif']
    },
    extend: {
      backgroundImage:{
        'background-image':'linear-gradient(120deg, cyan, yellow, blueviolet, pink)'
      },
      colors: {
        color: {
          1: "#AC6AFF",
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
    },
  },
  },
  plugins: [],
}

