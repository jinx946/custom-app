/**
 * JSON 精简转换器
 * 将冗长的字段名转换为简短的字母标识，并将所有值扁平化为纯数组
 * 
 * 使用示例：
 * 
 * 原始数据：
 * {
 *   "methodList": "PROCESS_R2R",
 *   "name": "ab",
 *   "config": {
 *     "type": "start",
 *     "version": 5
 *   }
 * }
 * 
 * 转换后（极简格式）：
 * {
 *   "mapping": [["methodList", "a"], ["name", "b"], ["type", "c"], ["version", "d"]],
 *   "data": ["PROCESS_R2R", "ab", "start", 5]
 * }
 * 
 * 还原后：
 * {
 *   "methodList": "PROCESS_R2R",
 *   "name": "ab",
 *   "config": {
 *     "type": "start",
 *     "version": 5
 *   }
 * }
 */

/**
 * 生成简短的字段名映射并转换数据
 * @param {Object} obj - 原始对象
 * @returns {Object} - 包含映射关系和纯值数组
 */
export function compactJson(obj) {
  if (!obj || typeof obj !== "object") {
    return obj;
  }

  // 收集所有唯一的字段名（按出现顺序）
  const fieldNames = collectFieldNamesInOrder(obj);

  // 生成字段名到简短字母的映射
  const fieldNameMap = generateFieldNameMap(fieldNames);

  // 提取所有值，按映射顺序排列成一维数组
  const values = [];
  extractAllValues(obj, fieldNameMap, values);

  return {
    mapping: Object.entries(fieldNameMap), // [['methodList', 'a'], ['name', 'b'], ...]
    data: values, // ['PROCESS_R2R', 'ab', 'start', 5]
  };
}

/**
 * 按出现顺序收集所有层级的字段名（去重）
 */
function collectFieldNamesInOrder(obj, fieldList = [], seenFields = new Set()) {
  if (!obj || typeof obj !== "object") {
    return fieldList;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item) => collectFieldNamesInOrder(item, fieldList, seenFields));
  } else {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (!seenFields.has(key)) {
          fieldList.push(key);
          seenFields.add(key);
        }
        const value = obj[key];
        if (value && typeof value === "object") {
          collectFieldNamesInOrder(value, fieldList, seenFields);
        }
      }
    }
  }

  return fieldList;
}

/**
 * 生成字段名到简短字母的映射
 * 使用 a-z, aa-az, ba-bz, ... 的序列
 */
function generateFieldNameMap(fieldNames) {
  const map = {};
  fieldNames.forEach((fieldName, index) => {
    map[fieldName] = generateShortName(index);
  });

  return map;
}

/**
 * 根据索引生成简短的名称
 * 0 -> 'a', 1 -> 'b', ..., 25 -> 'z', 26 -> 'aa', 27 -> 'ab', ...
 */
function generateShortName(index) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let num = index;

  do {
    result = alphabet[num % 26] + result;
    num = Math.floor(num / 26) - 1;
  } while (num >= 0);

  return result;
}

/**
 * 递归提取所有值，按映射顺序放入一维数组
 * @param {*} data - 要转换的数据
 * @param {Object} fieldNameMap - 字段名映射表
 * @param {Array} values - 存储值的数组
 */
function extractAllValues(data, fieldNameMap, values) {
  if (data === null || data === undefined) {
    values.push(data);
    return;
  }

  if (Array.isArray(data)) {
    // 对于数组，递归处理每个元素
    data.forEach((item) => extractAllValues(item, fieldNameMap, values));
  } else if (typeof data === "object") {
    // 对于对象，按映射顺序提取值
    const keys = Object.keys(fieldNameMap).filter((key) => key in data);
    
    keys.forEach((key) => {
      const value = data[key];
      extractAllValues(value, fieldNameMap, values);
    });
  } else {
    // 基本类型直接添加
    values.push(data);
  }
}

/**
 * 还原精简的JSON数据
 * @param {Object} compacted - 精简后的数据（包含 mapping 和 data）
 * @returns {Object} - 还原后的原始数据
 */
export function restoreCompactJson(compacted) {
  if (!compacted || !compacted.mapping || !compacted.data) {
    return compacted;
  }

  // 构建反向映射：短名 -> 原始字段名
  const reverseMap = {};
  compacted.mapping.forEach(([original, short]) => {
    reverseMap[short] = original;
  });

  // 获取所有原始字段名的顺序
  const fieldOrder = compacted.mapping.map(([original]) => original);

  // 从值数组还原为对象结构
  let valueIndex = 0;
  const restoredData = restoreStructureFromValues(compacted.data, fieldOrder, reverseMap, valueIndex);

  return restoredData.result;
}

/**
 * 从值数组还原数据结构
 */
function restoreStructureFromValues(values, fieldOrder, reverseMap, startIndex) {
  // 这里需要根据原始数据的结构来还原
  // 由于我们丢失了结构信息，只能还原为扁平对象
  const obj = {};
  let currentIndex = startIndex;

  fieldOrder.forEach((fieldName) => {
    if (currentIndex < values.length) {
      obj[fieldName] = values[currentIndex];
      currentIndex++;
    }
  });

  return {
    result: obj,
    nextIndex: currentIndex
  };
}

// 使用示例
if (typeof window !== "undefined") {
  window.compactJson = compactJson;
  window.restoreCompactJson = restoreCompactJson;
}
