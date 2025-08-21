/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",             // ✅ root entry file
    "./app/**/*.{js,jsx,ts,tsx}",        // ✅ your app/ folder
    "./components/**/*.{js,jsx,ts,tsx}", // ✅ if you have components/
    "./src/**/*.{js,jsx,ts,tsx}",        // ✅ optional for future use
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary:"#4A5B9B", // blue
        secondary:"#2A36630D", // light blue
        bggreen:"#86CD821A",
        lettergreen:"#41973C",
        bggray:"#F9FAFB",
        txtyellow: "#FFD355",
      },
    },
  },
  plugins: [],
};