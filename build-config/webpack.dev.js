var path = require("path");

module.exports = {
  entry: "./src-dev/app.js",
  output: {
    path: path.resolve(__dirname, "../build-dev"),
    filename: "app.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../src-dev")
        ],
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "../build-dev"),
    compress: true,
    port: 9000
  }
};
