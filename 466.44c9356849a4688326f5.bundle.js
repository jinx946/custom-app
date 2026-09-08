"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[466],{

/***/ 45667
(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.A = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ },

/***/ 44466
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ elementDemo)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.32/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(88516);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.5.32/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(41914);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/elementDemo/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "element-demo" }
const _hoisted_2 = { class: "demo-content" }
const _hoisted_3 = { class: "box" }
const _hoisted_4 = ["onClick"]

;

/* harmony default export */ const elementDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const list = (0,reactivity_esm_bundler/* ref */.KR)(["1"]);
const value = (0,reactivity_esm_bundler/* ref */.KR)([]);
const optionsList = (0,reactivity_esm_bundler/* ref */.KR)([
  { label: "Option 1", value: "1", checked: false },
  { label: "Option 2", value: "2", checked: false },
  { label: "Option 3", value: "3", checked: false },
]);
const filterOptions = (0,reactivity_esm_bundler/* ref */.KR)([
  { label: "Option 1", value: "1", checked: false },
  { label: "Option 2", value: "2", checked: false },
  { label: "Option 3", value: "3", checked: false },
]);
const remove = (item, index) => {
  optionsList.value.splice(index, 1);
  list.value = list.value.filter((val) => val !== item.value);
};
const addLabel = (0,reactivity_esm_bundler/* ref */.KR)("");
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
(0,runtime_core_esm_bundler/* watch */.wB)(
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

return (_ctx, _cache) => {
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-button")
  const _component_el_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-input")
  const _component_el_option = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-option")
  const _component_el_select = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-select")
  const _component_el_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-checkbox")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "demo-header" }, [
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h1", null, "Element Demo"),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "Explore various Element UI components in this demo.")
    ], -1 /* CACHED */)),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, { type: "primary" }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[2] || (_cache[2] = [
          (0,runtime_core_esm_bundler/* createTextVNode */.eW)("Primary Button", -1 /* CACHED */)
        ]))]),
        _: 1 /* STABLE */
      }),
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, { placeholder: "Type something..." }),
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((value).value = $event)),
        placeholder: "Select",
        multiple: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
            label: "Option A",
            value: "A"
          }),
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
            label: "Option B",
            value: "B"
          }),
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
            label: "Option C",
            value: "C"
          })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]),
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_select, {
        modelValue: list.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((list).value = $event)),
        multiple: "",
        filterable: "",
        placeholder: "Select an option",
        "popper-class": "custom-popper",
        "filter-method": filterMethod,
        onChange: handleChange
      }, {
        empty: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[3] || (_cache[3] = [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, "没数据")
          ], -1 /* CACHED */)
        ]))]),
        footer: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { onClick: add }, "button1")
          ])
        ]),
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
          ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(filterOptions.value, (item, index) => {
            return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_el_option, {
              value: item.value,
              key: index
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, [
                    (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_checkbox, {
                      modelValue: item.checked,
                      "onUpdate:modelValue": $event => ((item.checked) = $event)
                    }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, (0,shared_esm_bundler/* toDisplayString */.v_)(item.label), 1 /* TEXT */),
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
                    class: "close",
                    onClick: (0,runtime_dom_esm_bundler/* withModifiers */.D$)($event => (remove(item, index)), ["stop"])
                  }, "X", 8 /* PROPS */, _hoisted_4)
                ])
              ]),
              _: 2 /* DYNAMIC */
            }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["value"]))
          }), 128 /* KEYED_FRAGMENT */))
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"])
    ])
  ]))
}
}

});
;// ./src/web/view/elementDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/elementDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(elementDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-0e82a97e"]])

/* harmony default export */ const elementDemo = (__exports__);

/***/ }

}]);