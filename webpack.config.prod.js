const webpack = require("webpack");
const merge = require("webpack-merge");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.config.common");

const prod = {
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ]
};

const es6 = merge.smart(common.es6, prod, {
  plugins: [
    new MinifyPlugin(
      {},
      {
        comments: false
      }
    )
  ]
});

const es5 = merge.smart(common.es5, prod, {
  plugins: [new UglifyJsPlugin()]
});

module.exports = [es6, es5];
