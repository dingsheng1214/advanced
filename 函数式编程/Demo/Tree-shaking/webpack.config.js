const path = require('path');
module.exports = {
  mode: 'production',
  entry: './entry1.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}