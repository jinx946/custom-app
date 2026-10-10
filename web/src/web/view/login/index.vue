<template>
  <div class="login-demo">
    <div class="login-container">
      <div class="login-box">
        <div class="login-header">
          <h2>{{ isLogin ? "用户登录" : "用户注册" }}</h2>
          <p>{{ isLogin ? "Welcome Back" : "Create Account" }}</p>
        </div>

        <!-- 登录表单 -->
        <el-form
          v-if="isLogin"
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
              {{ loading ? "登录中..." : "登 录" }}
            </el-button>
          </el-form-item>

          <div class="switch-mode">
            <span>还没有账号？</span>
            <el-link type="primary" @click="switchToRegister">立即注册</el-link>
          </div>
        </el-form>

        <!-- 注册表单 -->
        <el-form
          v-else
          ref="registerFormRef"
          :model="registerForm"
          :rules="registerRules"
          class="login-form"
        >
          <el-form-item prop="username">
            <el-input
              v-model="registerForm.username"
              placeholder="请输入用户名"
              prefix-icon="User"
              size="large"
              clearable
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              v-model="registerForm.password"
              type="password"
              placeholder="请输入密码"
              prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>

          <el-form-item prop="confirmPassword">
            <el-input
              v-model="registerForm.confirmPassword"
              type="password"
              placeholder="请确认密码"
              prefix-icon="Lock"
              size="large"
              show-password
            />
          </el-form-item>

          <el-form-item prop="email">
            <el-input
              v-model="registerForm.email"
              placeholder="请输入邮箱（选填）"
              prefix-icon="Message"
              size="large"
              clearable
            />
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              size="large"
              class="login-button"
              :loading="loading"
              @click="handleRegister"
            >
              {{ loading ? "注册中..." : "注 册" }}
            </el-button>
          </el-form-item>

          <div class="switch-mode">
            <span>已有账号？</span>
            <el-link type="primary" @click="switchToLogin">立即登录</el-link>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { userApi } from "@/web/api";

const router = useRouter();
const loginFormRef = ref(null);
const registerFormRef = ref(null);
const loading = ref(false);
const isLogin = ref(true);

// 登录表单数据
const loginForm = reactive({
  username: "",
  password: "",
  rememberMe: false,
});

// 注册表单数据
const registerForm = reactive({
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
});

// 登录表单验证规则
const loginRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      min: 3,
      max: 20,
      message: "用户名长度在 3 到 20 个字符",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
  ],
};

// 注册表单验证规则
const registerRules = {
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      min: 3,
      max: 20,
      message: "用户名长度在 3 到 20 个字符",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, max: 20, message: "密码长度在 6 到 20 个字符", trigger: "blur" },
  ],
  confirmPassword: [
    { required: true, message: "请确认密码", trigger: "blur" },
    {
      validator: (rule, value, callback) => {
        if (value !== registerForm.password) {
          callback(new Error("两次输入的密码不一致"));
        } else {
          callback();
        }
      },
      trigger: "blur",
    },
  ],
  email: [
    {
      type: "email",
      message: "请输入正确的邮箱地址",
      trigger: "blur",
    },
  ],
};

// 切换到注册模式
const switchToRegister = () => {
  isLogin.value = false;
  // 清空注册表单
  registerForm.username = "";
  registerForm.password = "";
  registerForm.confirmPassword = "";
  registerForm.email = "";
};

// 切换到登录模式
const switchToLogin = () => {
  isLogin.value = true;
  // 清空登录表单
  loginForm.username = "";
  loginForm.password = "";
};

// 处理登录
const handleLogin = async () => {
  if (!loginFormRef.value) return;

  try {
    // 表单验证
    await loginFormRef.value.validate();

    loading.value = true;

    // 调用真实登录接口
    const result = await userApi.login({
      username: loginForm.username,
      password: loginForm.password,
    });

    loading.value = false;

    // 后端返回格式: { success: true, message: "登录成功", data: { id, username, email, ... } }
    if (result.success && result.data) {
      // 生成并保存 token（可以使用用户ID或其他唯一标识）
      const token = `token_${result.data.id}_${Date.now()}`;
      localStorage.setItem("token", token);

      // 如果勾选了记住我，保存用户名
      if (loginForm.rememberMe) {
        localStorage.setItem("rememberedUsername", loginForm.username);
      } else {
        localStorage.removeItem("rememberedUsername");
      }

      // 登录成功提示
      ElMessage.success({
        message: `欢迎回来，${result.data.username}！`,
        duration: 3000,
      });

      console.log("登录成功，返回数据：", result);

      // 跳转到首页或其他页面
      setTimeout(() => {
        router.push("/");
      }, 500);
    } else {
      throw new Error(result.message || "登录失败");
    }
  } catch (error) {
    loading.value = false;

    ElMessage.error(error.message || "登录失败，请检查用户名和密码");
    console.error("登录失败：", error);
  }
};

// 处理注册
const handleRegister = async () => {
  if (!registerFormRef.value) return;

  try {
    // 表单验证
    await registerFormRef.value.validate();

    loading.value = true;

    // 调用真实注册接口
    const result = await userApi.register({
      username: registerForm.username,
      password: registerForm.password,
      email: registerForm.email || undefined,
      phone: undefined, // 后端支持 phone 字段，暂时不传
    });

    loading.value = false;

    // 后端返回格式: { success: true, message: "注册成功", data: { id, username, ... } }
    if (result.success) {
      // 注册成功提示
      ElMessage.success({
        message: "注册成功！请登录",
        duration: 3000,
      });

      console.log("注册成功，返回数据：", result);

      // 切换到登录模式
      setTimeout(() => {
        switchToLogin();
        // 自动填充用户名
        loginForm.username = registerForm.username;
      }, 1000);
    } else {
      throw new Error(result.message || "注册失败");
    }
  } catch (error) {
    loading.value = false;

    ElMessage.error(error.message || "注册失败，请稍后重试");
    console.error("注册失败：", error);
  }
};

// 页面加载时，如果有记住的用户名，自动填充
const rememberedUsername = localStorage.getItem("rememberedUsername");
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

  .switch-mode {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
    color: #606266;

    span {
      margin-right: 8px;
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
