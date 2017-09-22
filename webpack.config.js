const webpack = require('webpack');
const postcssImport = require('postcss-import')({
  path: [
    "src/components"
  ]
});

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
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: { modules: true, importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssImport,
              ],
            },
          },
        ],
      },
    ]
  },
  plugins: []
};

module.exports = config;
