<template>
  <div class="file-uplaod" id="file-uplaod">
    <el-upload
      ref="upload"
      v-model:file-list="fileList"
      class="upload-demo"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      multiple
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :before-remove="beforeRemove"
      :limit="1"
      :on-exceed="handleExceed"
      :on-change="handleChange"
      :auto-upload="false"
    >
      <el-button type="primary">文件上传</el-button>
      <template #tip>
        <div class="el-upload__tip">随便上传点什么</div>
      </template>
    </el-upload>
    <input @change="handleUpload" type="file" />
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { genFileId } from 'element-plus';
import SparkMD5 from 'spark-md5';
const upload = ref();
const fileList = ref([]);
const fileName = ref('');
const fileSize = ref(0);
const fileHash = ref('');
// 文件分片
const CHUNK_SIZE = 1024 * 1024;
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
    const spark = new SparkMD5.ArrayBuffer();
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
  file.uid = genFileId();
  upload.value?.handleStart(file);
};

const handleSuccess = (files, uploadFiles) => {
  console.log('files, uploadFiles: ', files, uploadFiles);
};
const beforeRemove = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  );
};
onMounted(() => {});
//
</script>
<style lang="less" scoped>
.file-uplaod {
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 20px;
}
</style>
