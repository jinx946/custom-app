// API 统一导出

// 请求方法
export { get, post, put, del, patch } from './request';
export { default as request } from './request';

// 用户模块
export * as userApi from './user';

// 产品模块
export * as prodApi from './prod';
