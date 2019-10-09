const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge(common, {
  mode: "production",

  output: {
    filename: "index.[contenthash].js", // Cache Bursting using webpack
    path: path.resolve(__dirname, "public")
  }
});
