var path = require("path");

var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    path: path.join(__dirname, "dist/"),
    filename: "bundle.js"
  },
  devtool: "inline-source-map",
  module: {
    loaders: [
      // Load js with jsx and babel
      {
        test: /\.jsx$/,
        loaders: ["babel"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true
    })
  ]
};
