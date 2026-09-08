"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[948],{

/***/ 15948
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ md)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ../node_modules/highlight.js/es/index.js
var es = __webpack_require__(42408);
// EXTERNAL MODULE: ../node_modules/@vueuse/core/index.mjs + 4 modules
var core = __webpack_require__(41548);
// EXTERNAL MODULE: ../node_modules/markdown-it/index.mjs + 75 modules
var markdown_it = __webpack_require__(33983);
// EXTERNAL MODULE: ../node_modules/@traptitech/markdown-it-katex/index.js
var markdown_it_katex = __webpack_require__(43577);
var markdown_it_katex_default = /*#__PURE__*/__webpack_require__.n(markdown_it_katex);
// EXTERNAL MODULE: ../node_modules/markdown-it-link-attributes/index.js
var markdown_it_link_attributes = __webpack_require__(63829);
var markdown_it_link_attributes_default = /*#__PURE__*/__webpack_require__.n(markdown_it_link_attributes);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/md/index.vue?vue&type=script&setup=true&lang=js


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

const { copy } = (0,core/* useClipboard */.iDZ)();
const mdi = new markdown_it/* default */.A({
  linkify: true,
  highlight(code, language) {
    const validLang = !!(language && es/* default */.A.getLanguage(language));
    if (validLang) {
      const lang = language ?? "";
      return highlightBlock(
        es/* default */.A.highlight(code, { language: lang }).value,
        lang
      );
    }
    return highlightBlock(es/* default */.A.highlightAuto(code).value, "");
  },
});
mdi.use((markdown_it_link_attributes_default()), { attrs: { target: "_blank", rel: "noopener" } });
mdi.use((markdown_it_katex_default()), {
  blockClass: "katexmath-block rounded-md p-[10px]",
  errorColor: " #cc0000",
});

const text = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
  const value = "md/n";
  return mdi.render(value);
  //   return value;
});
function highlightBlock(str, lang) {
  return `<pre class="code-block-wrapper"><div class="code-block-header"><span class="code-block-header__lang">${lang}</span><span class="code-block-header__copy">复制代码</span></div><code class="hljs code-block-body ${lang}">${str}</code></pre>`;
}

const formData = (0,reactivity_esm_bundler/* ref */.KR)({
  level: 1,
  id: "0",
  title: "",
  content: "",
  parentId: "0",
});
const mdTree = (0,reactivity_esm_bundler/* ref */.KR)({
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
const parentIdOptions = (0,reactivity_esm_bundler/* ref */.KR)([]);
const idOptions = (0,reactivity_esm_bundler/* ref */.KR)([]);

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

(0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
  // Initialize or fetch data if needed
});

return (_ctx, _cache) => {
  const _component_a_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-input")
  const _component_a_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-form-item")
  const _component_a_form = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-form")
  const _component_a_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("a-button")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_form, {
        layout: "inline",
        model: formData.value,
        name: "basic"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_form_item, {
            label: "级别",
            name: "level"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_input, {
                value: formData.value.level,
                "onUpdate:value": _cache[0] || (_cache[0] = $event => ((formData.value.level) = $event)),
                type: "textarea",
                rows: "2",
                placeholder: ""
              }, null, 8 /* PROPS */, ["value"])
            ]),
            _: 1 /* STABLE */
          }),
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_form_item, {
            label: "标题",
            name: "title"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_input, {
                value: formData.value.title,
                "onUpdate:value": _cache[1] || (_cache[1] = $event => ((formData.value.title) = $event))
              }, null, 8 /* PROPS */, ["value"])
            ]),
            _: 1 /* STABLE */
          }),
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_form_item, {
            label: "内容",
            name: "content"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_input, {
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
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_a_button, { onClick: handleAdd }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[3] || (_cache[3] = [
          (0,runtime_core_esm_bundler/* createTextVNode */.eW)("生成", -1 /* CACHED */)
        ]))]),
        _: 1 /* STABLE */
      })
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: "markdown-body",
          innerHTML: text.value
        }, null, 8 /* PROPS */, _hoisted_5)
      ], 512 /* NEED_PATCH */)
    ])
  ]))
}
}

});
;// ./src/web/view/md/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/md/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(mdvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-6e974330"]])

/* harmony default export */ const md = (__exports__);

/***/ }

}]);