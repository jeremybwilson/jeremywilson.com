// const path = require('path');
const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "./app/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html"
    })
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader' // 3. Inject styles into DOM
        },
        {
          loader: 'css-loader'  // 2. Turns css into commonjs
        },
        {
          loader: 'sass-loader'  // 1. Turns sass into css
        }]
      }
    ]
  }
});
