<template>
  <div class="transform-container">
    <h2>JSON 数据转换与清洗工具</h2>

    <!-- 输入区域 -->
    <div class="input-section">
      <label for="json-input">请输入 JSON 数据：</label>
      <textarea
        id="json-input"
        v-model="inputJson"
        placeholder='请粘贴 JSON 数据，例如：{"name": "test", "data": {...}}'
        rows="15"
        cols="80"
      ></textarea>
    </div>

    <!-- 操作按钮 -->
    <div class="button-section">
      <el-button type="primary" @click="handleTransform" :loading="processing">
        转换并清洗
      </el-button>
      <el-button @click="clearAll">清空</el-button>
      <el-button @click="copyResult" v-if="outputJson">复制结果</el-button>
    </div>

    <!-- 清洗配置 -->
    <div class="clean-config-section">
      <label for="remove-fields">删除字段列表（用英文逗号分隔）：</label>
      <input
        id="remove-fields"
        v-model="removeFieldsInput"
        placeholder="例如: field1, field2, field3"
        class="config-input"
      />
      <div class="config-options">
        <el-checkbox v-model="removeEmpty">移除空值字段</el-checkbox>
        <el-checkbox v-model="removeInVisible">移除 inVisible 字段</el-checkbox>
        <el-checkbox v-model="removeNotEditable"
          >移除 notEditable 字段</el-checkbox
        >
      </div>
    </div>

    <!-- 输出区域 -->
    <div class="output-section" v-if="outputJson">
      <label>转换结果：</label>
      <pre class="output-json">{{ formattedOutput }}</pre>
    </div>

    <!-- 错误提示 -->
    <div class="error-section" v-if="errorMessage">
      <el-alert
        title="错误"
        :description="errorMessage"
        type="error"
        show-icon
        closable
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { ElMessage } from "element-plus";
import { transformMethodJson } from "./transform.js";
import { cleanFields } from "./clean.js";
import method1Json from "./mock/method1.json";

// 输入数据
const inputJson = ref("");
inputJson.value = JSON.stringify(method1Json);

// 输出数据
const outputJson = ref(null);

// 处理状态
const processing = ref(false);

// 错误信息
const errorMessage = ref("");

// 清洗配置
const removeFieldsInput = ref("");
const list = ref([]);
list.value = [
  "position",
  "visible",
  "type",
  "typeCd",
  "customConfig",
  "_X_ROW_KEY",
  "version",
  "variableList",
  "dataSourceList",
  "activityNameList",
  "runtime XML",
  "inVisible",
  "notEditable",
  "validation",
  "apiVersion",
  "destinationDataSource",
  "destinationDataSourcePath",
  "sourceVariable",
  "sourceDataSource",
  "sourceDataSourcePath",
  "setupSchema",
];
removeFieldsInput.value = list.value.join(",");
const removeEmpty = ref(false);
const removeInVisible = ref(false);
const removeNotEditable = ref(false);

// 格式化输出
const formattedOutput = computed(() => {
  if (!outputJson.value) return "";
  return JSON.stringify(outputJson.value, null, 2);
});

// 执行转换和清洗
const handleTransform = () => {
  errorMessage.value = "";
  outputJson.value = null;

  // 验证输入
  if (!inputJson.value.trim()) {
    errorMessage.value = "请输入 JSON 数据";
    return;
  }

  // 解析 JSON
  let rawData;
  try {
    rawData = JSON.parse(inputJson.value);
  } catch (e) {
    errorMessage.value = `JSON 格式错误: ${e.message}`;
    return;
  }

  processing.value = true;

  try {
    // 第一步：使用 transform.js 进行转换
    console.log("开始转换...");
    const transformed = transformMethodJson(rawData);
    console.log("转换完成:", transformed);

    // 第二步：使用 clean.js 进行清洗
    // 解析删除字段列表
    const removeFieldsList = removeFieldsInput.value
      .split(",")
      .map((field) => field.trim())
      .filter((field) => field.length > 0);

    // 配置清洗选项
    const cleaned = cleanFields(transformed, [], removeFieldsList, {
      removeEmpty: removeEmpty.value,
      removeInVisible: removeInVisible.value,
      removeNotEditable: removeNotEditable.value,
    });
    console.log("清洗完成:", cleaned);

    outputJson.value = cleaned;

    ElMessage.success("转换和清洗成功！");
  } catch (e) {
    errorMessage.value = `处理失败: ${e.message}`;
    console.error("处理错误:", e);
  } finally {
    processing.value = false;
  }
};

// 清空所有数据
const clearAll = () => {
  inputJson.value = "";
  outputJson.value = null;
  errorMessage.value = "";
  removeFieldsInput.value = "";
  removeEmpty.value = true;
  removeInVisible.value = true;
  removeNotEditable.value = true;
};

// 复制结果到剪贴板
const copyResult = async () => {
  if (!outputJson.value) return;

  try {
    await navigator.clipboard.writeText(formattedOutput.value);
    ElMessage.success("已复制到剪贴板");
  } catch (e) {
    ElMessage.error("复制失败");
  }
};
</script>

<style lang="less" scoped>
.transform-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
  h2 {
    margin-bottom: 20px;
    color: #333;
  }

  .input-section,
  .output-section {
    margin-bottom: 20px;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: #666;
    }

    textarea {
      width: 100%;
      padding: 12px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      font-family: "Courier New", monospace;
      font-size: 14px;
      resize: vertical;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: #409eff;
      }
    }
  }

  .button-section {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
  }

  .clean-config-section {
    margin-bottom: 20px;
    padding: 16px;
    background-color: #f5f7fa;
    border-radius: 4px;
    border: 1px solid #dcdfe6;

    label {
      display: block;
      margin-bottom: 8px;
      font-weight: bold;
      color: #666;
    }

    .config-input {
      width: 100%;
      padding: 10px 12px;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      font-size: 14px;
      transition: border-color 0.3s;

      &:focus {
        outline: none;
        border-color: #409eff;
      }
    }

    .config-options {
      margin-top: 12px;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }

  .output-section {
    .output-json {
      background-color: #f5f7fa;
      padding: 16px;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      overflow-x: auto;
      font-family: "Courier New", monospace;
      font-size: 14px;
      line-height: 1.6;
      max-height: 500px;
      overflow-y: auto;
    }
  }

  .error-section {
    margin-top: 20px;
  }
}
</style>
