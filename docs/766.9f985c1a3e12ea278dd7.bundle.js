"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[766],{

/***/ 2766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ md)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(66760);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(18568);
// EXTERNAL MODULE: ../node_modules/highlight.js/es/index.js
var es = __webpack_require__(63028);
// EXTERNAL MODULE: ./node_modules/@vueuse/core/index.mjs
var core = __webpack_require__(72072);
// EXTERNAL MODULE: ../node_modules/markdown-it/index.mjs + 75 modules
var markdown_it = __webpack_require__(39192);
// EXTERNAL MODULE: ../node_modules/@traptitech/markdown-it-katex/index.js
var markdown_it_katex = __webpack_require__(72400);
var markdown_it_katex_default = /*#__PURE__*/__webpack_require__.n(markdown_it_katex);
// EXTERNAL MODULE: ../node_modules/markdown-it-link-attributes/index.js
var markdown_it_link_attributes = __webpack_require__(58600);
var markdown_it_link_attributes_default = /*#__PURE__*/__webpack_require__.n(markdown_it_link_attributes);
;// CONCATENATED MODULE: ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/md/index.vue?vue&type=script&setup=true&lang=js


const _withScopeId = n => (_pushScopeId("data-v-6e974330"),n=n(),_popScopeId(),n)
const _hoisted_1 = { class: "md-model" }
const _hoisted_2 = { class: "md-form" }
const _hoisted_3 = { class: "md-preview" }
const _hoisted_4 = {
  ref: "textRef",
  class: "md-preview-content"
}
const _hoisted_5 = ["innerHTML"]

;








/* harmony default export */ const mdvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const { copy } = (0,core/* useClipboard */.UCV)();
const mdi = new markdown_it/* default */.c({
  linkify: true,
  highlight(code, language) {
    const validLang = !!(language && es/* default */.c.getLanguage(language));
    if (validLang) {
      const lang = language ?? "";
      return highlightBlock(
        es/* default */.c.highlight(code, { language: lang }).value,
        lang
      );
    }
    return highlightBlock(es/* default */.c.highlightAuto(code).value, "");
  },
});
mdi.use((markdown_it_link_attributes_default()), { attrs: { target: "_blank", rel: "noopener" } });
mdi.use((markdown_it_katex_default()), {
  blockClass: "katexmath-block rounded-md p-[10px]",
  errorColor: " #cc0000",
});

const text = (0,runtime_core_esm_bundler/* computed */.S6)(() => {
  const value = "md/n";
  return mdi.render(value);
  //   return value;
});
function highlightBlock(str, lang) {
  return `<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${lang}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${lang}">${str}</code></pre>`;
}

const formData = (0,reactivity_esm_bundler/* ref */.IL)({
  level: 1,
  id: "0",
  title: "",
  content: "",
  parentId: "0",
});
const mdTree = (0,reactivity_esm_bundler/* ref */.IL)({
  parentId: "0", //父节点ID
  id: "0", //当前 节点ID
  level: 1, //当前 节点级别
  title: "knowledge", //当前 节点标题
  content: [], //当前 节点内容
  children: [], //子节点
  isLeaf: true, //是否叶子节点
  isExpand: false, //是否展开
  isEdit: false, //是否编辑状态
});
const parentIdOptions = (0,reactivity_esm_bundler/* ref */.IL)([]);
const idOptions = (0,reactivity_esm_bundler/* ref */.IL)([]);

const addNode = (parent) => {
  const node = formData.value;
  // Function to add a new node to the tree
  if (!node || !node.title) return;
  const newNode = {
    id: Date.now(), // Generate a unique ID
    title: node.title,
    content: node.content || [],
    parentId: node.parentId || 0,
    level: node.level || 1,
  };
  parent.children.push(newNode);
  formData.value = {
    level: 1,
    id: 0,
    title: "",
    content: "",
    parentId: 0,
  };
};
const handleAdd = () => {
  const { parentId } = formData.value;
  parentList = parentId.split("-");
  // function

  addNode();
};
const setIdOptions = () => {
  idOptions.value = [];
};

(0,runtime_core_esm_bundler/* onMounted */.u2)(() => {
  // Initialize or fetch data if needed
});

return (_ctx, _cache) => {
  const _component_a_input = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-input")
  const _component_a_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-form-item")
  const _component_a_form = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-form")
  const _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.E1)("a-button")

  return ((0,runtime_core_esm_bundler/* openBlock */.Wz)(), (0,runtime_core_esm_bundler/* createElementBlock */.An)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form, {
        layout: "inline",
        model: formData.value,
        name: "basic"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, {
            label: "级别",
            name: "level"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input, {
                value: formData.value.level,
                "onUpdate:value": _cache[0] || (_cache[0] = $event => ((formData.value.level) = $event)),
                type: "textarea",
                rows: "2",
                placeholder: ""
              }, null, 8 /* PROPS */, ["value"])
            ]),
            _: 1 /* STABLE */
          }),
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, {
            label: "标题",
            name: "title"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input, {
                value: formData.value.title,
                "onUpdate:value": _cache[1] || (_cache[1] = $event => ((formData.value.title) = $event))
              }, null, 8 /* PROPS */, ["value"])
            ]),
            _: 1 /* STABLE */
          }),
          (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_form_item, {
            label: "内容",
            name: "content"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_input, {
                value: formData.value.content,
                "onUpdate:value": _cache[2] || (_cache[2] = $event => ((formData.value.content) = $event)),
                type: "textarea",
                rows: "2",
                placeholder: ""
              }, null, 8 /* PROPS */, ["value"])
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["model"]),
      (0,runtime_core_esm_bundler/* createVNode */.K2)(_component_a_button, { onClick: handleAdd }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.Ql)(() => [
          (0,runtime_core_esm_bundler/* createTextVNode */.mY)("生成")
        ]),
        _: 1 /* STABLE */
      })
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_3, [
      (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", _hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */.QD)("div", {
          class: "markdown-body",
          innerHTML: text.value
        }, null, 8 /* PROPS */, _hoisted_5)
      ], 512 /* NEED_PATCH */)
    ])
  ]))
}
}

});
;// CONCATENATED MODULE: ./src/web/view/md/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(18152);
;// CONCATENATED MODULE: ./src/web/view/md/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.c)(mdvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-6e974330"]])

/* harmony default export */ const md = (__exports__);

/***/ })

}]);