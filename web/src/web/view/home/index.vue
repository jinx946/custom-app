<template>
  <div class="home">
    首页

    <!-- <el-button
      v-for="(item, index) in routerList"
      :key="index"
      class="btn"
      @click="routerGo(item.path)"
      >{{ item.name }}</el-button
    > -->
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter, useRoute } from '_router/config.js';
const router = useRouter();

const routerList = reactive([
  { name: 'threeDemo', path: 'three' },
  { name: 'cesiumDemo', path: 'cesium' },
]);
const count = ref(0);
function increment() {
  count.value++;
}
function routerGo(path) {
  console.log('path: ', path);
  router.push({
    name: path,
  });
}
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>
<style lang="less">
.home {
  height: 100%;
}
</style>
