var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: 'development',  
    entry: "./app/app.js",
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: "./app/index.html",
        filename: "./index.html"
      })
    ]    
  }