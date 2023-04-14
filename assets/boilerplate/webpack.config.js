var webpack = require('webpack'); 
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);


module.exports = {
   entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
     filename: '../../js/vibe-boilerplate.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              // options...
            }
          }
        ]
    },
    {
            exclude: /node_modules/,
            test: /\.js$/,
            loader: 'babel-loader'
        }],

  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../../css/vibe-boilerplate.css',
    }),
  ]
};