module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        robotlik: ["'Press Start 2P'",'monospace'],
        def:["'IBM Plex Mono'", 'monospace']
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
