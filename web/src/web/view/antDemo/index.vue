<script setup>
import { onBeforeMount, reactive, ref, h } from "vue";
import { SearchOutlined } from "@ant-design/icons-vue";
const blockContent = "整块文档";
</script>

<template>
  <div class="ant">
    <a-button type="primary" :icon="h(SearchOutlined)"
      >带图标的普通按钮</a-button
    >
    <a-typography>
      <a-typography-title>默认一级标题</a-typography-title>
      <a-typography-paragraph> 段落一 </a-typography-paragraph>
      <a-typography-paragraph>
        段落二
        <a-typography-text strong> 粗体 </a-typography-text>
      </a-typography-paragraph>
      <a-typography-title :level="2">二级标题</a-typography-title>
      <a-typography-paragraph>
        代码块标记(
        <a-typography-text code>code1</a-typography-text>
        and
        <a-typography-text code>code2</a-typography-text>
        )
      </a-typography-paragraph>

      <a-typography-paragraph>
        <ul>
          <li>
            <a-typography-link href="/#/home">a标签 超链接</a-typography-link>
          </li>
        </ul>
      </a-typography-paragraph>

      <a-typography-paragraph>
        <a-typography-text mark>mark标记</a-typography-text>
      </a-typography-paragraph>
      <a-typography-paragraph>
        <blockquote>{{ blockContent }}</blockquote>
        <pre>{{ blockContent }}</pre>
      </a-typography-paragraph>
    </a-typography>
    <a-divider orientation="left">分割线 居左</a-divider>
    <span>分割线垂直</span><a-divider type="vertical"></a-divider
    ><span>分割线垂直</span>
    
  </div>
</template>
<style scoped lang="less">
.ant {
  padding: 20px;
  background: #fff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>
