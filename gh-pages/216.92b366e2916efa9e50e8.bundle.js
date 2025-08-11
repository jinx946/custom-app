"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[216],{

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

/***/ 67216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ antDemo)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(98752);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons-vue/es/icons/SearchOutlined.js + 1 modules
var SearchOutlined = __webpack_require__(33600);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/antDemo/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.ED)("data-v-0ff18347"),n=n(),(0,runtime_core_esm_bundler/* popScopeId */.ii)(),n)
const _hoisted_1 = { class: "ant" }
const _hoisted_2 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, "分割线垂直", -1 /* HOISTED */))
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.QD)("span", null, "分割线垂直", -1 /* HOISTED */))

;

const blockContent = "整块文档";

/* harmony default export */ const antDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {


return (_ctx, _cache) => {
  const _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-button")
  const _component_a_typography_title = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-typography-title")
  const _component_a_typography_paragraph = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-typography-paragraph")
  const _component_a_typography_text = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-typography-text")
  const _component_a_typography_link = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-typography-link")
  const _component_a_typography = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-typography")
  const _component_a_divider = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-divider")

  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, {
      type: "primary",
      icon: (0,runtime_core_esm_bundler.h)((0,reactivity_esm_bundler/* unref */.KV)(SearchOutlined/* default */.c))
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        (0,runtime_core_esm_bundler/* createTextVNode */.mY)("带图标的普通按钮")
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["icon"]),
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("默认一级标题")
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 段落一 ")
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 段落二 "),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_text, { strong: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 粗体 ")
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_title, { level: 2 }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)("二级标题")
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" 代码块标记( "),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_text, { code: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createTextVNode */.mY)("code1")
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" and "),
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_text, { code: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createTextVNode */.mY)("code2")
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createTextVNode */.mY)(" ) ")
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createElementVNode */.QD)("ul", null, [
              (0,runtime_core_esm_bundler/* createElementVNode */.QD)("li", null, [
                (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_link, { href: "/#/home" }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                    (0,runtime_core_esm_bundler/* createTextVNode */.mY)("a标签 超链接")
                  ]),
                  _: 1 /* STABLE */
                })
              ])
            ])
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_text, { mark: "" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
                (0,runtime_core_esm_bundler/* createTextVNode */.mY)("mark标记")
              ]),
              _: 1 /* STABLE */
            })
          ]),
          _: 1 /* STABLE */
        }),
        (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_typography_paragraph, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
            (0,runtime_core_esm_bundler/* createElementVNode */.QD)("blockquote", null, (0,shared_esm_bundler/* toDisplayString */.WA)(blockContent)),
            (0,runtime_core_esm_bundler/* createElementVNode */.QD)("pre", null, (0,shared_esm_bundler/* toDisplayString */.WA)(blockContent))
          ]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_divider, { orientation: "left" }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
        (0,runtime_core_esm_bundler/* createTextVNode */.mY)("分割线 居左")
      ]),
      _: 1 /* STABLE */
    }),
    _hoisted_2,
    (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_divider, { type: "vertical" }),
    _hoisted_3
  ]))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/antDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/antDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(antDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-0ff18347"]])

/* harmony default export */ const antDemo = (__exports__);

/***/ })

}]);