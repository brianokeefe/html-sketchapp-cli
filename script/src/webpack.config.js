const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'generateAlmostSketch.js'),
  output: {
    path: __dirname,
    filename: '../dist/generateAlmostSketch.bundle.js',
    library: 'generateAlmostSketch'
  }
};
