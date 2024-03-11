/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#3498db"
        
      },
      width: {
        thirtyPercent: "30%",
        seventyPercent: "70%"
      },
      height: {
        eightyView: "80vh"
      },
      backgroundColor: {
        customBlack: "#020c1b"
      }
    },
  },
  plugins: [],
}

