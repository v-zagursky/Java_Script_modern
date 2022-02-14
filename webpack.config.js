const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtarctPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'GeekBrains Shop JS2',
      template: path.resolve(__dirname, './public/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
    new MiniCssExtarctPlugin({
      filename: '[name].css',
      chunkFilename:'[id].css'

    })
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/i,
        use: [
          MiniCssExtarctPlugin.loader,
          'css-loader', 
          'sass-loader'],
      },
    ],
  },
}