"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[0],{

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

/***/ 94000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ test)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/test/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.ED)("data-v-410a6f4d"),n=n(),(0,runtime_core_esm_bundler/* popScopeId */.ii)(),n)
const _hoisted_1 = { class: "test-demo" }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { class: "test-demo-container-1" }, [
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 层级1 "),
  /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { class: "test-demo-container-1-1" }, [
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 层级3 "),
    /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("button", { type: "button" }, "按钮")
  ])
], -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", { class: "test-demo-container-2" }, "层级2", -1 /* HOISTED */))
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
]

;

/* harmony default export */ const testvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {


return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, _hoisted_4))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/test/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/test/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(testvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-410a6f4d"]])

/* harmony default export */ const test = (__exports__);

/***/ })

}]);