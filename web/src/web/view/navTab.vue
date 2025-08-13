<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="(item, index) in routerList"
      :key="index"
      :index="item.path"
      >{{ item.name }}</el-menu-item
    >
  </el-menu>
</template>

<script setup>
import { ref, reactive, watch } from "vue";
import { useRouter, useRoute } from "_router/config.js";
import { routerListConfig } from "@/web/assets";
const router = useRouter();
const route = useRoute();
const routerList = reactive(routerListConfig);
const activeIndex = ref("home");

// 初始化时根据当前路由设置activeIndex
const initActiveIndex = () => {
  if (route.name) {
    activeIndex.value = route.name;
  }
};

// 监听路由变化，同步更新activeIndex
watch(
  () => route.name,
  (newName) => {
    if (newName) {
      activeIndex.value = newName;
    }
  }
);

initActiveIndex();

const handleSelect = (path, keyPath) => {
  activeIndex.value = path;
  console.log(path, keyPath);
  router.push({
    name: path,
  });
};
</script>
