"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[18],{

/***/ 85018
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ home)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-router@4.6.4_vue@3.5.32/node_modules/vue-router/dist/vue-router.mjs + 1 modules
var vue_router = __webpack_require__(5131);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/home/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "home" }

;


/* harmony default export */ const homevue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const router = (0,vue_router/* useRouter */.rd)();

const routerList = (0,reactivity_esm_bundler/* reactive */.Kh)([
  { name: 'threeDemo', path: 'three' },
  { name: 'cesiumDemo', path: 'cesium' },
]);
const count = (0,reactivity_esm_bundler/* ref */.KR)(0);
function increment() {
  count.value++;
}
function routerGo(path) {
  console.log('path: ', path);
  router.push({
    name: path,
  });
}
(0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
  console.log(`The initial count is ${count.value}.`);
});

return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    _cache[0] || (_cache[0] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 首页 ", -1 /* CACHED */)),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" <el-button\r\n      v-for=\"(item, index) in routerList\"\r\n      :key=\"index\"\r\n      class=\"btn\"\r\n      @click=\"routerGo(item.path)\"\r\n      >{{ item.name }}</el-button\r\n    > ")
  ]))
}
}

});
;// ./src/web/view/home/index.vue?vue&type=script&setup=true&lang=js
 
;// ./src/web/view/home/index.vue



;

const __exports__ = homevue_type_script_setup_true_lang_js;

/* harmony default export */ const home = (__exports__);

/***/ }

}]);