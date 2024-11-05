/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      margin:{
        '5p': '5%',
        '10p': '10%',
        '20p': '20%',
      },
      padding:{
        '5p': '5%',
        '10p': '10%',
        '20p': '20%',
      }
    },
  },
  plugins: [],
}