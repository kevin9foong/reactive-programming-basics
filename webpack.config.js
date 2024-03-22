const path = require('path');

module.exports = {
  entry: './src/reactive-1.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundlex.js',
    path: path.resolve(__dirname, 'dist'),
  },
};