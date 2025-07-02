<template>
  <div class="form-input">
    <el-form ref="formRef" :model="form" inline label-width="auto">
      <el-row>
        <el-col :span="12">
          <el-form-item label="随机生成">
            <el-radio-group v-model="form.randomNum" @change="randomNumChange">
              <el-radio :label="'1'" :value="'1'">根据选择生成</el-radio>
              <el-radio :label="'2'" :value="'2'">根据输入生成</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="12"> </el-col>
      </el-row>
      <el-row>
        <el-col :span="12" v-if="form.randomNum === '1'">
          <el-form-item label="字段">
            <el-select
              v-model="form.fieldList"
              multiple
              filterable
              allow-create
              :reserve-keyword="false"
              placeholder="生成字段"
              style="width: 240px"
              @change="fieldListChange"
            >
              <el-option
                v-for="item in fieldListOps"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <div
                  class="select-item"
                  style="
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <span>{{ item.label }}</span>
                  <div>
                    <span style="display: inline-block; margin-right: 10px">
                      <!-- {{ item.id }} -->
                    </span>

                    <el-icon
                      style="
                        font-size: 16px;
                        display: inline-block;
                        vertical-align: text-bottom;
                      "
                      @click.stop="removeItem(item, 'fieldList')"
                    >
                      <Close />
                    </el-icon>
                  </div>
                </div>
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12" v-if="form.randomNum === '2'">
          <el-form-item label="输入内容">
            <el-input
              v-model="form.inputStr"
              style="width: 100%"
              :rows="2"
              type="textarea"
              placeholder=""
            />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="12" v-if="form.randomNum === '2'">
          <el-form-item label="分割字段">
            <el-input v-model="form.defaultSplit" placeholder="以逗号分割" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="生成数量array">
            <el-input-number v-model="form.num" :min="1" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" v-if="form.randomNum === '1'">
          <com-table :column-data="columnData" :table-data="fieldTableData">
            <template #value="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">
                  <el-input
                    v-model="scope.row.value"
                    style="width: 100%"
                    placeholder=""
                  />
                </span>
              </div>
            </template>
            <template #increasing="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">
                  <el-switch v-model="scope.row.increasing" />
                </span>
              </div>
            </template>
          </com-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="生成内容">
            <el-input
              v-model="form.output"
              style="width: 100%"
              :rows="6"
              type="textarea"
              placeholder=""
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="generate">生成</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive, defineExpose, nextTick } from "vue";
import { ElMessage } from "element-plus";
import comTable from "../../../components/comTable.vue";
import { fieldStore } from "@/web/utils/store.js";
const formRef = ref();
const radio = ref(9);
const form = ref({
  dataType: "",
  fieldList: [],
  num: 1,
  output: "",
  randomNum: "1",
  inputStr: "",
  defaultSplit: ",",
});
const columnData = reactive([
  {
    prop: "index",
    label: "序号",
    width: "100",
  },
  {
    prop: "label",
    label: "字段",
    width: "200",
  },
  {
    type: "custom",
    prop: "value",
    label: "值",
    width: "200",
  },
  {
    type: "custom",
    prop: "increasing",
    label: "是否自增",
    width: "200",
  },
]);
const fieldTableData = ref([]);
const dataTypeOps = ref([]);
const fieldListOps = ref([]);
const dataTypeRef = ref();
dataTypeOps.value = fieldStore.dataTypeList;
fieldListOps.value = fieldStore.fieldList;
function randomNumChange(value) {
  console.log("value: ", value);
}
function dataTypeChange(value) {
  if (!value) {
    return;
  }
  const data = dataTypeOps.value.find((item) => item.value === value);
  if (!data) {
    const id = new Date().getTime() + "";
    const newData = { value: value, label: value, id };
    fieldStore.editItem("dataTypeList", newData, id);
  }
}
function fieldListChange(value) {
  if (!value) {
    return;
  }
  if (value.length) {
    value.forEach((child) => {
      const data = fieldListOps.value.find((item) => item.value === child);
      if (!data) {
        const id = new Date().getTime() + "";
        const newData = { value: child, label: child, id };
        fieldStore.editItem("fieldList", newData, id);
      }
    });
  }
  setTableData(value);
}
function setTableData(value) {
  let tableData = [];
  value.forEach((item, index) => {
    const newItem = {
      index: index + 1,
      label: item,
      value: "",
      increasing: false,
    };
    tableData.push(newItem);
  });
  fieldTableData.value = tableData;
}
function removeItem(item, key) {
  dataTypeRef.value.blur();
  fieldStore.removeItem(key, item.id, "array");
}
function generate() {
  if (form.value.randomNum === "1") {
    const fieldList = fieldTableData.value;
    const fieldListObj = {};
    fieldList.forEach((item) => {
      fieldListObj[item.label] = { ...item };
    });
    let newData = {};
    fieldList.forEach((item) => {
      newData[item.label] = item.value;
    });
    let obj1 = JSON.stringify(newData);
    let newArray = [];
    for (let i = 0; i < form.value.num; i++) {
      let arrItem = {};
      fieldList.forEach((item) => {
        if (item.increasing) {
          arrItem[item.label] = (item.value || "") + "" + (i + 1);
        } else {
          arrItem[item.label] = item.value || "";
        }
      });
      newArray.push(arrItem);
    }
    let str = obj1 + "\n\n" + JSON.stringify(newArray);
    form.value.output = str;
  } else {
    let list = form.value.inputStr.split(form.value.defaultSplit);
    let empty = {};
    let newData2 = {};
    let newData3 = {};
    list.forEach((item, index) => {
      empty[item] = "";
      newData2[item] = index;
      newData3[index + 1] = item;
    });
    let num = form.value.num;
    let arrList = [];
    while (num) {
      arrList.push(empty);
      num--;
    }
    let str =
      JSON.stringify(list) +
      "\n\n" +
      JSON.stringify(arrList) +
      "\n\n" +
      JSON.stringify(newData2) +
      "\n\n" +
      JSON.stringify(newData3) +
      "\n";
    form.value.output = str;
  }
}
defineExpose({
  formRef,
});
</script>
<style lang="scss" scoped>
.form-input {
  width: 100%;
  height: 100%;
  padding: 20px;
}

.el-form-item {
  width: 100%;
}
</style>
