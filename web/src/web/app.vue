<template>
  <div class="mian">
    <router-view></router-view>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const count = ref(0);
const themeList=[{
back:'',


},{}]
function increment() {
  count.value++;
}
function changetheme(theme){
document.documentElement.style.setProperty('--back', '#ccc');

}
onMounted(() => {
});
</script>
<style>
.main {
  width: 100%;
  height: 100%;
}
</style>
<style lang="less">
</style>
