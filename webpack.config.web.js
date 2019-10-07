const path = require('path');

module.exports = {
  entry: "index.web.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "web.js",
    publicPath: "/public/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
    ],
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname)
    ],
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  devtool: "source-map",
  context: __dirname,
  target: "web",
  plugins: [
  ]
}
