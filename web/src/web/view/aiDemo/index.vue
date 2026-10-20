<template>
  <div class="chat-container">
    <div class="chat-header">
      <h2 class="page-title">AI Chat</h2>
      <el-button type="primary" @click="showConfig = !showConfig">
        {{ showConfig ? "隐藏配置" : "显示配置" }}
      </el-button>
    </div>

    <!-- 配置面板 -->
    <div v-if="showConfig" class="config-panel">
      <el-form :model="config" label-width="100px">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="API URL">
              <el-input
                v-model="config.url"
                placeholder="请输入API地址"
                class="config-input"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="API Key">
              <el-input
                v-model="config.key"
                placeholder="请输入API密钥"
                type="password"
                class="config-input"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Model">
              <el-select
                v-model="config.model"
                placeholder="选择模型"
                class="config-select"
              >
                <el-option label="qwen3.8-27b" value="qwen3.8-27b" />
                <el-option label="DeepSeek-R1-Chat" value="deepseek-r1-chat" />
                <el-option label="GPT-4o" value="gpt-4o" />
                <el-option label="GPT-4" value="gpt-4" />
                <el-option label="gpt-5.5" value="gpt-5.5" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="Max Tokens">
              <el-input-number
                v-model="config.maxTokens"
                :min="100"
                :max="16000"
                class="config-input"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Temperature">
              <el-slider
                v-model="config.temperature"
                :min="0"
                :max="2"
                :step="0.1"
                class="config-slider"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item>
              <el-button type="success" @click="saveConfig" class="save-btn">
                保存配置
              </el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <!-- 聊天消息区域 -->
    <div class="chat-messages" ref="messagesContainer">
      <div
        v-for="(message, index) in messages"
        :key="index"
        :class="['message-item', message.role]"
      >
        <div class="avatar">
          <el-icon v-if="message.role === 'user'" class="user-icon"
            ><User
          /></el-icon>
          <el-icon v-else class="ai-icon"><Bot /></el-icon>
        </div>
        <div class="message-content">
          <div class="message-header">
            <span class="role">{{
              message.role === "user" ? "用户" : "AI"
            }}</span>
            <span class="time">{{ message.time }}</span>
          </div>
          <div
            class="message-body"
            v-html="formatMessage(message.content)"
          ></div>
        </div>
      </div>
      <div v-if="isLoading" class="loading-indicator">
        <el-spinner size="medium" />
        <span>AI正在思考...</span>
      </div>
    </div>

    <!-- 输入区域 -->
    <div class="chat-input">
      <el-upload
        ref="uploadRef"
        :auto-upload="false"
        :on-change="handleFileChange"
        :show-file-list="false"
        accept=".txt,.pdf,.doc,.docx,.md,.jpg,.jpeg,.png"
        class="upload-wrapper"
      >
        <el-button type="info" :disabled="isLoading" class="upload-btn">
          <el-icon><Document /></el-icon>
          上传文件
        </el-button>
      </el-upload>

      <!-- 文件列表面板 -->
      <el-popover
        v-if="uploadedFiles.length > 0"
        placement="top"
        :width="350"
        trigger="click"
        class="file-list-popover"
      >
        <template #reference>
          <el-button type="warning" :disabled="isLoading" class="file-list-btn">
            <el-icon><Folder /></el-icon>
            文件({{ uploadedFiles.length }})
          </el-button>
        </template>

        <div class="file-list-container">
          <div class="file-list-header">
            <span>已上传文件</span>
            <el-button
              v-if="selectedFiles.length > 0"
              type="danger"
              size="small"
              @click="removeSelectedFiles"
              link
            >
              删除选中
            </el-button>
          </div>

          <div class="file-list-items">
            <el-tooltip
              v-for="(file, index) in uploadedFiles"
              :key="index"
              :content="file.name"
              placement="top"
              :show-after="500"
            >
              <div
                class="file-item"
                :class="{ selected: selectedFiles.includes(index) }"
                @click="toggleFileSelection(index)"
              >
                <el-checkbox
                  :model-value="selectedFiles.includes(index)"
                  @click.stop
                  @change="toggleFileSelection(index)"
                />
                <div class="file-info">
                  <span class="file-name">{{ file.name }}</span>
                  <span class="file-size">{{ formatFileSize(file.size) }}</span>
                </div>
                <el-button
                  type="danger"
                  size="small"
                  @click.stop="removeFile(index)"
                  link
                  class="remove-btn"
                >
                  <el-icon><Close /></el-icon>
                </el-button>
              </div>
            </el-tooltip>
          </div>

          <div class="file-list-footer">
            <el-text size="small" type="info">
              已选择 {{ selectedFiles.length }}/{{ uploadedFiles.length }}
              个文件
            </el-text>
          </div>
        </div>
      </el-popover>

      <el-input
        v-model="inputMessage"
        placeholder="输入消息..."
        @keyup.enter="sendMessage"
        :disabled="isLoading"
        class="message-input"
      />
      <el-button
        type="primary"
        @click="sendMessage"
        :disabled="!inputMessage.trim() || isLoading"
        class="send-btn"
      >
        <el-icon><Send /></el-icon>
        发送
      </el-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, nextTick, onMounted } from "vue";
import {
  User,
  Bot,
  Send,
  Document,
  Folder,
  Close,
} from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";

// 配置
const config = reactive({
  url: "/ai-api/v1/chat/completions",
  key: "sk-eLVdtBafCyDx0pslbAVSbg",
  model: "qwen3.8-27b",
  maxTokens: 4096,
  temperature: 0.7,
});

// 状态
const showConfig = ref(true);
const messages = ref([]);
const inputMessage = ref("");
const isLoading = ref(false);
const messagesContainer = ref(null);
const uploadRef = ref(null);
const uploadedFiles = ref([]);
const selectedFiles = ref([]);

// 保存配置
const saveConfig = () => {
  localStorage.setItem("aiChatConfig", JSON.stringify(config));
  ElMessage.success("配置已保存");
};

// 加载配置
onMounted(() => {
  const saved = localStorage.getItem("aiChatConfig");
  if (saved) {
    Object.assign(config, JSON.parse(saved));
  }
});

// 处理文件上传
const handleFileChange = async (file) => {
  try {
    // 将文件转换为 Base64
    const base64Data = await fileToBase64(file.raw);

    uploadedFiles.value.push({
      name: file.name,
      file: file.raw,
      base64: base64Data, // Base64 编码的文件数据
      size: file.size,
      type: file.raw.type || "application/octet-stream",
    });

    // 第一次上传文件时，默认选中
    if (uploadedFiles.value.length === 1) {
      selectedFiles.value = [0];
    }

    ElMessage.success(
      `文件 "${file.name}" 已上传 (${formatFileSize(file.size)})`
    );
  } catch (error) {
    ElMessage.error(`文件上传失败: ${error.message}`);
  }
};

// 将文件转换为 Base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result); // 已经是 data:xxx;base64,xxx 格式
    };
    reader.onerror = () => {
      reject(new Error("文件转换失败"));
    };
    reader.readAsDataURL(file);
  });
};

// 格式化文件大小
const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
};

// 切换文件选择状态
const toggleFileSelection = (index) => {
  const selectedIndex = selectedFiles.value.indexOf(index);
  if (selectedIndex > -1) {
    selectedFiles.value.splice(selectedIndex, 1);
  } else {
    selectedFiles.value.push(index);
  }
};

// 移除单个文件
const removeFile = (index) => {
  uploadedFiles.value.splice(index, 1);
  // 更新选中索引
  selectedFiles.value = selectedFiles.value
    .map((i) => (i > index ? i - 1 : i))
    .filter((i) => i !== index && i < uploadedFiles.value.length);
  ElMessage.success("文件已移除");
};

// 移除选中的文件
const removeSelectedFiles = () => {
  if (selectedFiles.value.length === 0) return;

  ElMessageBox.confirm(
    `确定要删除选中的 ${selectedFiles.value.length} 个文件吗？`,
    "确认删除",
    {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning",
    }
  )
    .then(() => {
      // 从大到小排序，避免索引问题
      const sortedIndexes = [...selectedFiles.value].sort((a, b) => b - a);
      sortedIndexes.forEach((index) => {
        uploadedFiles.value.splice(index, 1);
      });
      selectedFiles.value = [];
      ElMessage.success("已删除选中的文件");
    })
    .catch(() => {
      // 用户取消
    });
};

// 发送消息
const sendMessage = async () => {
  if (
    (!inputMessage.value.trim() && uploadedFiles.value.length === 0) ||
    isLoading.value
  )
    return;

  // 构建用户消息内容
  let userContent = inputMessage.value.trim();

  // 如果有上传的文件，在消息中添加文件信息
  if (uploadedFiles.value.length > 0) {
    const fileInfo = uploadedFiles.value
      .map((f) => `\n\n📎 附件: ${f.name} (${formatFileSize(f.size)})`)
      .join("");
    userContent += fileInfo;
    // 注意：不清空 uploadedFiles，保留文件供后续使用
  }

  const userMessage = {
    role: "user",
    content: userContent,
    time: new Date().toLocaleTimeString("zh-CN"),
  };
  messages.value.push(userMessage);
  inputMessage.value = "";

  await nextTick();
  scrollToBottom();

  isLoading.value = true;

  // 创建AI消息占位符，用于流式更新
  const aiMessageIndex = messages.value.length;
  const aiMessage = {
    role: "assistant",
    content: "",
    time: new Date().toLocaleTimeString("zh-CN"),
  };
  messages.value.push(aiMessage);
  try {
    // 构建 API 请求的消息体
    const allMessages = messages.value.slice(0, -1);
    const lastUserMessageIndex = allMessages.length - 1;

    const apiMessages = allMessages.map((m, index) => {
      const messageObj = {
        role: m.role,
        content: [],
      };

      // 添加文本内容
      if (m.content) {
        messageObj.content.push({
          type: "text",
          text: m.content,
        });
      }

      // 如果是最后一条用户消息且有选中的文件，添加文件数据
      if (index === lastUserMessageIndex && selectedFiles.value.length > 0) {
        selectedFiles.value.forEach((fileIndex) => {
          const file = uploadedFiles.value[fileIndex];
          if (file) {
            messageObj.content.push({
              type: "file",
              file: {
                file_data: file.base64, // Base64 编码的文件数据
                filename: file.name,
                file_format: file.type,
              },
            });
          }
        });
        // 发送后清空已选中的文件和已上传的文件
        selectedFiles.value = [];
        uploadedFiles.value = [];
      }

      return messageObj;
    });

    const response = await fetch(config.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.key}`,
      },
      body: JSON.stringify({
        model: config.model,
        messages: apiMessages,
        stream: true,
        stream_options: {
          include_usage: true,
        },
        include_tool_usage: true,
      }),
    });

    // 处理流式响应并实现逐字显示效果
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let aiContent = "";
    let displayContent = "";
    let displayInterval = null;

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim());

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const dataStr = line.slice(6);
            if (dataStr === "[DONE]") continue;

            try {
              const data = JSON.parse(dataStr);
              if (data.choices && data.choices.length > 0) {
                const delta = data.choices[0].delta;
                if (delta?.content) {
                  aiContent += delta.content;

                  // 启动逐字显示效果（如果还没有启动）
                  if (!displayInterval) {
                    let charIndex = 0;
                    displayInterval = setInterval(() => {
                      if (charIndex < aiContent.length) {
                        // 每次显示1-3个字符，模拟打字效果
                        const charsToShow = Math.min(
                          3,
                          aiContent.length - charIndex
                        );
                        displayContent += aiContent.substring(
                          charIndex,
                          charIndex + charsToShow
                        );
                        charIndex += charsToShow;

                        // 更新消息内容
                        messages.value[aiMessageIndex].content = displayContent;
                        scrollToBottom();
                      } else {
                        clearInterval(displayInterval);
                        displayInterval = null;
                      }
                    }, 30); // 每30ms显示一次
                  }
                }
              }
            } catch (e) {
              // 跳过无法解析的行
            }
          }
        }
      }

      // 确保所有内容都显示完毕
      if (displayInterval) {
        clearInterval(displayInterval);
      }
      messages.value[aiMessageIndex].content = aiContent;

      if (!aiContent) {
        throw new Error("未收到有效响应");
      }
    } finally {
      reader.releaseLock();
    }
  } catch (error) {
    ElMessage.error("请求失败: " + error.message);
    messages.value[aiMessageIndex].content = `❌ 请求失败: ${error.message}`;
  } finally {
    isLoading.value = false;
    await nextTick();
    scrollToBottom();
  }
};

// 滚动到底部
const scrollToBottom = () => {
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

// 格式化消息（支持简单的markdown）
const formatMessage = (content) => {
  return content
    .replace(
      /```(\w+)?\n([\s\S]*?)```/g,
      '<pre class="code-block"><code>$2</code></pre>'
    )
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
};
</script>

<style lang="less" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  background: var(--by-shallow-back);
  padding: 20px;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.config-panel {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.config-input {
  width: 100%;
}

.config-select {
  width: 100%;
}

.save-btn {
  width: 100%;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.message-item {
  display: flex;
  margin-bottom: 20px;

  &.user {
    flex-direction: row-reverse;

    .message-content {
      background: #409eff;
      color: white;
      border-radius: 12px 12px 0 12px;
    }
  }

  &.assistant {
    .message-content {
      background: #f5f7fa;
      color: #303133;
      border-radius: 12px 12px 12px 0;
    }
  }
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
  flex-shrink: 0;

  .user-icon {
    color: #409eff;
    font-size: 20px;
  }

  .ai-icon {
    color: #67c23a;
    font-size: 20px;
  }
}

.message-content {
  max-width: 70%;
  padding: 12px 16px;
}

.message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 12px;
}

.role {
  font-weight: 600;
}

.time {
  opacity: 0.6;
}

.message-body {
  line-height: 1.6;
  font-size: 14px;
  word-break: break-word;

  .code-block {
    background: #1a1a1a;
    color: #f8f8f2;
    padding: 12px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 8px 0;
    font-family: "Consolas", "Monaco", monospace;
    font-size: 13px;
  }

  .inline-code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "Consolas", "Monaco", monospace;
    font-size: 13px;
  }
}

.loading-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: #909399;
}

.chat-input {
  display: flex;
  gap: 12px;
  align-items: center;
}

.upload-wrapper {
  display: inline-block;
}

.upload-btn {
  white-space: nowrap;
}

.file-list-btn {
  white-space: nowrap;
}

.message-input {
  flex: 1;
}

.send-btn {
  width: 100px;
}
</style>
<style lang="less">
.file-list-popover {
  .file-list-container {
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .file-list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
    }

    .file-list-items {
      max-height: 250px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;

      .file-item {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.2s;

        &.selected {
          background: #ecf5ff;
        }

        &:hover:not(.selected) {
          background: #f5f7fa;
        }

        .el-checkbox {
          flex-shrink: 0;
        }

        .file-info {
          flex: 1;
          display: flex;
          align-items: center;
          min-width: 0;

          .file-name {
            font-size: 13px;
            font-weight: 500;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 8px;
            flex: 1;
          }

          .file-size {
            font-size: 12px;
            color: #909399;
            white-space: nowrap;
            flex-shrink: 0;
          }
        }

        .remove-btn {
          padding: 0;
          flex-shrink: 0;
        }
      }
    }

    .file-list-footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 12px;
      color: #909399;
    }
  }
}
</style>
