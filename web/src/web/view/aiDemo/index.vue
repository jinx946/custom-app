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
                <el-option label="DeepSeek-R1" value="deepseek-r1" />
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
import { User, Bot, Send } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

// 配置
const config = reactive({
  url: "/ai-api/v1/chat/completions",
  key: "sk-ph4tSNBx4hfvwYiuoZOwOqIYnWhbYPGWZC18hBQPB08QhDY5",
  model: "gpt-5.5",
  maxTokens: 4096,
  temperature: 0.7,
});

// 状态
const showConfig = ref(true);
const messages = ref([]);
const inputMessage = ref("");
const isLoading = ref(false);
const messagesContainer = ref(null);

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

// 发送消息
const sendMessage = async () => {
  if (!inputMessage.value.trim() || isLoading.value) return;

  const userMessage = {
    role: "user",
    content: inputMessage.value.trim(),
    time: new Date().toLocaleTimeString("zh-CN"),
  };
  messages.value.push(userMessage);
  inputMessage.value = "";

  await nextTick();
  scrollToBottom();

  isLoading.value = true;

  try {
    const response = await fetch(config.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.key}`,
      },
      body: JSON.stringify({
        model: config.model,
        messages: messages.value.map((m) => ({
          role: m.role,
          content: m.content,
        })),
        max_tokens: config.maxTokens,
        temperature: config.temperature,
      }),
    });

    const data = await response.json();
    if (data.choices && data.choices.length > 0) {
      const aiMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
        time: new Date().toLocaleTimeString("zh-CN"),
      };
      messages.value.push(aiMessage);
    } else {
      throw new Error(data.error?.message || "未知错误");
    }
  } catch (error) {
    ElMessage.error("请求失败: " + error.message);
    const errorMessage = {
      role: "assistant",
      content: `❌ 请求失败: ${error.message}`,
      time: new Date().toLocaleTimeString("zh-CN"),
    };
    messages.value.push(errorMessage);
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
}

.message-input {
  flex: 1;
}

.send-btn {
  width: 100px;
}
</style>
