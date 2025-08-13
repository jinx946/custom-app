"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[240],{

/***/ 90240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(65216);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/home/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "home" }

;


/* harmony default export */ const homevue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const router = (0,vue_router/* useRouter */.KX)();

const routerList = (0,reactivity_esm_bundler/* reactive */.cB)([
  { name: 'threeDemo', path: 'three' },
  { name: 'cesiumDemo', path: 'cesium' },
]);
const count = (0,reactivity_esm_bundler/* ref */.IL)(0);
function increment() {
  count.value++;
}
function routerGo(path) {
  console.log('path: ', path);
  router.push({
    name: path,
  });
}
(0,runtime_core_esm_bundler/* onMounted */.u2)(() => {
  console.log(`The initial count is ${count.value}.`);
});

return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 首页 "),
    (0,runtime_core_esm_bundler/* createCommentVNode */.g1)(" <el-button\n      v-for=\"(item, index) in routerList\"\n      :key=\"index\"\n      class=\"btn\"\n      @click=\"routerGo(item.path)\"\n      >{{ item.name }}</el-button\n    > ")
  ]))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/home/index.vue?vue&type=script&setup=true&lang=js
 
;// CONCATENATED MODULE: ./src/web/view/home/index.vue



;

const __exports__ = homevue_type_script_setup_true_lang_js;

/* harmony default export */ const home = (__exports__);

/***/ })

}]);