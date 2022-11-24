const path = require('path');

module.exports = [
  {
    entry: {
      'main': path.resolve(__dirname, './src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
  },
  {
    entry: {
      'auth': path.resolve(__dirname, './src/utils/auth.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      libraryTarget: 'var',
      library: 'authReq'
    },
  },
];