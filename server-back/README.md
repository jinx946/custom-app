# Java Web Backend Service

基于 Spring Boot 的 Java Web 后台服务，提供用户登录验证功能。

## 技术栈

- **框架**: Spring Boot 2.7.18
- **数据库**: MySQL 8.0
- **ORM**: Spring Data JPA / Hibernate
- **构建工具**: Maven
- **Java 版本**: 11

## 项目结构

```
server-back/
├── src/main/java/com/custom/
│   ├── ServerBackApplication.java    # 主启动类
│   ├── controller/
│   │   └── UserController.java       # 用户控制器
│   ├── entity/
│   │   ├── User.java                 # 用户实体
│   │   └── ApiRequestLog.java        # API请求日志实体
│   ├── repository/
│   │   ├── UserRepository.java       # 用户数据访问层
│   │   └── ApiRequestLogRepository.java  # 日志数据访问层
│   ├── service/
│   │   ├── UserService.java          # 用户业务逻辑层
│   │   └── ApiRequestLogService.java # 日志业务逻辑层
│   └── aspect/
│       └── ApiRequestLogAspect.java  # API请求日志切面
├── src/main/resources/
│   └── application.properties        # 配置文件
├── pom.xml                           # Maven 配置
└── init.sql                          # 数据库初始化脚本
```

## 配置说明

### 数据库配置

- **主机**: localhost
- **端口**: 3306
- **用户名**: root
- **密码**: 123
- **数据库名**: custom_app

### 服务端口

- **端口**: 3600

## 快速开始

### 1. 初始化数据库

在 MySQL 中执行 `init.sql` 脚本：

```bash
mysql -u root -p123 < init.sql
```

或者在 MySQL 客户端中手动执行 SQL 语句。

**注意**: 新版本增加了 `api_request_log` 表用于记录API请求日志。

### 2. 构建项目

```bash
cd server-back
mvn clean install
```

### 3. 启动服务

```bash
mvn spring-boot:run
```

或者运行打包后的 jar 文件：

```bash
mvn package
java -jar target/server-back-1.0.0.jar
```

### 4. 测试接口

服务启动后，可以通过以下接口进行测试：

#### 用户登录

```bash
curl -X POST http://localhost:3600/api/login \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "admin123"}'
```

#### 用户注册

```bash
curl -X POST http://localhost:3600/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newuser",
    "password": "password123",
    "email": "newuser@example.com",
    "phone": "13900139000"
  }'
```

#### 查询用户

```bash
curl http://localhost:3600/api/user/admin
```

## API 接口说明

### 1. 用户登录

- **URL**: `/api/login`
- **方法**: POST
- **请求体**:
  ```json
  {
    "username": "admin",
    "password": "admin123"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "message": "登录成功",
    "data": {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "phone": "13800138000"
    }
  }
  ```

### 2. 用户注册

- **URL**: `/api/register`
- **方法**: POST
- **请求体**:
  ```json
  {
    "username": "newuser",
    "password": "password123",
    "email": "newuser@example.com",
    "phone": "13900139000"
  }
  ```
- **响应**:
  ```json
  {
    "success": true,
    "message": "注册成功",
    "data": {
      "id": 3,
      "username": "newuser",
      "email": "newuser@example.com",
      "phone": "13900139000"
    }
  }
  ```

### 3. 查询用户

- **URL**: `/api/user/{username}`
- **方法**: GET
- **响应**:
  ```json
  {
    "success": true,
    "data": {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "phone": "13800138000"
    }
  }
  ```

## 日志监控功能

### 功能说明

系统自动记录所有API请求的详细信息到数据库，包括：

- **请求信息**: HTTP方法、URL、客户端IP、User-Agent
- **请求参数**: 请求体内容（JSON格式）
- **响应信息**: 响应状态码、响应数据（JSON格式）
- **执行结果**: 是否成功、错误信息（如有）
- **性能数据**: 请求耗时（毫秒）
- **追踪标识**: 唯一的请求ID（UUID）

### 数据库表结构

**表名**: `api_request_log`

| 字段名 | 类型 | 说明 |
|--------|------|------|
| id | BIGINT | 日志ID（自增主键） |
| request_id | VARCHAR(64) | 请求唯一标识（UUID） |
| method | VARCHAR(10) | HTTP方法（GET/POST/PUT/DELETE等） |
| url | VARCHAR(500) | 请求URL |
| ip_address | VARCHAR(50) | 客户端IP地址 |
| request_params | TEXT | 请求参数（JSON格式） |
| response_status | INT | 响应状态码 |
| response_data | TEXT | 响应数据（JSON格式） |
| success | TINYINT(1) | 是否成功（0-失败，1-成功） |
| error_message | TEXT | 错误信息 |
| cost_time | BIGINT | 耗时（毫秒） |
| user_agent | VARCHAR(500) | 用户代理 |
| create_time | DATETIME | 创建时间 |

### 索引优化

为提高查询性能，已创建以下索引：
- `idx_request_id`: 按请求ID查询
- `idx_create_time`: 按时间范围查询
- `idx_method`: 按HTTP方法查询
- `idx_success`: 按成功/失败状态查询

### 实现原理

使用Spring AOP切面技术，自动拦截所有Controller层的请求：
- **非侵入式**: 无需修改现有Controller代码
- **异步保存**: 日志保存不影响主业务流程性能
- **异常捕获**: 自动记录异常信息和堆栈
- **IP获取**: 支持通过代理获取真实客户端IP

### 查询示例

```sql
-- 查询最近的10条请求日志
SELECT * FROM api_request_log ORDER BY create_time DESC LIMIT 10;

-- 查询失败的请求
SELECT * FROM api_request_log WHERE success = 0;

-- 查询某个接口的平均响应时间
SELECT url, AVG(cost_time) as avg_cost_time 
FROM api_request_log 
GROUP BY url;

-- 查询特定时间段的请求
SELECT * FROM api_request_log 
WHERE create_time >= '2024-01-01 00:00:00' 
  AND create_time <= '2024-01-31 23:59:59';
```

## 测试账号

项目中预置了两个测试账号：

1. **admin** / admin123
2. **test** / test123

## 注意事项

1. 确保 MySQL 服务已启动并可访问
2. 首次运行前需要执行 `init.sql` 创建数据库和表
3. 实际生产环境中，密码应该加密存储（如使用 BCrypt）
4. 建议添加 JWT 或其他认证机制增强安全性
5. 日志表会持续增长，建议定期清理或归档历史数据

## 开发环境要求

- JDK 11+
- Maven 3.6+
- MySQL 8.0+
