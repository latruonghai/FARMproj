module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        "96/1": '96px',
        "48": "48px",
        "64": "64px",
        "308": "308px",
        "352": "352px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
