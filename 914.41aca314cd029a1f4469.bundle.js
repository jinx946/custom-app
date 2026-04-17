"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[914],{

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

/***/ 72914
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tool)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.5.32/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(41914);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.32/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(88516);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/tool/index.vue?vue&type=template&id=1367c9ce&scoped=true


const _hoisted_1 = { class: "tool-container" }
const _hoisted_2 = { class: "app-container" }
const _hoisted_3 = {
  class: "history-bar",
  id: "historyBar"
}
const _hoisted_4 = { class: "tabs-bar" }
const _hoisted_5 = {
  id: "diffTab",
  class: "tab-content active"
}
const _hoisted_6 = { class: "input-area" }
const _hoisted_7 = { class: "input-card" }
const _hoisted_8 = { class: "input-card" }
const _hoisted_9 = { class: "action-bar" }
const _hoisted_10 = { class: "chunk-config" }
const _hoisted_11 = { class: "diff-output-area" }
const _hoisted_12 = { class: "diff-panel" }
const _hoisted_13 = ["innerHTML"]
const _hoisted_14 = { class: "diff-panel" }
const _hoisted_15 = ["innerHTML"]
const _hoisted_16 = { class: "footer-info" }
const _hoisted_17 = {
  class: "status-msg",
  id: "perfStatus"
}
const _hoisted_18 = {
  id: "jsonTab",
  class: "tab-content"
}
const _hoisted_19 = { class: "json-tool-container" }
const _hoisted_20 = { class: "json-input-header" }
const _hoisted_21 = { class: "json-actions" }
const _hoisted_22 = { style: {"margin-top":"18px","display":"flex","justify-content":"space-between","align-items":"baseline"} }
const _hoisted_23 = ["innerHTML"]
const _hoisted_24 = {
  id: "base64Tab",
  class: "tab-content"
}
const _hoisted_25 = { class: "json-tool-container" }
const _hoisted_26 = { class: "json-input-header" }
const _hoisted_27 = { class: "json-actions" }
const _hoisted_28 = { class: "tool-container" }
const _hoisted_29 = { class: "upload-preview-area" }
const _hoisted_30 = { class: "preview-container" }
const _hoisted_31 = {
  class: "preview-box",
  id: "previewBox"
}
const _hoisted_32 = {
  key: 0,
  class: "image-placeholder",
  id: "imagePlaceholder"
}
const _hoisted_33 = ["src"]
const _hoisted_34 = { class: "result-area" }
const _hoisted_35 = { class: "result-header" }
const _hoisted_36 = { class: "action-buttons" }
const _hoisted_37 = { class: "meta-row" }
const _hoisted_38 = { id: "dataUriPrefix" }
const _hoisted_39 = {
  id: "charCountSpan",
  class: "char-count"
}
const _hoisted_40 = { id: "errorText" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 历史记录栏（全局） "),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [
        _cache[27] || (_cache[27] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", { class: "history-label" }, "📜 历史记录", -1 /* CACHED */)),
        _cache[28] || (_cache[28] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
          class: "history-tags",
          id: "historyTagsContainer"
        }, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", { style: {"color":"#94a3b8","font-size":"0.7rem"} }, "暂无记录，对比或格式化JSON后自动保存")
        ], -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
          id: "clearAllHistoryBtn",
          class: "clear-history",
          title: "清空所有历史",
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.clearAllHistory && $options.clearAllHistory(...args)))
        }, " 🗑️ 清空 ")
      ]),
      (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" TAB 头部 "),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
          class: "tab-btn active",
          "data-tab": "diffTab",
          onClick: _cache[1] || (_cache[1] = $event => ($options.switchTab('diffTab')))
        }, " 🔍 文本差异对比 "),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
          class: "tab-btn",
          "data-tab": "jsonTab",
          onClick: _cache[2] || (_cache[2] = $event => ($options.switchTab('jsonTab')))
        }, " 📦 文本转JSON & 格式化 "),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
          class: "tab-btn",
          "data-tab": "base64Tab",
          onClick: _cache[3] || (_cache[3] = $event => ($options.switchTab('base64Tab')))
        }, "🖼️ 图片转Base64")
      ]),
      (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" ========================= TAB 1 : 差异对比区域 ========================= "),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_7, [
            _cache[29] || (_cache[29] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "input-header" }, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "📄 文本 A (原始版本)"),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
                id: "charCountA",
                class: "char-counter"
              }, "0 字符")
            ], -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("textarea", {
              id: "textA",
              class: "json-textarea",
              placeholder: "粘贴 JSON 或超长文本...\n支持大型JSON、日志等",
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($data.textA) = $event)),
              onInput: _cache[5] || (_cache[5] = (...args) => ($options.updateCharCounts && $options.updateCharCounts(...args)))
            }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
              [runtime_dom_esm_bundler/* vModelText */.Jo, $data.textA]
            ])
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [
            _cache[30] || (_cache[30] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "input-header" }, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "✏️ 文本 B (对比版本)"),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
                id: "charCountB",
                class: "char-counter"
              }, "0 字符")
            ], -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("textarea", {
              id: "textB",
              class: "json-textarea",
              placeholder: "粘贴对比文本...",
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => (($data.textB) = $event)),
              onInput: _cache[7] || (_cache[7] = (...args) => ($options.updateCharCounts && $options.updateCharCounts(...args)))
            }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
              [runtime_dom_esm_bundler/* vModelText */.Jo, $data.textB]
            ])
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_9, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
            id: "compareBtn",
            class: "compare-btn",
            onClick: _cache[8] || (_cache[8] = (...args) => ($options.performCompare && $options.performCompare(...args)))
          }, [...(_cache[31] || (_cache[31] = [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "⚡", -1 /* CACHED */),
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 高亮差异 (智能分块) ", -1 /* CACHED */)
          ]))]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_10, [
            _cache[33] || (_cache[33] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "📦 分块策略", -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("select", {
              id: "chunkSizeSelect",
              "onUpdate:modelValue": _cache[9] || (_cache[9] = $event => (($data.chunkSize) = $event))
            }, [...(_cache[32] || (_cache[32] = [
              (0,runtime_core_esm_bundler/* createStaticVNode */.Fv)("<option value=\"500\" data-v-1367c9ce>小分块 (500字符)</option><option value=\"1000\" selected data-v-1367c9ce>中分块 (1000字符)</option><option value=\"2000\" data-v-1367c9ce>大分块 (2000字符)</option><option value=\"4000\" data-v-1367c9ce>超大分块 (4000字符)</option><option value=\"0\" data-v-1367c9ce>自动模式 (动态分块)</option>", 5)
            ]))], 512 /* NEED_PATCH */), [
              [runtime_dom_esm_bundler/* vModelSelect */.u1, $data.chunkSize]
            ])
          ])
        ]),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_11, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_12, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
              class: "diff-panel-header",
              id: "leftHeaderClick",
              onClick: _cache[11] || (_cache[11] = $event => ($options.locateFirstByType('delete')))
            }, [
              _cache[34] || (_cache[34] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [
                (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 🔴 文本A 独有差异 "),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", { style: {"font-size":"10px"} }, "(点击下方删除项可定位)")
              ], -1 /* CACHED */)),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                id: "leftStat",
                class: "stat-badge del-stat",
                onClick: _cache[10] || (_cache[10] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)($event => ($options.locateFirstByType('delete')), ["stop"]))
              }, "删除: -")
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
              id: "leftDiffPanel",
              class: "diff-viewer",
              innerHTML: $data.leftDiffContent
            }, null, 8 /* PROPS */, _hoisted_13)
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_14, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
              class: "diff-panel-header",
              id: "rightHeaderClick",
              onClick: _cache[13] || (_cache[13] = $event => ($options.locateFirstByType('insert')))
            }, [
              _cache[35] || (_cache[35] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [
                (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 🟢 文本B 独有差异 "),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", { style: {"font-size":"10px"} }, "(点击下方新增项可定位)")
              ], -1 /* CACHED */)),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                id: "rightStat",
                class: "stat-badge ins-stat",
                onClick: _cache[12] || (_cache[12] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)($event => ($options.locateFirstByType('insert')), ["stop"]))
              }, "新增: -")
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
              id: "rightDiffPanel",
              class: "diff-viewer",
              innerHTML: $data.rightDiffContent
            }, null, 8 /* PROPS */, _hoisted_15)
          ])
        ]),
        _cache[37] || (_cache[37] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "legend" }, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
              class: "diff-del",
              style: {"display":"inline-block","padding":"0 6px"}
            }, "删除示例"),
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 删除线+红底: A独有 ")
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
              class: "diff-ins",
              style: {"display":"inline-block","padding":"0 6px"}
            }, "新增示例"),
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 绿色底色: B独有(新增) ")
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, " ✨ 点击统计标签(删除:x / 新增:x) → 定位到第一个差异项，并滚动视图 ")
        ], -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_16, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_17, (0,shared_esm_bundler/* toDisplayString */.v_)($data.perfStatus), 1 /* TEXT */),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
            class: "progress-bar-container",
            id: "progressContainer",
            style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({ display: $data.showProgress ? 'block' : 'none' })
          }, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
              class: "progress-fill",
              id: "progressFill",
              style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({ width: $data.progressPercent + '%' })
            }, null, 4 /* STYLE */)
          ], 4 /* STYLE */),
          _cache[36] || (_cache[36] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, "💡 对比后自动保存至历史记录", -1 /* CACHED */))
        ])
      ]),
      (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" ========================= TAB 2 : 文本转JSON & 格式化 ========================= "),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_18, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_19, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_20, [
            _cache[38] || (_cache[38] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", { style: {"font-size":"1.2rem"} }, "📋 原始文本 / JSON字符串", -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_21, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                id: "formatJsonBtn",
                class: "btn-secondary",
                onClick: _cache[14] || (_cache[14] = (...args) => ($options.formatAndSaveJson && $options.formatAndSaveJson(...args)))
              }, " ✨ 格式化 & 美化JSON "),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                id: "clearJsonBtn",
                class: "btn-secondary",
                onClick: _cache[15] || (_cache[15] = (...args) => ($options.clearJsonInput && $options.clearJsonInput(...args)))
              }, "🗑️ 清空")
            ])
          ]),
          (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("textarea", {
            id: "rawJsonInput",
            class: "json-editor",
            rows: "8",
            placeholder: "粘贴JSON字符串或普通文本，点击“格式化”将尝试解析并展示美观JSON。\n示例: {\"name\":\"差异工具\",\"version\":\"2.0\",\"features\":[\"定位\",\"历史记录\"]}",
            "onUpdate:modelValue": _cache[16] || (_cache[16] = $event => (($data.rawJson) = $event))
          }, null, 512 /* NEED_PATCH */), [
            [runtime_dom_esm_bundler/* vModelText */.Jo, $data.rawJson]
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_22, [
            _cache[39] || (_cache[39] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", { class: "badge-format" }, "📎 格式化结果 (只读/可复制)")
            ], -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
              id: "copyJsonBtn",
              class: "btn-secondary",
              style: {"padding":"4px 16px"},
              onClick: _cache[17] || (_cache[17] = (...args) => ($options.copyJsonResult && $options.copyJsonResult(...args)))
            }, " 📋 复制结果 ")
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
            id: "jsonPreviewArea",
            class: "json-preview",
            innerHTML: $data.jsonPreviewContent
          }, null, 8 /* PROPS */, _hoisted_23)
        ])
      ]),
      (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" ========================= TAB 3 : 图片转Base64 ========================= "),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_24, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_25, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_26, [
            _cache[40] || (_cache[40] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", { style: {"font-size":"1.2rem"} }, "🖼️ 图片转Base64", -1 /* CACHED */)),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_27, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                id: "clearBase64Btn",
                class: "btn-secondary",
                onClick: _cache[18] || (_cache[18] = (...args) => ($options.clearBase64Content && $options.clearBase64Content(...args)))
              }, "🗑️ 清空")
            ])
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_28, [
            (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 左侧：上传与预览 "),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_29, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                class: "drop-zone",
                id: "dropZone",
                onClick: _cache[20] || (_cache[20] = (...args) => ($options.triggerFileSelect && $options.triggerFileSelect(...args))),
                onDragover: _cache[21] || (_cache[21] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => ($options.onDragOver && $options.onDragOver(...args)), ["prevent"])),
                onDragleave: _cache[22] || (_cache[22] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => ($options.onDragLeave && $options.onDragLeave(...args)), ["prevent"])),
                onDrop: _cache[23] || (_cache[23] = (0,runtime_dom_esm_bundler/* withModifiers */.D$)((...args) => ($options.onDrop && $options.onDrop(...args)), ["prevent"]))
              }, [
                _cache[41] || (_cache[41] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "upload-icon" }, "📸", -1 /* CACHED */)),
                _cache[42] || (_cache[42] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "点击或拖拽图片至此区域", -1 /* CACHED */)),
                _cache[43] || (_cache[43] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", { class: "small-hint" }, "支持 JPG, PNG, GIF, WEBP, SVG, BMP 等", -1 /* CACHED */)),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
                  type: "file",
                  id: "fileInput",
                  accept: "image/*",
                  class: "file-input-hidden",
                  onChange: _cache[19] || (_cache[19] = (...args) => ($options.onFileInputChange && $options.onFileInputChange(...args)))
                }, null, 32 /* NEED_HYDRATION */)
              ], 32 /* NEED_HYDRATION */),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_30, [
                _cache[45] || (_cache[45] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "preview-title" }, [
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "🖼️ 图片预览")
                ], -1 /* CACHED */)),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_31, [
                  (!$data.imagePreviewSrc)
                    ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_32, [...(_cache[44] || (_cache[44] = [
                        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "✨ 暂无图片", -1 /* CACHED */),
                        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", { style: {"font-size":"12px"} }, "上传后显示缩略图", -1 /* CACHED */)
                      ]))]))
                    : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true),
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
                    id: "imagePreview",
                    src: $data.imagePreviewSrc,
                    style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({ display: $data.imagePreviewSrc ? 'block' : 'none' }),
                    alt: "预览图"
                  }, null, 12 /* STYLE, PROPS */, _hoisted_33)
                ]),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                  id: "fileMetaInfo",
                  class: "file-info",
                  style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({ display: $data.fileMetaInfo ? 'inline-block' : 'none' })
                }, (0,shared_esm_bundler/* toDisplayString */.v_)($data.fileMetaInfo), 5 /* TEXT, STYLE */)
              ])
            ]),
            (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 右侧：base64 结果区域 "),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_34, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_35, [
                _cache[46] || (_cache[46] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "📋 Base64 编码结果", -1 /* CACHED */)),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_36, [
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    class: "btn-copy",
                    id: "copyBtn",
                    title: "复制Base64文本",
                    onClick: _cache[24] || (_cache[24] = (...args) => ($options.copyToClipboard && $options.copyToClipboard(...args)))
                  }, " 📋 复制 "),
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("button", {
                    class: "btn-download",
                    id: "downloadBtn",
                    title: "下载为 .base64 文本文件",
                    onClick: _cache[25] || (_cache[25] = (...args) => ($options.downloadBase64AsText && $options.downloadBase64AsText(...args)))
                  }, " 💾 下载TXT ")
                ])
              ]),
              (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("textarea", {
                id: "base64Output",
                class: "base64-textarea",
                readonly: "",
                placeholder: "等待图片上传，Base64 数据将显示在此处...",
                "onUpdate:modelValue": _cache[26] || (_cache[26] = $event => (($data.base64Output) = $event))
              }, null, 512 /* NEED_PATCH */), [
                [runtime_dom_esm_bundler/* vModelText */.Jo, $data.base64Output]
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_37, [
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_38, (0,shared_esm_bundler/* toDisplayString */.v_)($data.dataUriPrefix), 1 /* TEXT */),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_39, (0,shared_esm_bundler/* toDisplayString */.v_)($data.charCount), 1 /* TEXT */)
              ]),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
                id: "errorMessage",
                class: "error-message",
                style: (0,shared_esm_bundler/* normalizeStyle */.Tr)({ display: $data.errorMessage ? 'flex' : 'none' })
              }, [
                _cache[47] || (_cache[47] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" ⚠️ ", -1 /* CACHED */)),
                (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_40, (0,shared_esm_bundler/* toDisplayString */.v_)($data.errorMessage), 1 /* TEXT */)
              ], 4 /* STYLE */)
            ])
          ]),
          _cache[48] || (_cache[48] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "footer-info" }, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, "⚡ 图片数据仅在本地转换，不会上传至任何服务器"),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", null, "💡 转换后自动保存至历史记录")
          ], -1 /* CACHED */))
        ])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      id: "toastMsg",
      class: (0,shared_esm_bundler/* normalizeClass */.C4)(["success-toast", { show: $options.showToast }]),
      ref: "toast"
    }, (0,shared_esm_bundler/* toDisplayString */.v_)($data.toastMessage), 3 /* TEXT, CLASS */)
  ]))
}
;// ./src/web/view/tool/index.vue?vue&type=template&id=1367c9ce&scoped=true

;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/tool/index.vue?vue&type=script&lang=js


/* harmony default export */ const toolvue_type_script_lang_js = ({
  name: 'ToolView',
  data() {
    return {
      // 文本对比相关
      textA: '',
      textB: '',
      chunkSize: '1000',
      leftDiffContent: '等待对比',
      rightDiffContent: '等待对比',
      perfStatus: '✅ 就绪',
      showProgress: false,
      progressPercent: 0,
      isComparing: false,
      currentAbortFlag: false,
      lastOperations: null,
      locateNum: 0,
      
      // JSON 相关
      rawJson: '',
      jsonPreviewContent: '✨ 点击“格式化”按钮，将显示结构化的JSON内容',
      
      // Base64 相关
      imagePreviewSrc: '',
      base64Output: '',
      fileMetaInfo: '',
      dataUriPrefix: '📄 格式: DataURL (Base64)',
      charCount: '字符数: 0',
      errorMessage: '',
      
      // 历史记录
      historyRecords: [],
      db: null,
      
      // Toast 相关
      showToast: false,
      toastMessage: '',
      
      // 当前激活的Tab
      activeTab: 'diffTab'
    };
  },
  mounted() {
    this.initIndexedDB().then(() => {
      this.loadHistory();
    });
    this.setupHeaderLocate();
    this.bindClickLocate();
    
    // 示例填充
    if (!this.textA && !this.textB) {
      this.textA = '{"project":"diff工具","version":"1.0","author":"张三"}';
      this.textB = '{"project":"diff工具","version":"2.0","author":"李四","feature":"历史记录"}';
      this.updateCharCounts();
    }
  },
  methods: {
    // ---------- 历史记录管理 (使用 indexedDB) ----------
    initIndexedDB() {
      const DB_NAME = "textDiffTool";
      const DB_VERSION = 1;
      const STORE_NAME = "history";
      
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
          console.error("IndexedDB 打开失败:", event.target.error);
          reject(event.target.error);
        };

        request.onsuccess = (event) => {
          this.db = event.target.result;
          resolve(this.db);
        };

        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
            store.createIndex("type", "type", { unique: false });
            store.createIndex("timestamp", "timestamp", { unique: false });
          }
        };
      });
    },

    loadHistory() {
      if (!this.db) return;
      
      const transaction = this.db.transaction("history", "readonly");
      const store = transaction.objectStore("history");
      const request = store.getAll();

      request.onsuccess = (event) => {
        this.historyRecords = event.target.result || [];
        // 按时间戳倒序排序
        this.historyRecords.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
        // 限制最多20条记录
        if (this.historyRecords.length > 20) {
          this.historyRecords = this.historyRecords.slice(0, 20);
          // 保存裁剪后的记录
          this.saveHistory();
        }
        this.renderHistoryTags();
      };

      request.onerror = () => {
        this.historyRecords = [];
        this.renderHistoryTags();
      };
    },

    saveHistory() {
      if (!this.db) return;
      
      if (this.historyRecords.length > 20) {
        this.historyRecords = this.historyRecords.slice(0, 20);
      }

      const transaction = this.db.transaction("history", "readwrite");
      const store = transaction.objectStore("history");

      // 先清空所有记录
      store.clear();

      // 然后添加所有记录
      this.historyRecords.forEach((record) => {
        store.put(record);
      });

      transaction.oncomplete = () => {
        this.renderHistoryTags();
      };
    },

    addDiffHistory(textA, textB, chunkSize) {
      const nameA = textA.length > 40 ? textA.substring(0, 40) + "..." : textA;
      const nameB = textB.length > 30 ? textB.substring(0, 30) + "..." : textB;
      const record = {
        id: Date.now() + "_diff_" + Math.random(),
        type: "diff",
        name: `对比: ${nameA} ↔ ${nameB}`,
        timestamp: new Date().toLocaleString(),
        data: { textA, textB, chunkSize: chunkSize || 1000 },
      };
      this.historyRecords.unshift(record);
      this.saveHistory();
    },

    addJsonHistory(rawJson, formattedJson) {
      const preview = rawJson.length > 50 ? rawJson.substring(0, 50) + "..." : rawJson;
      const record = {
        id: Date.now() + "_json_" + Math.random(),
        type: "json",
        name: `JSON: ${preview}`,
        timestamp: new Date().toLocaleString(),
        data: { rawJson, formattedJson },
      };
      this.historyRecords.unshift(record);
      this.saveHistory();
    },

    addBase64History(fileName, base64Data) {
      const preview = fileName || "图片转换";
      const record = {
        id: Date.now() + "_base64_" + Math.random(),
        type: "base64",
        name: `Base64: ${preview}`,
        timestamp: new Date().toLocaleString(),
        data: { fileName, base64Data },
      };
      this.historyRecords.unshift(record);
      this.saveHistory();
    },

    renderHistoryTags() {
      const container = document.getElementById("historyTagsContainer");
      if (!container) return;
      if (this.historyRecords.length === 0) {
        container.innerHTML = '<span style="color:#94a3b8; font-size:0.7rem;">暂无记录，对比或格式化JSON后自动保存</span>';
        return;
      }
      const tagsHtml = this.historyRecords
        .map((record) => {
          const icon = record.type === "diff" ? "🔁" : record.type === "json" ? "📋" : "🖼️";
          return `<div class="history-tag" data-id="${record.id}">
                      <span class="tag-icon">${icon}</span>
                      <span>${this.escapeHtmlSimple(record.name)}</span>
                      <span class="tag-time">${record.timestamp}</span>
                  </div>`;
        })
        .join("");
      container.innerHTML = tagsHtml;
      document.querySelectorAll(".history-tag").forEach((tag) => {
        tag.addEventListener("click", (e) => {
          e.stopPropagation();
          const id = tag.getAttribute("data-id");
          const record = this.historyRecords.find((r) => r.id === id);
          if (record) this.restoreRecord(record);
        });
      });
    },

    escapeHtmlSimple(str) {
      if (!str) return "";
      return str.replace(/[&<>]/g, (m) =>
        m === "&" ? "&amp;" : m === "<" ? "&lt;" : "&gt;"
      );
    },

    restoreRecord(record) {
      if (record.type === "diff") {
        this.switchTab("diffTab");
        const { textA, textB, chunkSize } = record.data;
        this.textA = textA;
        this.textB = textB;
        if (chunkSize) {
          this.chunkSize = String(chunkSize);
        }
        this.updateCharCounts();
        this.perfStatus = `📂 已加载历史对比记录，点击"高亮差异"重新对比`;
        this.leftDiffContent = "<span>⚡ 历史已加载，点击对比按钮查看差异</span>";
        this.rightDiffContent = "<span>⚡ 历史已加载</span>";
        document.getElementById("leftStat").innerHTML = "删除: -";
        document.getElementById("rightStat").innerHTML = "新增: -";
      } else if (record.type === "json") {
        this.switchTab("jsonTab");
        const { rawJson, formattedJson } = record.data;
        this.rawJson = rawJson;
        if (formattedJson && formattedJson !== "") {
          this.jsonPreviewContent = this.escapeHtmlSimple(formattedJson);
        } else {
          this.jsonPreviewContent = '✨ 已加载原始JSON，点击"格式化"重新解析';
        }
      } else if (record.type === "base64") {
        this.switchTab("base64Tab");
        const { fileName, base64Data } = record.data;
        if (base64Data) {
          this.base64Output = base64Data;
          this.updateBase64CharCount(base64Data);
          // 更新预览
          this.imagePreviewSrc = base64Data;
          // 更新文件信息
          this.fileMetaInfo = `📁 ${fileName || "历史图片"}`;
        }
      }
    },

    clearAllHistory() {
      if (confirm("确定清空所有历史记录吗？")) {
        this.historyRecords = [];
        this.saveHistory();
        this.perfStatus = "🗑️ 历史已清空";
        setTimeout(() => {
          if (this.perfStatus.includes("历史已清空"))
            this.perfStatus = "✅ 就绪";
        }, 1500);
      }
    },

    // 文本对比相关方法
    updateCharCounts() {
      const charCountA = document.getElementById("charCountA");
      const charCountB = document.getElementById("charCountB");
      if (charCountA) {
        charCountA.innerText = `${Array.from(this.textA).length.toLocaleString()} 字符`;
      }
      if (charCountB) {
        charCountB.innerText = `${Array.from(this.textB).length.toLocaleString()} 字符`;
      }
    },

    setProgress(percent, visible = true) {
      this.showProgress = visible;
      this.progressPercent = Math.min(100, Math.max(0, percent));
    },

    computeDiffOnBlock(orig, mod) {
      const arrOrig = Array.from(orig),
        arrMod = Array.from(mod);
      const n = arrOrig.length,
        m = arrMod.length;
      if (n === 0 && m === 0) return [];
      if (n === 0) return arrMod.map((ch) => ({ type: "insert", char: ch }));
      if (m === 0) return arrOrig.map((ch) => ({ type: "delete", char: ch }));
      const dp = Array(n + 1);
      for (let i = 0; i <= n; i++) {
        dp[i] = new Uint16Array(m + 1);
        dp[i][0] = i;
      }
      for (let j = 0; j <= m; j++) dp[0][j] = j;
      for (let i = 1; i <= n; i++) {
        const aChar = arrOrig[i - 1];
        for (let j = 1; j <= m; j++) {
          if (aChar === arrMod[j - 1]) dp[i][j] = dp[i - 1][j - 1];
          else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
        }
      }
      const ops = [];
      let i = n,
        j = m;
      while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && arrOrig[i - 1] === arrMod[j - 1]) {
          ops.unshift({ type: "equal", char: arrOrig[i - 1] });
          i--;
          j--;
        } else if (j > 0 && (i === 0 || dp[i][j - 1] <= dp[i - 1][j])) {
          ops.unshift({ type: "insert", char: arrMod[j - 1] });
          j--;
        } else if (i > 0) {
          ops.unshift({ type: "delete", char: arrOrig[i - 1] });
          i--;
        } else break;
      }
      return ops;
    },

    async chunkedDiff(textA, textB, chunkSize, onProgress) {
      const arrA = Array.from(textA),
        arrB = Array.from(textB);
      const lenA = arrA.length,
        lenB = arrB.length;
      if (lenA <= chunkSize && lenB <= chunkSize) {
        if (onProgress) onProgress(100);
        return this.computeDiffOnBlock(textA, textB);
      }
      const maxLen = Math.max(lenA, lenB);
      const totalChunks = Math.ceil(maxLen / chunkSize);
      let allOps = [];
      let lastAPos = 0,
        lastBPos = 0;
      for (let chunkIdx = 0; chunkIdx < totalChunks; chunkIdx++) {
        if (this.currentAbortFlag) return null;
        let endA = Math.min(lenA, lastAPos + chunkSize);
        let endB = Math.min(lenB, lastBPos + chunkSize);
        if (chunkIdx === totalChunks - 1) {
          endA = lenA;
          endB = lenB;
        }
        const subA = arrA.slice(lastAPos, endA).join("");
        const subB = arrB.slice(lastBPos, endB).join("");
        const subOps = this.computeDiffOnBlock(subA, subB);
        allOps.push(...subOps);
        let consumedA = 0,
          consumedB = 0;
        for (const op of subOps) {
          if (op.type === "equal" || op.type === "delete") consumedA++;
          if (op.type === "equal" || op.type === "insert") consumedB++;
        }
        lastAPos += consumedA;
        lastBPos += consumedB;
        const progress = Math.min(
          100,
          Math.floor(((chunkIdx + 1) / totalChunks) * 100)
        );
        if (onProgress) onProgress(progress);
        if (chunkIdx % 3 === 0) await new Promise((r) => setTimeout(r, 0));
      }
      return allOps;
    },

    escapeHtml(str) {
      return str.replace(/[&<>]/g, (m) =>
        m === "&" ? "&amp;" : m === "<" ? "&lt;" : "&gt;"
      );
    },

    locateFirstByType(type) {
      const panel = type === "delete" ? document.getElementById("leftDiffPanel") : document.getElementById("rightDiffPanel");
      const selector = type === "delete" ? ".diff-del" : ".diff-ins";
      const elems = panel.querySelectorAll(selector);
      if (elems.length === 0) {
        this.perfStatus = `ℹ️ 没有找到${type === "delete" ? "删除" : "新增"}差异项`;
        return;
      }
      if (this.locateNum >= elems.length) this.locateNum = 0;
      this.locateNum++;
      const firstElem = elems[this.locateNum - 1];
      if (firstElem) {
        // 滚动父容器 (panel本身有滚动条)
        firstElem.scrollIntoView({ behavior: "smooth", block: "center" });
        firstElem.classList.add("highlight-glow");
        setTimeout(() => firstElem.classList.remove("highlight-glow"), 800);
        this.perfStatus = `🎯 已定位到首个${type === "delete" ? "删除" : "新增"}差异`;
        setTimeout(() => {
          if (this.perfStatus.includes("已定位"))
            this.perfStatus = "✅ 就绪";
        }, 1500);
      } else {
        this.perfStatus = `ℹ️ 没有找到${type === "delete" ? "删除" : "新增"}差异项`;
      }
    },

    renderDiffPanels(operations) {
      if (!operations || operations.length === 0) {
        this.leftDiffContent = '<span class="diff-equal">✨ 完全一致</span>';
        this.rightDiffContent = '<span class="diff-equal">✨ 完全一致</span>';
        document.getElementById("leftStat").innerHTML = "删除: 0";
        document.getElementById("rightStat").innerHTML = "新增: 0";
        return;
      }
      // 左视图 仅 delete + equal
      let leftResult = "",
        leftBuffer = "",
        leftLastType = null;
      let delCount = 0;
      const flushLeft = () => {
        if (leftBuffer === "") return;
        if (leftLastType === "equal")
          leftResult += `<span class="diff-equal">${this.escapeHtml(leftBuffer)}</span>`;
        else if (leftLastType === "delete") {
          leftResult += `<span class="diff-del" data-del-idx="${delCount}">${this.escapeHtml(leftBuffer)}</span>`;
          delCount++;
        }
        leftBuffer = "";
      };
      for (const op of operations) {
        if (op.type === "insert") continue;
        if (leftLastType !== op.type && leftBuffer !== "") flushLeft();
        leftLastType = op.type;
        leftBuffer += op.char;
      }
      flushLeft();
      // 右视图
      let rightResult = "",
        rightBuffer = "",
        rightLastType = null;
      let insCount = 0;
      const flushRight = () => {
        if (rightBuffer === "") return;
        if (rightLastType === "equal")
          rightResult += `<span class="diff-equal">${this.escapeHtml(rightBuffer)}</span>`;
        else if (rightLastType === "insert") {
          rightResult += `<span class="diff-ins" data-ins-idx="${insCount}">${this.escapeHtml(rightBuffer)}</span>`;
          insCount++;
        }
        rightBuffer = "";
      };
      for (const op of operations) {
        if (op.type === "delete") continue;
        if (rightLastType !== op.type && rightBuffer !== "") flushRight();
        rightLastType = op.type;
        rightBuffer += op.char;
      }
      flushRight();

      this.leftDiffContent = leftResult || '<span class="diff-equal">无A独有内容</span>';
      this.rightDiffContent = rightResult || '<span class="diff-equal">无B独有内容</span>';
      document.getElementById("leftStat").innerHTML = `删除: ${delCount}`;
      document.getElementById("rightStat").innerHTML = `新增: ${insCount}`;
    },

    bindClickLocate() {
      // 移除旧监听避免重复，使用事件委托更稳
      const leftPanel = document.getElementById("leftDiffPanel");
      const rightPanel = document.getElementById("rightDiffPanel");
      if (leftPanel) {
        leftPanel.removeEventListener("click", this.leftItemClickHandler);
        leftPanel.addEventListener("click", this.leftItemClickHandler.bind(this));
      }
      if (rightPanel) {
        rightPanel.removeEventListener("click", this.rightItemClickHandler);
        rightPanel.addEventListener("click", this.rightItemClickHandler.bind(this));
      }
    },

    leftItemClickHandler(e) {
      let target = e.target.closest(".diff-del");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("highlight-glow");
        setTimeout(() => target.classList.remove("highlight-glow"), 800);
        this.perfStatus = "📍 已定位删除项";
      }
    },

    rightItemClickHandler(e) {
      let target = e.target.closest(".diff-ins");
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
        target.classList.add("highlight-glow");
        setTimeout(() => target.classList.remove("highlight-glow"), 800);
        this.perfStatus = "📍 已定位新增项";
      }
    },

    async performCompare() {
      if (this.isComparing) return;
      this.isComparing = true;
      this.currentAbortFlag = false;
      this.perfStatus = "⏳ 处理中...";
      this.leftDiffContent = "<span>⏳ 处理中...</span>";
      this.rightDiffContent = "<span>⏳ 请稍候</span>";
      this.setProgress(0, true);
      const textA = this.textA;
      const textB = this.textB;
      let rawChunkSize = parseInt(this.chunkSize, 10);
      if (rawChunkSize === 0) {
        const maxLen = Math.max(textA.length, textB.length);
        rawChunkSize = maxLen > 50000 ? 3000 : maxLen > 20000 ? 2000 : maxLen > 8000 ? 1200 : 800;
        this.perfStatus = `🔧 自动分块: ${rawChunkSize}`;
      }
      const start = performance.now();
      try {
        const ops = await this.chunkedDiff(textA, textB, rawChunkSize, (p) =>
          this.setProgress(p, true)
        );
        if (this.currentAbortFlag || !ops) throw new Error("中断");
        this.lastOperations = ops;
        this.renderDiffPanels(ops);
        this.bindClickLocate();
        const elapsed = (performance.now() - start).toFixed(1);
        const delStat = document.getElementById("leftStat").innerText;
        const insStat = document.getElementById("rightStat").innerText;
        this.perfStatus = `✅ 完成 (${elapsed}ms) ${delStat} ${insStat}`;
        this.setProgress(100, false);
        this.addDiffHistory(textA, textB, rawChunkSize);
      } catch (e) {
        this.leftDiffContent = '<span style="color:#b91c1c;">❌ 对比出错</span>';
        this.perfStatus = "⚠️ 对比失败";
      } finally {
        this.isComparing = false;
        this.setProgress(0, false);
      }
    },

    setupHeaderLocate() {
      const leftHeader = document.getElementById("leftHeaderClick");
      const rightHeader = document.getElementById("rightHeaderClick");
      if (leftHeader) leftHeader.style.cursor = "pointer";
      if (rightHeader) rightHeader.style.cursor = "pointer";
    },

    // JSON 相关方法
    formatAndSaveJson() {
      const raw = this.rawJson;
      if (raw.trim() === "") {
        this.jsonPreviewContent = "⚠️ 请输入JSON内容";
        return;
      }
      try {
        const parsed = JSON.parse(raw);
        const pretty = JSON.stringify(parsed, null, 2);
        this.jsonPreviewContent = this.escapeHtmlSimple(pretty);
        this.addJsonHistory(raw, pretty);
      } catch (e) {
        this.jsonPreviewContent = `❌ JSON解析失败: ${e.message}`;
      }
    },

    copyJsonResult() {
      const content = this.jsonPreviewContent;
      if (!content || content.includes("JSON解析失败")) {
        this.showToast("无有效内容可复制", true);
      } else {
        navigator.clipboard.writeText(content).then(() => {
          this.showToast("✅ JSON结果已复制到剪贴板");
        }).catch(() => {
          this.showToast("复制失败，请手动选择复制", true);
        });
      }
    },

    clearJsonInput() {
      this.rawJson = "";
      this.jsonPreviewContent = "✨ 已清空，点击格式化查看结果";
    },

    // Base64 相关方法
    showToast(message, isError = false) {
      this.toastMessage = message || (isError ? "❌ 操作失败" : "✅ 已复制到剪贴板");
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },

    hideError() {
      this.errorMessage = "";
    },

    showError(message) {
      this.errorMessage = message;
    },

    updateBase64CharCount(base64Str) {
      const len = base64Str.length;
      this.charCount = `字符数: ${len.toLocaleString()}`;
    },

    resetImagePreview() {
      this.imagePreviewSrc = "";
      this.fileMetaInfo = "";
    },

    clearBase64AndMeta() {
      this.base64Output = "";
      this.updateBase64CharCount("");
      this.dataUriPrefix = "📄 格式: DataURL (Base64)";
      this.fileMetaInfo = "";
    },

    processImageFile(file) {
      this.hideError();
      if (!file) {
        return;
      }
      // 检查是否为图片类型
      if (!file.type.startsWith("image/")) {
        this.showError("请选择一个有效的图片文件（JPEG, PNG, GIF, WebP, SVG等）");
        this.clearBase64AndMeta();
        this.resetImagePreview();
        return;
      }
      // 可选大小限制: 最大 30MB
      const maxSize = 30 * 1024 * 1024; // 30MB
      if (file.size > maxSize) {
        this.showError(
          `图片过大 (${(file.size / (1024 * 1024)).toFixed(
            1
          )}MB) ，请选择小于 30MB 的图片`
        );
        this.clearBase64AndMeta();
        this.resetImagePreview();
        return;
      }

      // 显示文件名和大小
      const fileSizeKB = (file.size / 1024).toFixed(1);
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      const sizeStr = file.size > 1024 * 1024 ? `${fileSizeMB} MB` : `${fileSizeKB} KB`;
      this.fileMetaInfo = `📁 ${file.name}  ·  ${sizeStr}  ·  ${file.type}`;

      const reader = new FileReader();
      reader.onload = (evt) => {
        const dataURL = evt.target.result; // 完整的 base64 data url
        // 更新文本域
        this.base64Output = dataURL;
        this.updateBase64CharCount(dataURL);
        // 在 meta 区域展示简短说明
        const mime = file.type;
        this.dataUriPrefix = `📄 MIME: ${mime}  |  DataURI 长度: ${dataURL.length}`;

        // 更新图片预览
        this.imagePreviewSrc = dataURL;

        // 保存到历史记录
        this.addBase64History(file.name, dataURL);
      };
      reader.onerror = () => {
        this.showError("文件读取失败，请重试或更换图片");
        this.clearBase64AndMeta();
        this.resetImagePreview();
      };
      reader.readAsDataURL(file);
    },

    triggerFileSelect() {
      document.getElementById("fileInput").click();
    },

    onFileInputChange(event) {
      const files = event.target.files;
      if (files && files.length > 0) {
        this.processImageFile(files[0]);
      } else {
        this.clearBase64AndMeta();
        this.resetImagePreview();
        this.hideError();
      }
      // 清空 input value，以便再次选择同一个文件可触发change
      event.target.value = "";
    },

    onDragOver(e) {
      e.preventDefault();
      document.getElementById("dropZone").classList.add("drag-over");
    },

    onDragLeave(e) {
      e.preventDefault();
      document.getElementById("dropZone").classList.remove("drag-over");
    },

    onDrop(e) {
      e.preventDefault();
      document.getElementById("dropZone").classList.remove("drag-over");
      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
          this.processImageFile(file);
        } else {
          this.showError("拖拽的文件不是图片格式，请上传图片文件");
          this.clearBase64AndMeta();
          this.resetImagePreview();
        }
      }
    },

    async copyToClipboard() {
      const textToCopy = this.base64Output;
      if (!textToCopy || textToCopy.trim() === "") {
        this.showToast("没有可复制的内容，请先上传图片", true);
        return;
      }
      try {
        await navigator.clipboard.writeText(textToCopy);
        this.showToast("✅ Base64 已复制到剪贴板");
      } catch (err) {
        // 降级方案
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        const success = document.execCommand("copy");
        document.body.removeChild(textarea);
        if (success) {
          this.showToast("✅ Base64 已复制到剪贴板");
        } else {
          this.showToast("复制失败，请手动选择复制", true);
        }
      }
    },

    downloadBase64AsText() {
      const content = this.base64Output;
      if (!content || content.trim() === "") {
        this.showToast("没有Base64数据可下载，请先上传图片", true);
        return;
      }
      // 提取文件名: 从图片元信息尝试获取或默认
      let fileName = "base64-result";
      if (this.fileMetaInfo) {
        const match = this.fileMetaInfo.match(/📁 (.+?) ·/);
        if (match && match[1]) {
          fileName = match[1].replace(/\.[^/.]+$/, "");
        }
      }
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${fileName}-base64.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      this.showToast("✅ Base64 已下载为文本文件");
    },

    clearBase64Content() {
      this.clearBase64AndMeta();
      this.resetImagePreview();
      this.hideError();
      this.showToast("✅ 已清空Base64内容");
    },

    // Tab 切换方法
    switchTab(activeId) {
      this.activeTab = activeId;
      document.querySelectorAll(".tab-content").forEach((tab) => tab.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"));
      document.getElementById(activeId).classList.add("active");
      const btn = Array.from(document.querySelectorAll(".tab-btn")).find(
        (b) => b.getAttribute("data-tab") === activeId
      );
      if (btn) btn.classList.add("active");
    }
  }
});

;// ./src/web/view/tool/index.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/tool/index.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(toolvue_type_script_lang_js, [['render',render],['__scopeId',"data-v-1367c9ce"]])

/* harmony default export */ const tool = (__exports__);

/***/ }

}]);