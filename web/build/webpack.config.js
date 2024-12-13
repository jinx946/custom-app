const { VueLoaderPlugin } = require("vue-loader/dist/index");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin"); //引入html 插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // css包插件
const CopyPlugin = require("copy-webpack-plugin");
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";
const path = require("path");
module.exports = {
  resolve: {
    alias: {
      _web: path.resolve(__dirname, ".."),
      public: path.resolve(__dirname, "../public"),
      "@": path.resolve(__dirname, "../src"), // @ 代表 src 路径
      _router: path.resolve(__dirname, "../src/web/router"),
      // Cesium: path.resolve(__dirname, '../public/Cesium'),
    },
  },
  module: {
    // 规则
    rules: [
      // {}
      { test: /.vue$/, use: "vue-loader" },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [path.resolve(__dirname, "..", `src`)],
        type: "asset/resource",
      }, //直接文件导出
    ],
    //
    // generator: {},
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, "../public"), to: "public" }], //直接复制文件 注：node 版本会有所以影响，用14.8.0，构建不成功
    }),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "app",
      favicon: path.resolve(__dirname, "..", "public/favicon.ico"), //icon位置
      filename: `index.html`, //生成的文件名
      template: path.resolve(__dirname, "..", `src/index.html`), //源文件的绝对路径
    }), //页面插件 可多页面
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new MiniCssExtractPlugin({
      // 这里的配置和webpackOptions.output中的配置相似
      // 即可以通过在名字前加路径，来决定打包后的文件存在的路径
      filename: devMode ? "css/[name].css" : "css/[name].[hash].css",
      chunkFilename: devMode ? "css/[id].css" : "css/[id].[hash].css",
    }),
  ],
};
