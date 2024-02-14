// 数字补位转字符串
export function covering(num, text = '0',digit=7) {
  let str = String(num);
  let len = digit - str.length;
  if (len) {
    let newStr = [];
    for (let i = 0; i < len; i++) {
      newStr.push(text);
    }
    str = newStr.join('') + str;
  }
  return str;
}

/**
 * 读取图片（或文件）转成base64
 * @param {Object} file 图片文件的file，一般是文件上传的file信息
 * @returns 转base64后的base64图片地址，或错误信息
 */
export const readImgToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        try {
            // 读取信息
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                // 转base64结果
                const base64Url = reader.result;
                resolve({ fileUrl: base64Url });
            };

            reader.onerror = (err) => {
                reject(err);
            };
        } catch (error) {
            reject(error);
        }
    });
};

// 判断数据类型
export function getDataType(data) {
    const str = Object.prototype.toString.call(data);
    return str.slice(8, str.length - 1);
}
export function isObj(data) {
    return getDataType(data) === 'Object';
}
export function isArr(data) {
    return getDataType(data) === 'Array';
}
export function isStr(data) {
    return getDataType(data) === 'String';
}
export function isNum(data) {
    return getDataType(data) === 'Number';
}
export function isBoo(data) {
    return getDataType(data) === 'Boolean';
}
export function isFun(data) {
    return getDataType(data) === 'Function';
}

// 深拷贝
export function deepCopy(data) {
    if (!isObj(data) && !isArr(data)) {
        return data;
    }
    let newData = isObj(data) ? {} : [];
    function doCopy(cData, cNewData) {
        for (let key in cData) {
            if (isObj(cData[key])) {
                cNewData[key] = {};
                doCopy(cData[key], cNewData[key]);
            } else if (isArr(cData[key])) {
                cNewData[key] = [];
                doCopy(cData[key], cNewData[key]);
            } else {
                cNewData[key] = cData[key];
            }
        }
    }
    doCopy(data, newData);
    return newData;
}

// 筛选 data 返回新数据 数据(最好已拷贝过的原数据),filterOps {key:[checkKey]} 筛选设置,needCopy 进行深拷贝
export function filterData(data, filterOps, needCopy = false) {
    let copyData,
        newData = [];
    if (needCopy) {
        copyData = deepCopy(data);
    } else {
        copyData = data;
    }
    copyData.forEach((item) => {
        let flag = true;
        for (let key in filterOps) {
            if (filterOps[key].length && !filterOps[key].includes(item[key])) {
                flag = false;
                break;
            }
        }
        if (flag) {
            newData.push(item);
        }
    });
    return newData;
}
// 排序 data 改变原数据  default aec  dec
export function sortData(data, key, type = 'default') {
    if (type === 'default') {
        return void 0;
    } else if (type === 'aec') {
        data.sort(function (a, b) {
            return (a[key] + '').localeCompare(b[key] + '');
        });
    } else if (type === 'dec') {
        data.sort(function (a, b) {
            return (b[key] + '').localeCompare(a[key] + '');
        });
    }
}
// 防抖节流
export function throttle(delay, callback, options) {
    let _ref = options || {},
        _ref$noTrailing = _ref.noTrailing,
        noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
        _ref$noLeading = _ref.noLeading,
        noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
        _ref$debounceMode = _ref.debounceMode,
        debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
    let timeoutID;
    let cancelled = false; // Keep track of the last time `callback` was executed.

    let lastExec = 0; // Function to clear existing timeout

    function clearExistingTimeout() {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
    } // Function to cancel next exec

    function cancel(options) {
        let _ref2 = options || {},
            _ref2$upcomingOnly = _ref2.upcomingOnly,
            upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

        clearExistingTimeout();
        cancelled = !upcomingOnly;
    }
    function wrapper() {
        let _len = arguments.length,
            arguments_ = new Array(_len);
        for (let _key = 0; _key < _len; _key++) {
            arguments_[_key] = arguments[_key];
        }
        let self = this;
        let elapsed = Date.now() - lastExec;

        if (cancelled) {
            return;
        }
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        function clear() {
            timeoutID = undefined;
        }
        if (!noLeading && debounceMode && !timeoutID) {
            exec();
        }
        clearExistingTimeout();
        if (debounceMode === undefined && elapsed > delay) {
            if (noLeading) {
                lastExec = Date.now();
                if (!noTrailing) {
                    timeoutID = setTimeout(debounceMode ? clear : exec, delay);
                }
            } else {
                exec();
            }
        } else if (noTrailing !== true) {
            timeoutID = setTimeout(
                debounceMode ? clear : exec,
                debounceMode === undefined ? delay - elapsed : delay
            );
        }
    }
    wrapper.cancel = cancel; // Return the wrapper function.
    return wrapper;
}
export function debounce(delay, callback, options) {
    let _ref = options || {},
        _ref$atBegin = _ref.atBegin,
        atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;
    return throttle(delay, callback, {
        debounceMode: atBegin !== false,
    });
}

// 
function handleDeepObj(keyList, obj) {
    const newObj = obj[keyList[0]];
    if (keyList.length === 1) {
        return newObj;
    } else if (!newObj) {
        return undefined;
    }
    const newKeyList = keyList;
    newKeyList.splice(0, 1);//截取，改变原数组
    return handleDeepObj(newKeyList, newObj);
}
/**
 *
 *
 * @export 取对象深值
 * @param {*} key 'a.b.c'
 * @param {*} obj {a:{b:{c:1}}} 
 */
export function getDeepValue(key, obj) {
    const keyList = key.split('.');
    return handleDeepObj(keyList, obj);
}

// 复制文本
export function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
        let textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'absolute';
        textArea.style.opacity = '0';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        return new Promise((res, rej) => {
            // 执行复制命令并移除文本框
            document.execCommand('copy') ? res(null) : rej();
            textArea.remove();
        });
    }
}

// 存在小数点 保留几位
export function decimal(val, num = 0) {
    if (canTransToNum(val) && val.includes('.')) {
        return Number(val).toFixed(num);
    }
    return val;
}