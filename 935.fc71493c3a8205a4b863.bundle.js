"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[935],{

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

/***/ 69935
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loginDemo)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-dom@3.5.32/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var runtime_dom_esm_bundler = __webpack_require__(41914);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.32/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(88516);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/message/index.mjs + 5 modules
var message = __webpack_require__(88192);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/loginDemo/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "login-demo" }
const _hoisted_2 = { class: "login-container" }
const _hoisted_3 = { class: "login-box" }
const _hoisted_4 = {
  key: 0,
  class: "api-log"
}
const _hoisted_5 = { class: "log-time" }
const _hoisted_6 = { class: "log-message" }

;



/* harmony default export */ const loginDemovue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const loginFormRef = (0,reactivity_esm_bundler/* ref */.KR)(null);
const loading = (0,reactivity_esm_bundler/* ref */.KR)(false);
const apiLog = (0,reactivity_esm_bundler/* ref */.KR)([]);

// 登录表单数据
const loginForm = (0,reactivity_esm_bundler/* reactive */.Kh)({
  username: '',
  password: '',
  rememberMe: false
});

// 表单验证规则
const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
  ]
};

// 添加接口日志
const addApiLog = (status, message) => {
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  apiLog.value.unshift({
    time,
    status,
    message
  });
  // 只保留最近 10 条日志
  if (apiLog.value.length > 10) {
    apiLog.value.pop();
  }
};

// 模拟登录接口
const mockLoginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    addApiLog('pending', `正在调用登录接口...`);
    
    setTimeout(() => {
      // 模拟接口延迟 1-2 秒
      const delay = Math.random() * 1000 + 1000;
      
      setTimeout(() => {
        // 模拟验证逻辑
        if (username === 'admin' && password === '123456') {
          addApiLog('success', '登录成功！获取到用户信息');
          resolve({
            code: 200,
            message: '登录成功',
            data: {
              token: 'mock_token_' + Date.now(),
              username: username,
              role: 'admin',
              avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
            }
          });
        } else if (username === 'user' && password === '123456') {
          addApiLog('success', '登录成功！获取到用户信息');
          resolve({
            code: 200,
            message: '登录成功',
            data: {
              token: 'mock_token_' + Date.now(),
              username: username,
              role: 'user',
              avatar: 'https://avatars.githubusercontent.com/u/2?v=4'
            }
          });
        } else {
          addApiLog('error', '登录失败：用户名或密码错误');
          reject({
            code: 401,
            message: '用户名或密码错误'
          });
        }
      }, delay);
    }, 100);
  });
};

// 处理登录
const handleLogin = async () => {
  if (!loginFormRef.value) return;

  try {
    // 表单验证
    await loginFormRef.value.validate();
    
    loading.value = true;
    addApiLog('pending', `发起登录请求: ${loginForm.username}`);

    // 调用模拟接口
    const result = await mockLoginApi(loginForm.username, loginForm.password);
    
    loading.value = false;
    
    // 登录成功
    message/* ElMessage */.nk.success({
      message: `欢迎回来，${result.data.username}！`,
      duration: 3000
    });
    
    console.log('登录成功，返回数据：', result);
    
    // 如果勾选了记住我，保存到 localStorage
    if (loginForm.rememberMe) {
      localStorage.setItem('rememberedUsername', loginForm.username);
    }
    
  } catch (error) {
    loading.value = false;
    
    if (error.code === 401) {
      message/* ElMessage */.nk.error(error.message);
    } else {
      message/* ElMessage */.nk.error('表单验证失败');
    }
    
    console.error('登录失败：', error);
  }
};

// 页面加载时，如果有记住的用户名，自动填充
const rememberedUsername = localStorage.getItem('rememberedUsername');
if (rememberedUsername) {
  loginForm.username = rememberedUsername;
  loginForm.rememberMe = true;
}

return (_ctx, _cache) => {
  const _component_el_input = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-input")
  const _component_el_form_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-form-item")
  const _component_el_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-checkbox")
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-button")
  const _component_el_form = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-form")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [
        _cache[6] || (_cache[6] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "login-header" }, [
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "用户登录"),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "Welcome Back")
        ], -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form, {
          ref_key: "loginFormRef",
          ref: loginFormRef,
          model: loginForm,
          rules: loginRules,
          class: "login-form"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { prop: "username" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, {
                  modelValue: loginForm.username,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((loginForm.username) = $event)),
                  placeholder: "请输入用户名",
                  "prefix-icon": "User",
                  size: "large",
                  clearable: ""
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, { prop: "password" }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_input, {
                  modelValue: loginForm.password,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((loginForm.password) = $event)),
                  type: "password",
                  placeholder: "请输入密码",
                  "prefix-icon": "Lock",
                  size: "large",
                  "show-password": "",
                  onKeyup: (0,runtime_dom_esm_bundler/* withKeys */.jR)(handleLogin, ["enter"])
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_checkbox, {
                  modelValue: loginForm.rememberMe,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((loginForm.rememberMe) = $event))
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[3] || (_cache[3] = [
                    (0,runtime_core_esm_bundler/* createTextVNode */.eW)("记住我", -1 /* CACHED */)
                  ]))]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["modelValue"])
              ]),
              _: 1 /* STABLE */
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_form_item, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
                  type: "primary",
                  size: "large",
                  class: "login-button",
                  loading: loading.value,
                  onClick: handleLogin
                }, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
                    (0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(loading.value ? '登录中...' : '登 录'), 1 /* TEXT */)
                  ]),
                  _: 1 /* STABLE */
                }, 8 /* PROPS */, ["loading"])
              ]),
              _: 1 /* STABLE */
            }),
            _cache[4] || (_cache[4] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "login-tips" }, [
              (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("p", null, "测试账号：admin / 123456")
            ], -1 /* CACHED */))
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["model"]),
        (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 模拟接口调用状态展示 "),
        (apiLog.value.length > 0)
          ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_4, [
              _cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "接口调用日志", -1 /* CACHED */)),
              ((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)(apiLog.value, (log, index) => {
                return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", {
                  key: index,
                  class: "log-item"
                }, [
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.v_)(log.time), 1 /* TEXT */),
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", {
                    class: (0,shared_esm_bundler/* normalizeClass */.C4)(['log-status', log.status])
                  }, (0,shared_esm_bundler/* toDisplayString */.v_)(log.status), 3 /* TEXT, CLASS */),
                  (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("span", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)(log.message), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]))
          : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
      ])
    ])
  ]))
}
}

});
;// ./src/web/view/loginDemo/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/loginDemo/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(loginDemovue_type_script_setup_true_lang_js, [['__scopeId',"data-v-36071a87"]])

/* harmony default export */ const loginDemo = (__exports__);

/***/ }

}]);