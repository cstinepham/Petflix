// webpack.config.js
var path = require('path');

module.exports = {
  entry: './frontend/petflix.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    rules: [{
      test: [/\.jsx?$/],
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};