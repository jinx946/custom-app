# 快速启动指南

## 前置条件

确保您的系统已安装以下软件：

1. **JDK 11 或更高版本**
   - 下载地址：https://www.oracle.com/java/technologies/downloads/
   - 验证安装：`java -version`

2. **Maven 3.6 或更高版本**
   - 下载地址：https://maven.apache.org/download.cgi
   - 验证安装：`mvn -version`

3. **MySQL 8.0**
   - 确保 MySQL 服务正在运行
   - 用户名：root
   - 密码：123
   - 端口：3306

## 启动步骤

### 步骤 1：初始化数据库

在 MySQL 中执行 `init.sql` 脚本来创建数据库和表。

#### 方法一：使用命令行

```bash
mysql -u root -p123 < init.sql
```

#### 方法二：使用 MySQL 客户端

1. 打开 MySQL 客户端（如 MySQL Workbench、Navicat 等）
2. 连接到 MySQL 服务器（localhost:3306，用户 root，密码 123）
3. 打开并执行 `init.sql` 文件中的所有 SQL 语句

这将：
- 创建名为 `custom_app` 的数据库
- 创建 `user` 表
- 插入两个测试账号（admin/admin123 和 test/test123）

### 步骤 2：启动服务

#### Windows 用户

双击运行 `start.bat` 或在命令行执行：

```cmd
start.bat
```

#### Linux/Mac 用户

给脚本添加执行权限并运行：

```bash
chmod +x start.sh
./start.sh
```

#### 或者手动启动

```bash
# 构建项目
mvn clean package -DskipTests

# 启动服务
mvn spring-boot:run
```

### 步骤 3：验证服务

服务启动成功后，您会看到类似以下的输出：

```
===========================================
Server started successfully on port 3600!
===========================================
```

### 步骤 4：测试 API

使用 curl 或 Postman 测试接口：

#### 测试登录接口

```bash
curl -X POST http://localhost:3600/api/login \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"admin\", \"password\": \"admin123\"}"
```

预期响应：

```json
{
  "success": true,
  "message": "登录成功",
  "data": {
    "id": 1,
    "username": "admin",
    "password": "admin123",
    "email": "admin@example.com",
    "phone": "13800138000",
    "createTime": "2024-01-01T00:00:00",
    "updateTime": "2024-01-01T00:00:00"
  }
}
```

#### 测试注册接口

```bash
curl -X POST http://localhost:3600/api/register \
  -H "Content-Type: application/json" \
  -d "{\"username\": \"newuser\", \"password\": \"pass123\", \"email\": \"test@test.com\", \"phone\": \"13900001111\"}"
```

## 常见问题

### 1. 端口 3600 已被占用

**解决方案**：修改 `src/main/resources/application.properties` 中的端口配置：

```properties
server.port=3601  # 改为其他可用端口
```

### 2. 数据库连接失败

**检查项**：
- MySQL 服务是否正在运行
- 用户名和密码是否正确（root/123）
- 端口是否正确（3306）
- 防火墙是否阻止连接

**解决方案**：
- 启动 MySQL 服务
- 确认数据库配置在 `application.properties` 中正确
- 检查 MySQL 是否允许远程连接（如果使用远程数据库）

### 3. Maven 构建失败

**可能原因**：
- Maven 未正确安装或未添加到 PATH
- 网络连接问题导致依赖下载失败

**解决方案**：
- 确认 Maven 已正确安装：`mvn -version`
- 检查网络连接
- 尝试清理后重新构建：`mvn clean install`

### 4. Java 版本不兼容

**要求**：JDK 11 或更高版本

**检查**：`java -version`

**解决方案**：安装 JDK 11 或更新版本

## 项目结构说明

```
server-back/
├── src/
│   └── main/
│       ├── java/com/custom/
│       │   ├── ServerBackApplication.java    # Spring Boot 主启动类
│       │   ├── controller/                   # 控制器层（REST API）
│       │   │   └── UserController.java
│       │   ├── entity/                       # 实体层（数据模型）
│       │   │   └── User.java
│       │   ├── repository/                   # 数据访问层
│       │   │   └── UserRepository.java
│       │   └── service/                      # 业务逻辑层
│       │       └── UserService.java
│       └── resources/
│           └── application.properties        # 应用配置文件
├── pom.xml                                   # Maven 项目配置
├── init.sql                                  # 数据库初始化脚本
├── start.bat                                 # Windows 启动脚本
├── start.sh                                  # Linux/Mac 启动脚本
└── README.md                                 # 项目说明文档
```

## API 端点汇总

| 方法 | 路径 | 说明 |
|------|------|------|
| POST | /api/login | 用户登录 |
| POST | /api/register | 用户注册 |
| GET | /api/user/{username} | 查询用户信息 |

## 下一步

- 添加 JWT 认证机制
- 实现密码加密（BCrypt）
- 添加更多业务功能
- 集成 Swagger 文档
- 添加单元测试
