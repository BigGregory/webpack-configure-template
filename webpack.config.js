const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJsPlugin({})
    ],
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    },
    {
      test: /\.less$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'] // compiles Less to CSS
    },
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] // compiles Sass to CSS
    }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4200
  },

}