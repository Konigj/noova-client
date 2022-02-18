module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding:{
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      sans:['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        'my-white': "#FAFAFA",
        'my-black': "#222831",
        'my-gray': "#393E46",
        'my-blue': "#2F3C54",
      },
    },
  },
  plugins: [],
}
