const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js',
    about: './src/about.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  }
};
