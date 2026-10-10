# API 请求模块

基于原生 `fetch` API 封装的请求模块，提供统一的 HTTP 请求方法和按业务模块划分的 API。

## 📁 目录结构

```
api/
├── config.js        # API 配置（基础 URL、超时时间等）
├── request.js       # fetch 封装和通用 HTTP 方法
├── user.js          # 用户相关业务 API
├── prod.js          # 产品相关业务 API
├── example.js       # 使用示例
├── index.js         # 统一导出
└── README.md        # 说明文档
```

## 🚀 快速开始

### 1. 导入 API

```javascript
// 方式 1: 导入模块化 API（推荐）
import { userApi, prodApi } from '@/web/api';

// 方式 2: 导入通用 HTTP 方法
import { get, post, put, del } from '@/web/api';

// 方式 3: 导入所有
import * as api from '@/web/api';
```

### 2. 基本使用

```javascript
// 用户登录
const result = await userApi.login({
  username: 'admin',
  password: '123456'
});

// 获取用户列表
const users = await userApi.getUserList({
  page: 1,
  pageSize: 10
});

// 创建产品
const product = await prodApi.createProduct({
  name: '测试产品',
  price: 99.99
});
```

## 📖 API 文档

### 配置 (config.js)

```javascript
{
  baseURL: 'http://localhost:3600',  // 后端服务地址
  timeout: 10000,                     // 请求超时时间（毫秒）
  headers: {                          // 默认请求头
    'Content-Type': 'application/json;charset=UTF-8'
  }
}
```

### 通用 HTTP 方法 (request.js)

#### GET 请求
```javascript
import { get } from '@/web/api';

// 简单 GET
const data = await get('/api/user/list');

// 带查询参数
const data = await get('/api/user/list', { page: 1, pageSize: 10 });

// 自定义选项
const data = await get('/api/user/list', 
  { page: 1 }, 
  { timeout: 5000, headers: { 'Custom-Header': 'value' } }
);
```

#### POST 请求
```javascript
import { post } from '@/web/api';

const result = await post('/api/user/login', {
  username: 'admin',
  password: '123456'
});
```

#### PUT 请求
```javascript
import { put } from '@/web/api';

const result = await put('/api/user/1', {
  username: 'newname'
});
```

#### DELETE 请求
```javascript
import { del } from '@/web/api';

const result = await del('/api/user/1');

// 带查询参数
const result = await del('/api/user/1', { reason: 'test' });
```

#### PATCH 请求
```javascript
import { patch } from '@/web/api';

const result = await patch('/api/user/1', {
  status: 'active'
});
```

### 用户模块 API (user.js)

```javascript
import { userApi } from '@/web/api';

// 登录
await userApi.login({ username, password });

// 注册
await userApi.register({ username, password, email });

// 获取用户信息
await userApi.getUserInfo();

// 获取用户列表
await userApi.getUserList({ page, pageSize });

// 根据 ID 获取用户
await userApi.getUserById(id);

// 创建用户
await userApi.createUser(userData);

// 更新用户
await userApi.updateUser(id, userData);

// 删除用户
await userApi.deleteUser(id);

// 退出登录
await userApi.logout();

// 修改密码
await userApi.changePassword({ oldPassword, newPassword });

// 更新个人资料
await userApi.updateProfile(profileData);
```

### 产品模块 API (prod.js)

```javascript
import { prodApi } from '@/web/api';

// 获取产品列表
await prodApi.getProductList({ page, pageSize, category });

// 根据 ID 获取产品
await prodApi.getProductById(id);

// 创建产品
await prodApi.createProduct(productData);

// 更新产品
await prodApi.updateProduct(id, productData);

// 删除产品
await prodApi.deleteProduct(id);

// 批量删除
await prodApi.batchDeleteProducts([id1, id2, id3]);

// 搜索产品
await prodApi.searchProducts('keyword');

// 获取产品分类
await prodApi.getProductCategories();

// 获取产品详情
await prodApi.getProductDetail(id);

// 上架产品
await prodApi.publishProduct(id);

// 下架产品
await prodApi.unpublishProduct(id);

// 获取库存
await prodApi.getProductStock(id);

// 更新库存
await prodApi.updateProductStock(id, stockData);
```

## 🔧 高级用法

### 自定义请求头

```javascript
import { post } from '@/web/api';

const result = await post('/api/custom', 
  { data: 'value' },
  { 
    headers: { 
      'X-Custom-Header': 'custom-value',
      'Authorization': 'Bearer custom-token'
    } 
  }
);
```

### 自定义超时时间

```javascript
import { get } from '@/web/api';

// 设置 30 秒超时
const data = await get('/api/slow-endpoint', {}, { timeout: 30000 });
```

### Token 自动携带

模块会自动从 `localStorage` 读取 token 并添加到请求头：

```javascript
// 登录后保存 token
localStorage.setItem('token', response.token);

// 后续请求会自动携带 Authorization: Bearer <token>
```

### 错误处理

```javascript
try {
  const data = await userApi.getUserList();
  console.log('成功:', data);
} catch (error) {
  if (error.message === '请求超时') {
    console.error('请求超时，请检查网络');
  } else {
    console.error('请求失败:', error.message);
  }
}
```

## 📝 添加新模块

1. 在 `api` 目录下创建新的业务模块文件，如 `order.js`
2. 导入 HTTP 方法并定义 API 函数
3. 在 `index.js` 中导出新模块

```javascript
// order.js
import { get, post, put, del } from './request';

export function getOrderList(params) {
  return get('/api/order/list', params);
}

export function createOrder(data) {
  return post('/api/order', data);
}

// index.js
export * as orderApi from './order';
```

## ⚙️ 环境配置

修改 `config.js` 中的 `baseURL` 来适配不同环境：

```javascript
const config = {
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://api.production.com' 
    : 'http://localhost:3600',
  // ...
};
```

## 🎯 最佳实践

1. **优先使用模块化 API**：`userApi.login()` 比直接调用 `post()` 更清晰
2. **统一错误处理**：在组件层面或全局拦截器中处理错误
3. **合理使用 loading 状态**：异步请求时显示加载状态
4. **Token 管理**：登录后保存 token，退出时清除
5. **参数验证**：在调用 API 前验证必要参数

## 🔗 相关文档

- [Fetch API MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)
- [Vue 3 文档](https://cn.vuejs.org/)
