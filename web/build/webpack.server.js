const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');
const { PUBLIC_PATH } = require('../config/index');
const { serverEntry } = require('./entry');
const serverConfig = {
  entry: serverEntry,
  entry: {
    server: './src/server/index.js',
  },
  output: {
    filename: '[name].js', //文件名
    path: path.resolve(__dirname, '..', PUBLIC_PATH), //输出路径
    clean: true,
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', //映射回源代码位置
  devServer: {
    // host: 'localhost', // 启动服务器域名
    port: '6879', // 启动服务器端口号
    open: false, // 是否自动打开浏览器
  }, //开发服务配置
};
module.exports = merge(config, serverConfig);
