const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { DefinePlugin } = require('webpack')
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
    // vlevin @ 2021-04-07 可以不配，但文档强烈建议配置，参见https://github.com/vuejs/vue-next/tree/master/packages/vue#bundler-build-feature-flags
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
    // vlevin @ 2021-02-17 待修复，不知为何在Vue下不可，在React下可
    // new webpack.ProvidePlugin({
    //   fetchData: path.resolve(path.join(__dirname, 'src/utils/fetch-data.js')),
    // }),
  ],
}
