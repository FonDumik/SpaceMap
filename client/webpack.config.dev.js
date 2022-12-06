/* eslint-disable */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const sharedModules = require("./sharedModules.json");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

delete process.env.TS_NODE_PROJECT;

module.exports = {
  entry: "./src/index",
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    open: true,
    port: 3002,
    host: "localhost",
    historyApiFallback: true,
  },
  output: {
    publicPath: "/",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [new TsconfigPathsPlugin({ baseUrl: "src" })],
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /bootstrap\.tsx$/,
        loader: "bundle-loader",
        options: {
          lazy: true,
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env",
    }),
    new webpack.container.ModuleFederationPlugin({
      name: "hiddenspace",
      library: {
        type: "var",
        name: "hiddenspace_services",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App",
      },
      shared: sharedModules,
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
