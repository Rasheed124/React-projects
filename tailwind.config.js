/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        "deep-black": "#272727",
        "light-white": "#DCD7D2",
        "light-overlay": "#c2aeb1",
        "deep-overlay-black": "#2a2a2a",
        "deep-overlay": "#dedfb0",
        "header-dark-overlay": "#E8C333",
        "contact-dark-overlay": "#837875",

      },

      fontFamily: {
        // "libre-baskerville": ['Libre Baskerville', "serif"],
        "Antonio": ['Antonio', "sans-serif"],
        // "Sohne-Bold-light": "Bold-light",
        // "Sohne-Bold": "Bold",
        // "migra-light": "migra",
      },

      maxWidth: {
        '8xl': '15001px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
