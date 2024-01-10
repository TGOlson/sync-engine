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
  devtool: 'eval',
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
  devServer: {
    static: [
      {
        publicPath: "/",
        directory: path.join(__dirname, "public"),
      },
      {
        publicPath: "/assets/js",
        directory: path.join(__dirname, "dist"),
      },
    ],
    proxy: {
      "/api": "http://localhost:3000",
    },
    port: 8080,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
});

const server = merge(common, {
  entry: path.resolve(__dirname, './src/server/index.ts'),
  mode: 'development',
  target: 'node',
  devtool: 'eval',
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  // Ignore these for now as they don't seem critical, and these deps might actually be removed soon
  // If these deps continue to be used, we should fix these warnings
  ignoreWarnings: [
    {
      module: /@whatwg-node/,
      message: /the request of a dependency is an expression/,
    },
    {
      module: /type-graphql/,
      message: /the request of a dependency is an expression/,
    },
  ],
});

module.exports = [app, server];
