const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires

module.exports = {
  entry: path.resolve(__dirname, '../src/app/index.tsx'),
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist',
  },
  module: { 
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    }] 
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};
