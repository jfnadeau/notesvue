const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: [
    'whatwg-fetch',
    './src/main.ts'
  ],
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.html$/,
        loader: 'vue-template-loader',
        exclude: path.join(__dirname, "/src/index.html")
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: ['.ts', ".js"]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    }),
    new ExtractTextPlugin("[name].css", {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    })
  ]
};