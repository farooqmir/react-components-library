var path = require("path");

module.exports = {
  entry: "./src/index.js",

  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../build"),
    libraryTarget: "commonjs2"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "../src"),
        exclude: /(node_modules|build)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    react: "commonjs react"
    // use the React dependency of our parent project instead of using our own React.
  },
  devServer: {
    contentBase: path.join(__dirname, "../build"),
    compress: true,
    port: 9000
  }
};
