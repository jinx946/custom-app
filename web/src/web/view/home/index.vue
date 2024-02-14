<template>
  <div class="home">
    首页
    <el-button class="btn" @click="increment">Count is: {{ count }}</el-button>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const count = ref(0);
function increment() {
  count.value++;
}
onMounted(() => {
  console.log(`The initial count is ${count.value}.`);
});
</script>
<style lang="less">
.home{
height: 100%;
}
</style>

