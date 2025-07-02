<script setup>
import { onBeforeMount, reactive, ref } from "vue";
</script>

<template>
  <div class="test-demo">
    <div class="test-demo-container-1">
      层级1
      <div class="test-demo-container-1-1">
        层级3 <button type="button">按钮</button>
      </div>
    </div>

    <div class="test-demo-container-2">层级2</div>
  </div>
</template>
<style scoped lang="less">
.test-demo {
  position: relative;
  width: 300px;
  height: 300px;
  color: #fff;
  .test-demo-container-1 {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #409eff;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    top: 50px;
    left: 50px;
    z-index: 1;
  }
  .test-demo-container-1-1 {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #67c23a;
    // border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 7;
  }
  .test-demo-container-2 {
    position: absolute;
    width: 100%;
    height: 90%;
    background-color: #f56c6c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    z-index: 0;
  }
}
</style>
