"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[969],{

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

/***/ 85969
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ test)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/test/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "test-demo" }

;

/* harmony default export */ const testvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {


return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [...(_cache[0] || (_cache[0] = [
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "test-demo-container-1" }, [
      (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 层级1 "),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "test-demo-container-1-1" }, [
        (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 层级3 "),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", { type: "button" }, "按钮")
      ])
    ], -1 /* CACHED */),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "test-demo-container-2" }, "层级2", -1 /* CACHED */)
  ]))]))
}
}

});
;// ./src/web/view/test/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/test/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(testvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-410a6f4d"]])

/* harmony default export */ const test = (__exports__);

/***/ }

}]);