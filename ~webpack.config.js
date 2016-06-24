var path = require ('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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

var configuration = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.resolve('build'),
    filename: 'app-[hash].js'
  },
  resolve: {
    alias: {
      app: path.resolve('src')
    }
  },
  module: {
    loaders: [babelLoader]
  },
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = configuration;