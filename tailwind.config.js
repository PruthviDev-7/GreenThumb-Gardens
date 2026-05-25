/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sorts-mill-goudy': ['SortsMillGoudy', 'serif'],
      },
      backgroundImage: {
        'hero-image': "url('../assets/page2-1.png')",
      },
    },
  },
  plugins: [],
}