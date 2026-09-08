"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[200],{

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

/***/ 70200
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ aiDemo)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.32/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(88516);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.5.32/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(41914);
// EXTERNAL MODULE: ./node_modules/.pnpm/@element-plus+icons-vue@2.3.2_vue@3.5.32/node_modules/@element-plus/icons-vue/dist/index.js
var dist = __webpack_require__(4852);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/message/index.mjs + 5 modules
var message = __webpack_require__(88192);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/aiDemo/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "chat-container" }
const _hoisted_2 = { class: "chat-header" }
const _hoisted_3 = {
  key: 0,
  class: "config-panel"
}
const _hoisted_4 = { class: "avatar" }
const _hoisted_5 = { class: "message-content" }
const _hoisted_6 = { class: "message-header" }
const _hoisted_7 = { class: "role" }
const _hoisted_8 = { class: "time" }
const _hoisted_9 = ["innerHTML"]
const _hoisted_10 = {
  key: 0,
  class: "loading-indicator"
}
const _hoisted_11 = { class: "chat-input" }

;



// 配置

/* harmony default export */ const aiDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const config = (0,reactivity_esm_bundler/* reactive */.Kh)({
  url: "/ai-api/v1/chat/completions",
  key: "sk-ph4tSNBx4hfvwYiuoZOwOqIYnWhbYPGWZC18hBQPB08QhDY5",
  model: "gpt-5.5",
  maxTokens: 4096,
  temperature: 0.7,
});

// 状态
const showConfig = (0,reactivity_esm_bundler/* ref */.KR)(true);
const messages = (0,reactivity_esm_bundler/* ref */.KR)([]);
const inputMessage = (0,reactivity_esm_bundler/* ref */.KR)("");
const isLoading = (0,reactivity_esm_bundler/* ref */.KR)(false);
const messagesContainer = (0,reactivity_esm_bundler/* ref */.KR)(null);

// 保存配置
const saveConfig = () => {
  localStorage.setItem("aiChatConfig", JSON.stringify(config));
  message/* ElMessage */.nk.success("配置已保存");
};

// 加载配置
(0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
  const saved = localStorage.getItem("aiChatConfig");
  if (saved) {
    Object.assign(config, JSON.parse(saved));
  }
});

// 发送消息
const sendMessage = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return;

  const userMessage = {
    role: "user",
    content: inputMessage.value.trim(),
    time: new Date().toLocaleTimeString("zh-CN"),
  };
  messages.value.push(userMessage);
  inputMessage.value = "";

  await (0,runtime_core_esm_bundler/* nextTick */.dY)();
  scrollToBottom();

  isLoading.value = true;

  try {
    const response = await fetch(config.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.key}`,
      },
      body: JSON.stringify({
        model: config.model,
        messages: messages.value.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        max_tokens: config.maxTokens,
        temperature: config.temperature,
      }),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      const aiMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
        time: new Date().toLocaleTimeString("zh-CN"),
      };
      messages.value.push(aiMessage);
    } else {
      throw new Error(data.error?.message || "未知错误");
    }
  } catch (error) {
    message/* ElMessage */.nk.error("请求失败: " + error.message);
    const errorMessage = {
      role: "assistant",
      content: `❌ 请求失败: ${error.message}`,
      time: new Date().toLocaleTimeString("zh-CN"),
    };
    messages.value.push(errorMessage);
  } finally {
    isLoading.value = false;
    await (0,runtime_core_esm_bundler/* nextTick */.dY)();
    scrollToBottom();
  }
};

// 滚动到底部
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// 格式化消息（支持简单的markdown）
const formatMessage = (content) => {
  return content
    .replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre class="code-block"><code>$2</code></pre>'
    )
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
};

return (_ctx, _cache) => {
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-button")
  const _component_el_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-input")
  const _component_el_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-form-item")
  const _component_el_col = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-col")
  const _component_el_option = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-option")
  const _component_el_select = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-select")
  const _component_el_row = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-row")
  const _component_el_input_number = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-input-number")
  const _component_el_slider = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-slider")
  const _component_el_form = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-form")
  const _component_el_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-icon")
  const _component_el_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-spinner")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      _cache[7] || (_cache[7] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", { class: "page-title" }, "AI Chat", -1 /* CACHED */)),
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
        type: "primary",
        onClick: _cache[0] || (_cache[0] = $event => (showConfig.value = !showConfig.value))
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
          (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(showConfig.value ? "隐藏配置" : "显示配置"), 1 /* TEXT */)
        ]),
        _: 1 /* STABLE */
      })
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 配置面板 "),
    (showConfig.value)
      ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_3, [
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form, {
            model: config,
            "label-width": "100px"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_row, { gutter: 20 }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, { span: 8 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { label: "API URL" }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, {
                            modelValue: config.url,
                            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((config.url) = $event)),
                            placeholder: "请输入API地址",
                            class: "config-input"
                          }, null, 8 /* PROPS */, ["modelValue"])
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 1 /* STABLE */
                  }),
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, { span: 8 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { label: "API Key" }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, {
                            modelValue: config.key,
                            "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((config.key) = $event)),
                            placeholder: "请输入API密钥",
                            type: "password",
                            class: "config-input"
                          }, null, 8 /* PROPS */, ["modelValue"])
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 1 /* STABLE */
                  }),
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, { span: 8 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { label: "Model" }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_select, {
                            modelValue: config.model,
                            "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((config.model) = $event)),
                            placeholder: "选择模型",
                            class: "config-select"
                          }, {
                            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
                                label: "DeepSeek-R1",
                                value: "deepseek-r1"
                              }),
                              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
                                label: "DeepSeek-R1-Chat",
                                value: "deepseek-r1-chat"
                              }),
                              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
                                label: "GPT-4o",
                                value: "gpt-4o"
                              }),
                              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
                                label: "GPT-4",
                                value: "gpt-4"
                              }),
                              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_option, {
                                label: "gpt-5.5",
                                value: "gpt-5.5"
                              })
                            ]),
                            _: 1 /* STABLE */
                          }, 8 /* PROPS */, ["modelValue"])
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                _: 1 /* STABLE */
              }),
              (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_row, { gutter: 20 }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, { span: 8 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { label: "Max Tokens" }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input_number, {
                            modelValue: config.maxTokens,
                            "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((config.maxTokens) = $event)),
                            min: 100,
                            max: 16000,
                            class: "config-input"
                          }, null, 8 /* PROPS */, ["modelValue"])
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 1 /* STABLE */
                  }),
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, { span: 8 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { label: "Temperature" }, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_slider, {
                            modelValue: config.temperature,
                            "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((config.temperature) = $event)),
                            min: 0,
                            max: 2,
                            step: 0.1,
                            class: "config-slider"
                          }, null, 8 /* PROPS */, ["modelValue"])
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 1 /* STABLE */
                  }),
                  (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_col, { span: 8 }, {
                    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, null, {
                        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                            type: "success",
                            onClick: saveConfig,
                            class: "save-btn"
                          }, {
                            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[8] || (_cache[8] = [
                              (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 保存配置 ", -1 /* CACHED */)
                            ]))]),
                            _: 1 /* STABLE */
                          })
                        ]),
                        _: 1 /* STABLE */
                      })
                    ]),
                    _: 1 /* STABLE */
                  })
                ]),
                _: 1 /* STABLE */
              })
            ]),
            _: 1 /* STABLE */
          }, 8 /* PROPS */, ["model"])
        ]))
      : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 聊天消息区域 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
      class: "chat-messages",
      ref_key: "messagesContainer",
      ref: messagesContainer
    }, [
      ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(messages.value, (message, index) => {
        return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
          key: index,
          class: (0,shared_esm_bundler/* normalizeClass */.C4)(['message-item', message.role])
        }, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [
            (message.role === 'user')
              ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_el_icon, {
                  key: 0,
                  class: "user-icon"
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                    (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(dist.User))
                  ]),
                  _: 1 /* STABLE */
                }))
              : ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_el_icon, {
                  key: 1,
                  class: "ai-icon"
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                    (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(dist.Bot))
                  ]),
                  _: 1 /* STABLE */
                }))
          ]),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)(message.role === "user" ? "用户" : "AI"), 1 /* TEXT */),
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_8, (0,shared_esm_bundler/* toDisplayString */.v_)(message.time), 1 /* TEXT */)
            ]),
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
              class: "message-body",
              innerHTML: formatMessage(message.content)
            }, null, 8 /* PROPS */, _hoisted_9)
          ])
        ], 2 /* CLASS */))
      }), 128 /* KEYED_FRAGMENT */)),
      (isLoading.value)
        ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_10, [
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_spinner, { size: "medium" }),
            _cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", null, "AI正在思考...", -1 /* CACHED */))
          ]))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
    ], 512 /* NEED_PATCH */),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 输入区域 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_11, [
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, {
        modelValue: inputMessage.value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((inputMessage).value = $event)),
        placeholder: "输入消息...",
        onKeyup: (0,runtime_dom_esm_bundler/* withKeys */.jR)(sendMessage, ["enter"]),
        disabled: isLoading.value,
        class: "message-input"
      }, null, 8 /* PROPS */, ["modelValue", "disabled"]),
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
        type: "primary",
        onClick: sendMessage,
        disabled: !inputMessage.value.trim() || isLoading.value,
        class: "send-btn"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_icon, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
              (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(dist.Send))
            ]),
            _: 1 /* STABLE */
          }),
          _cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 发送 ", -1 /* CACHED */))
        ]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["disabled"])
    ])
  ]))
}
}

});
;// ./src/web/view/aiDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/aiDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(aiDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-675cae28"]])

/* harmony default export */ const aiDemo = (__exports__);

/***/ }

}]);