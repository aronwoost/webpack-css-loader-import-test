var webpack = require('webpack');

const postcssImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssSimpleVarsAsync = require('postcss-simple-vars');
const postcssNextCss = require('postcss-cssnext')({ browsers: ['last 2 versions', 'IE > 8'] });
const postcssNested = require('postcss-nested');
const postcssConditionals = require('postcss-conditionals');

var config = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/assets/',
    filename: '[name].bundle.js',
  },
  resolveLoader: {},
  resolve: {
    modules: ['components'],
    extensions: ['.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
    ],
  },
  plugins: [],
};

module.exports = config;
