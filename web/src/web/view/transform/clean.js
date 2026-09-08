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
export function cleanFields(
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
export function omitFields(obj, fields, options = {}) {
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
