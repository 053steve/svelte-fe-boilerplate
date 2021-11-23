module.exports = {
  purge: ["./src/**/*.svelte"],
  mode: 'jit', // ⚠ Make sure to have this
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
