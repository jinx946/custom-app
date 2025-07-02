<script setup>
import * as echarts from "echarts";
import { read, writeFileXLSX, utils } from "xlsx";
import { onMounted, ref, reactive } from "vue";
import { mockData, mockTreeData } from "./mock";
import { AnalyzeUtils } from "./utils";
import { CloseOutlined } from "@ant-design/icons-vue";
let initOptions = {
  label: { show: true },
  type: "line",
  symbolSize: 10,
  // colorBy: "data",
};
let num = 1;
let TIME_LEN = 24 * 60 * 60 * 1000;
function _date(date) {
  return new Date(date).getTime();
}
function formatDate(date) {
  return new Date(date).format("yyyy-MM-dd");
}
let myChart = null;
const paramsData = reactive({
  fileList: [],
  dataList: [],
  treeData: [], // [],
  checkedKeys: [],
  expandedKeys: [],
  checkNode: [],
});
// chart
const chartOptions = {
  title: {
    text: "trend",
  },
  legend: {
    show: true,
  },
  tooltip: {},
  xAxis: {
    data: [],
  },
  axisPointer: {
    show: false,
  },
  yAxis: {},
  series: [
    {
      name: "趋势",
      type: "line",
      data: [],
    },
  ],
};
const formState = reactive({
  day: 10,
});
function readWorkbookFromLocalFile(file, callback) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = e.target.result;
    const workbook = read(data, { type: "buffer" });

    if (callback) callback(workbook);
  };
  reader.readAsArrayBuffer(file);
}
function readWorkbook(workbook) {
  const sheetNames = workbook.SheetNames; // 工作表名称集合
  const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
  const excelData = utils.sheet_to_json(worksheet);
  handleExcelData(excelData);
  // 输出导入的excel信息
}

// 设置trend
function handleExcelData(excelData) {
  let list = [];
  let listItem = {
    name: [],
    date: [],
    value: [],
  };
  let _index = 1;
  excelData.forEach((item, index) => {
    let value = Object.values(item);
    if (_index == 1) {
      listItem.name.push(value[0]);
      _index++;
    } else if (_index == 2) {
      value.splice(0, 1);
      listItem.date.push(value);
      _index++;
    } else if (_index == 3) {
      value.splice(0, 1);
      listItem.value.push(value);
      _index = 1;
    }
  });
  listItem.name.forEach((element, index) => {
    list.push({
      ...initOptions,
      name: element,
      date: listItem.date[index],
      data: listItem.value[index],
      _id: new Date().getTime(),
    });
  });
  paramsData.dataList = list;

  setChart();
}
const beforeUpload = (file) => {
  readWorkbookFromLocalFile(file, readWorkbook);
  paramsData.fileList = [file];
  return false;
};
const handleData = () => {
  readWorkbookFromLocalFile(paramsData.fileList[0], readWorkbook);
};
const setChart = (date) => {
  if (!paramsData.dataList.length) return;
  chartOptions.xAxis.data = date ? date : paramsData.dataList[0].date;
  chartOptions.series = paramsData.dataList;
  if (!myChart) {
    myChart = echarts.init(document.getElementById("trend-chart"));
    myChart.on("click", function (params) {
      handleClickChart(params);
    });
  }
  myChart.setOption(chartOptions);
};
function handleClickChart(params) {
  const key = params.seriesName + "^" + params.name + "^" + params.value;
  const flag = paramsData.treeData.some((item) => item.key === key);
  if (flag) {
    return;
  }
  const item = {
    key: key,
    title: key,
    date: params.name,
    seriesName: params.seriesName,
    value: params.value,
  };
  paramsData.treeData.push(item);
  paramsData.treeData.sort((a, b) => a.key.localeCompare(b.key));
}

function point2() {
  if (paramsData.checkNode.length < 2) {
    return;
  }
  const list = paramsData.checkNode.sort((a, b) => a.key.localeCompare(b.key));
  const { seriesName } = list[0];
  const name = seriesName + "trend" + num++;
  const slope =
    (list[1].value - list[0].value) /
    ((_date(list[1].date) - _date(list[0].date)) / TIME_LEN);

  let newData = [];
  for (let i = 1; i < formState.day + 1; i++) {
    const date = formatDate(_date(list[1].date) + i * TIME_LEN);
    const value = Math.floor(list[1].value + slope * i);
    const key = name + "^" + date + "^" + value;
    let newItem = {
      key: key,
      title: key,
      date,
      seriesName: name,
      value,
    };
    newData.push(newItem);
  }
  const xAxis = [
    ...new Set(
      paramsData.dataList[0].date.concat(newData.map((item) => item.date))
    ),
  ];
  // 补数据
  let len = xAxis.length - newData.length;
  const maxLen = len;
  while (len) {
    len--;
    newData.unshift({
      key: "",
      title: "",
      date: formatDate(_date(newData[0].date) - (maxLen - len) * TIME_LEN),
      seriesName: name,
      value: Math.floor(newData[0].value - slope),
    });
  }

  const dataOptions = {
    ...initOptions,
    name,
    date: newData.map((i) => i.date),
    data: newData.map((i) => i.value),
  };
  paramsData.dataList.unshift(dataOptions);
  myChart.clear();
  setChart(xAxis);
}

function analyze() {
  // 两点
  point2();
}
function cleanTreeData() {
  paramsData.treeData = [];
  paramsData.checkNode = [];
  paramsData.checkedKeys = [];
}
const removeTreeItem = (item) => {
  const index = paramsData.treeData.findIndex(
    (child) => child.key === item.key
  );
  if (index > -1) {
    paramsData.treeData.splice(index, 1);
  }
};
const checkTree = (checkedKeys, { checkedNodes }) => {
  paramsData.checkNode = checkedNodes;
};
const reset = () => {
  cleanTreeData();
  num = 0;
  const len = paramsData.dataList.length - 2;
  if (len) {
    paramsData.dataList.splice(0, len);
    myChart.clear();
    setChart();
  }
};
const exportExcel = () => {};
onMounted(() => {
  setChart();
});

// 绘制图表
</script>
<template>
  <div class="trend">
    <div class="data">
      <div class="data-handle">
        <a-upload
          v-model:file-list="paramsData.fileList"
          name="avatar"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="true"
          action=""
          accept=".xlsx"
          maxCount="1"
          :before-upload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <loading-outlined v-if="loading"></loading-outlined>
            <plus-outlined v-else></plus-outlined>
            <div class="ant-upload-text">+</div>
          </div>
        </a-upload>
        <a-button :disabled="!paramsData.fileList.length" @click="handleData"
          >处理数据</a-button
        >
        <a-button :disabled="!paramsData.dataList.length" @click="setChart"
          >生成</a-button
        >
        <a-button @click="exportExcel">导出</a-button>
      </div>
      <div class="data-list">
        <a-tree
          v-model:expandedKeys="paramsData.expandedKeys"
          v-model:checkedKeys="paramsData.checkedKeys"
          :checkable="true"
          :selectable="false"
          check-strictly
          blockNode
          :tree-data="paramsData.treeData"
          fieldNames="{children:'children', title:'title', key:'key' }"
          @check="checkTree"
        >
          <template #title="{ dataRef }">
            <span class="custom-tree-title">
              <span class="tree-label"> {{ dataRef.title }}</span>
              <span
                style="margin-left: 10px; display: inline-block"
                @click.stop="removeTreeItem(dataRef)"
                ><CloseOutlined
              /></span>
            </span> </template
        ></a-tree>
      </div>
      <div class="data-list-analyze">
        <a-form :model="formState">
          <a-form-item label="day" name="day">
            <a-input-number v-model:value="formState.day" />
          </a-form-item>
        </a-form>
        <a-button style="margin-right: 10px" @click="analyze">分析</a-button>
        <a-button @click="reset" style="margin-right: 10px">重置</a-button>
        <a-button type="primary" @click="cleanTreeData">清空树结构</a-button>
      </div>
    </div>
    <div id="trend-chart" class="trend-chart-wrapper"></div>
  </div>
</template>
<style scoped lang="less">
.trend {
  padding: 20px;
  background: #fff;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  .data {
    width: 100%;
    height: 300px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #efefef;
    display: flex;
    flex-direction: row;
    .data-handle {
      width: 40%;
      margin-right: 10px;
      padding: 10px;
      background-color: rgba(244, 247, 248, 0.8);
    }
    .data-list {
      width: 300px;
      height: 100%;
      overflow: auto;
      padding: 10px;
      border: 1px solid #efefef;
      border-radius: 6px;
      margin-right: 10px;
    }
    .data-list-analyze {
      flex: 1;
      height: 100%;
      overflow: auto;
      padding: 10px;
      border: 1px solid #efefef;
      border-radius: 6px;
    }
    .ant-upload-wrapper.ant-upload-picture-card-wrapper {
      // width: 110px;
    }
  }
  #trend-chart {
    width: 100%;
    height: 400px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #efefef;
  }
}
</style>
