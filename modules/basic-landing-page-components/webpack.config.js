const path = require('path');

module.exports = {
  entry: './src/index.tsx',
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
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    library: 'basicLandingPageComponents',
    path: path.resolve(__dirname, 'dist'),
  },
  externals:[{
    react:'react',
    jquery:'jQuery',
    bootstrap:'bootstrap',
    "popper.js":'popper.js'
  }]
};