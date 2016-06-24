'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// var babelLoader = {
//   test: /\.jsx?$/,
//   loaders: ['babel-loader'],
//   exclude: /node_modules/
// };

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve('src', 'index.html'),
  filename: 'index.html',
  inject: 'body'
});

var babelLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['react', 'es2015'],
    plugins: ['transform-function-bind']
  }
};

var scssLoader = {
  test: /\.scss$/,
  loaders: [
    'style',
    'css-loader?insertAt=top&modules&importLoaders=1&localIdentName=[local]-[hash:base64:4]',
    'sass'
  ],
  exclude: /node_modules/
};

var configuration = {
  entry: {
    app: 'src/index.js'
  },
  module: {
    loaders: [babelLoader, scssLoader]
  },
  output: {
    path: path.resolve('build'),
    filename: 'app-[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      app: path.resolve('src'),
    }
  },
  plugins: [HtmlWebpackPluginConfig],
  externals: []
};

module.exports = configuration;
