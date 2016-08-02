'use strict';

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

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

var cssLoader = {
  test:   /\.css$/,
  loader: "style-loader!css-loader!postcss-loader"
};

var jsonLoader = {
  test: /\.json$/,
  loader: 'json'
}

var configuration = {
  entry: path.resolve('src', 'index.jsx'),
  module: {
    loaders: [babelLoader, scssLoader, cssLoader, jsonLoader]
  },
  postcss: function () {
    return [precss, autoprefixer];
  },
  output: {
    path: path.resolve('dist'),
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
