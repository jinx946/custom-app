"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[831],{

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

/***/ 77831
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index2)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/message-box/index.mjs + 4 modules
var message_box = __webpack_require__(54117);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/upload/src/upload.mjs + 1 modules
var src_upload = __webpack_require__(95831);
// EXTERNAL MODULE: ./node_modules/.pnpm/spark-md5@3.0.2/node_modules/spark-md5/spark-md5.js
var spark_md5 = __webpack_require__(6616);
var spark_md5_default = /*#__PURE__*/__webpack_require__.n(spark_md5);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/fileUpload/index2.vue?vue&type=script&setup=true&lang=js


const _hoisted_1 = {
  class: "file-uplaod",
  id: "file-uplaod"
}

;



const CHUNK_SIZE = 1024 * 1024;

/* harmony default export */ const index2vue_type_script_setup_true_lang_js = ({
  __name: 'index2',
  setup(__props) {

const upload = (0,reactivity_esm_bundler/* ref */.KR)();
const fileList = (0,reactivity_esm_bundler/* ref */.KR)([]);
const fileName = (0,reactivity_esm_bundler/* ref */.KR)('');
const fileSize = (0,reactivity_esm_bundler/* ref */.KR)(0);
const fileHash = (0,reactivity_esm_bundler/* ref */.KR)('');
// 文件分片
const createFileChunks = (file) => {
  const fileChunkList = [];
  let cur = 0;
  while (cur < file.size) {
    fileChunkList.push({
      file: file.slice(cur, cur + CHUNK_SIZE),
    });
    cur += CHUNK_SIZE; // CHUNK_SIZE为分片的大小
  }
  return fileChunkList;
};

// 计算hash值
const calcuteHash = (chunks) => {
  return new Promise((resolve) => {
    const targets = [];
    const spark = new (spark_md5_default()).ArrayBuffer();
    // 1. 第一个和最后一个切片全部参与计算
    // 2. 中间的切片只有前两个字节、中间两个字节、后面两个字节参与计算
    chunks.forEach((chunk, index) => {
      targets.push(chunk);
      // if (index === 0 || index === chunks.length - 1) {
      //   targets.push(chunk);
      // } else {
      //   targets.push(chunk.slice(0, 2)); // 前两个字节
      //   targets.push(chunk.slice(CHUNK_SIZE / 2, CHUNK_SIZE / 2 + 2)); // 中间两个字节
      //   targets.push(chunk.slice(CHUNK_SIZE - 2, CHUNK_SIZE)); // 后面两个字节
      // }
    });

    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(new Blob(targets));

    fileReader.onload = (e) => {
      spark.append(e.target.result);
      resolve(spark.end());
    };
  });
};

// 合并请求
const mergeRequest = () => {
  fetch('http://localhost:3000/merge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileHash: fileHash.value,
      fileName: fileName.value,
      size: CHUNK_SIZE,
    }),
  }).then(() => {
    alert('合并成功！');
  });
};
// 分片上传
const uploadChunks = async (chunks, existsChunks) => {
  const data = chunks.map((chunk, index) => {
    return {
      fileName: fileName.value,
      fileHash: fileHash.value,
      chunkHash: fileHash.value + '-' + index,
      chunk: chunk,
    };
  });

  const formDatas = data.map((item) => {
    const formData = new FormData();
    formData.append('fileName', item.fileName);
    formData.append('fileHash', item.fileHash);
    formData.append('chunkHash', item.chunkHash);
    formData.append('chunk', item.chunk);

    return formData;
  });
  console.log('formDatas: ', formDatas);
  // [1,2,3,4,6,7]
  const max = 6; // 最大并行请求数
  const taskPool = []; // 请求队列
  let index = 0;

  while (index < formDatas.length) {
    const task = fetch('http://localhost:3000/upload', {
      method: 'POST',
      body: formDatas[index],
    });

    task.then(() => {
      // 执行完后把当前任务从任务队列中删除
      taskPool.splice(taskPool.findIndex((item) => item === task));
    });
    taskPool.push(task);
    if (taskPool.length === max) {
      await Promise.race(taskPool);
    }
    index++;
  }

  await Promise.all(taskPool);

  // 所有分片上传完成后，通知服务器可以合并了
  mergeRequest();
};

/**
 * 验证该文件是否需要上传，文件通过hash生成唯一，改名后也是不需要再上传的，也就相当于秒传
 */
const verifyUpload = async () => {
  return fetch('http://127.0.0.1:3000/verify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      fileName: fileName.value,
      fileHash: fileHash.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      return data; // data中包含对应的表示服务器上有没有该文件的查询结果
    });
};
// 读取文件
const handleChange = async (file, uploadFiles) => {
  console.log(111, file, uploadFiles);
  const chunks = createFileChunks(file.raw);
  console.log('chunks: ', chunks);
  // 计算hash值
  const hash = await calcuteHash(chunks);
  fileHash.value = hash;
  console.log(hash);

  // 校验是否需要上传
  const { data } = await verifyUpload();
  console.log(data);

  if (!data.shouldUpload) {
    alert('秒传成功');
    return;
  }
  // 分片上传
  uploadChunks(chunks, data.existsChunks);
};

const handleUpload = async (e) => {
  console.log(111, e);
  const files = e.target.files;
  console.log('files: ', files);

  if (!files) return;
  // console.log(files[0]);
  fileName.value = files[0].name;
  fileSize.value = files[0].size;
  const chunks = createFileChunks(files[0]);
  console.log('chunks: ', chunks);

  // 计算hash值
  const hash = await calcuteHash(chunks);
  fileHash.value = hash;
  console.log('文件hash', hash);

  // 校验是否需要上传
  const { data } = await verifyUpload();
  console.log(data);

  if (!data.shouldUpload) {
    alert('秒传成功');
    return;
  }
  // 分片上传
  uploadChunks(chunks, data.existsChunks);
  // uploadChunks(chunks);
};
// 超出限制的时候
const handleExceed = (files, uploadFiles) => {
  console.log('files, uploadFiles: ', files, uploadFiles);
  upload.value?.clearFiles();
  const file = files[0];
  file.uid = (0,src_upload/* genFileId */.G$)();
  upload.value?.handleStart(file);
};

const handleSuccess = (files, uploadFiles) => {
  console.log('files, uploadFiles: ', files, uploadFiles);
};
const beforeRemove = (uploadFile, uploadFiles) => {
  return message_box/* ElMessageBox */.s.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
(0,runtime_core_esm_bundler/* onMounted */.sV)(() => {});
//

return (_ctx, _cache) => {
  const _component_el_button = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-button")
  const _component_el_upload = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("el-upload")

  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [
    (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_upload, {
      ref_key: "upload",
      ref: upload,
      "file-list": fileList.value,
      "onUpdate:fileList": _cache[0] || (_cache[0] = $event => ((fileList).value = $event)),
      class: "upload-demo",
      action: "https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",
      multiple: "",
      "on-preview": _ctx.handlePreview,
      "on-remove": _ctx.handleRemove,
      "on-success": handleSuccess,
      "before-remove": beforeRemove,
      limit: 1,
      "on-exceed": handleExceed,
      "on-change": handleChange,
      "auto-upload": false
    }, {
      tip: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[2] || (_cache[2] = [
        (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", { class: "el-upload__tip" }, "随便上传点什么", -1 /* CACHED */)
      ]))]),
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [
        (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_el_button, { type: "primary" }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [...(_cache[1] || (_cache[1] = [
            (0,runtime_core_esm_bundler/* createTextVNode */.eW)("文件上传", -1 /* CACHED */)
          ]))]),
          _: 1 /* STABLE */
        })
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["file-list", "on-preview", "on-remove"]),
    (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("input", {
      onChange: handleUpload,
      type: "file"
    }, null, 32 /* NEED_HYDRATION */)
  ]))
}
}

});
;// ./src/web/view/fileUpload/index2.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(45667);
;// ./src/web/view/fileUpload/index2.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(index2vue_type_script_setup_true_lang_js, [['__scopeId',"data-v-18490cbe"]])

/* harmony default export */ const index2 = (__exports__);

/***/ }

}]);