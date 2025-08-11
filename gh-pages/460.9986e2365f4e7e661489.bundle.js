(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[460],{

/***/ 6074:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ trend)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(98752);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(95328);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
// EXTERNAL MODULE: ./node_modules/echarts/index.js + 543 modules
var echarts = __webpack_require__(49344);
// EXTERNAL MODULE: ./node_modules/xlsx/xlsx.js
var xlsx = __webpack_require__(25407);
;// CONCATENATED MODULE: ./src/web/view/trend/mock.js
const mockData = [
  {
    name: "A",
    type: "line",
    date: [
      "2024-12-10",
      "2024-12-11",
      "2024-12-12",
      "2024-12-13",
      "2024-12-14",
      "2024-12-15",
      "2024-12-16",
    ],
    data: [80, 122, 93, 134, 105, 156, 87],
  },
  {
    name: "B",
    type: "line",
    date: [
      "2024-12-10",
      "2024-12-11",
      "2024-12-12",
      "2024-12-13",
      "2024-12-14",
      "2024-12-15",
      "2024-12-16",
    ],
    data: [10, 12, 13, 14, 15, 16, 17],
  },
];
const mockTreeData = [
  {
    key: "A^2024-12-11^122",
    title: "A^2024-12-11^122",
    date: "2024-12-11",
    seriesName: "A",
    value: 122,
  },
  {
    key: "A^2024-12-13^134",
    title: "A^2024-12-13^134",
    date: "2024-12-13",
    seriesName: "A",
    value: 134,
  },
];

// EXTERNAL MODULE: ./node_modules/@ant-design/icons-vue/es/icons/CloseOutlined.js + 1 modules
var CloseOutlined = __webpack_require__(99492);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/trend/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.ED)("data-v-75d1fcf2"),n=n(),(0,runtime_core_esm_bundler/* popScopeId */.ii)(),n)
const _hoisted_1 = { class: "trend" }
const _hoisted_2 = { class: "data" }
const _hoisted_3 = { class: "data-handle" }
const _hoisted_4 = ["src"]
const _hoisted_5 = { key: 1 }
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { class: "ant-upload-text" }, "+", -1 /* HOISTED */))
const _hoisted_7 = { class: "data-list" }
const _hoisted_8 = { class: "custom-tree-title" }
const _hoisted_9 = { class: "tree-label" }
const _hoisted_10 = ["onClick"]
const _hoisted_11 = { class: "data-list-analyze" }
const _hoisted_12 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
  id: "trend-chart",
  class: "trend-chart-wrapper"
}, null, -1 /* HOISTED */))

;






/* harmony default export */ const trendvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

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
const paramsData = (0,reactivity_esm_bundler/* reactive */.cB)({
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
const formState = (0,reactivity_esm_bundler/* reactive */.cB)({
  day: 10,
});
function readWorkbookFromLocalFile(file, callback) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = e.target.result;
    const workbook = (0,xlsx.read)(data, { type: "buffer" });

    if (callback) callback(workbook);
  };
  reader.readAsArrayBuffer(file);
}
function readWorkbook(workbook) {
  const sheetNames = workbook.SheetNames; // 工作表名称集合
  const worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
  const excelData = xlsx.utils.sheet_to_json(worksheet);
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
    myChart = echarts/* init */._6(document.getElementById("trend-chart"));
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
(0,runtime_core_esm_bundler/* onMounted */.u2)(() => {
  setChart();
});

// 绘制图表

return (_ctx, _cache) => {
  const _component_loading_outlined = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("loading-outlined")
  const _component_plus_outlined = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("plus-outlined")
  const _component_a_upload = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-upload")
  const _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-button")
  const _component_a_tree = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-tree")
  const _component_a_input_number = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-input-number")
  const _component_a_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-form-item")
  const _component_a_form = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-form")

  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_3, [
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_upload, {
          "file-list": paramsData.fileList,
          "onUpdate:fileList": _cache[0] || (_cache[0] = $event => ((paramsData.fileList) = $event)),
          name: "avatar",
          "list-type": "picture-card",
          class: "avatar-uploader",
          "show-upload-list": true,
          action: "",
          accept: ".xlsx",
          maxCount: "1",
          "before-upload": beforeUpload,
          onChange: _ctx.handleChange
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (_ctx.imageUrl)
              ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("img", {
                  key: 0,
                  src: _ctx.imageUrl,
                  alt: "avatar"
                }, null, 8 /* PROPS */, _hoisted_4))
              : ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_5, [
                  (_ctx.loading)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)(_component_loading_outlined, { key: 0 }))
                    : ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)(_component_plus_outlined, { key: 1 })),
                  _hoisted_6
                ]))
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["file-list", "onChange"]),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, {
          disabled: !paramsData.fileList.length,
          onClick: handleData
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("处理数据")
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"]),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, {
          disabled: !paramsData.dataList.length,
          onClick: setChart
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("生成")
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["disabled"]),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, { onClick: exportExcel }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("导出")
          ]),
          _: 1 /* STABLE */
        })
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_7, [
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_tree, {
          expandedKeys: paramsData.expandedKeys,
          "onUpdate:expandedKeys": _cache[1] || (_cache[1] = $event => ((paramsData.expandedKeys) = $event)),
          checkedKeys: paramsData.checkedKeys,
          "onUpdate:checkedKeys": _cache[2] || (_cache[2] = $event => ((paramsData.checkedKeys) = $event)),
          checkable: true,
          selectable: false,
          "check-strictly": "",
          blockNode: "",
          "tree-data": paramsData.treeData,
          fieldNames: "{children:'children', title:'title', key:'key' }",
          onCheck: checkTree
        }, {
          title: (0,runtime_core_esm_bundler/* withCtx */.Ql)(({ dataRef }) => [
            (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", _hoisted_8, [
              (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", _hoisted_9, (0,shared_esm_bundler/* toDisplayString */.WA)(dataRef.title), 1 /* TEXT */),
              (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", {
                style: {"margin-left":"10px","display":"inline-block"},
                onClick: (0,runtime_dom_esm_bundler/* withModifiers */.Y7)($event => (removeTreeItem(dataRef)), ["stop"])
              }, [
                (0,runtime_core_esm_bundler/* createVNode */.K2)((0,reactivity_esm_bundler/* unref */.KV)(CloseOutlined/* default */.c))
              ], 8 /* PROPS */, _hoisted_10)
            ])
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["expandedKeys", "checkedKeys", "tree-data"])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_11, [
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form, { model: formState }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, {
              label: "day",
              name: "day"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input_number, {
                  value: formState.day,
                  "onUpdate:value": _cache[3] || (_cache[3] = $event => ((formState.day) = $event))
                }, null, 8 /* PROPS */, ["value"])
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["model"]),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, {
          style: {"margin-right":"10px"},
          onClick: analyze
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("分析")
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, {
          onClick: reset,
          style: {"margin-right":"10px"}
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("重置")
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, {
          type: "primary",
          onClick: cleanTreeData
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("清空树结构")
          ]),
          _: 1 /* STABLE */
        })
      ])
    ]),
    _hoisted_12
  ]))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/trend/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/trend/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(trendvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-75d1fcf2"]])

/* harmony default export */ const trend = (__exports__);

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