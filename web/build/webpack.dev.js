const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const path = require("path");
const { PUBLIC_PATH, STATIC_PATH } = require("../config/index");
const { devEntry } = require("./entry");

const devConfig = {
  entry: devEntry,
  output: {
    filename: "[name].bundle.js", //文件名
    path: path.resolve(__dirname, "..", PUBLIC_PATH), //输出路径
  },
  mode: "development",
  devtool: "eval-cheap-module-source-map", //映射回源代码位置
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "9527", // 启动服务器端口号
    open: false, // 是否自动打开浏览器
    static: {
      directory: path.join(__dirname, "..", PUBLIC_PATH),
    }, //静态资源
    compress: true, //为每个静态文件开启 gzip compression；
    client: {
      overlay: false, //关闭全屏报错
    },
    // 新增代理配置
    proxy: {
      "/ai-api/v1": {
        target: "http://114.119.174.47:3010/v1",
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          "^/ai-api/v1": "", // 将 /ai-api/v1 重写为空，因为 target 已经包含了 /v1
          // 如果目标地址是 http://114.119.174.47:3010 (没有/v1)，则不需要 pathRewrite 或改为 '^/ai-api/v1': '/v1'
          // 根据题目要求目标包含 /v1，且请求前缀是 /ai-api/v1，通常意味着我们要去掉 /ai-api 部分或者完全替换。
          // 假设请求是 /ai-api/v1/chat，目标是 http://114.119.174.47:3010/v1/chat
          // 那么 pathRewrite 应该是 {'^/ai-api': ''}
        },
      },
    },
  }, //开发服务配置
};

module.exports = merge(config, devConfig);
