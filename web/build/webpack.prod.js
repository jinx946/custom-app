const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');
const { PUBLIC_PATH } = require('../config/index');
const { prodEntry } = require('./entry');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const prodConfig = {
  entry: prodEntry,
  output: {
    filename: '[name].[contenthash].bundle.js', //文件名
    path: path.resolve(__dirname, '..', PUBLIC_PATH), //输出位置
    clean: true,
  },
  plugins: [], //插件
  mode: 'production', //环境
  optimization: { minimizer: [new CssMinimizerPlugin()] },
};
module.exports = merge(config, prodConfig);
