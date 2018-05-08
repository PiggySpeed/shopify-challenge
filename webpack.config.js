const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const LAUNCH_COMMAND = process.env.NODE_ENV;
const isProduction = LAUNCH_COMMAND === 'production';

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

const prodConfig = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      inject: 'body'
    })
  ]
};

const base = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js'
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

module.exports = Object.assign({}, base, (isProduction ? prodConfig : devConfig));
