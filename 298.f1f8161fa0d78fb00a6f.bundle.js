"use strict";
(self["webpackChunktest"] = self["webpackChunktest"] || []).push([[298],{

/***/ 7298
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ view_fileUpload)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+runtime-core@3.5.32/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(93765);
// EXTERNAL MODULE: ./node_modules/.pnpm/@vue+reactivity@3.5.32/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(7677);
// EXTERNAL MODULE: ./node_modules/.pnpm/spark-md5@3.0.2/node_modules/spark-md5/spark-md5.js
var spark_md5 = __webpack_require__(6616);
var spark_md5_default = /*#__PURE__*/__webpack_require__.n(spark_md5);
// EXTERNAL MODULE: ./node_modules/.pnpm/element-plus@2.13.7_vue@3.5.32/node_modules/element-plus/es/components/message/index.mjs + 5 modules
var message = __webpack_require__(88192);
;// ./node_modules/.pnpm/vue-loader@17.4.2_vue@3.5.32_webpack@5.106.1/node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/web/view/fileUpload/index.vue?vue&type=script&setup=true&lang=js





// 1MB = 1024KB = 1024 * 1024B
const CHUNK_SIZE = 1 * 1024 * 1024;


/* harmony default export */ const fileUploadvue_type_script_setup_true_lang_js = ({
  __name: 'index',
  setup(__props) {

const fileName = (0,reactivity_esm_bundler/* ref */.KR)('');
const fileSize = (0,reactivity_esm_bundler/* ref */.KR)(0);
const fileHash = (0,reactivity_esm_bundler/* ref */.KR)('');

// 文件分片
const createFileChunks = (file) => {
  let cur = 0;
  const chunks = [];
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + CHUNK_SIZE));
    cur += CHUNK_SIZE;
  }

  return chunks;
};

// 计算hash值
const calcuteHash = (chunks) => {
  return new Promise((resolve) => {
    const targets = [];
    const spark = new (spark_md5_default()).ArrayBuffer();
    // 1. 第一个和最后一个切片全部参与计算
    // 2. 中间的切片只有前两个字节、中间两个字节、后面两个字节参与计算
    chunks.forEach((chunk, index) => {
      if (index === 0 || index === chunks.length - 1) {
        targets.push(chunk);
      } else {
        targets.push(chunk.slice(0, 2)); // 前两个字节
        targets.push(chunk.slice(CHUNK_SIZE / 2, CHUNK_SIZE / 2 + 2)); // 中间两个字节
        targets.push(chunk.slice(CHUNK_SIZE - 2, CHUNK_SIZE)); // 后面两个字节
      }
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
    message/* ElMessage */.nk.success('合并成功！');
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

  const formDatas = data
    .filter((item) => !existsChunks.includes(item.chunkHash))
    .map((item) => {
      const formData = new FormData();
      formData.append('fileName', item.fileName);
      formData.append('fileHash', item.fileHash);
      formData.append('chunkHash', item.chunkHash);
      formData.append('chunk', item.chunk);

      return formData;
    });

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

const handleUpload = async (e) => {
  // console.log((e.target as HTMLInputElement).files); // 伪数组
  // 读取文件
  const files = e.target.files;
  if (!files) return;
  // console.log(files[0]);
  fileName.value = files[0].name;
  fileSize.value = files[0].size;

  // 文件分片
  const chunks = createFileChunks(files[0]);

  // 计算hash值
  const hash = await calcuteHash(chunks);
  fileHash.value = hash;
  console.log(hash);

  // 校验是否需要上传
  const { data } = await verifyUpload();
  console.log(data);

  if (!data.shouldUpload) {
    message/* ElMessage */.nk.success('秒传成功');
    return;
  }
  // 分片上传
  uploadChunks(chunks, data.existsChunks);
};

return (_ctx, _cache) => {
  return ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("input", {
    onChange: handleUpload,
    type: "file"
  }, null, 32 /* NEED_HYDRATION */))
}
}

});
;// ./src/web/view/fileUpload/index.vue?vue&type=script&setup=true&lang=js
 
;// ./src/web/view/fileUpload/index.vue



const __exports__ = fileUploadvue_type_script_setup_true_lang_js;

/* harmony default export */ const view_fileUpload = (__exports__);

/***/ }

}]);