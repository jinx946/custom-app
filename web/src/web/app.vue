<template>
  <navTab />
  <div class="mian">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import navTab from './view/navTab.vue';
const count = ref(0);
const themeList = [
  {
    back: '',
  },
  {},
];
function increment() {
  count.value++;
}
function changetheme(theme) {
  document.documentElement.style.setProperty('--back', '#ccc');
}
onMounted(() => {});
</script>
<style>
.main {
  width: 100%;
  height: 100%;
}
</style>
<style lang="less">
.mian {
  width: 100%;
  height: calc(100% - 60px);
  background: #fff;
}
</style>
