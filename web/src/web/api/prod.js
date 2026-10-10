import { get, post, put, del } from './request';

/**
 * 产品相关 API
 */

// 获取产品列表
export function getProductList(params) {
  return get('/api/prod/list', params);
}

// 根据 ID 获取产品
export function getProductById(id) {
  return get(`/api/prod/${id}`);
}

// 创建产品
export function createProduct(data) {
  return post('/api/prod', data);
}

// 更新产品
export function updateProduct(id, data) {
  return put(`/api/prod/${id}`, data);
}

// 删除产品
export function deleteProduct(id) {
  return del(`/api/prod/${id}`);
}

// 批量删除产品
export function batchDeleteProducts(ids) {
  return post('/api/prod/batch-delete', { ids });
}

// 搜索产品
export function searchProducts(keyword, params = {}) {
  return get('/api/prod/search', { keyword, ...params });
}

// 获取产品分类
export function getProductCategories() {
  return get('/api/prod/categories');
}

// 获取产品详情
export function getProductDetail(id) {
  return get(`/api/prod/detail/${id}`);
}

// 上架产品
export function publishProduct(id) {
  return post(`/api/prod/${id}/publish`);
}

// 下架产品
export function unpublishProduct(id) {
  return post(`/api/prod/${id}/unpublish`);
}

// 获取产品库存
export function getProductStock(id) {
  return get(`/api/prod/${id}/stock`);
}

// 更新产品库存
export function updateProductStock(id, data) {
  return put(`/api/prod/${id}/stock`, data);
}
