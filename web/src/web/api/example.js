/**
 * API 使用示例
 */

import { userApi, prodApi, get, post } from './index';

// ==========================================
// 示例 1: 使用模块化 API（推荐）
// ==========================================

// 用户登录
async function handleLogin() {
  try {
    const result = await userApi.login({
      username: 'admin',
      password: '123456'
    });
    console.log('登录成功:', result);
    // 保存 token
    localStorage.setItem('token', result.token);
  } catch (error) {
    console.error('登录失败:', error.message);
  }
}

// 获取用户列表
async function loadUserList() {
  try {
    const users = await userApi.getUserList({
      page: 1,
      pageSize: 10
    });
    console.log('用户列表:', users);
  } catch (error) {
    console.error('获取用户列表失败:', error.message);
  }
}

// 创建产品
async function createNewProduct() {
  try {
    const product = await prodApi.createProduct({
      name: '测试产品',
      price: 99.99,
      category: '电子产品'
    });
    console.log('产品创建成功:', product);
  } catch (error) {
    console.error('创建产品失败:', error.message);
  }
}

// ==========================================
// 示例 2: 直接使用 HTTP 方法
// ==========================================

// GET 请求
async function fetchData() {
  try {
    const data = await get('/api/custom/endpoint', { id: 1 });
    console.log('数据:', data);
  } catch (error) {
    console.error('请求失败:', error.message);
  }
}

// POST 请求
async function submitData() {
  try {
    const result = await post('/api/custom/submit', {
      name: 'test',
      value: 123
    });
    console.log('提交成功:', result);
  } catch (error) {
    console.error('提交失败:', error.message);
  }
}

// ==========================================
// 示例 3: 在 Vue 组件中使用
// ==========================================

/*
<template>
  <div>
    <el-button @click="loadUsers">加载用户</el-button>
    <el-table :data="users">
      <el-table-column prop="username" label="用户名" />
    </el-table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { userApi } from '@/web/api';

const users = ref([]);

const loadUsers = async () => {
  try {
    users.value = await userApi.getUserList({ page: 1, pageSize: 10 });
  } catch (error) {
    ElMessage.error('加载失败: ' + error.message);
  }
};
</script>
*/

export {
  handleLogin,
  loadUserList,
  createNewProduct,
  fetchData,
  submitData
};
