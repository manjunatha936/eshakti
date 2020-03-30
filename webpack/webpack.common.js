const fs = require("fs");
const webpack = require("webpack");

// Plugins
const HtmlWebPackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
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
    contact: [path.join(paths.dirSrcJs, "contact")],
    productlisting: [path.join(paths.dirSrcJs, "productlisting")],
    "product-details": [path.join(paths.dirSrcJs, "product-details")],
    "repeat-customer": [path.join(paths.dirSrcJs, "repeat-customer")],
    cart: [path.join(paths.dirSrcJs, "cart")],
    checkout: [path.join(paths.dirSrcJs, "checkout")],
    "order-placed": [path.join(paths.dirSrcJs, "order-placed")],
    "account-wishlist": [path.join(paths.dirSrcJs, "account-wishlist")],
    "my-orders": [path.join(paths.dirSrcJs, "my-orders")],
    "address-management": [path.join(paths.dirSrcJs, "address-management")],
    "accounts-personal": [path.join(paths.dirSrcJs, "accounts-personal")],
    "my-orders-gift": [path.join(paths.dirSrcJs, "my-orders-gift")]
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
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.js$/,
        use: ['source-map-loader'],
        enforce: 'pre',
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
      new TerserPlugin({
        parallel: true,
        cache: true,
        extractComments: true,
        terserOptions: {
          ecma: 5,
          ie8: false,
          compress: true,
          warnings: true,
        },
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
