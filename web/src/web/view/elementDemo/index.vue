<template>
  <div class="element-demo">
    <div class="demo-header">
      <h1>Element Demo</h1>
      <p>Explore various Element UI components in this demo.</p>
    </div>
    <div class="demo-content">
      <el-button type="primary">Primary Button</el-button>
      <el-input placeholder="Type something..." />
      <el-select v-model="value" placeholder="Select" multiple>
        <el-option label="Option A" value="A"></el-option>
        <el-option label="Option B" value="B"></el-option>
        <el-option label="Option C" value="C"></el-option>
      </el-select>
      <el-select
        v-model="list"
        multiple
        filterable
        placeholder="Select an option"
        popper-class="custom-popper"
        :filter-method="filterMethod"
        @change="handleChange"
      >
        <el-option
          v-for="(item, index) in filterOptions"
          :value="item.value"
          :key="index"
        >
          <div class="box">
            <span> <el-checkbox v-model="item.checked"></el-checkbox> </span>
            <span>{{ item.label }}</span>
            <span class="close" @click.stop="remove(item, index)">X</span>
          </div>
        </el-option>
        <template #empty>
          <div>
            <div>没数据</div>
          </div>
        </template>
        <template #footer>
          <div>
            <div @click="add">button1</div>
          </div>
        </template>
      </el-select>
    </div>
  </div>
</template>
<script setup>
import { nextTick, ref, watch } from "vue";
const list = ref(["1"]);
const value = ref([]);
const optionsList = ref([
  { label: "Option 1", value: "1", checked: false },
  { label: "Option 2", value: "2", checked: false },
  { label: "Option 3", value: "3", checked: false },
]);
const filterOptions = ref([
  { label: "Option 1", value: "1", checked: false },
  { label: "Option 2", value: "2", checked: false },
  { label: "Option 3", value: "3", checked: false },
]);
const remove = (item, index) => {
  optionsList.value.splice(index, 1);
  list.value = list.value.filter((val) => val !== item.value);
};
const addLabel = ref("");
const filterMethod = (query) => {
  console.log(query, 111);
  addLabel.value = query;
  filterOptions.value = optionsList.value.filter((item) => {
    return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
};
const add = () => {
  const value = "a" + addLabel.value + new Date().getTime();
  optionsList.value.push({
    label: addLabel.value,
    value: value,
    checked: true,
  });
  filterOptions.value.push({
    label: addLabel.value,
    value: value,
    checked: true,
  });
  list.value.push(value);
};
watch(
  list,
  (newVal) => {
    setTimeout(() => {
      optionsList.value.forEach((item) => {
        if (!item.checked && newVal.includes(item.value)) {
          item.checked = true;
        }
      });
    }, 300);
  },
  {
    immediate: true,
  }
);
const handleChange = (val) => {
  console.log("Selected values:", val);
};
</script>
<style lang="less" scoped>
.elment-demo {
  width: 100%;
  height: 100%;
}
.demo-content {
  width: 300px;
  padding: 20px;
  overflow: hidden;
}
.box {
  width: 100%;
  position: relative;
}
.close {
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 1;
  right: -10px;
}
.custom-popper {
  .el-select-dropdown.is-multiple .el-select-dropdown__item.is-selected::after {
    display: none;
  }
}
</style>
