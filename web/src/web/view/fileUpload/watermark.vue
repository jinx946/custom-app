<script setup>
import { ref, watch } from "vue";
import {
  ElMessage,
  ElUpload,
  ElButton,
  ElInput,
  ElColorPicker,
  ElSlider,
  ElSelect,
  ElOption,
  ElSwitch,
} from "element-plus";

// 上传的图片
const imageUrl = ref("");
// 原始图片数据
const originalImage = ref(null);
// 水印文本
const watermarkText = ref("Watermark");
// 水印颜色
const watermarkColor = ref("#ffffff");
// 水印大小
const watermarkSize = ref(24);
// 水印透明度
const watermarkOpacity = ref(0.5);
// 水印位置
const watermarkPosition = ref("bottom-right");
// 是否平铺水印
const isTiled = ref(false);
// 水印间距
const watermarkSpacing = ref(100);
// 水印旋转角度
const watermarkRotation = ref(45);
// 处理后的图片
const processedImageUrl = ref("");

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
    ElMessage.success("图片处理成功");
  } catch (error) {
    ElMessage.error("图片处理失败");
    console.error(error);
  }
  return false; // 阻止自动上传
};

// 下载带有水印的图片
const downloadImage = () => {
  if (!processedImageUrl.value) {
    ElMessage.warning("请先上传并处理图片");
    return;
  }

  const link = document.createElement("a");
  link.href = processedImageUrl.value;
  link.download = `watermarked_${Date.now()}.png`;
  link.click();
  ElMessage.success("图片下载成功");
};

// 监听水印设置变化，实时更新预览
watch(
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
</script>

<template>
  <div class="watermark-container">
    <h2>图片水印工具</h2>

    <!-- 图片上传 -->
    <ElUpload
      class="upload-demo"
      action=""
      :auto-upload="false"
      :on-change="handleUpload"
      :show-file-list="false"
      accept="image/*"
    >
      <ElButton type="primary">选择图片</ElButton>
    </ElUpload>

    <!-- 预览区域 -->
    <div class="preview-container">
      <div v-if="processedImageUrl" class="preview-box">
        <img
          :src="processedImageUrl"
          alt="带水印的图片"
          class="preview-image"
        />
      </div>
    </div>

    <!-- 水印设置 -->
    <div class="watermark-settings">
      <h3>水印设置</h3>

      <div class="setting-item">
        <label>水印文本：</label>
        <ElInput v-model="watermarkText" placeholder="请输入水印文本" />
      </div>

      <div class="setting-item">
        <label>水印颜色：</label>
        <ElColorPicker v-model="watermarkColor" />
      </div>

      <div class="setting-item">
        <label>水印大小：{{ watermarkSize }}px</label>
        <ElSlider v-model="watermarkSize" :min="12" :max="72" />
      </div>

      <div class="setting-item">
        <label>水印透明度：{{ Math.round(watermarkOpacity * 100) }}%</label>
        <ElSlider v-model="watermarkOpacity" :min="0" :max="1" :step="0.1" />
      </div>

      <div class="setting-item">
        <label>水印位置：</label>
        <ElSelect v-model="watermarkPosition" :disabled="isTiled">
          <ElOption label="左上角" value="top-left" />
          <ElOption label="右上角" value="top-right" />
          <ElOption label="左下角" value="bottom-left" />
          <ElOption label="右下角" value="bottom-right" />
          <ElOption label="中心" value="center" />
        </ElSelect>
      </div>

      <div class="setting-item">
        <label>平铺水印：</label>
        <ElSwitch v-model="isTiled" />
      </div>

      <div v-if="isTiled" class="setting-item">
        <label>水印间距：{{ watermarkSpacing }}px</label>
        <ElSlider v-model="watermarkSpacing" :min="50" :max="400" />
      </div>

      <div v-if="isTiled" class="setting-item">
        <label>旋转角度：{{ watermarkRotation }}°</label>
        <ElSlider v-model="watermarkRotation" :min="0" :max="360" />
      </div>
    </div>

    <!-- 下载按钮 -->
    <ElButton
      type="success"
      @click="downloadImage"
      :disabled="!processedImageUrl"
    >
      下载带水印的图片
    </ElButton>
  </div>
</template>

<style scoped>
.watermark-container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.preview-container {
  margin: 20px 0;
  text-align: center;
}

.preview-box {
  display: inline-block;
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.preview-image {
  max-width: 100%;
  max-height: 400px;
  border-radius: 4px;
}

.watermark-settings {
  margin: 20px 0;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.setting-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.setting-item label {
  width: 120px;
  font-weight: 500;
}

.setting-item .el-input,
.setting-item .el-color-picker,
.setting-item .el-select {
  flex: 1;
  max-width: 300px;
}

.setting-item .el-slider {
  flex: 1;
  max-width: 400px;
  margin-left: 20px;
}

.setting-item .el-switch {
  margin-left: 20px;
}

button {
  margin-top: 20px;
}
</style>
