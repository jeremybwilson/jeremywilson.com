// const path = require('path');
const path = require('path');

module.exports = {
  entry: {
    main: "./src/app/main.js",
    vendor: "./src/app/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "../images"
            }
          }
        ]
      }
    ]
  }
};
