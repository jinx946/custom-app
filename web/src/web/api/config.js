// API 基础配置
const config = {
  // 后端服务基础地址
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'http://localhost:3600' 
    : 'http://localhost:3600',
  
  // 请求超时时间（毫秒）
  timeout: 10000,
  
  // 默认请求头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

export default config;
