/**
 * 转换 weesDesignTimeJson 中的每个子项
 * 先扁平化 data 字段，确保 name 和 comment 能正确提取到外层
 * 然后将除 shape, name, comment, id 之外的字段都放入 value 对象中
 * @param {Array} weesDesignTimeJson - 原始数据数组
 * @returns {Array} 转换后的数据数组
 */
export function transformWeesDesignTimeJson(weesDesignTimeJson) {
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
export function transformAllMethods(data) {
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
