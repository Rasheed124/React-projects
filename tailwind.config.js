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
        "primary-color": "#1a1a1a",
        "secondary-color": "#f0f0f0",
        "accent-color": "#007bff",

      },
      
      fontFamily: {
        "calibre-Bold": ["var(--font-calibre-bold)"],
        "calibre-medium": ["var(--font-calibre-medium)"],
      },

    },
  },
  plugins: [],
}
