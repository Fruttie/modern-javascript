//this is a built in module in the node js core library
//it specifies the path on tis computer (generalizes it for all computers)
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets'),
    filename: 'bundle.js'
  }
};