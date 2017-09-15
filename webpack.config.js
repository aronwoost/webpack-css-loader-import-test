var webpack = require('webpack');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: "/assets/",
    filename: '[name].bundle.js',
  },
  resolveLoader: {},
  resolve: {
    modules: ['components'],
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: [
        'css-loader',
      ]
    }]
  },
  plugins: []
};

module.exports = config;
