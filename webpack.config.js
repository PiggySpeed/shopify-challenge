const path = require('path');
const webpack = require('webpack');

const devConfig = {
  devtool: 'source-map',
  mode: 'development',
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

const base = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['babel-loader'] },
      { test: /\.less$/, exclude: /node_modules/, use: ['style-loader', 'css-loader', 'less-loader'] }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, '/'), 'node_modules'],
    extensions: ['.js', '.less']
  }
};

module.exports = Object.assign({}, base, devConfig);
