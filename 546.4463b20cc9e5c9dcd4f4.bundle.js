"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[546],{

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

/***/ 27546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ transform)
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
;// ./src/web/view/transform/finally.js
/**
 * 转换 weesDesignTimeJson 中的每个子项
 * 先扁平化 data 字段，确保 name 和 comment 能正确提取到外层
 * 然后将除 shape, name, comment, id 之外的字段都放入 value 对象中
 * @param {Array} weesDesignTimeJson - 原始数据数组
 * @returns {Array} 转换后的数据数组
 */
function transformWeesDesignTimeJson(weesDesignTimeJson) {
  if (!Array.isArray(weesDesignTimeJson)) {
    throw new Error("weesDesignTimeJson must be an array");
  }

  return weesDesignTimeJson.map((item) => {
    // 保留的字段列表
    const keepFields = ["shape", "name", "comment", "id", "parent"];

    // 创建新对象，先复制保留字段
    const result = {};
    const value = {};

    // 首先处理 data 字段：如果存在 data 对象，将其内容提取出来
    let processedItem = item;
    if (item.value && item.value.data && typeof item.value.data === "object") {
      // 将 data 中的内容合并到 value 层
      processedItem = {
        ...item,
        value: {
          ...item.value.data,
        },
      };
    } else if (item.data && typeof item.data === "object") {
      // 如果 data 直接在 item 层级
      processedItem = {
        ...item,
        ...item.data,
      };
      delete processedItem.data;
    }

    // 遍历处理后的对象的所有字段
    for (const [key, val] of Object.entries(processedItem)) {
      if (keepFields.includes(key)) {
        // 保留字段直接赋值
        result[key] = val;
      } else if (key === "value") {
        // value 字段的内容需要进一步处理
        if (val && typeof val === "object") {
          // 将 value 中的所有字段都放入新的 value 对象
          for (const [subKey, subVal] of Object.entries(val)) {
            value[subKey] = subVal;
          }
        }
      } else {
        // 其他字段放入 value 对象
        value[key] = val;
      }
    }

    // 如果有任何字段被放入 value，则添加 value 字段
    if (Object.keys(value).length > 0) {
      result.value = value;
    }

    return result;
  });
}

/**
 * 转换整个 methodList 中的所有 weesDesignTimeJson
 * @param {Object} data - 包含 methodList 的完整数据对象
 * @returns {Object} 转换后的数据对象
 */
function transformAllMethods(data) {
  if (!data || !data.methodList || !Array.isArray(data.methodList)) {
    throw new Error("Invalid data structure: methodList is required");
  }

  const result = JSON.parse(JSON.stringify(data)); // 深拷贝

  result.methodList = result.methodList.map((method) => {
    if (method.weesDesignTimeJson && Array.isArray(method.weesDesignTimeJson)) {
      method.weesDesignTimeJson = transformWeesDesignTimeJson(
        method.weesDesignTimeJson
      );
    }
    return method;
  });

  return result;
}

// ==================== 使用示例 ====================

// 假设 jsonData 是您提供的完整 JSON 数据
// const transformedData = transformAllMethods(jsonData);

// 或者只转换单个 method 的 weesDesignTimeJson
// const transformedItems = transformWeesDesignTimeJson(method.weesDesignTimeJson);

// ==================== 测试示例 ====================

// 测试单个 item 的转换
const testItem = {
  shape: "DateTime",
  id: "5a13a371-4949-41cf-a231-cd3d1a10b60a",
  name: "DateTime_GetCurrentTime",
  type: "DateTime",
  dateTimeInfo: {
    dateTimeType: "Current",
    dateTimeList: [
      { name: "Source", type: "Value", value: "System" },
      { name: "Format", type: "Value", value: "yyyy-MM-dd HH:mm:ss.SSS" },
    ],
  },
  outputParameters: [
    { name: "Result", scope: "Local", type: "String", isArray: false },
  ],
};

console.log("转换前:", testItem);
console.log("转换后:", transformWeesDesignTimeJson([testItem])[0]);

/* 转换后的结果示例：
{
  "shape": "DateTime",
  "id": "5a13a371-4949-41cf-a231-cd3d1a10b60a",
  "name": "DateTime_GetCurrentTime",
  "value": {
    "type": "DateTime",
    "dateTimeInfo": {
      "dateTimeType": "Current",
      "dateTimeList": [
        { "name": "Source", "type": "Value", "value": "System" },
        { "name": "Format", "type": "Value", "value": "yyyy-MM-dd HH:mm:ss.SSS" }
      ]
    },
    "outputParameters": [
      { "name": "Result", "scope": "Local", "type": "String", "isArray": false }
    ]
  }
}
*/

;// ./src/web/view/transform/transform.js


function transformMethodJson(rawJson) {
  /**
   * 递归提取字段中的value值
   * 如果字段有value属性，直接取其value值；否则返回原值
   */
  function extractValue(obj) {
    if (obj === null || obj === undefined) return obj;

    if (Array.isArray(obj)) {
      return obj.map((item) => extractValue(item));
    }

    if (typeof obj === "object") {
      const result = {};
      for (const key in obj) {
        const val = obj[key];
        // 如果当前字段有value属性，提取它
        if (val && typeof val === "object" && "value" in val) {
          // 检查value本身是否是需要进一步处理的JSON字符串
          const extracted = extractValueFromString(val.value);
          result[key] = extracted;
        } else if (val && typeof val === "object") {
          result[key] = extractValue(val);
        } else {
          result[key] = val;
        }
      }
      return result;
    }

    return obj;
  }

  /**
   * 尝试将字符串解析为JSON，如果是JSON字符串则解析，否则返回原字符串
   */
  function tryParseJSON(str) {
    if (typeof str !== "string") return str;
    try {
      const parsed = JSON.parse(str);
      return parsed;
    } catch (e) {
      return str;
    }
  }

  /**
   * 提取值中的JSON字符串并解析
   */
  function extractValueFromString(value) {
    if (typeof value !== "string") return value;
    // 尝试解析为JSON
    const parsed = tryParseJSON(value);
    if (typeof parsed === "object" && parsed !== null) {
      // 递归提取解析后的对象
      return extractValue(parsed);
    }
    return value;
  }

  /**
   * 将obj中的data字段的直接子字段提取到obj的第一层
   * 只处理一层，不递归处理data内部的嵌套对象
   * @param {Object} obj - 要处理的对象
   * @returns {Object} - 处理后的对象
   */
  function flattenDataFields(obj) {
    if (!obj || typeof obj !== "object" || Array.isArray(obj)) {
      return obj;
    }

    // 如果没有data字段，直接返回
    if (!("data" in obj)) {
      return obj;
    }

    const dataValue = obj.data;

    // 如果data不是对象或者是数组，不做处理
    if (
      !dataValue ||
      typeof dataValue !== "object" ||
      Array.isArray(dataValue)
    ) {
      return obj;
    }

    console.log("[DEBUG] flattenDataFields - 原始对象:", JSON.stringify(obj, null, 2));

    // 创建新对象，先复制原对象的所有字段（除了data）
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && key !== "data") {
        result[key] = obj[key];
      }
    }

    // 将data中的所有字段复制到结果对象中
    for (const dataKey in dataValue) {
      if (dataValue.hasOwnProperty(dataKey)) {
        // 如果字段名冲突，添加后缀
        if (dataKey in result) {
          let suffix = 1;
          let candidateKey = dataKey + "-X";
          while (candidateKey in result) {
            suffix++;
            candidateKey = dataKey + "-X" + suffix;
          }
          result[candidateKey] = dataValue[dataKey];
        } else {
          result[dataKey] = dataValue[dataKey];
        }
      }
    }

    console.log("[DEBUG] flattenDataFields - 处理后对象:", JSON.stringify(result, null, 2));

    return result;
  }

  /**
   * 递归解析所有JSON字符串字段
   */
  function parseAllJSONStrings(obj) {
    if (obj === null || obj === undefined) return obj;

    if (Array.isArray(obj)) {
      return obj.map((item) => parseAllJSONStrings(item));
    }

    if (typeof obj === "object") {
      const result = {};
      for (const key in obj) {
        const val = obj[key];
        if (typeof val === "string") {
          const parsed = tryParseJSON(val);
          if (typeof parsed === "object" && parsed !== null) {
            // 递归处理解析后的对象
            result[key] = parseAllJSONStrings(extractValue(parsed));
          } else {
            result[key] = val;
          }
        } else if (val && typeof val === "object") {
          result[key] = parseAllJSONStrings(val);
        } else {
          result[key] = val;
        }
      }
      return result;
    }

    return obj;
  }

  /**
   * 处理weesDesignTimeJson字段（它是一个JSON字符串数组）
   */
  function processWeesDesignTimeJson(obj) {
    if (!obj || typeof obj !== "object") return obj;

    const result = { ...obj };

    // 如果存在weesDesignTimeJson字段
    if ("weesDesignTimeJson" in result) {
      const field = result.weesDesignTimeJson;
      if (field && typeof field === "object" && "value" in field) {
        // 提取value
        let value = field.value;
        // 尝试解析为JSON
        const parsed = tryParseJSON(value);
        if (Array.isArray(parsed)) {
          // 处理数组中的每个元素：提取value -> 扁平化data字段 -> 解析JSON字符串
          result.weesDesignTimeJson = parsed.map((item) => {
            // 先提取value
            let processed = extractValue(item);
            // 再扁平化data字段（只将data的直接子字段提取到当前层级）
            processed = flattenDataFields(processed);
            // 最后解析所有JSON字符串
            processed = parseAllJSONStrings(processed);
            return processed;
          });
        } else {
          result.weesDesignTimeJson = parsed;
        }
      } else if (typeof field === "string") {
        const parsed = tryParseJSON(field);
        if (Array.isArray(parsed)) {
          result.weesDesignTimeJson = parsed.map((item) => {
            let processed = extractValue(item);
            processed = flattenDataFields(processed);
            processed = parseAllJSONStrings(processed);
            return processed;
          });
        } else {
          result.weesDesignTimeJson = parsed;
        }
      }
    }

    return result;
  }

  /**
   * 主处理流程
   */
  function transform(obj) {
    // 1. 先提取所有value值
    let result = extractValue(obj);

    // 2. 特殊处理weesDesignTimeJson（在解析其他JSON之前先处理）
    result = processWeesDesignTimeJson(result);

    // 3. 解析所有剩余的JSON字符串
    result = parseAllJSONStrings(result);

    // 4. 最后处理weesDesignTimeJson中的子项结构
    try {
      result = transformAllMethods(result);
    } catch (e) {
      console.warn("transformAllMethods 处理失败:", e.message);
    }

    return result;
  }
  // 执行转换
  return transform(rawJson);
}

// 使用示例
function test(rawData) {
  const transformed = transformMethodJson(rawData);
  console.log(JSON.stringify(transformed, null, 2));
}

;// ./src/web/view/transform/clean.js
/**
 * 清除对象中不需要的字段
 * @param {Object|Array} obj - 要处理的对象或数组
 * @param {Array<string>} keepFields - 需要保留的字段列表（支持点号分隔的路径，如 'data.name'）
 * @param {Array<string>} removeFields - 需要删除的字段列表（支持点号分隔的路径）
 * @param {Object} options - 配置选项
 * @param {boolean} options.removeEmpty - 是否移除空值字段（null, undefined, 空字符串, 空数组, 空对象）
 * @param {boolean} options.removeInVisible - 是否移除inVisible为true的字段
 * @param {boolean} options.removeNotEditable - 是否移除notEditable为true的字段
 * @returns {Object|Array} 处理后的对象或数组
 */
function cleanFields(
  obj,
  keepFields = [],
  removeFields = [],
  options = {}
) {
  const {
    removeEmpty = false,
    removeInVisible = false,
    removeNotEditable = false,
  } = options;

  // 判断是否为空值
  function isEmpty(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === "string" && value.trim() === "") return true;
    if (Array.isArray(value) && value.length === 0) return true;
    if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      Object.keys(value).length === 0
    )
      return true;
    return false;
  }

  // 检查字段是否应该被保留（根据keepFields）
  function shouldKeepField(path) {
    if (!keepFields || keepFields.length === 0) return true;
    // 检查是否匹配任何保留路径
    return keepFields.some((keepPath) => {
      // 支持通配符 * 匹配任意层级
      if (keepPath.includes("*")) {
        const pattern = keepPath.replace(/\*/g, "[^.]+");
        const regex = new RegExp("^" + pattern + "$");
        return regex.test(path);
      }
      // 精确匹配
      return (
        path === keepPath ||
        path.endsWith("." + keepPath) ||
        path === keepPath.split(".").pop()
      );
    });
  }

  // 检查字段是否应该被删除（根据removeFields）
  function shouldRemoveField(path) {
    if (!removeFields || removeFields.length === 0) return false;
    return removeFields.some((removePath) => {
      if (removePath.includes("*")) {
        const pattern = removePath.replace(/\*/g, "[^.]+");
        const regex = new RegExp("^" + pattern + "$");
        return regex.test(path);
      }
      return (
        path === removePath ||
        path.endsWith("." + removePath) ||
        path === removePath.split(".").pop()
      );
    });
  }

  // 递归处理对象
  function processNode(node, currentPath = "") {
    if (node === null || node === undefined) return node;

    // 处理数组
    if (Array.isArray(node)) {
      const result = [];
      for (let i = 0; i < node.length; i++) {
        const item = node[i];
        const processed = processNode(item, currentPath + "[" + i + "]");
        if (processed !== undefined && processed !== null) {
          result.push(processed);
        }
      }
      return result;
    }

    // 处理对象
    if (typeof node === "object") {
      const result = {};

      for (const key in node) {
        if (!node.hasOwnProperty(key)) continue;

        const value = node[key];
        const newPath = currentPath ? currentPath + "." + key : key;

        // 1. 检查是否应该删除（基于removeFields）
        if (shouldRemoveField(newPath) || shouldRemoveField(key)) {
          continue;
        }

        // 2. 检查是否应该保留（基于keepFields）
        if (!shouldKeepField(newPath) && !shouldKeepField(key)) {
          continue;
        }

        // 3. 处理inVisible标记
        if (
          removeInVisible &&
          value &&
          typeof value === "object" &&
          value.inVisible === true
        ) {
          continue;
        }

        // 4. 处理notEditable标记
        if (
          removeNotEditable &&
          value &&
          typeof value === "object" &&
          value.notEditable === true
        ) {
          continue;
        }

        // 5. 递归处理子对象
        let processedValue = processNode(value, newPath);

        // 6. 处理空值
        if (removeEmpty && isEmpty(processedValue)) {
          continue;
        }

        // 7. 如果处理后的值是对象且有value属性，提取value
        if (
          processedValue &&
          typeof processedValue === "object" &&
          "value" in processedValue
        ) {
          // 但如果value本身是对象且需要继续处理，则递归处理
          const extracted = processedValue.value;
          if (extracted && typeof extracted === "object") {
            const extractedProcessed = processNode(
              extracted,
              newPath + ".value"
            );
            if (!removeEmpty || !isEmpty(extractedProcessed)) {
              result[key] = extractedProcessed;
            }
          } else {
            if (!removeEmpty || !isEmpty(extracted)) {
              result[key] = extracted;
            }
          }
        } else {
          if (!removeEmpty || !isEmpty(processedValue)) {
            result[key] = processedValue;
          }
        }
      }

      return result;
    }

    return node;
  }

  return processNode(obj);
}

/**
 * 简化版：只保留指定字段（白名单模式）
 * @param {Object|Array} obj - 要处理的对象
 * @param {Array<string>} fields - 需要保留的字段列表
 * @returns {Object|Array} 处理后的对象
 */
function pickFields(obj, fields) {
  return cleanFields(obj, fields, [], { removeEmpty: false });
}

/**
 * 简化版：删除指定字段（黑名单模式）
 * @param {Object|Array} obj - 要处理的对象
 * @param {Array<string>} fields - 需要删除的字段列表
 * @param {Object} options - 额外选项
 * @returns {Object|Array} 处理后的对象
 */
function omitFields(obj, fields, options = {}) {
  return cleanFields(obj, [], fields, options);
}

// 使用示例
function testCleanFields() {
  const data = {
    name: "AUTO_DATA_FITTING",
    weesDesignTimeJson: [
      {
        position: { x: 100, y: 50 },
        visible: true,
        shape: "R2RStart",
        data: {
          name: { value: "R2RStart", notEditable: true },
          type: { inVisible: true, value: "R2RStart" },
          typeCd: { value: "Start" },
          version: { notEditable: true, value: 5 },
          variableList: { inVisible: true, value: "" },
          comment: { value: "" },
        },
        id: "a44442b7-d3f8-422b-b945-d44f50eee476",
      },
    ],
    metadata: {
      created: "2024-01-01",
      updated: null,
      tags: [],
    },
  };

  // 示例1：只保留指定字段
  console.log("=== 只保留 name 和 shape ===");
  const picked = pickFields(data, ["name", "shape"]);
  console.log(JSON.stringify(picked, null, 2));

  // 示例2：删除指定字段
  console.log("=== 删除 inVisible 和 notEditable 字段 ===");
  const omitted = omitFields(data, ["inVisible", "notEditable"], {
    removeInVisible: true,
    removeNotEditable: true,
  });
  console.log(JSON.stringify(omitted, null, 2));

  // 示例3：使用路径语法
  console.log("=== 只保留 data.name 和 data.typeCd ===");
  const pickedWithPath = pickFields(data, ["data.name", "data.typeCd"]);
  console.log(JSON.stringify(pickedWithPath, null, 2));

  // 示例4：删除空值字段
  console.log("=== 删除空值字段 ===");
  const cleaned = cleanFields(data, [], [], {
    removeEmpty: true,
  });
  console.log(JSON.stringify(cleaned, null, 2));

  // 示例5：综合清理
  console.log("=== 综合清理 ===");
  const comprehensive = cleanFields(data, [], ["weesDesignTimeJson"], {
    removeEmpty: true,
    removeInVisible: true,
    removeNotEditable: true,
  });
  console.log(JSON.stringify(comprehensive, null, 2));
}

;// ./src/web/view/transform/mock/method1.json
const method1_namespaceObject = /*#__PURE__*/JSON.parse('{"appName":"R2R","methodList":[],"modelType":"MODEL","name":"WET_MODEL","property":"{\\"shared_key\\":[{\\"fileName\\":null,\\"fileVersion\\":null,\\"name\\":\\"BASE_PROPERTY\\",\\"shared_data\\":{\\"data\\":[{\\"activity_function_name\\":null,\\"item\\":[],\\"name\\":\\"HISTORY_COUNT\\",\\"state_type\\":null,\\"value\\":\\"\\",\\"variable_type_cd\\":null,\\"version\\":null}]}},{\\"fileName\\":null,\\"fileVersion\\":null,\\"name\\":\\"STATE_ADDITIONAL_KEY\\",\\"shared_data\\":{\\"data\\":[{\\"activity_function_name\\":null,\\"item\\":[],\\"name\\":\\"KEY\\",\\"state_type\\":null,\\"value\\":null,\\"variable_type_cd\\":null,\\"version\\":null}]}},{\\"fileName\\":null,\\"fileVersion\\":null,\\"name\\":\\"PROCESS_MODEL\\",\\"shared_data\\":{\\"data\\":[{\\"activity_function_name\\":null,\\"item\\":[],\\"name\\":\\"PARAMETER\\",\\"state_type\\":null,\\"value\\":null,\\"variable_type_cd\\":null,\\"version\\":null}]}},{\\"fileName\\":null,\\"fileVersion\\":null,\\"name\\":\\"EXTENSION\\",\\"shared_data\\":{\\"data\\":[{\\"activity_function_name\\":null,\\"item\\":[],\\"name\\":\\"EXTENSION_PARAMETER\\",\\"state_type\\":null,\\"value\\":null,\\"variable_type_cd\\":null,\\"version\\":null}]}},{\\"fileName\\":null,\\"fileVersion\\":null,\\"name\\":\\"STATE\\",\\"shared_data\\":{\\"data\\":[]}},{\\"fileName\\":\\"BISTel.PeakPerformance.R2R.Custom.API.WET.jar\\",\\"fileVersion\\":\\"2\\",\\"name\\":\\"API\\",\\"shared_data\\":{\\"data\\":[{\\"activity_function_name\\":null,\\"item\\":[],\\"name\\":\\"CUSTOM_COMMON_API\\",\\"state_type\\":null,\\"value\\":null,\\"variable_type_cd\\":null,\\"version\\":\\"2\\"},{\\"activity_function_name\\":null,\\"item\\":[],\\"name\\":\\"CUSTOM_WET_API\\",\\"state_type\\":null,\\"value\\":null,\\"variable_type_cd\\":null,\\"version\\":\\"2\\"}]}},{\\"fileName\\":null,\\"fileVersion\\":null,\\"name\\":\\"SUBWORKFLOW\\",\\"shared_data\\":{\\"data\\":[]}}]}"}');
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/transform/index.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = { class: "transform-container" }
const _hoisted_2 = { class: "input-section" }
const _hoisted_3 = { class: "button-section" }
const _hoisted_4 = { class: "clean-config-section" }
const _hoisted_5 = { class: "config-options" }
const _hoisted_6 = {
  key: 0,
  class: "output-section"
}
const _hoisted_7 = { class: "output-json" }
const _hoisted_8 = {
  key: 1,
  class: "error-section"
}

;





// 输入数据

/* harmony default export */ const transformvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const inputJson = (0,reactivity_esm_bundler/* ref */.KR)("");
inputJson.value = JSON.stringify(method1_namespaceObject);

// 输出数据
const outputJson = (0,reactivity_esm_bundler/* ref */.KR)(null);

// 处理状态
const processing = (0,reactivity_esm_bundler/* ref */.KR)(false);

// 错误信息
const errorMessage = (0,reactivity_esm_bundler/* ref */.KR)("");

// 清洗配置
const removeFieldsInput = (0,reactivity_esm_bundler/* ref */.KR)("");
const list = (0,reactivity_esm_bundler/* ref */.KR)([]);
list.value = [
  "position",
  "visible",
  "type",
  "typeCd",
  "customConfig",
  "_X_ROW_KEY",
  "version",
  "variableList",
  "dataSourceList",
  "activityNameList",
  "runtime XML",
  "inVisible",
  "notEditable",
  "validation",
  "apiVersion",
  "destinationDataSource",
  "destinationDataSourcePath",
  "sourceVariable",
  "sourceDataSource",
  "sourceDataSourcePath",
  "setupSchema",
];
removeFieldsInput.value = list.value.join(",");
const removeEmpty = (0,reactivity_esm_bundler/* ref */.KR)(false);
const removeInVisible = (0,reactivity_esm_bundler/* ref */.KR)(false);
const removeNotEditable = (0,reactivity_esm_bundler/* ref */.KR)(false);

// 格式化输出
const formattedOutput = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
  if (!outputJson.value) return "";
  return JSON.stringify(outputJson.value, null, 2);
});

// 执行转换和清洗
const handleTransform = () => {
  errorMessage.value = "";
  outputJson.value = null;

  // 验证输入
  if (!inputJson.value.trim()) {
    errorMessage.value = "请输入 JSON 数据";
    return;
  }

  // 解析 JSON
  let rawData;
  try {
    rawData = JSON.parse(inputJson.value);
  } catch (e) {
    errorMessage.value = `JSON 格式错误: ${e.message}`;
    return;
  }

  processing.value = true;

  try {
    // 第一步：使用 transform.js 进行转换
    console.log("开始转换...");
    const transformed = transformMethodJson(rawData);
    console.log("转换完成:", transformed);

    // 第二步：使用 clean.js 进行清洗
    // 解析删除字段列表
    const removeFieldsList = removeFieldsInput.value
      .split(",")
      .map((field) => field.trim())
      .filter((field) => field.length > 0);

    // 配置清洗选项
    const cleaned = cleanFields(transformed, [], removeFieldsList, {
      removeEmpty: removeEmpty.value,
      removeInVisible: removeInVisible.value,
      removeNotEditable: removeNotEditable.value,
    });
    console.log("清洗完成:", cleaned);

    outputJson.value = cleaned;

    message/* ElMessage */.nk.success("转换和清洗成功！");
  } catch (e) {
    errorMessage.value = `处理失败: ${e.message}`;
    console.error("处理错误:", e);
  } finally {
    processing.value = false;
  }
};

// 清空所有数据
const clearAll = () => {
  inputJson.value = "";
  outputJson.value = null;
  errorMessage.value = "";
  removeFieldsInput.value = "";
  removeEmpty.value = true;
  removeInVisible.value = true;
  removeNotEditable.value = true;
};

// 复制结果到剪贴板
const copyResult = async () => {
  if (!outputJson.value) return;

  try {
    await navigator.clipboard.writeText(formattedOutput.value);
    message/* ElMessage */.nk.success("已复制到剪贴板");
  } catch (e) {
    message/* ElMessage */.nk.error("复制失败");
  }
};

return (_ctx, _cache) => {
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-button")
  const _component_el_checkbox = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-checkbox")
  const _component_el_alert = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-alert")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    _cache[14] || (_cache[14] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("h2", null, "JSON 数据转换与清洗工具", -1 /* CACHED */)),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 输入区域 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [
      _cache[5] || (_cache[5] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", { for: "json-input" }, "请输入 JSON 数据：", -1 /* CACHED */)),
      (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("textarea", {
        id: "json-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((inputJson).value = $event)),
        placeholder: "请粘贴 JSON 数据，例如：{\"name\": \"test\", \"data\": {...}}",
        rows: "15",
        cols: "80"
      }, null, 512 /* NEED_PATCH */), [
        [runtime_dom_esm_bundler/* vModelText */.Jo, inputJson.value]
      ])
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 操作按钮 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, {
        type: "primary",
        onClick: handleTransform,
        loading: processing.value
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[6] || (_cache[6] = [
          (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" 转换并清洗 ", -1 /* CACHED */)
        ]))]),
        _: 1 /* STABLE */
      }, 8 /* PROPS */, ["loading"]),
      (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, { onClick: clearAll }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[7] || (_cache[7] = [
          (0,runtime_core_esm_bundler/* createTextVNode */.eW)("清空", -1 /* CACHED */)
        ]))]),
        _: 1 /* STABLE */
      }),
      (outputJson.value)
        ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_el_button, {
            key: 0,
            onClick: copyResult
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[8] || (_cache[8] = [
              (0,runtime_core_esm_bundler/* createTextVNode */.eW)("复制结果", -1 /* CACHED */)
            ]))]),
            _: 1 /* STABLE */
          }))
        : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 清洗配置 "),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [
      _cache[12] || (_cache[12] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", { for: "remove-fields" }, "删除字段列表（用英文逗号分隔）：", -1 /* CACHED */)),
      (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
        id: "remove-fields",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((removeFieldsInput).value = $event)),
        placeholder: "例如: field1, field2, field3",
        class: "config-input"
      }, null, 512 /* NEED_PATCH */), [
        [runtime_dom_esm_bundler/* vModelText */.Jo, removeFieldsInput.value]
      ]),
      (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_checkbox, {
          modelValue: removeEmpty.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => ((removeEmpty).value = $event))
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[9] || (_cache[9] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("移除空值字段", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["modelValue"]),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_checkbox, {
          modelValue: removeInVisible.value,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => ((removeInVisible).value = $event))
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[10] || (_cache[10] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("移除 inVisible 字段", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["modelValue"]),
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_checkbox, {
          modelValue: removeNotEditable.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => ((removeNotEditable).value = $event))
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[11] || (_cache[11] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("移除 notEditable 字段", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["modelValue"])
      ])
    ]),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 输出区域 "),
    (outputJson.value)
      ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_6, [
          _cache[13] || (_cache[13] = (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("label", null, "转换结果：", -1 /* CACHED */)),
          (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("pre", _hoisted_7, (0,shared_esm_bundler/* toDisplayString */.v_)(formattedOutput.value), 1 /* TEXT */)
        ]))
      : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true),
    (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)(" 错误提示 "),
    (errorMessage.value)
      ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_8, [
          (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_alert, {
            title: "错误",
            description: errorMessage.value,
            type: "error",
            "show-icon": "",
            closable: ""
          }, null, 8 /* PROPS */, ["description"])
        ]))
      : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("v-if", true)
  ]))
}
}

});
;// ./src/web/view/transform/index.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/transform/index.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(transformvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-4af8cdc9"]])

/* harmony default export */ const transform = (__exports__);

/***/ }

}]);