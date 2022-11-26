const path = require('path');

module.exports = [
  {
    mode: "development",
    entry: {
      'main': path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: '[name].js',
    },
    devtool: "inline-source-map",
  },
  {
    entry: {
      'auth': path.resolve(__dirname, './src/utils/auth.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: '[name].js',
    },
  },
];