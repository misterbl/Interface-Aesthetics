/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Sample Webpack Configuration
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const devMode = process.env.NODE_ENV !== "production";

// const extractCSS = new MiniCssExtractPlugin({
//   filename: devMode ? "[name].css" : "[name].css",
//   chunkFilename: devMode ? "[id].css" : "[id].css"
// });

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "firebase-database": path.resolve(
        __dirname,
        "../functions/firebase-database"
      )
    }
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, "./node_modules")]
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        // exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },

      {
        test: /\.(bmp|gif|jpe?g|png)$/,
        exclude: /node_modules/,
        loader: "url-loader"
      },
      {
        test: /\.(gif|eot|woff|woff2|ttf|svg|otf)$/,
        loaders: ["url-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
