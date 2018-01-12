const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const es6 = {
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      inject: false
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

const es5 = merge.smart(es6, {
  entry: [
    'es6-object-assign/auto'
  ],
  output: {
    filename: "[name]-es5.js"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              "target": "es5"
            }
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      Promise: 'es6-promise'
    })
  ]
});

module.exports = { es5, es6 }