const merge = require("webpack-merge");
const common = require("./webpack.config.common");

module.exports = function(env) {
  return merge(env.es5 ? common.es5 : common.es6, {
    devtool: "source-map",
    devServer: {
      contentBase: "./dist",
      proxy: {
        "/api": {
          target: "http://localhost:3000",
          pathRewrite: { "^/api": "" }
        }
      }
    }
  });
};
