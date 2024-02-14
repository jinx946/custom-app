## 引入依赖

`webpack  
webpack-cli 对 webpack 命令进行管理和执行
html-webpack-plugin 生成 html 模板
webpack-dev-server 程序自动编译  webpck serve  

<!-- 环境变量  NODE_ENV 自动生效 -->

## 启动

```
服务端口 实际 6869 转发 6060
```
## 前端模块

```
web -index.js
```

## 坑点及总结 ：

```

1、跑了，没起服务  端口占用
2、 环境变量不生效 未解决
3、node-sass 报错-也用不上？
```

```
环境配置
webpack 配置

VueLoaderPlugin vue文件编译
HtmlWebpackPlugin html
MiniCssExtractPlugin  css单独打包配置

rule  
sass  less

eslint 配置

```
