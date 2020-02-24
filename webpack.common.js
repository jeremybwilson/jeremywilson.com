const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/app/app.js",
    vendor: "./src/app/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react'
            ],
            "plugins": [
              [
                "@babel/plugin-proposal-class-properties",
                {
                  "loose": true
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "./images/[name].[hash].[ext]",
            publicPath: function(url) {
              return url.replace('./images/', '../images/')
            }
          }
        }]
      }
    ]
  }
};
