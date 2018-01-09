const loader = require("vue-template-loader")

module.exports = {
  process(src, path) {

    let out = {};

    loader.call({
      cacheable() { },
      callback(any, c, m) {
        out.code = c;
        out.map = m;
      },
      options: {
        target: "node"
      },
      resourcePath: path,
      request: ""
    }, src);

    return out;
  },
};