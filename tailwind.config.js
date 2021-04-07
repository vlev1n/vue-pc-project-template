module.exports = {
  // vlevin @ 2021-03-08 自动根据环境purge有时候不管用，需要手动设置enabled: true
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
