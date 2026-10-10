import { get, post, put, del } from './request';

/**
 * 用户相关 API
 */

// 用户登录
export function login(data) {
  return post('/api/login', data);
}

// 用户注册
export function register(data) {
  return post('/api/register', data);
}

// 根据用户名获取用户信息
export function getUserByUsername(username) {
  return get(`/api/user/${username}`);
}

// 获取用户列表
export function getUserList(params) {
  return get('/api/user/list', params);
}

// 根据 ID 获取用户
export function getUserById(id) {
  return get(`/api/user/${id}`);
}

// 创建用户
export function createUser(data) {
  return post('/api/user', data);
}

// 更新用户
export function updateUser(id, data) {
  return put(`/api/user/${id}`, data);
}

// 删除用户
export function deleteUser(id) {
  return del(`/api/user/${id}`);
}

// 退出登录
export function logout() {
  return post('/api/user/logout');
}

// 修改密码
export function changePassword(data) {
  return post('/api/user/change-password', data);
}

// 更新用户资料
export function updateProfile(data) {
  return put('/api/user/profile', data);
}
