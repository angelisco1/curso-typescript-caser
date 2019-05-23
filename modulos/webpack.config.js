let path = require('path');

let entryPath = path.join(__dirname, 'src'),
    outputPath = path.join(__dirname, 'dist');


module.exports = {
  entry: path.join(entryPath, 'app.ts'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
        // loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader'
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: outputPath
  }
}