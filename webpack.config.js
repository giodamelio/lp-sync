var path = require("path");

var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3141",
    "webpack/hot/only-dev-server",
    "./src/index.js"
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
        test: /\.js$/,
        loaders: ["react-hot", "babel"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      hash: true
    })
  ]
};
