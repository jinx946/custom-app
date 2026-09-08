import { transformAllMethods } from "./finally.js";

export function transformMethodJson(rawJson) {
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
