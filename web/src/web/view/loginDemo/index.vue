<template>
  <div class="login-demo">
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h2>用户登录</h2>
          <p>Welcome Back</p>
        </div>

        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="loginRules"
          class="login-form"
        >
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              prefix-icon="User"
              size="large"
              clearable
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              prefix-icon="Lock"
              size="large"
              show-password
              @keyup.enter="handleLogin"
            />
          </el-form-item>

          <el-form-item>
            <el-checkbox v-model="loginForm.rememberMe">记住我</el-checkbox>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              size="large"
              class="login-button"
              :loading="loading"
              @click="handleLogin"
            >
              {{ loading ? '登录中...' : '登 录' }}
            </el-button>
          </el-form-item>

          <div class="login-tips">
            <p>测试账号：admin / 123456</p>
          </div>
        </el-form>

        <!-- 模拟接口调用状态展示 -->
        <div v-if="apiLog.length > 0" class="api-log">
          <h3>接口调用日志</h3>
          <div v-for="(log, index) in apiLog" :key="index" class="log-item">
            <span class="log-time">{{ log.time }}</span>
            <span :class="['log-status', log.status]">{{ log.status }}</span>
            <span class="log-message">{{ log.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';

const loginFormRef = ref(null);
const loading = ref(false);
const apiLog = ref([]);

// 登录表单数据
const loginForm = reactive({
  username: '',
  password: '',
  rememberMe: false
});

// 表单验证规则
const loginRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 20, message: '用户名长度在 3 到 20 个字符', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, max: 20, message: '密码长度在 6 到 20 个字符', trigger: 'blur' }
  ]
};

// 添加接口日志
const addApiLog = (status, message) => {
  const now = new Date();
  const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;
  apiLog.value.unshift({
    time,
    status,
    message
  });
  // 只保留最近 10 条日志
  if (apiLog.value.length > 10) {
    apiLog.value.pop();
  }
};

// 模拟登录接口
const mockLoginApi = (username, password) => {
  return new Promise((resolve, reject) => {
    addApiLog('pending', `正在调用登录接口...`);
    
    setTimeout(() => {
      // 模拟接口延迟 1-2 秒
      const delay = Math.random() * 1000 + 1000;
      
      setTimeout(() => {
        // 模拟验证逻辑
        if (username === 'admin' && password === '123456') {
          addApiLog('success', '登录成功！获取到用户信息');
          resolve({
            code: 200,
            message: '登录成功',
            data: {
              token: 'mock_token_' + Date.now(),
              username: username,
              role: 'admin',
              avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
            }
          });
        } else if (username === 'user' && password === '123456') {
          addApiLog('success', '登录成功！获取到用户信息');
          resolve({
            code: 200,
            message: '登录成功',
            data: {
              token: 'mock_token_' + Date.now(),
              username: username,
              role: 'user',
              avatar: 'https://avatars.githubusercontent.com/u/2?v=4'
            }
          });
        } else {
          addApiLog('error', '登录失败：用户名或密码错误');
          reject({
            code: 401,
            message: '用户名或密码错误'
          });
        }
      }, delay);
    }, 100);
  });
};

// 处理登录
const handleLogin = async () => {
  if (!loginFormRef.value) return;

  try {
    // 表单验证
    await loginFormRef.value.validate();
    
    loading.value = true;
    addApiLog('pending', `发起登录请求: ${loginForm.username}`);

    // 调用模拟接口
    const result = await mockLoginApi(loginForm.username, loginForm.password);
    
    loading.value = false;
    
    // 登录成功
    ElMessage.success({
      message: `欢迎回来，${result.data.username}！`,
      duration: 3000
    });
    
    console.log('登录成功，返回数据：', result);
    
    // 如果勾选了记住我，保存到 localStorage
    if (loginForm.rememberMe) {
      localStorage.setItem('rememberedUsername', loginForm.username);
    }
    
  } catch (error) {
    loading.value = false;
    
    if (error.code === 401) {
      ElMessage.error(error.message);
    } else {
      ElMessage.error('表单验证失败');
    }
    
    console.error('登录失败：', error);
  }
};

// 页面加载时，如果有记住的用户名，自动填充
const rememberedUsername = localStorage.getItem('rememberedUsername');
if (rememberedUsername) {
  loginForm.username = rememberedUsername;
  loginForm.rememberMe = true;
}
</script>

<style lang="less" scoped>
.login-demo {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-box {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 40px;
  backdrop-filter: blur(10px);
}

.login-header {
  text-align: center;
  margin-bottom: 30px;

  h2 {
    margin: 0 0 10px 0;
    font-size: 28px;
    color: #333;
    font-weight: 600;
  }

  p {
    margin: 0;
    color: #999;
    font-size: 14px;
  }
}

.login-form {
  .login-button {
    width: 100%;
    height: 45px;
    font-size: 16px;
    font-weight: 500;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    
    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
    }
  }

  .login-tips {
    text-align: center;
    margin-top: 20px;
    
    p {
      margin: 0;
      color: #999;
      font-size: 12px;
    }
  }
}

.api-log {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  max-height: 300px;
  overflow: auto;

  h3 {
    margin: 0 0 15px 0;
    font-size: 16px;
    color: #333;
  }

  .log-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    margin-bottom: 8px;
    background: #f5f7fa;
    border-radius: 6px;
    font-size: 13px;
    transition: all 0.3s;

    &:hover {
      background: #e8eaf0;
    }

    .log-time {
      color: #909399;
      margin-right: 10px;
      font-family: monospace;
    }

    .log-status {
      padding: 2px 8px;
      border-radius: 4px;
      margin-right: 10px;
      font-size: 12px;
      font-weight: 500;

      &.pending {
        background: #e6f7ff;
        color: #1890ff;
      }

      &.success {
        background: #f6ffed;
        color: #52c41a;
      }

      &.error {
        background: #fff1f0;
        color: #ff4d4f;
      }
    }

    .log-message {
      color: #606266;
      flex: 1;
    }
  }
}

// Element Plus 样式覆盖
:deep(.el-input__wrapper) {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  &:hover {
    box-shadow: 0 2px 12px rgba(102, 126, 234, 0.2);
  }
  
  &.is-focus {
    box-shadow: 0 2px 12px rgba(102, 126, 234, 0.3);
  }
}

:deep(.el-checkbox__label) {
  color: #606266;
}
</style>
