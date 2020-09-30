const path = require("path");

const { merge } = require("webpack-merge");
const base = require("./webpack.base");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: resolve("src"),
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.((c|sa|sc)ss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:
              process.env.NODE_ENV !== "production"
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
});
