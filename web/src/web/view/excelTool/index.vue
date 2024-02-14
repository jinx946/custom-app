<template>
  <div class="excel-tool">
    <div class="excel-tool-title">
      <span class="page-title">excel表格工具</span>
      <el-popover placement="bottom" :title="title" :width="400" trigger="hover" :content="cotent">
        <template #reference>
          <el-button type="danger" :icon="QuestionFilled" link></el-button>
        </template>
      </el-popover>
    </div>
    <div class="excel-tool-top">
      <div class="excel-options">
        <span class="excel-options-title m-r-20">数据源</span>
        <el-button class="excel-options-add" type="primary" @click="add">增加</el-button>
        <el-form class="form-box" ref="formRef" :model="form" label-width="120px">
          <div class="form-item" v-for="(item, index) in optionsList" :key="index">
            <el-form-item :label="'' + (index + 1)">
              <el-select
                style="width: 80px"
                v-model="item.type"
                placeholder="数据类型"
                class="m-r-10"
              >
                <el-option
                  v-for="child in typeOption"
                  :key="child.value"
                  :label="child.label"
                  :value="child.value"
                >
                </el-option>
              </el-select>
              <el-input
                v-model="form[item.label]"
                style="width: 120px"
                placeholder="数据名称"
                class="m-r-10"
              ></el-input>
              <el-input
                v-if="item.type === 'string'"
                v-model="form[item.value]"
                style="width: 120px"
                placeholder="文本"
              ></el-input>
              <el-input-number
                v-else
                placeholder="数值"
                v-model="form[item.value]"
                class="m-r-10"
              ></el-input-number>
              <el-button style="margin-left: 20px" type="danger" @click="deleteItem(index)"
                >清空</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
      <div class="excel-operations">
        <span class="excel-operation-title m-r-20">表头设置</span>
        <el-button class="excel-operation-add" type="primary" @click="addOperations"
          >增加</el-button
        >
        <el-form class="form-box" ref="form2Ref" :model="form2" label-width="120px">
          <div class="form-item" v-for="(item, index) in operationsList" :key="index">
            <el-form-item :label="'表头' + (index + 1)">
              <el-input
                v-model="form2[item.label]"
                style="width: 120px"
                placeholder="表头名称"
                class="m-r-10"
              ></el-input>
              <el-button :disabled="!form2[item.label]" class="m-2" @click="openDiolog(item)"
                >关联逻辑</el-button
              >
              <el-input
                v-if="item.type === 'string'"
                v-model="form2[item.value]"
                style="width: 120px"
                placeholder=""
                class="m-r-10"
              ></el-input>
              <el-input
                v-if="item.type === 'string'"
                v-model="form2[item.value]"
                disabled
                style="width: 120px"
                placeholder="输出字段值"
                class="m-r-10"
              ></el-input>
              <el-button style="margin-left: 20px" type="danger" @click="deleteOperations(index)"
                >清空</el-button
              >
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div style="margin: 20px 0">输出预览</div>
    <el-button class="excel-options-add" type="primary" @click="preview">预览</el-button>
    <el-button class="excel-options-add" @click="downloadExcel">下载</el-button>
    <div class="excel-table">
      <el-table :data="tableData" height="250" style="width: 100%">
        <el-table-column
          v-for="(item, index) in column"
          :key="index"
          :prop="item.prop"
          :label="item.label"
          :width="item.width || 120"
        />
      </el-table>
    </div>
    <el-drawer
      ref="drawerRef"
      v-model="dialogVisible"
      title="逻辑"
      :before-close="handleClose"
      direction="rtl"
      custom-class="popover-box"
      class="popover-box"
    >
      <div class="pernt-content">
        <div>进行表达式运算：+ - * / %(取余) ) ( 格式 {数据源.数据1}*100+10</div>
        <el-input
          v-model="nowOperate.operations"
          :rows="4"
          type="textarea"
          placeholder="逻辑表达式"
        />
        <div>校验输出</div>
        <el-button type="primary" @click="checkOperate"> 校验 </el-button>
        <strong>{{ nowCheckStr }}</strong>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
          <el-button type="primary" @click="submitOpe"> 确定 </el-button>
        </span>
      </template>
    </el-drawer>
  </div>
</template>
<script setup>
import { QuestionFilled, Plus } from '@element-plus/icons-vue';
import { ref, reactive, onMounted, onUnmounted, computed } from 'vue';
let keyIndex = 1,
  formKey = 2,
  operationsKeyIndex = 1,
  operationsFormKey = 2;
const count = ref(0);
const title = ref('说明');
const cotent = ref('左侧为单个数据，右侧进行逻辑关联及配置表头，下方生成预览表格');
const optionsList = reactive([
  {
    label: 'form_item_label_1',
    value: 'form_item_value_1',
    type: 'string',
  },
]);

const dialogVisible = ref(false);
const operationsList = reactive([
  {
    label: 'form_item_label_1',
    value: 'form_item_value_1',
    type: 'string',
    operations: '',
  },
]);
const form = reactive({
  form_item_label_1: '数据1',
  form_item_value_1: '11',
});
const form2 = reactive({
  form_item_label_1: '数据1',
  form_item_value_1: '1',
});
const typeOption = reactive([
  { label: '文本', value: 'string' },
  { label: '数字', value: 'number' },
]);
const tableData = reactive([{ index: '1' }, { index: '2' }]);
const column = reactive([{ label: '序号', prop: 'index' }]);
function deleteItem(index) {
  if (index === 0) {
    return;
  }
  optionsList.splice(index, 1);
}
function add() {
  let newLabel = `form_item_label_${formKey}`;
  let newValue = `form_item_value_${formKey}`;
  form[newLabel] = `数据${formKey}`;
  form[newValue] = '';
  optionsList.push({
    name: newLabel,
    value: newValue,
    type: 'string',
  });
  formKey++;
}
function addOperations() {
  let newLabel = `form_item_label_${operationsFormKey}`;
  let newValue = `form_item_value_${operationsFormKey}`;
  form2[newLabel] = `数据${operationsFormKey}`;
  form2[newValue] = '';
  operationsList.push({
    name: newLabel,
    value: newValue,
    type: 'string',
    operations: '',
  });
  operationsFormKey++;
}

function deleteOperations(index) {
  if (index === 0) {
    return;
  }
  operationsList.splice(index, 1);
}
let nowOperate = reactive({});
let nowCheckStr = ref('');
function preview() {}
function downloadExcel() {}
function submitOpe() {
  dialogVisible.value = false;
}
function handleClose(params) {
  dialogVisible.value = false;
}
function openDiolog(item) {
  nowOperate = item;
  nowCheckStr.value = '';
  dialogVisible.value = true;
}
function checkOperate() {
  let flag = true;
  let str = nowOperate.operations.replace(/{[u4e00-u9fa5_a-zA-Z0-9]*}/g, function (str) {
    const len = str.length;
    let oldStr = str.slice(1, len - 1);
    if (oldStr.startWith('数据源.')) {
      const val = lodStr.split('.')[1];

      return;
    }
    return oldStr;
  });

  //
  nowCheckStr.value = eval(str);
}
onMounted(() => {});
</script>
<style lang="less" scoped>
.excel-tool {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: var(--by-back);
  padding: 20px;
  &-title {
  }
  &-top {
    height: 500px;
    max-height: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background: var(--by-order-back);
    padding: 20px;
    .excel-options {
      width: calc(50% - 10px);
      height: 100%;
      overflow: hidden;
      margin-right: 20px;
      padding: 10px;
      background: var(--by-back);
      position: relative;
    }
    .excel-operations {
      width: calc(50% - 10px);
      height: 100%;
      overflow: hidden;
      padding: 10px;
      background: var(--by-back);
    }
    .form-box {
      height: calc(100% - 40px);
      overflow-x: hidden;
      overflow-y: auto;
      padding: 20px 0;
    }
  }
}
</style>
<style lang="less">
.popover-box {
  .pernt-content {
    .operation-list {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: center;
    }
    .operation-item {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-content: center;
    }
  }
}
</style>
