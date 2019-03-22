var path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



module.exports = {
    mode: 'development',  
    entry: path.join(__dirname, "src", "app.js"),
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
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
        },
        {
          test: /.(css|scss)$/,
          use: [ 
            {
              loader: MiniCssExtractPlugin.loader
            },
            

            {
              loader: "css-loader",
            }, 
            "sass-loader"
          ]
        },
        {
          test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[path][name]-[hash:8].[ext]"
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },    
    plugins: [
      new HtmlWebPackPlugin({
        filename: "index.html",
        template: path.join(__dirname, "src", "index.html")
      }),
    new MiniCssExtractPlugin({
      filename:  '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
    ]     
  }