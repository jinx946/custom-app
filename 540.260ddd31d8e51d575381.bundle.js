"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[540],{

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

/***/ 26540
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ watermark)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+shared@3.5.32/node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(88516);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/message/index.mjs + 5 modules
var message = __webpack_require__(88192);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/upload/index.mjs + 13 modules
var upload = __webpack_require__(78488);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/button/index.mjs + 8 modules
var components_button = __webpack_require__(70688);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/input/index.mjs + 4 modules
var input = __webpack_require__(10007);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/color-picker/index.mjs + 3 modules
var color_picker = __webpack_require__(39784);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/slider/index.mjs + 14 modules
var slider = __webpack_require__(42841);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/select/index.mjs + 12 modules
var components_select = __webpack_require__(51744);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/switch/index.mjs + 3 modules
var components_switch = __webpack_require__(77063);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/fileUpload/watermark.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "watermark-container" }
const _hoisted_2 = { class: "preview-container" }
const _hoisted_3 = {
  key: 0,
  class: "preview-box"
}
const _hoisted_4 = ["src"]
const _hoisted_5 = { class: "watermark-settings" }
const _hoisted_6 = { class: "setting-item" }
const _hoisted_7 = { class: "setting-item" }
const _hoisted_8 = { class: "setting-item" }
const _hoisted_9 = { class: "setting-item" }
const _hoisted_10 = { class: "setting-item" }
const _hoisted_11 = { class: "setting-item" }
const _hoisted_12 = {
  key: 0,
  class: "setting-item"
}
const _hoisted_13 = {
  key: 1,
  class: "setting-item"
}

;


// 上传的图片

/* harmony default export */ const watermarkvue_type_script_setup_true_lang_js = ({
  __name: 'watermark',
  setup(__props) {

const imageUrl = (0,reactivity_esm_bundler/* ref */.KR)("");
// 原始图片数据
const originalImage = (0,reactivity_esm_bundler/* ref */.KR)(null);
// 水印文本
const watermarkText = (0,reactivity_esm_bundler/* ref */.KR)("Watermark");
// 水印颜色
const watermarkColor = (0,reactivity_esm_bundler/* ref */.KR)("#ffffff");
// 水印大小
const watermarkSize = (0,reactivity_esm_bundler/* ref */.KR)(24);
// 水印透明度
const watermarkOpacity = (0,reactivity_esm_bundler/* ref */.KR)(0.5);
// 水印位置
const watermarkPosition = (0,reactivity_esm_bundler/* ref */.KR)("bottom-right");
// 是否平铺水印
const isTiled = (0,reactivity_esm_bundler/* ref */.KR)(false);
// 水印间距
const watermarkSpacing = (0,reactivity_esm_bundler/* ref */.KR)(100);
// 水印旋转角度
const watermarkRotation = (0,reactivity_esm_bundler/* ref */.KR)(45);
// 处理后的图片
const processedImageUrl = (0,reactivity_esm_bundler/* ref */.KR)("");

// 处理图片，添加水印
const processImage = (file = originalImage.value) => {
  if (!file) return;

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // 创建画布
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        // 绘制原始图片
        ctx.drawImage(img, 0, 0);

        // 设置水印样式
        ctx.font = `${watermarkSize.value}px Arial`;
        ctx.fillStyle = watermarkColor.value;
        ctx.globalAlpha = watermarkOpacity.value;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        if (isTiled.value) {
          // 平铺水印
          const spacing = watermarkSpacing.value;
          const rotation = (watermarkRotation.value * Math.PI) / 180;

          // 计算水印文本宽度
          const textWidth = ctx.measureText(watermarkText.value).width;
          const textHeight = watermarkSize.value;

          // 计算实际间距（考虑旋转后的尺寸）
          const actualSpacing = Math.sqrt((spacing * spacing) / 2);

          // 遍历整个画布，绘制水印
          for (let x = 0; x < img.width; x += actualSpacing) {
            for (let y = 0; y < img.height; y += actualSpacing) {
              ctx.save();
              ctx.translate(x, y);
              ctx.rotate(rotation);
              ctx.fillText(watermarkText.value, 0, 0);
              ctx.restore();
            }
          }
        } else {
          // 单个水印
          // 计算水印位置
          let x, y;
          switch (watermarkPosition.value) {
            case "top-left":
              x = 50;
              y = 50;
              break;
            case "top-right":
              x = img.width - 50;
              y = 50;
              break;
            case "bottom-left":
              x = 50;
              y = img.height - 50;
              break;
            case "bottom-right":
              x = img.width - 50;
              y = img.height - 50;
              break;
            case "center":
              x = img.width / 2;
              y = img.height / 2;
              break;
          }

          // 绘制水印
          ctx.fillText(watermarkText.value, x, y);
        }

        // 转换为图片URL
        const processedUrl = canvas.toDataURL("image/png");
        processedImageUrl.value = processedUrl;
        resolve(processedUrl);
      };
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

// 处理上传的文件
const handleUpload = async (file) => {
  try {
    originalImage.value = file.raw;
    await processImage(file.raw);
    message/* ElMessage */.nk.success("图片处理成功");
  } catch (error) {
    message/* ElMessage */.nk.error("图片处理失败");
    console.error(error);
  }
  return false; // 阻止自动上传
};

// 下载带有水印的图片
const downloadImage = () => {
  if (!processedImageUrl.value) {
    message/* ElMessage */.nk.warning("请先上传并处理图片");
    return;
  }

  const link = document.createElement("a");
  link.href = processedImageUrl.value;
  link.download = `watermarked_${Date.now()}.png`;
  link.click();
  message/* ElMessage */.nk.success("图片下载成功");
};

// 监听水印设置变化，实时更新预览
(0,runtime_core_esm_bundler/* watch */.wB)(
  [
    watermarkText,
    watermarkColor,
    watermarkSize,
    watermarkOpacity,
    watermarkPosition,
    isTiled,
    watermarkSpacing,
    watermarkRotation,
  ],
  async () => {
    if (originalImage.value) {
      await processImage();
    }
  }
);

return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    _cache[15] || (_cache[15] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "图片水印工具", -1 /* CACHED */)),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 图片上传 "),
    (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(upload/* ElUpload */.j5), {
      class: "upload-demo",
      action: "",
      "auto-upload": false,
      "on-change": handleUpload,
      "show-file-list": false,
      accept: "image/*"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_button/* ElButton */.S2), { type: "primary" }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[8] || (_cache[8] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("选择图片", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 预览区域 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      (processedImageUrl.value)
        ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_3, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
              src: processedImageUrl.value,
              alt: "带水印的图片",
              class: "preview-image"
            }, null, 8 /* PROPS */, _hoisted_4)
          ]))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 水印设置 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [
      _cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h3", null, "水印设置", -1 /* CACHED */)),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, [
        _cache[9] || (_cache[9] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "水印文本：", -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(input/* ElInput */.WK), {
          modelValue: watermarkText.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((watermarkText).value = $event)),
          placeholder: "请输入水印文本"
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_7, [
        _cache[10] || (_cache[10] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "水印颜色：", -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(color_picker/* ElColorPicker */.rF), {
          modelValue: watermarkColor.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((watermarkColor).value = $event))
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_8, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "水印大小：" + (0,shared_esm_bundler/* toDisplayString */.v_)(watermarkSize.value) + "px", 1 /* TEXT */),
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(slider/* ElSlider */.B8), {
          modelValue: watermarkSize.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((watermarkSize).value = $event)),
          min: 12,
          max: 72
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_9, [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "水印透明度：" + (0,shared_esm_bundler/* toDisplayString */.v_)(Math.round(watermarkOpacity.value * 100)) + "%", 1 /* TEXT */),
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(slider/* ElSlider */.B8), {
          modelValue: watermarkOpacity.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((watermarkOpacity).value = $event)),
          min: 0,
          max: 1,
          step: 0.1
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_10, [
        _cache[11] || (_cache[11] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "水印位置：", -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_select/* ElSelect */.AV), {
          modelValue: watermarkPosition.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((watermarkPosition).value = $event)),
          disabled: isTiled.value
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_select/* ElOption */.P9), {
              label: "左上角",
              value: "top-left"
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_select/* ElOption */.P9), {
              label: "右上角",
              value: "top-right"
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_select/* ElOption */.P9), {
              label: "左下角",
              value: "bottom-left"
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_select/* ElOption */.P9), {
              label: "右下角",
              value: "bottom-right"
            }),
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_select/* ElOption */.P9), {
              label: "中心",
              value: "center"
            })
          ]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["modelValue", "disabled"])
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_11, [
        _cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "平铺水印：", -1 /* CACHED */)),
        (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_switch/* ElSwitch */.qi), {
          modelValue: isTiled.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => ((isTiled).value = $event))
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      (isTiled.value)
        ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_12, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "水印间距：" + (0,shared_esm_bundler/* toDisplayString */.v_)(watermarkSpacing.value) + "px", 1 /* TEXT */),
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(slider/* ElSlider */.B8), {
              modelValue: watermarkSpacing.value,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = $event => ((watermarkSpacing).value = $event)),
              min: 50,
              max: 400
            }, null, 8 /* PROPS */, ["modelValue"])
          ]))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true),
      (isTiled.value)
        ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_13, [
            (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "旋转角度：" + (0,shared_esm_bundler/* toDisplayString */.v_)(watermarkRotation.value) + "°", 1 /* TEXT */),
            (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(slider/* ElSlider */.B8), {
              modelValue: watermarkRotation.value,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = $event => ((watermarkRotation).value = $event)),
              min: 0,
              max: 360
            }, null, 8 /* PROPS */, ["modelValue"])
          ]))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 下载按钮 "),
    (0,runtime_core_esm_bundler/* createVNode */.bF)((0,reactivity_esm_bundler/* unref */.R1)(components_button/* ElButton */.S2), {
      type: "success",
      onClick: downloadImage,
      disabled: !processedImageUrl.value
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[14] || (_cache[14] = [
        (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 下载带水印的图片 ", -1 /* CACHED */)
      ]))]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["disabled"])
  ]))
}
}

});
;// ./src/web/view/fileUpload/watermark.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/fileUpload/watermark.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(watermarkvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-18759768"]])

/* harmony default export */ const watermark = (__exports__);

/***/ }

}]);