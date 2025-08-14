(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[151],{

/***/ 76728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ plan)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(98752);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(95328);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/modal/index.js
var modal = __webpack_require__(22000);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/button/index.js + 5 modules
var es_button = __webpack_require__(94500);
// EXTERNAL MODULE: ./node_modules/ant-design-vue/es/input/index.js
var input = __webpack_require__(33612);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-vue/es/icons/PlusOutlined.js + 1 modules
var PlusOutlined = __webpack_require__(120);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-vue/es/icons/DeleteOutlined.js + 1 modules
var DeleteOutlined = __webpack_require__(61216);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-vue/es/icons/EditOutlined.js + 1 modules
var EditOutlined = __webpack_require__(84020);
// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.js
var xlsx = __webpack_require__(25407);
// EXTERNAL MODULE: ./node_modules/echarts/index.js + 543 modules
var echarts = __webpack_require__(49344);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/plan/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.ED)("data-v-0a287d53"),n=n(),(0,runtime_core_esm_bundler/* popScopeId */.ii)(),n)
const _hoisted_1 = { class: "plan-demo" }
const _hoisted_2 = { style: {"margin-bottom":"16px"} }
const _hoisted_3 = {
  key: 0,
  style: {"display":"flex","justify-content":"space-between","align-items":"center"}
}
const _hoisted_4 = { key: 5 }
const _hoisted_5 = {
  key: 6,
  style: {"display":"flex","align-items":"center"}
}
const _hoisted_6 = ["value", "onChange"]
const _hoisted_7 = {
  key: 7,
  style: {"display":"flex","gap":"8px"}
}
const _hoisted_8 = { class: "chart-container" }
const _hoisted_9 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { class: "chart-wrapper" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 饼图 "),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
    id: "pie-chart",
    class: "chart-item"
  }),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 柱状图 "),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
    id: "bar-chart",
    class: "chart-item"
  })
], -1 /* HOISTED */))
const _hoisted_10 = [
  _hoisted_9
]
const _hoisted_11 = { style: {"display":"flex","align-items":"center"} }
const _hoisted_12 = { style: {"margin-left":"8px"} }
const _hoisted_13 = { style: {"color":"red","font-weight":"bold"} }
const _hoisted_14 = { style: {"text-align":"center","padding":"20px"} }
const _hoisted_15 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("p", { style: {"margin-bottom":"20px"} }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 导入新的Excel文件将覆盖当前所有数据。"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("br"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 导入前已自动导出当前数据作为备份。 ")
], -1 /* HOISTED */))
const _hoisted_16 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
  id: "predict-chart",
  style: {"width":"100%","height":"500px"}
}, null, -1 /* HOISTED */))
const _hoisted_17 = {
  key: 0,
  style: {"margin-top":"20px"}
}
const _hoisted_18 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("h3", null, "预测结果", -1 /* HOISTED */))

;





// 表格数据

/* harmony default export */ const planvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const dataSource = (0,reactivity_esm_bundler/* ref */.IL)([]);

// 自定义列
const customColumns = (0,reactivity_esm_bundler/* ref */.IL)([]);

// 表格列定义
const columns = (0,reactivity_esm_bundler/* reactive */.cB)([
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    width: 168,
    fixed: "left",
  },
  {
    title: "代码",
    dataIndex: "code",
    key: "code",
    width: 168,
  },
  {
    title: "价格",
    dataIndex: "price",
    key: "price",
    width: 168,
  },
  {
    title: "数量",
    dataIndex: "quantity",
    key: "quantity",
    width: 168,
  },
  {
    title: "增长率",
    dataIndex: "interest",
    key: "interest",
    width: 168,
  },
  {
    title: "总值",
    dataIndex: "total",
    key: "total",
    width: 168,
  },
  {
    title: "颜色",
    dataIndex: "color",
    key: "color",
    width: 168,
  },
  ...customColumns.value, // 添加自定义列
  {
    title: "操作",
    dataIndex: "action",
    key: "action",
    fixed: "right",
    width: 150,
  },
]);

// 用于触发表格重新渲染的key
const tableKey = (0,reactivity_esm_bundler/* ref */.IL)(0);

// Modal相关
const modalVisible = (0,reactivity_esm_bundler/* ref */.IL)(false);
const customColumnName = (0,reactivity_esm_bundler/* ref */.IL)("");
const modalConfirmLoading = (0,reactivity_esm_bundler/* ref */.IL)(false);

// 编辑行的Modal相关
const editModalVisible = (0,reactivity_esm_bundler/* ref */.IL)(false);
const editForm = (0,reactivity_esm_bundler/* ref */.IL)({
  key: "",
  name: "",
  code: "",
  price: 0,
  quantity: 0,
  interest: 0,
  total: 0,
  color: "#1890ff", // 默认颜色
});

// 饼图相关
const chartVisible = (0,reactivity_esm_bundler/* ref */.IL)(true);
let pieChart = null;

// 从localStorage加载数据
const loadFromLocalStorage = () => {
  try {
    // 加载表格数据
    const savedData = localStorage.getItem("planTableData");
    if (savedData) {
      dataSource.value = JSON.parse(savedData);
    } else {
      // 如果没有保存的数据，使用默认数据
      dataSource.value = [
        {
          key: "1",
          name: "商品AAA",
          code: "001",
          price: 100,
          quantity: 2,
          interest: 0.05,
          total: 200,
          color: "#1890ff",
        },
        {
          key: "2",
          name: "商品B",
          code: "002",
          price: 200,
          quantity: 1,
          interest: 0.03,
          total: 200,
          color: "#52c41a",
        },
      ];
    }

    // 加载自定义列
    const savedColumns = localStorage.getItem("planTableColumns");
    if (savedColumns) {
      customColumns.value = JSON.parse(savedColumns);
      // 更新列定义
      const customCols = customColumns.value;
      columns.splice(7, columns.length - 8, ...customCols); // 替换自定义列部分
    } else {
      // 默认自定义列
      customColumns.value = [
        {
          title: "2025",
          dataIndex: "custom-2025",
          key: "custom-2025",
          width: 168,
        },
        {
          title: "2026",
          dataIndex: "custom-2026",
          key: "custom-2026",
          width: 168,
        },
      ];
      columns.splice(7, 0, ...customColumns.value);
    }
  } catch (error) {
    console.error("从localStorage加载数据失败:", error);
    // 使用默认数据
    dataSource.value = [
      {
        key: "1",
        name: "商品AAA",
        code: "001",
        price: 100,
        quantity: 2,
        interest: 0.05,
        total: 200,
        color: "#1890ff",
      },
      {
        key: "2",
        name: "商品B",
        code: "002",
        price: 200,
        quantity: 1,
        interest: 0.03,
        total: 200,
        color: "#52c41a",
      },
    ];

    customColumns.value = [
      {
        title: "2025",
        dataIndex: "custom-2025",
        key: "custom-2025",
        width: 168,
      },
      {
        title: "2026",
        dataIndex: "custom-2026",
        key: "custom-2026",
        width: 168,
      },
    ];
    columns.splice(7, 0, ...customColumns.value);
  }
};

// 保存数据到localStorage
const saveToLocalStorage = () => {
  try {
    localStorage.setItem("planTableData", JSON.stringify(dataSource.value));
    localStorage.setItem(
      "planTableColumns",
      JSON.stringify(customColumns.value)
    );
  } catch (error) {
    console.error("保存数据到localStorage失败:", error);
    modal/* default */.c.error({
      title: "保存失败",
      content: "无法保存数据到本地存储",
    });
  }
};

// 在组件挂载前加载数据
(0,runtime_core_esm_bundler/* onBeforeMount */._O)(() => {
  loadFromLocalStorage();
});

// 添加行
const addRow = () => {
  const newRow = {
    key: Date.now().toString(),
    name: "",
    code: "",
    price: 0,
    quantity: 0,
    interest: 0,
    total: 0,
    color: "#1890ff", // 默认颜色
  };
  dataSource.value.push(newRow);
  saveToLocalStorage();
};

// 删除行
const deleteRow = (key) => {
  dataSource.value = dataSource.value.filter((item) => item.key !== key);
  saveToLocalStorage();
};

// 显示编辑行的Modal
const showEditModal = (record) => {
  editForm.value = { ...record };
  editModalVisible.value = true;
};

// 保存编辑的行数据
const saveEditRow = () => {
  const target = dataSource.value.find(
    (item) => item.key === editForm.value.key
  );
  if (target) {
    Object.assign(target, editForm.value);
    // 重新计算总值 (价格 * 数量)
    target.total = (target.price * target.quantity).toFixed(2);
    saveToLocalStorage();
  }
  editModalVisible.value = false;
};

// 显示添加自定义列的Modal
const showAddCustomColumnModal = () => {
  customColumnName.value = "";
  modalVisible.value = true;
};

// 添加自定义列
const addCustomColumn = () => {
  if (!customColumnName.value.trim()) {
    modal/* default */.c.warning({
      title: "提示",
      content: "列名不能为空",
    });
    return;
  }

  // 检查列名是否已存在（包括基础列和自定义列）
  const allColumnTitles = columns.map((col) => col.title);
  if (allColumnTitles.includes(customColumnName.value)) {
    modal/* default */.c.warning({
      title: "提示",
      content: "列名已存在，请输入其他列名",
    });
    return;
  }

  modalConfirmLoading.value = true;

  // 模拟异步操作
  setTimeout(() => {
    // 只添加一列（标题为输入值）
    const newColumn = {
      title: customColumnName.value,
      dataIndex: `custom_${customColumnName.value}`,
      key: `custom_${customColumnName.value}`,
      width: 168,
    };

    // 插入到操作列之前
    columns.splice(columns.length - 1, 0, newColumn);

    // 添加到自定义列数组
    customColumns.value.push(newColumn);

    // 为所有数据行添加新字段
    dataSource.value.forEach((item) => {
      item[newColumn.dataIndex] = "";
    });

    // 触发表格重新渲染
    tableKey.value += 1;

    // 保存到localStorage
    saveToLocalStorage();

    modalVisible.value = false;
    modalConfirmLoading.value = false;
  }, 500);
};

// 删除自定义列
const deleteCustomColumn = (columnKey) => {
  const index = columns.findIndex((col) => col.key === columnKey);
  if (index > -1) {
    columns.splice(index, 1);
    customColumns.value = customColumns.value.filter(
      (col) => col.key !== columnKey
    );

    // 从所有数据行中移除该字段
    dataSource.value.forEach((item) => {
      delete item[columnKey];
    });

    // 触发表格重新渲染
    tableKey.value += 1;

    // 保存到localStorage
    saveToLocalStorage();
  }
};

// 更新单元格值
const updateCell = (key, dataIndex, value) => {
  const target = dataSource.value.find((item) => item.key === key);
  if (target) {
    target[dataIndex] = value;
    // 如果是价格或数量变化，重新计算总值 (价格 * 数量)
    if (["price", "quantity"].includes(dataIndex)) {
      target.total = (target.price * target.quantity).toFixed(2);
    }
    saveToLocalStorage();
  }
};

// 更新颜色值
const updateColor = (key, value) => {
  const target = dataSource.value.find((item) => item.key === key);
  if (target) {
    target.color = value;
    saveToLocalStorage();
  }
};

// 获取自定义列的键值列表
const getCustomColumnKeys = () => {
  return customColumns.value.map((col) => ({
    key: col.key,
    title: col.title,
    dataIndex: col.dataIndex,
  }));
};

// 文件上传相关
const fileList = (0,reactivity_esm_bundler/* ref */.IL)([]);
const showUploadModal = (0,reactivity_esm_bundler/* ref */.IL)(false);

// 导出表格数据为Excel（带时间戳）
const exportToExcelWithTimestamp = () => {
  // 准备导出的数据，只包含列标题和数据，不包含操作列
  const exportColumns = columns.filter((col) => col.key !== "action");

  // 构造表头
  const headers = exportColumns.map((col) => col.title);

  // 构造数据行
  const dataRows = dataSource.value.map((item) => {
    return exportColumns.map((col) => {
      // 对于总值列，确保显示计算后的值
      if (col.dataIndex === "total") {
        return (item.price * item.quantity).toFixed(2);
      }
      return item[col.dataIndex] || "";
    });
  });

  // 合并表头和数据
  const worksheetData = [headers, ...dataRows];

  // 创建工作表
  const ws = xlsx.utils.aoa_to_sheet(worksheetData);

  // 创建工作簿
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "表格数据");

  // 生成带时间戳的文件名
  const now = new Date();
  const timestamp = `${now.getFullYear()}${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}${now.getDate().toString().padStart(2, "0")}_${now
    .getHours()
    .toString()
    .padStart(2, "0")}${now.getMinutes().toString().padStart(2, "0")}${now
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  // 导出文件
  xlsx.writeFile(wb, `表格数据_${timestamp}.xlsx`);
};

// 显示导入文件的Modal
const showImportModal = () => {
  // 先导出当前数据
  exportToExcelWithTimestamp();
  // 显示上传Modal
  showUploadModal.value = true;
  fileList.value = [];
};

// 处理文件上传前的操作
const beforeUpload = (file) => {
  // 只允许上传xlsx文件
  const isExcel =
    file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
    file.type === "application/vnd.ms-excel" ||
    file.name.endsWith(".xlsx");

  if (!isExcel) {
    modal/* default */.c.error({
      title: "文件类型错误",
      content: "只能上传Excel文件(.xlsx)",
    });
    return false;
  }

  // 读取并处理Excel文件
  readFileAndImport(file);
  return false; // 阻止默认上传行为
};

// 读取并导入Excel文件
const readFileAndImport = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = xlsx.read(data, { type: "array" });

      // 获取第一个工作表
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      // 将工作表转换为JSON
      const jsonData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonData.length < 2) {
        modal/* default */.c.warning({
          title: "文件内容为空",
          content: "导入的Excel文件没有有效数据",
        });
        return;
      }

      // 解析表头
      const headers = jsonData[0];

      // 解析数据行
      const dataRows = jsonData.slice(1);

      // 构造新的数据源
      const newDataSource = dataRows.map((row, index) => {
        const item = {
          key: `imported_${Date.now()}_${index}`,
          color: "#1890ff", // 默认颜色
        };

        // 根据表头映射数据
        headers.forEach((header, colIndex) => {
          // 查找对应的dataIndex
          const column = columns.find((col) => col.title === header);
          if (column) {
            item[column.dataIndex] = row[colIndex] || "";
          }
        });

        // 确保关键字段为数字类型
        item.price = Number(item.price) || 0;
        item.quantity = Number(item.quantity) || 0;
        item.interest = Number(item.interest) || 0;

        // 重新计算总值 (价格 * 数量)
        item.total = (item.price * item.quantity).toFixed(2);

        return item;
      });

      // 更新数据源
      dataSource.value = newDataSource;

      // 保存到localStorage
      saveToLocalStorage();

      // 关闭Modal
      showUploadModal.value = false;

      modal/* default */.c.success({
        title: "导入成功",
        content: `成功导入${newDataSource.length}行数据`,
      });
    } catch (error) {
      console.error("导入Excel文件失败:", error);
      modal/* default */.c.error({
        title: "导入失败",
        content: "解析Excel文件时发生错误，请检查文件格式",
      });
    }
  };
  reader.readAsArrayBuffer(file);
};

// 修改 showChart 方法
const showChart = () => {
  chartVisible.value = !chartVisible.value; // 切换显示状态
  if (chartVisible.value) {
    (0,runtime_core_esm_bundler/* nextTick */.o$)(() => {
      initChart();
    });
  }
};

// 添加柱状图实例
let barChart = null;

// 修改初始化图表函数
const initChart = () => {
  // 初始化饼图
  const pieChartDom = document.getElementById("pie-chart");
  if (pieChartDom) {
    if (!pieChart) {
      pieChart = echarts/* init */._6(pieChartDom);
    }

    // 准备饼图数据
    const chartData = dataSource.value.map((item) => ({
      name: `${item.name} (${item.code})`,
      value: parseFloat(item.total),
      itemStyle: {
        color: item.color,
      },
    }));

    const pieOption = {
      title: {
        text: "占比",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "总值",
          type: "pie",
          radius: "50%", // 普通饼图
          data: chartData,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
          label: {
            show: true,
            formatter: "{b}: {c}\n({d}%)", // 标签显示名称、总值和百分比
          },
          labelLine: {
            show: true,
          },
        },
      ],
    };

    pieChart.setOption(pieOption);
  }

  // 初始化柱状图
  const barChartDom = document.getElementById("bar-chart");
  if (barChartDom) {
    if (!barChart) {
      barChart = echarts/* init */._6(barChartDom);
    }

    // 准备柱状图数据
    // X轴为自定义列名
    const xAxisData = customColumns.value.map((col) => col.title);

    // 每一行数据作为一个系列
    const series = dataSource.value
      .map((item) => {
        const barData = customColumns.value.map((col) => {
          const value = item[col.dataIndex];
          // 如果值为空或不是数字，返回0
          return isNaN(parseFloat(value)) ? 0 : parseFloat(value);
        });

        return [
          {
            name: `${item.name} (${item.code})`,
            type: "bar",
            data: barData,
            itemStyle: {
              color: item.color,
            },
            barWidth: 20, // 固定柱子宽度不超过20
            label: {
              show: true,
              position: "top",
              formatter: "{c}",
            },
          },
          {
            name: `${item.name} (${item.code}) 趋势`,
            type: "line",
            data: barData,
            itemStyle: {
              color: item.color,
            },
            smooth: false, // 不使用线性趋势线
            symbolSize: 8,
          },
        ];
      })
      .flat(); // 将嵌套数组扁平化

    const barOption = {
      title: {
        text: "趋势",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c}",
      },
      legend: {
        data: dataSource.value
          .map((item) => [
            `${item.name} (${item.code})`,
            `${item.name} (${item.code}) 趋势`,
          ])
          .flat(),
        top: 30,
      },
      xAxis: {
        type: "category",
        data: xAxisData,
      },
      yAxis: {
        type: "value",
      },
      series: series,
    };

    barChart.setOption(barOption);
  }
};
// 预测相关
const predictVisible = (0,reactivity_esm_bundler/* ref */.IL)(false);
const predictData = (0,reactivity_esm_bundler/* ref */.IL)(null);

// 线性预测函数（加权版，使用斐波那契数列作为权重）
const weightedLinearRegression = (x, y) => {
  if (x.length !== y.length || x.length < 2) {
    // 如果数据点不足或长度不匹配，退化为简单线性回归
    return simpleLinearRegression(x, y);
  }

  // 生成斐波那契数列作为权重
  const weights = generateFibonacciWeights(x.length);

  let sumW = 0;
  let sumWX = 0;
  let sumWY = 0;
  let sumWXY = 0;
  let sumWXX = 0;

  for (let i = 0; i < x.length; i++) {
    const w = weights[i];
    const xi = x[i];
    const yi = y[i];

    sumW += w;
    sumWX += w * xi;
    sumWY += w * yi;
    sumWXY += w * xi * yi;
    sumWXX += w * xi * xi;
  }

  // 加权线性回归公式
  const denominator = sumW * sumWXX - sumWX * sumWX;

  // 避免除零错误
  if (Math.abs(denominator) < 1e-10) {
    return simpleLinearRegression(x, y);
  }

  const slope = (sumW * sumWXY - sumWX * sumWY) / denominator;
  const intercept = (sumWY - slope * sumWX) / sumW;

  return { slope, intercept };
};

// 简单线性回归（备用方案）
const simpleLinearRegression = (x, y) => {
  const n = x.length;
  let sumX = 0;
  let sumY = 0;
  let sumXY = 0;
  let sumXX = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumXX += x[i] * x[i];
  }

  const denominator = n * sumXX - sumX * sumX;

  // 避免除零错误
  if (Math.abs(denominator) < 1e-10) {
    return { slope: 0, intercept: sumY / n };
  }

  const slope = (n * sumXY - sumX * sumY) / denominator;
  const intercept = (sumY - slope * sumX) / n;

  return { slope, intercept };
};

// 生成斐波那契权重数组
const generateFibonacciWeights = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [1];

  const fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

// 模式识别预测算法
const patternRecognitionPredict = (values) => {
  if (values.length < 4) {
    return null; // 数据不足，无法识别模式
  }

  // 检查是否存在螺旋模式（交替增减）
  const diffs = [];
  for (let i = 1; i < values.length; i++) {
    diffs.push(values[i] - values[i - 1]);
  }

  // 检查是否为螺旋模式（正负交替）
  let isSpiralPattern = true;
  for (let i = 1; i < diffs.length; i++) {
    // 检查相邻差值是否正负交替
    if (diffs[i] * diffs[i - 1] >= 0) {
      isSpiralPattern = false;
      break;
    }
  }

  if (isSpiralPattern) {
    // 螺旋模式预测
    const lastDiff = diffs[diffs.length - 1];
    const predictions = [];

    // 预测未来3个值
    let currentValue = values[values.length - 1];
    let currentDiff = -lastDiff; // 反向

    for (let i = 0; i < 3; i++) {
      // 调整差值幅度（可以保持或略微增加）
      if (i > 0) {
        currentDiff = -currentDiff * 1.1; // 反向并增加10%幅度
      }
      currentValue += currentDiff;
      predictions.push(currentValue);
    }

    return predictions;
  }

  // 检查是否存在周期性模式
  const patternLength = findPatternLength(values);
  if (patternLength > 0) {
    // 周期性模式预测
    const predictions = [];
    const patternStartIndex = values.length - patternLength;

    for (let i = 0; i < 3; i++) {
      const patternIndex = (i + patternStartIndex) % patternLength;
      predictions.push(values[patternIndex]);
    }

    return predictions;
  }

  return null; // 未识别出特定模式
};

// 查找周期性模式长度
const findPatternLength = (values) => {
  const n = values.length;

  // 检查长度从2到n/2的可能周期
  for (let len = 2; len <= Math.floor(n / 2); len++) {
    let isPattern = true;

    // 检查是否符合该周期
    for (let i = 0; i < n - len; i++) {
      if (Math.abs(values[i] - values[i + len]) > 0.01) {
        // 允许小误差
        isPattern = false;
        break;
      }
    }

    if (isPattern) {
      return len;
    }
  }

  return 0; // 未找到周期性模式
};

// 改进的预测算法
const advancedPredict = (years, values) => {
  // 首先尝试模式识别
  const patternPredictions = patternRecognitionPredict(values);
  if (patternPredictions) {
    return patternPredictions;
  }

  // 如果没有识别出特定模式，使用加权线性回归
  const { slope, intercept } = weightedLinearRegression(years, values);

  // 预测未来3年的数据
  const lastYear = Math.max(...years);
  const predictions = [];
  for (let i = 1; i <= 3; i++) {
    const year = lastYear + i;
    const predictedValue = slope * year + intercept;
    predictions.push(predictedValue);
  }

  return predictions;
};

// 修改预测未来趋势函数
const predictFuture = (record) => {
  // 获取自定义列年份数据
  const years = customColumns.value
    .map((col) => {
      const year = parseInt(col.title);
      return isNaN(year) ? 0 : year;
    })
    .filter((year) => year > 0);

  if (years.length < 2) {
    modal/* default */.c.warning({
      title: "无法预测",
      content: "需要至少两个年份的数据才能进行预测",
    });
    return;
  }

  // 获取对应年份的数值
  const values = years.map((year) => {
    const dataIndex = customColumns.value.find(
      (col) => col.title === year.toString()
    )?.dataIndex;
    const value = dataIndex ? parseFloat(record[dataIndex]) : 0;
    return isNaN(value) ? 0 : value;
  });

  // 使用改进的预测算法
  const predictionsArray = advancedPredict(years, values);

  // 预测未来3年的数据
  const lastYear = Math.max(...years);
  const predictions = [];
  for (let i = 0; i < 3; i++) {
    const year = lastYear + i + 1;
    predictions.push({
      year,
      value: Math.max(0, predictionsArray[i]), // 确保预测值不为负
    });
  }

  // 显示预测结果
  predictData.value = {
    record,
    predictions,
  };
  predictVisible.value = true;

  // 初始化预测图表
  (0,runtime_core_esm_bundler/* nextTick */.o$)(() => {
    initPredictChart(record, years, values, predictions);
  });
};
let predictChart = null;
// 初始化预测图表
const initPredictChart = (record, years, values, predictions) => {
  const predictChartDom = document.getElementById("predict-chart");
  if (!predictChartDom) return;
  if (!predictChart) {
    predictChart = echarts/* init */._6(predictChartDom);
  } else {
    predictChart.clear();
  }

  // 组合历史数据和预测数据
  const allYears = [...years, ...predictions.map((p) => p.year)];
  const allValues = [...values, ...predictions.map((p) => p.value)];
  // 区分历史数据和预测数据
  const historicalData = allYears.map((year, index) => values[index] || null);
  const len = values.length;
  const predictedData = new Array(len - 1)
    .fill(null)
    .concat([historicalData[len - 1]])
    .concat(predictions.map((p, index) => p.value));
  const option = {
    title: {
      text: `「${record.name}」趋势预测`,
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      formatter: (params) => {
        let _params = Array.isArray(params) ? params : [params];
        let result = _params[0].name + "<br/>";
        _params.forEach((param) => {
          const name = param.name;
          const value = !!param.value ? param.value.toFixed(2) : null;
          if (!!value) {
            result += `${name}: ${value}<br/>`;
          }
        });
        return result;
      },
    },
    legend: {
      data: ["历史数据", "预测数据"],
      top: 30,
    },
    xAxis: {
      type: "category",
      data: allYears,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "历史数据",
        data: historicalData,
        type: "line",
        smooth: false,
        itemStyle: {
          color: record.color,
        },
        markPoint: {
          data: [
            { type: "max", name: "最大值" },
            { type: "min", name: "最小值" },
          ],
        },
      },
      {
        name: "预测数据",
        data: predictedData,
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#ff7f00",
        },
        lineStyle: {
          type: "dashed",
        },
      },
    ],
  };
  predictChart.setOption(option, true);
};

// 关闭预测模态框
const closePredictModal = () => {
  predictVisible.value = false;
  predictData.value = null;
  // predictChart = null;
};
// 监听数据变化，重新绘制图表
(0,runtime_core_esm_bundler/* watch */.Kg)(
  dataSource,
  () => {
    if (pieChart && chartVisible.value) {
      initChart();
    }
  },
  { deep: true }
);
(0,runtime_core_esm_bundler/* onMounted */.u2)(() => {
  initChart();
});

return (_ctx, _cache) => {
  const _component_DownloadOutlined = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("DownloadOutlined")
  const _component_UploadOutlined = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("UploadOutlined")
  const _component_a_popconfirm = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-popconfirm")
  const _component_a_table = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-table")
  const _component_a_modal = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-modal")
  const _component_a_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-form-item")
  const _component_a_input_number = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-input-number")
  const _component_a_form = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-form")
  const _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-button")
  const _component_a_upload = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-upload")
  const _component_a_table_column = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-table-column")

  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
        type: "primary",
        onClick: addRow,
        style: {"margin-right":"8px"}
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(PlusOutlined/* default */.c)),
          (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 添加行 ")
        ]),
        _: 1 /* STABLE */
      }),
      (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
        onClick: showAddCustomColumnModal,
        style: {"margin-right":"8px"}
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(PlusOutlined/* default */.c)),
          (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 添加自定义列 ")
        ]),
        _: 1 /* STABLE */
      }),
      (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
        onClick: exportToExcelWithTimestamp,
        style: {"margin-right":"8px"}
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_DownloadOutlined),
          (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 导出Excel ")
        ]),
        _: 1 /* STABLE */
      }),
      (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
        onClick: showImportModal,
        style: {"margin-right":"8px"}
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_UploadOutlined),
          (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 导入Excel ")
        ]),
        _: 1 /* STABLE */
      }),
      (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), { onClick: showChart }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, (0,shared_esm_bundler/* toDisplayString */.WA)(chartVisible.value ? "隐藏图表" : "显示图表"), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      })
    ]),
    ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)(_component_a_table, {
      key: tableKey.value,
      dataSource: dataSource.value,
      columns: columns,
      pagination: false,
      scroll: { x: 'max-content', y: 400 },
      bordered: ""
    }, {
      headerCell: (0,runtime_core_esm_bundler/* withCtx */.Ql)(({ column }) => [
        (customColumns.value.some((col) => col.key === column.key))
          ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_3, [
              (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, (0,shared_esm_bundler/* toDisplayString */.WA)(column.title), 1 /* TEXT */),
              (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_popconfirm, {
                title: "确定要删除这一列吗?",
                onConfirm: $event => (deleteCustomColumn(column.key)),
                okText: "确定",
                cancelText: "取消"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(DeleteOutlined/* default */.c), { style: {"color":"#ff4d4f","cursor":"pointer"} })
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onConfirm"])
            ]))
          : ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)(runtime_core_esm_bundler/* Fragment */.ae, { key: 1 }, [
              (0,runtime_core_esm_bundler/* createTextVNode */.mY)((0,shared_esm_bundler/* toDisplayString */.WA)(column.title), 1 /* TEXT */)
            ], 64 /* STABLE_FRAGMENT */))
      ]),
      bodyCell: (0,runtime_core_esm_bundler/* withCtx */.Ql)(({ column, text, record }) => [
        (column.dataIndex == 'name')
          ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
              key: 0,
              value: text,
              onChange: (e) => updateCell(record.key, 'name', e.target.value)
            }, null, 8 /* PROPS */, ["value", "onChange"]))
          : (column.dataIndex == 'code')
            ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                key: 1,
                value: text,
                onChange: (e) => updateCell(record.key, 'code', e.target.value)
              }, null, 8 /* PROPS */, ["value", "onChange"]))
            : (column.dataIndex == 'price')
              ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                  key: 2,
                  type: "number",
                  value: text,
                  onChange: 
              (e) => updateCell(record.key, 'price', Number(e.target.value))
            
                }, null, 8 /* PROPS */, ["value", "onChange"]))
              : (column.dataIndex == 'quantity')
                ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                    key: 3,
                    type: "number",
                    value: text,
                    onChange: 
              (e) => updateCell(record.key, 'quantity', Number(e.target.value))
            
                  }, null, 8 /* PROPS */, ["value", "onChange"]))
                : (column.dataIndex == 'interest')
                  ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                      key: 4,
                      type: "number",
                      value: text,
                      onChange: 
              (e) => updateCell(record.key, 'interest', Number(e.target.value))
            
                    }, null, 8 /* PROPS */, ["value", "onChange"]))
                  : (column.dataIndex == 'total')
                    ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("span", _hoisted_4, (0,shared_esm_bundler/* toDisplayString */.WA)(text), 1 /* TEXT */))
                    : (column.dataIndex == 'color')
                      ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_5, [
                          (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
                            style: (0,shared_esm_bundler/* normalizeStyle */.MN)({
                width: '20px',
                height: '20px',
                backgroundColor: text,
                marginRight: '8px',
                border: '1px solid #d9d9d9',
              })
                          }, null, 4 /* STYLE */),
                          (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, (0,shared_esm_bundler/* toDisplayString */.WA)(text), 1 /* TEXT */),
                          (0,runtime_core_esm_bundler/* createElementVNode */.QD)("input", {
                            type: "color",
                            value: text,
                            onChange: (e) => updateColor(record.key, e.target.value),
                            style: {"margin-left":"8px","width":"40px","height":"32px"}
                          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_6)
                        ]))
                      : (column.dataIndex == 'action')
                        ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_7, [
                            (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
                              size: "small",
                              onClick: $event => (showEditModal(record))
                            }, {
                              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                                (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(EditOutlined/* default */.c))
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]),
                            (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
                              size: "small",
                              onClick: $event => (predictFuture(record)),
                              type: "primary"
                            }, {
                              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                                (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 预测 ")
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick"]),
                            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_popconfirm, {
                              title: "确定要删除这一行吗?",
                              onConfirm: $event => (deleteRow(record.key)),
                              okText: "确定",
                              cancelText: "取消"
                            }, {
                              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                                (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(es_button/* default */.c), {
                                  danger: "",
                                  size: "small"
                                }, {
                                  default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                                    (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(DeleteOutlined/* default */.c))
                                  ]),
                                  _: 1 /* STABLE */
                                })
                              ]),
                              _: 2 /* DYNAMIC */
                            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onConfirm"])
                          ]))
                        : ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)(runtime_core_esm_bundler/* Fragment */.ae, { key: 8 }, [
                            (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 自定义列渲染 "),
                            (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                              value: text,
                              onChange: 
              (e) => updateCell(record.key, column.dataIndex, e.target.value)
            
                            }, null, 8 /* PROPS */, ["value", "onChange"])
                          ], 64 /* STABLE_FRAGMENT */))
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["dataSource", "columns"])),
    (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 图表容器 "),
    (0,runtime_core_esm_bundler/* withDirectives */.wt)((0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_8, _hoisted_10, 512 /* NEED_PATCH */), [
      [runtime_dom_esm_bundler/* vShow */.Ub, chartVisible.value]
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 添加自定义列的Modal "),
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_modal, {
      visible: modalVisible.value,
      "onUpdate:visible": _cache[1] || (_cache[1] = $event => ((modalVisible).value = $event)),
      title: "添加自定义列",
      okText: "确认",
      cancelText: "取消",
      "confirm-loading": modalConfirmLoading.value,
      onOk: addCustomColumn,
      onCancel: _cache[2] || (_cache[2] = $event => (modalVisible.value = false))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
          value: customColumnName.value,
          "onUpdate:value": _cache[0] || (_cache[0] = $event => ((customColumnName).value = $event)),
          placeholder: "请输入自定义列名"
        }, null, 8 /* PROPS */, ["value"])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["visible", "confirm-loading"]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 编辑行的Modal "),
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_modal, {
      visible: editModalVisible.value,
      "onUpdate:visible": _cache[9] || (_cache[9] = $event => ((editModalVisible).value = $event)),
      title: "编辑行数据",
      okText: "保存",
      cancelText: "取消",
      onOk: saveEditRow,
      onCancel: _cache[10] || (_cache[10] = $event => (editModalVisible.value = false))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form, {
          "label-col": { span: 6 },
          "wrapper-col": { span: 18 }
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "名称" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                  value: editForm.value.name,
                  "onUpdate:value": _cache[3] || (_cache[3] = $event => ((editForm.value.name) = $event))
                }, null, 8 /* PROPS */, ["value"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "代码" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                  value: editForm.value.code,
                  "onUpdate:value": _cache[4] || (_cache[4] = $event => ((editForm.value.code) = $event))
                }, null, 8 /* PROPS */, ["value"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "价格" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input_number, {
                  value: editForm.value.price,
                  "onUpdate:value": _cache[5] || (_cache[5] = $event => ((editForm.value.price) = $event)),
                  style: {"width":"100%"}
                }, null, 8 /* PROPS */, ["value"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "数量" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input_number, {
                  value: editForm.value.quantity,
                  "onUpdate:value": _cache[6] || (_cache[6] = $event => ((editForm.value.quantity) = $event)),
                  style: {"width":"100%"}
                }, null, 8 /* PROPS */, ["value"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "增长率" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input_number, {
                  value: editForm.value.interest,
                  "onUpdate:value": _cache[7] || (_cache[7] = $event => ((editForm.value.interest) = $event)),
                  style: {"width":"100%"},
                  step: 0.01
                }, null, 8 /* PROPS */, ["value"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 颜色选择 "),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "颜色" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_11, [
                  (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
                    style: (0,shared_esm_bundler/* normalizeStyle */.MN)({
                width: '20px',
                height: '20px',
                backgroundColor: editForm.value.color,
                marginRight: '8px',
                border: '1px solid #d9d9d9',
              })
                  }, null, 4 /* STYLE */),
                  (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                    value: editForm.value.color,
                    "onUpdate:value": _cache[8] || (_cache[8] = $event => ((editForm.value.color) = $event)),
                    type: "color",
                    style: {"width":"60px","height":"32px"}
                  }, null, 8 /* PROPS */, ["value"]),
                  (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", _hoisted_12, (0,shared_esm_bundler/* toDisplayString */.WA)(editForm.value.color), 1 /* TEXT */)
                ])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 动态生成自定义列的表单项 "),
            ((0,runtime_core_esm_bundler/* openBlock */.Wz)(true), (0,runtime_core_esm_bundler/* createElementBlock */.An)(runtime_core_esm_bundler/* Fragment */.ae, null, (0,runtime_core_esm_bundler/* renderList */.mi)(getCustomColumnKeys(), (customCol) => {
              return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)(_component_a_form_item, {
                key: customCol.key,
                label: customCol.title
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(input/* default */.cp), {
                    value: editForm.value[customCol.dataIndex],
                    "onUpdate:value": $event => ((editForm.value[customCol.dataIndex]) = $event),
                    placeholder: `请输入${customCol.title}`
                  }, null, 8 /* PROPS */, ["value", "onUpdate:value", "placeholder"])
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]))
            }), 128 /* KEYED_FRAGMENT */)),
            (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 总值字段显示在最后，用红色标记 "),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, { label: "总值" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", _hoisted_13, (0,shared_esm_bundler/* toDisplayString */.WA)((editForm.value.price * editForm.value.quantity).toFixed(2)), 1 /* TEXT */)
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["visible"]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 导入Excel的Modal "),
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_modal, {
      visible: showUploadModal.value,
      "onUpdate:visible": _cache[12] || (_cache[12] = $event => ((showUploadModal).value = $event)),
      title: "导入Excel文件",
      footer: null,
      onCancel: _cache[13] || (_cache[13] = $event => (showUploadModal.value = false))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_14, [
          _hoisted_15,
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_upload, {
            "file-list": fileList.value,
            "onUpdate:fileList": _cache[11] || (_cache[11] = $event => ((fileList).value = $event)),
            name: "file",
            accept: ".xlsx,.xls",
            "before-upload": beforeUpload,
            "max-count": 1
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_UploadOutlined),
                  (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 选择Excel文件 ")
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["file-list"])
        ])
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["visible"]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" 预测图表容器 "),
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_modal, {
      visible: predictVisible.value,
      "onUpdate:visible": _cache[14] || (_cache[14] = $event => ((predictVisible).value = $event)),
      title: "趋势预测",
      width: "800px",
      onCancel: closePredictModal,
      footer: null
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        _hoisted_16,
        (predictData.value)
          ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_17, [
              _hoisted_18,
              (0,runtime_core_esm_bundler/* createElementVNode */.QD)("p", null, " 基于智能预测算法（模式识别+加权线性回归）预测「" + (0,shared_esm_bundler/* toDisplayString */.WA)(predictData.value.record.name) + "」未来三年的趋势： ", 1 /* TEXT */),
              (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_table, {
                dataSource: predictData.value.predictions,
                pagination: false,
                size: "small"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_table_column, {
                    title: "年份",
                    dataIndex: "year"
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.Ql)((text) => [
                      (0,runtime_core_esm_bundler/* createTextVNode */.mY)((0,shared_esm_bundler/* toDisplayString */.WA)(text), 1 /* TEXT */)
                    ]),
                    _: 1 /* STABLE */
                  }),
                  (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_table_column, {
                    title: "预测值",
                    dataIndex: "value"
                  }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.Ql)((text) => [
                      (0,runtime_core_esm_bundler/* createTextVNode */.mY)((0,shared_esm_bundler/* toDisplayString */.WA)(typeof text === "object"
                  ? text.value.toFixed(2)
                  : parseFloat(text).toFixed(2)), 1 /* TEXT */)
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                _: 1 /* STABLE */
              }, 8 /* PROPS */, ["dataSource"])
            ]))
          : (0,runtime_core_esm_bundler/* createCommentVNode */.g1)("v-if", true)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["visible"])
  ]))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/plan/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/plan/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(planvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-0a287d53"]])

/* harmony default export */ const plan = (__exports__);

/***/ }),

/***/ 46764:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 22564:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 12752:
/***/ (() => {

/* (ignored) */

/***/ })

}]);