const { merge } = require('webpack-merge');
const config = require('./webpack.config');
const path = require('path');
const { PUBLIC_PATH, STATIC_PATH } = require('../config/index');
const { devEntry } = require('./entry');

const devConfig = {
  entry: devEntry,
  output: {
    filename: '[name].bundle.js', //文件名
    path: path.resolve(__dirname, '..', PUBLIC_PATH), //输出路径
  },
  mode: 'development',
  devtool: 'eval-cheap-module-source-map', //映射回源代码位置
  devServer: {
    host: 'localhost', // 启动服务器域名
    port: '6869', // 启动服务器端口号
    open: false, // 是否自动打开浏览器
    static: {
      directory: path.join(__dirname, '..', PUBLIC_PATH),
    }, //静态资源 //？？
    compress: true, //为每个静态文件开启 gzip compression；
    client: {
      overlay: false, //关闭全屏报错
    },
  }, //开发服务配置
};

module.exports = merge(config, devConfig);
