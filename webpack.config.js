const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  devtool: "inline-source-map",
  output: {
    filename: "script.js",
    path: path.join(__dirname, "dist")
  },
  target: "web"
};
