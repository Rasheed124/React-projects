/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {


      colors: {
        "deep-black": "#272727",
        "light-white": "#DCD7D2",
        "light-overlay": "#c2aeb1",
        "deep-overlay-black": "#2a2a2a",
        "bg-overlay": "#dedfb0",
        "header-dark-overlay": "#E8C333",
        "contact-dark-overlay": "#837875",

      },


      fontFamily: {
        "libre-baskerville": ['Libre Baskerville', "serif"],
        "Antonio": ['Antonio', "sans-serif"],
        "Sohne-Bold-light": "Bold-light",
        "Sohne-Bold": "Bold",
        "migra-light": "migra",
      },

      maxWidth: {
        '8xl': '15001px',
      }

    },

  },
  plugins: [],
}

