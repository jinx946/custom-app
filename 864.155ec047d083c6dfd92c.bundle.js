"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[864],{

/***/ 48864
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ exponentialChart)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.6.0/node_modules/echarts/index.js + 542 modules
var echarts = __webpack_require__(94294);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/exponentialChart/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "exponential-chart-container" }
const _hoisted_2 = { class: "input-form" }
const _hoisted_3 = { class: "segment-actions" }

;



/* harmony default export */ const exponentialChartvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const segments = (0,reactivity_esm_bundler/* ref */.KR)([
  {
    base: 20,
    growthRate: 0.05,
    growthTimes: 10,
  },
]);

const chartRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
let chart = null;

(0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
  initChart();
  drawChart();
});

const initChart = () => {
  chart = echarts/* init */.Ts(chartRef.value);
};

const addSegment = () => {
  const lastSegment = segments.value[segments.value.length - 1];
  const lastValue =
    lastSegment.base *
    Math.pow(1 + lastSegment.growthRate, lastSegment.growthTimes);

  segments.value.push({
    base: lastValue,
    growthRate: 0.05,
    growthTimes: 5,
  });
};

const removeSegment = (index) => {
  if (segments.value.length > 1) {
    segments.value.splice(index, 1);
  }
};

const drawChart = () => {
  // 清空之前的图表数据
  chart.clear();

  const series = [];
  const colors = ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de"];
  let totalSteps = 0;

  segments.value.forEach((segment, segmentIndex) => {
    const { base, growthRate, growthTimes } = segment;
    const segmentData = [];

    for (let i = 0; i <= growthTimes; i++) {
      const y = base * Math.pow(1 + growthRate, i);
      segmentData.push([totalSteps + i, y]);
    }

    series.push({
      name: `增长段 ${segmentIndex + 1}`,
      data: segmentData,
      type: "line",
      smooth: true,
      symbol: "circle",
      symbolSize: 8,
      lineStyle: {
        width: 3,
      },
      itemStyle: {
        color: colors[segmentIndex % colors.length],
      },
      label: {
        show: true,
        position: "top",
        color: colors[segmentIndex % colors.length],
        formatter: function (params) {
          return params.value[1].toFixed(2);
        },
      },
    });

    totalSteps += growthTimes;
  });

  // 生成完整的x轴数据
  const xAxisData = [];
  for (let i = 0; i <= totalSteps; i++) {
    xAxisData.push(i);
  }

  const option = {
    title: {
      text: "指数增长曲线",
      left: "center",
    },
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        let result = `x: ${params[0].data[0]}<br/>`;
        params.forEach((param) => {
          result += `${param.seriesName}: ${param.data[1].toFixed(2)}<br/>`;
        });
        return result;
      },
    },
    legend: {
      data: series.map((s) => s.name),
      top: 30,
    },
    xAxis: {
      type: "category",
      name: "增长次数",
      data: xAxisData,
    },
    yAxis: {
      type: "value",
      name: "结果值",
    },
    series: series,
  };

  chart.setOption(option);
};

// 监听窗口大小变化，调整图表大小
window.addEventListener("resize", () => {
  if (chart) {
    chart.resize();
  }
});

// 监听segments变化，自动更新后续增长段的底数
(0,runtime_core_esm_bundler/* watch */.wB)(
  () => segments.value,
  (newSegments) => {
    if (newSegments.length > 1) {
      let previousValue = newSegments[0].base;

      for (let i = 1; i < newSegments.length; i++) {
        const prevSegment = newSegments[i - 1];
        previousValue =
          prevSegment.base *
          Math.pow(1 + prevSegment.growthRate, prevSegment.growthTimes);
        newSegments[i].base = previousValue;
      }
    }
  },
  { deep: true, immediate: true }
);

return (_ctx, _cache) => {
  const _component_el_input_number = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-input-number")
  const _component_el_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-form-item")
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-button")
  const _component_el_form = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-form")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    _cache[3] || (_cache[3] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "指数图表", -1 /* CACHED */)),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(segments.value, (segment, index) => {
        return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
          key: index,
          class: "segment-form"
        }, [
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form, {
            inline: true,
            model: segment,
            class: "demo-form-inline"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, {
                label: index === 0 ? '底数' : `段${index + 1}底数 (自动计算)`
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input_number, {
                    modelValue: segment.base,
                    "onUpdate:modelValue": $event => ((segment.base) = $event),
                    modelModifiers: { number: true },
                    placeholder: "请输入底数",
                    disabled: index > 0
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue", "disabled"])
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]),
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, {
                label: `增长率 ${index + 1}`
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input_number, {
                    modelValue: segment.growthRate,
                    "onUpdate:modelValue": $event => ((segment.growthRate) = $event),
                    modelModifiers: { number: true },
                    placeholder: "请输入增长率"
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]),
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, {
                label: `增长次数 ${index + 1}`
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input_number, {
                    modelValue: segment.growthTimes,
                    "onUpdate:modelValue": $event => ((segment.growthTimes) = $event),
                    modelModifiers: { number: true },
                    placeholder: "请输入增长次数",
                    min: 1
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 2 /* DYNAMIC */
              }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]),
              (index > 0)
                ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_el_form_item, { key: 0 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                        type: "danger",
                        onClick: $event => (removeSegment(index))
                      }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[0] || (_cache[0] = [
                          (0,runtime_core_esm_bundler/* createTextVNode */.eW)("删除", -1 /* CACHED */)
                        ]))]),
                        _: 1 /* STABLE */
                      }, 8 /* PROPS */, ["onClick"])
                    ]),
                    _: 2 /* DYNAMIC */
                  }, 1024 /* DYNAMIC_SLOTS */))
                : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
            ]),
            _: 2 /* DYNAMIC */
          }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["model"])
        ]))
      }), 128 /* KEYED_FRAGMENT */)),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
          type: "primary",
          onClick: addSegment
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[1] || (_cache[1] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("添加增长段", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
          type: "success",
          onClick: drawChart
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[2] || (_cache[2] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("绘制图表", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        })
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      id: "chart-container",
      ref_key: "chartRef",
      ref: chartRef
    }, null, 512 /* NEED_PATCH */)
  ]))
}
}

});
;// ./src/web/view/exponentialChart/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/exponentialChart/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(exponentialChartvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-76afb17e"]])

/* harmony default export */ const exponentialChart = (__exports__);

/***/ }

}]);