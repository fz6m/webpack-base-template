const path = require("path");

const { merge } = require("webpack-merge");
const base = require("./webpack.base");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = merge(base, {
  output: {
    filename: "filename.min.js",
    library: "ModuleName",
    libraryExport: "default",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: resolve("src"),
        exclude: /node_modules/,
      },
      {
        test: /\.((c|sa|sc)ss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
});
