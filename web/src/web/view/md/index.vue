<template>
  <div class="md-model">
    <div class="md-form">
      <a-form layout="inline" :model="formData" name="basic">
        <a-form-item label="级别" name="level">
          <a-input
            v-model:value="formData.level"
            type="textarea"
            rows="2"
            placeholder=""
          />
        </a-form-item>

        <a-form-item label="标题" name="title">
          <a-input v-model:value="formData.title" />
        </a-form-item>
        <a-form-item label="内容" name="content">
          <a-input
            v-model:value="formData.content"
            type="textarea"
            rows="2"
            placeholder=""
          />
        </a-form-item>
      </a-form>
      <a-button @click="handleAdd">生成</a-button>
    </div>
    <div class="md-preview">
      <div ref="textRef" class="md-preview-content">
        <div class="markdown-body" v-html="text" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import hljs from "highlight.js";
import { message } from "ant-design-vue/lib";
import { useClipboard } from "@vueuse/core";
import MarkdownIt from "markdown-it";
import mdKatex from "@traptitech/markdown-it-katex";
import mila from "markdown-it-link-attributes";

const { copy } = useClipboard();
const mdi = new MarkdownIt({
  linkify: true,
  highlight(code, language) {
    const validLang = !!(language && hljs.getLanguage(language));
    if (validLang) {
      const lang = language ?? "";
      return highlightBlock(
        hljs.highlight(code, { language: lang }).value,
        lang
      );
    }
    return highlightBlock(hljs.highlightAuto(code).value, "");
  },
});
mdi.use(mila, { attrs: { target: "_blank", rel: "noopener" } });
mdi.use(mdKatex, {
  blockClass: "katexmath-block rounded-md p-[10px]",
  errorColor: " #cc0000",
});

const text = computed(() => {
  const value = "md/n";
  return mdi.render(value);
  //   return value;
});
function highlightBlock(str, lang) {
  return `<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${lang}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${lang}">${str}</code></pre>`;
}

const formData = ref({
  level: 1,
  id: "0",
  title: "",
  content: "",
  parentId: "0",
});
const mdTree = ref({
  parentId: "0", //父节点ID
  id: "0", //当前 节点ID
  level: 1, //当前 节点级别
  title: "knowledge", //当前 节点标题
  content: [], //当前 节点内容
  children: [], //子节点
  isLeaf: true, //是否叶子节点
  isExpand: false, //是否展开
  isEdit: false, //是否编辑状态
});
const parentIdOptions = ref([]);
const idOptions = ref([]);

const addNode = (parent) => {
  const node = formData.value;
  // Function to add a new node to the tree
  if (!node || !node.title) return;
  const newNode = {
    id: Date.now(), // Generate a unique ID
    title: node.title,
    content: node.content || [],
    parentId: node.parentId || 0,
    level: node.level || 1,
  };
  parent.children.push(newNode);
  formData.value = {
    level: 1,
    id: 0,
    title: "",
    content: "",
    parentId: 0,
  };
};
const handleAdd = () => {
  const { parentId } = formData.value;
  parentList = parentId.split("-");
  // function

  addNode();
};
const setIdOptions = () => {
  idOptions.value = [];
};

onMounted(() => {
  // Initialize or fetch data if needed
});
</script>
<style scoped lang="less">
.md-model {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .md-form {
    height: 300px;
  }
  .md-preview {
    height: calc(100% - 300px);
    overflow-y: auto;
    padding: 10px;
    background-color: #f5f5f5;
  }
}
</style>
