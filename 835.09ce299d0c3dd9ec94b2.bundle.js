"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[835],{

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

/***/ 29835
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ antDemo)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.32/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(88516);
// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons-vue@7.0.1_vue@3.5.32/node_modules/@ant-design/icons-vue/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(4854);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/antDemo/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "ant" }

;

const blockContent = "整块文档";

/* harmony default export */ const antDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {


return (_ctx, _cache) => {
  const _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-button")
  const _component_a_typography_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-typography-title")
  const _component_a_typography_paragraph = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-typography-paragraph")
  const _component_a_typography_text = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-typography-text")
  const _component_a_typography_link = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-typography-link")
  const _component_a_typography = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-typography")
  const _component_a_divider = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-divider")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_button, {
      type: "primary",
      icon: (0,runtime_core_esm_bundler.h)((0,reactivity_esm_bundler/* unref */.R1)(SearchOutlined/* default */.A))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[0] || (_cache[0] = [
        (0,runtime_core_esm_bundler/* createTextVNode */.eW)("带图标的普通按钮", -1 /* CACHED */)
      ]))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["icon"]),
    (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[1] || (_cache[1] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("默认一级标题", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[2] || (_cache[2] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 段落一 ", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 段落二 ", -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_text, { strong: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[3] || (_cache[3] = [
                (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 粗体 ", -1 /* CACHED */)
              ]))]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_title, { level: 2 }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[5] || (_cache[5] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("二级标题", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            _cache[8] || (_cache[8] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 代码块标记( ", -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_text, { code: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[6] || (_cache[6] = [
                (0,runtime_core_esm_bundler/* createTextVNode */.eW)("code1", -1 /* CACHED */)
              ]))]),
              _: 1 /* STABLE */
            }),
            _cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" and ", -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_text, { code: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[7] || (_cache[7] = [
                (0,runtime_core_esm_bundler/* createTextVNode */.eW)("code2", -1 /* CACHED */)
              ]))]),
              _: 1 /* STABLE */
            }),
            _cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" ) ", -1 /* CACHED */))
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("ul", null, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("li", null, [
                (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_link, { href: "/#/home" }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[11] || (_cache[11] = [
                    (0,runtime_core_esm_bundler/* createTextVNode */.eW)("a标签 超链接", -1 /* CACHED */)
                  ]))]),
                  _: 1 /* STABLE */
                })
              ])
            ])
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_text, { mark: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[12] || (_cache[12] = [
                (0,runtime_core_esm_bundler/* createTextVNode */.eW)("mark标记", -1 /* CACHED */)
              ]))]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("blockquote", null, (0,shared_esm_bundler/* toDisplayString */.v_)(blockContent)),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("pre", null, (0,shared_esm_bundler/* toDisplayString */.v_)(blockContent))
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_divider, { orientation: "left" }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[13] || (_cache[13] = [
        (0,runtime_core_esm_bundler/* createTextVNode */.eW)("分割线 居左", -1 /* CACHED */)
      ]))]),
      _: 1 /* STABLE */
    }),
    _cache[14] || (_cache[14] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "分割线垂直", -1 /* CACHED */)),
    (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_divider, { type: "vertical" }),
    _cache[15] || (_cache[15] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "分割线垂直", -1 /* CACHED */))
  ]))
}
}

});
;// ./src/web/view/antDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/antDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(antDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-0ff18347"]])

/* harmony default export */ const antDemo = (__exports__);

/***/ }

}]);