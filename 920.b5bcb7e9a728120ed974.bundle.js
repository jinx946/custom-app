"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[920],{

/***/ 18152:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.c = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 18920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ elementDemo)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(98752);
// EXTERNAL MODULE: ./node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(95328);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/elementDemo/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.ED)("data-v-0e82a97e"),n=n(),(0,runtime_core_esm_bundler/* popScopeId */.ii)(),n)
const _hoisted_1 = { class: "element-demo" }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { class: "demo-header" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("h1", null, "Element Demo"),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("p", null, "Explore various Element UI components in this demo.")
], -1 /* HOISTED */))
const _hoisted_3 = { class: "demo-content" }
const _hoisted_4 = { class: "box" }
const _hoisted_5 = ["onClick"]
const _hoisted_6 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", null, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", null, "没数据")
], -1 /* HOISTED */))

;

/* harmony default export */ const elementDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const list = (0,reactivity_esm_bundler/* ref */.IL)(["1"]);
const value = (0,reactivity_esm_bundler/* ref */.IL)([]);
const optionsList = (0,reactivity_esm_bundler/* ref */.IL)([
  { label: "Option 1", value: "1", checked: false },
  { label: "Option 2", value: "2", checked: false },
  { label: "Option 3", value: "3", checked: false },
]);
const filterOptions = (0,reactivity_esm_bundler/* ref */.IL)([
  { label: "Option 1", value: "1", checked: false },
  { label: "Option 2", value: "2", checked: false },
  { label: "Option 3", value: "3", checked: false },
]);
const remove = (item, index) => {
  optionsList.value.splice(index, 1);
  list.value = list.value.filter((val) => val !== item.value);
};
const addLabel = (0,reactivity_esm_bundler/* ref */.IL)("");
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
(0,runtime_core_esm_bundler/* watch */.Kg)(
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
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("el-button")
  const _component_el_input = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("el-input")
  const _component_el_option = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("el-option")
  const _component_el_select = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("el-select")
  const _component_el_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("el-checkbox")

  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, [
    _hoisted_2,
    (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_3, [
      (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_button, { type: "primary" }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createTextVNode */.mY)("Primary Button")
        ]),
        _: 1 /* STABLE */
      }),
      (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_input, { placeholder: "Type something..." }),
      (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((value).value = $event)),
        placeholder: "Select",
        multiple: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_option, {
            label: "Option A",
            value: "A"
          }),
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_option, {
            label: "Option B",
            value: "B"
          }),
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_option, {
            label: "Option C",
            value: "C"
          })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["modelValue"]),
      (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_select, {
        modelValue: list.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((list).value = $event)),
        multiple: "",
        filterable: "",
        placeholder: "Select an option",
        "popper-class": "custom-popper",
        "filter-method": filterMethod,
        onChange: handleChange
      }, {
        empty: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          _hoisted_6
        ]),
        footer: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", null, [
            (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { onClick: add }, "button1")
          ])
        ]),
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          ((0,runtime_core_esm_bundler/* openBlock */.Wz)(true), (0,runtime_core_esm_bundler/* createElementBlock */.An)(runtime_core_esm_bundler/* Fragment */.ae, null, (0,runtime_core_esm_bundler/* renderList */.mi)(filterOptions.value, (item, index) => {
            return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createBlock */.Az)(_component_el_option, {
              value: item.value,
              key: index
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_4, [
                  (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, [
                    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_el_checkbox, {
                      modelValue: item.checked,
                      "onUpdate:modelValue": $event => ((item.checked) = $event)
                    }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, (0,shared_esm_bundler/* toDisplayString */.WA)(item.label), 1 /* TEXT */),
                  (0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", {
                    class: "close",
                    onClick: (0,runtime_dom_esm_bundler/* withModifiers */.Y7)($event => (remove(item, index)), ["stop"])
                  }, "X", 8 /* PROPS */, _hoisted_5)
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
;// CONCATENATED MODULE: ./src/web/view/elementDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/elementDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(elementDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-0e82a97e"]])

/* harmony default export */ const elementDemo = (__exports__);

/***/ })

}]);