const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = merge(common, {
  mode: 'production',
  output: {
    // vlevin @ 2021-02-17 必须显式声明path参数，否则CleanWebpackPlugin不起作用
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(css|postcss)$/,
        // vlevin @ 2020-05-16 很多依赖中有样式，不能忽略node_modules
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new MiniCssExtractPlugin(),
  ],
})
