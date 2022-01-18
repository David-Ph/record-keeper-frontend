module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-bg": "url('./assets/Logo/logo-bg.png')",
        "logo-transparent": "url('assets/logo-transparent.png')",
      },
      colors: {
        primary: "#FDE59B",
        secondary: "#BF1919",
        tertiary: "#2A0301",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        handwritten: ["Courgette", "serif"],
      },
    },
  },
  plugins: [],
};
