## 引入依赖

`webpack
webpack-cli 对 webpack 命令进行管理和执行
html-webpack-plugin 生成 html 模板
webpack-dev-server 提供 web 服务 实时重载

<!-- 环境变量  NODE_ENV 自动生效 -->

## 启动

```
服务端口 6060
```

分模块 分端口`

## 前端模块

```
web -index.js
```

## 坑点及总结 ：

```

1、跑了，没起服务  端口占用
2、 环境变量不生效
```

```
rule 配置
VueLoaderPlugin vue文件编译
```

```
egg 服务启动错误
```

## 版本发布

### 发布到 GitHub Pages

```bash
# 构建项目
npm run build

# 部署到 gh-pages 分支
切换分支到 gh-pages 分支
git checkout gh-pages
npm run deploy
```

### 发布到自定义分支

```bash
# 构建项目
npm run build

# 部署到 deploy 分支
npm run deploy-custom
```

### 发布流程说明

1. **预部署**：执行 `npm run build` 构建前端项目
2. **部署**：使用 `gh-pages` 工具将构建产物部署到指定分支
3. **发布目标**：
   - `npm run deploy`：部署到 `gh-pages` 分支（默认 GitHub Pages 分支）
   - `npm run deploy-custom`：部署到 `deploy` 分支（自定义发布分支）
