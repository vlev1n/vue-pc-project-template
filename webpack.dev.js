const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 8611,
    proxy: {
      '/': {
        target: 'https://new.icity24.xyz',
        changeOrigin: true,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|postcss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
})
