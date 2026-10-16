<template>
  <div class="monaco-editor-demo">
    <div class="editor-header">
      <h1>Monaco Editor 代码编辑器</h1>
      <div class="editor-controls">
        <el-select v-model="language" placeholder="选择语言" style="width: 150px; margin-right: 10px">
          <el-option label="JavaScript" value="javascript" />
          <el-option label="TypeScript" value="typescript" />
          <el-option label="Python" value="python" />
          <el-option label="Java" value="java" />
          <el-option label="HTML" value="html" />
          <el-option label="CSS" value="css" />
          <el-option label="JSON" value="json" />
          <el-option label="SQL" value="sql" />
          <el-option label="Markdown" value="markdown" />
        </el-select>
        <el-button type="primary" @click="getCode">获取代码</el-button>
        <el-button @click="setCode">设置示例代码</el-button>
        <el-button @click="clearCode">清空</el-button>
      </div>
    </div>
    <div class="editor-container">
      <div id="monaco-container" ref="editorContainer"></div>
    </div>
    <div class="editor-info" v-if="codeInfo">
      <h3>代码信息：</h3>
      <pre>{{ codeInfo }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as monaco from 'monaco-editor';

const editorContainer = ref(null);
const language = ref('javascript');
const codeInfo = ref('');
let editor = null;

// 初始化编辑器
const initEditor = () => {
  if (!editorContainer.value) return;

  editor = monaco.editor.create(editorContainer.value, {
    value: [
      'function helloWorld() {',
      '\tconsole.log("Hello, Monaco Editor!");',
      '\treturn "Welcome to custom-app";',
      '}',
      '',
      '// 这是一个示例代码',
      'helloWorld();'
    ].join('\n'),
    language: language.value,
    theme: 'vs-dark', // 主题：vs, vs-dark, hc-black
    automaticLayout: true, // 自动调整大小
    minimap: {
      enabled: true // 显示缩略图
    },
    fontSize: 14,
    lineNumbers: 'on', // 显示行号
    roundedSelection: true,
    scrollBeyondLastColumn: 0,
    readOnly: false,
    wordWrap: 'on',
    tabSize: 2,
    insertSpaces: true,
    detectIndentation: true,
    formatOnPaste: true,
    formatOnType: true
  });

  // 监听内容变化
  editor.onDidChangeModelContent(() => {
    console.log('代码已更改');
  });
};

// 获取当前代码
const getCode = () => {
  if (editor) {
    const value = editor.getValue();
    codeInfo.value = value;
    console.log('当前代码:', value);
  }
};

// 设置示例代码
const setCode = () => {
  if (editor) {
    const sampleCode = {
      javascript: [
        'function fibonacci(n) {',
        '\tif (n <= 1) return n;',
        '\treturn fibonacci(n - 1) + fibonacci(n - 2);',
        '}',
        '',
        'console.log(fibonacci(10));'
      ].join('\n'),
      python: [
        'def fibonacci(n):',
        '\tif n <= 1:',
        '\t\treturn n',
        '\treturn fibonacci(n - 1) + fibonacci(n - 2)',
        '',
        'print(fibonacci(10))'
      ].join('\n'),
      java: [
        'public class Fibonacci {',
        '\tpublic static int fibonacci(int n) {',
        '\t\tif (n <= 1) return n;',
        '\t\treturn fibonacci(n - 1) + fibonacci(n - 2);',
        '\t}',
        '',
        '\tpublic static void main(String[] args) {',
        '\t\tSystem.out.println(fibonacci(10));',
        '\t}',
        '}'
      ].join('\n'),
      html: [
        '<!DOCTYPE html>',
        '<html lang="zh-CN">',
        '<head>',
        '\t<meta charset="UTF-8">',
        '\t<title>Monaco Editor Demo</title>',
        '</head>',
        '<body>',
        '\t<h1>Hello World</h1>',
        '</body>',
        '</html>'
      ].join('\n'),
      css: [
        '.container {',
        '\tdisplay: flex;',
        '\tjustify-content: center;',
        '\talign-items: center;',
        '\theight: 100vh;',
        '\tbackground: linear-gradient(135deg, #667eea 0%, #764ba2 100%);',
        '}'
      ].join('\n'),
      json: [
        '{',
        '\t"name": "custom-app",',
        '\t"version": "1.0.0",',
        '\t"description": "A custom application",',
        '\t"dependencies": {',
        '\t\t"vue": "^3.3.8",',
        '\t\t"monaco-editor": "^0.57.0"',
        '\t}',
        '}'
      ].join('\n'),
      sql: [
        'SELECT u.name, u.email, COUNT(o.id) as order_count',
        'FROM users u',
        'LEFT JOIN orders o ON u.id = o.user_id',
        'WHERE u.created_at > "2024-01-01"',
        'GROUP BY u.id, u.name, u.email',
        'ORDER BY order_count DESC;'
      ].join('\n'),
      markdown: [
        '# Monaco Editor Demo',
        '',
        '## Features',
        '- Syntax highlighting',
        '- Auto-completion',
        '- Code formatting',
        '- Multiple languages support',
        '',
        '```javascript',
        'console.log("Hello World");',
        '```'
      ].join('\n')
    };

    const code = sampleCode[language.value] || sampleCode.javascript;
    editor.setValue(code);
  }
};

// 清空代码
const clearCode = () => {
  if (editor) {
    editor.setValue('');
    codeInfo.value = '';
  }
};

// 监听语言变化
const watchLanguage = (newLang) => {
  if (editor) {
    const model = editor.getModel();
    monaco.editor.setModelLanguage(model, newLang);
    setCode(); // 切换语言时设置对应的示例代码
  }
};

onMounted(() => {
  initEditor();
  
  // 监听语言变化
  import('vue').then(({ watch }) => {
    watch(language, watchLanguage);
  });
});

onBeforeUnmount(() => {
  if (editor) {
    editor.dispose();
  }
});
</script>

<style lang="less" scoped>
.monaco-editor-demo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #f5f5f5;
}

.editor-header {
  margin-bottom: 20px;

  h1 {
    margin: 0 0 15px 0;
    font-size: 24px;
    color: #333;
  }

  .editor-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }
}

.editor-container {
  flex: 1;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;

  #monaco-container {
    width: 100%;
    height: 100%;
    min-height: 400px;
  }
}

.editor-info {
  margin-top: 20px;
  padding: 15px;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-radius: 4px;

  h3 {
    margin: 0 0 10px 0;
    font-size: 16px;
    color: #333;
  }

  pre {
    margin: 0;
    padding: 10px;
    background: #f5f7fa;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 13px;
    line-height: 1.6;
    color: #606266;
    max-height: 200px;
  }
}
</style>
