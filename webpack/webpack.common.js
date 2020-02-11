const fs = require("fs");
const webpack = require("webpack");

// Plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ImageminPlugin = require("imagemin-webpack-plugin").default;

const path = require("path");

const paths = require("./paths");

const pugTemplates = [];
const srcll = fs.readdirSync(paths.dirSrcPug);
srcll.forEach(s => s.endsWith(".pug") && pugTemplates.push(s));

module.exports = {
  entry: {
    common: [path.join(paths.dirSrcJs, "common")],
    index: [path.join(paths.dirSrcJs, "index")],
    about: [path.join(paths.dirSrcJs, "about")],
    contact: [path.join(paths.dirSrcJs, "contact")]
  },
  output: {
    path: paths.dirDist,
    filename: "js/[name].js"
  },
  stats: "none",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        use: ['url-loader']
      },
      {
        test: /\.pug$/,
        use: [
          { loader: "raw-loader" },
          {
            loader: "pug-html-loader",
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["css-hot-loader", MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    ...pugTemplates.map(
      templateName =>
        new HtmlWebPackPlugin({
          inject: true,
          template: `./src/pug/${templateName}`,
          filename: path.join(
            paths.dirDist,
            templateName.replace(".pug", ".html")
          ),
          chunks: ["common", templateName.replace(".pug", "")],
          minify: false,
          alwaysWriteToDisk: true
        })
    ),
    new MiniCssExtractPlugin({
      filename: "css/main.css"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/assets",
        to: "assets"
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
      // Make sure that the plugin is after any plugins that add images
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        // Disable during development
        disable: process.env.NODE_ENV !== "production",
        pngquant: {
          quality: "95-100"
        }
      })
    ]
  }
};
