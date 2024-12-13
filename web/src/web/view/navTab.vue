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
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "_router/config.js";
import { routerListConfig } from "@/web/assets";
const router = useRouter();
const routerList = reactive(routerListConfig);
const activeIndex = ref("home");
const handleSelect = (path, keyPath) => {
  activeIndex.value = path;
  console.log(path, keyPath);
  router.push({
    name: path,
  });
};
</script>
