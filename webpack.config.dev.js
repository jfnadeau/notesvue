const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  },
});