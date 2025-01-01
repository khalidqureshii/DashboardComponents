/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: { 
      screens: {
        'tc':'910px'
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        brand: {
          DEFAULT: "#7E5DED",
          50: "#F3EEFB",
          100: "#DBCAF2",
          200: "#9889F8",
          300: "#B18CE3",
          400: "#A276DD",
          500: "#7e53b7",
          600: "#633C97",
          700: "#4C2E75",
          800: "#3A2359",
        },
        grey:{
          100: "#EBEDF0",
          200: "#CED4DA",
          300: "#939CA3",
          400: "#6D747A",
          500: "#08090A",
        },
        black: "##1C1C1C",
        error: "#DE2929",
        open: "#5D84ED",
        complete: "#00906F",
        progress: "#FFC756",
        notStarted: "#0090D5",
        cancelled: "#ED5D84",
        quotedbg: "#FEE0EA",
        rejectedbg: "#FEE1D7",
        draftbg: "#D2EFFF",
        pendingbg: "#FEF3DD",
        cardStroke: "#EAEFF2",
        buttonOutline: "#EAEFF2",
        buttonSelection: "#EAEFF2",
        hoverGrey: "#F4F4F4"
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

