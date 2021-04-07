module.exports = {
  // presets: [
  //   [
  //     '@babel/preset-env',
  //     {
  //       useBuiltIns: 'usage',
  //       corejs: 3,
  //     },
  //   ],
  // ],
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        },
      },
    ],
  ],
}
