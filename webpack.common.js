const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  resolve: {
    alias: {
      A: path.resolve(__dirname, 'assets'),
      S: path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(png|jpe?g|gif|mp4|ttf|eot|woff|woff2|svg|otf)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: '设置标题无卵用',
      template: './src/index.html',
      favicon: './assets/favicon.ico',
      hash: true, // HTML引入资源时，在文件名后拼接hash
    }),
    // vlevin @ 2021-02-17 待修复，不知为何在Vue下不可，在React下可
    // new webpack.ProvidePlugin({
    //   fetchData: path.resolve(path.join(__dirname, 'src/utils/fetch-data.js')),
    // }),
  ],
}
