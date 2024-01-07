const path = require('path'); // eslint-disable-line @typescript-eslint/no-var-requires
const { merge } = require('webpack-merge'); // eslint-disable-line @typescript-eslint/no-var-requires

const common = {
  module: { 
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader',
        options: {
          onlyCompileBundledFiles: true,
        }
      },
    }] 
  }
};

const app = merge(common, {
  entry: path.resolve(__dirname, './src/app/index.tsx'),
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './dist'),
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
});

const server = merge(common, {
  entry: path.resolve(__dirname, './src/server/index.ts'),
  mode: 'development',
  target: 'node',
  devtool: 'inline-source-map',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
});

module.exports = [app, server];
