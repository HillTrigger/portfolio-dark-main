const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

console.log("IS DEV: ", isDev);

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

const cssLoaders = (...extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: "css-loader",
    },
  ];
  if (extra) {
    loaders.push(...extra);
  }
  return loaders;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  devtool: isDev && "source-map",
  entry: {
    main: "./js/main.js",
    // jqmainjs: "./js/jqmainjs.js",
    // fancybox: "./js/fancybox/fancybox.js",
  },
  output: {
    filename: filename("js"),
    publicPath: "./",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".json"],
    alias: {
      "@images": path.resolve(__dirname, "images"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimize: !isDev,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: "../index.html", // Путь к вашему шаблону
      chunks: ["main"], // Порядок загрузки скриптов
      inject: "body", // Скрипты будут вставлены в конец body
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "images"),
          to: path.resolve(__dirname, "dist/images"),
        },
        {
          from: path.resolve(__dirname, "favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders({
          loader: "sass-loader",
          options: {
            sassOptions: {
              warnRuleAsWarning: true,
            },
          },
        }),
      },
      {
        test: /\.(png|jpg|jpeg|svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 0.25%, not dead",
                  useBuiltIns: "usage",
                  corejs: 3,
                },
              ],
            ],
          },
        },
      },
    ],
  },

  devServer: {
    port: 4200,
    hot: isDev,
    liveReload: true,
    open: isDev,
    watchFiles: ["src/**/*"],
  },
};
