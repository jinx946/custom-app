<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="(item, index) in routerList" :key="index" :index="item.path">{{ item.name }}</el-menu-item>
    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
<el-menu-item index="2-1">item one</el-menu-item>
<el-menu-item index="2-2">item two</el-menu-item>
<el-menu-item index="2-3">item three</el-menu-item>
<el-sub-menu index="2-4">
  <template #title>item four</template>
  <el-menu-item index="2-4-1">item one</el-menu-item>
  <el-menu-item index="2-4-2">item two</el-menu-item>
  <el-menu-item index="2-4-3">item three</el-menu-item>
</el-sub-menu>
</el-sub-menu> -->
    <!-- <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item> -->
  </el-menu>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, useRoute } from '_router/config.js';
const router = useRouter();
const routerList = reactive([
  { name: '首页', path: 'home' },
  { name: 'threeDemo', path: 'three' },
  { name: 'cesiumDemo', path: 'cesium' },
  { name: '大文件上传', path: 'fileUpload' },
  // { name: '数据生成', path: 'excelTool' },
  { name: '字段处理', path: 'field' }
]);
const activeIndex = ref('home');
const handleSelect = (path, keyPath) => {
  activeIndex.value = path;
  console.log(path, keyPath);
  router.push({
    name: path,
  });
};
</script>
