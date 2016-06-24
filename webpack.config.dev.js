var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var config = Object.create(baseConfig);

config.debug = true;
config.devtool = 'cheap-module-eval-source-map';
config.entry = [
  'webpack-dev-server/client?http://0.0.0.0:3000',
  'webpack/hot/only-dev-server',
  'app/index'
];
// config.output.publicPath = 'http://localhost:3000/build/';
config.module.loaders.push({
  test: /\.global\.css$/,
  loaders: [
    'react-hot',
    'style-loader',
    'css-loader?sourceMap'
  ]
}, {
  test: /^((?!\.global).)*\.css$/,
  loaders: [
    'react-hot',
    'style-loader',
    'css-loader?insertAt=top&modules&sourceMap&importLoaders=1&localIdentName=[name]=[local]-[hash:base64:4]'
  ]
});
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __DEV__: true,
    'process.env': {
      NODE_ENV: JSON.stringify('development')
    }
  })
);

module.exports = config;