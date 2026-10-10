#!/bin/bash

echo "========================================"
echo "Starting Java Web Backend Service"
echo "========================================"
echo ""

# 检查 Java 是否安装
if ! command -v java &> /dev/null; then
    echo "[ERROR] Java is not installed or not in PATH"
    echo "Please install JDK 11 or higher"
    exit 1
fi

echo "[INFO] Java version:"
java -version
echo ""

# 检查 Maven 是否安装
if ! command -v mvn &> /dev/null; then
    echo "[ERROR] Maven is not installed or not in PATH"
    echo "Please install Maven 3.6 or higher"
    echo ""
    echo "You can install Maven using:"
    echo "  Ubuntu/Debian: sudo apt-get install maven"
    echo "  macOS: brew install maven"
    exit 1
fi

echo "[INFO] Maven version:"
mvn -version
echo ""

# 初始化数据库提示
echo "========================================"
echo "IMPORTANT: Database Initialization"
echo "========================================"
echo "Before starting the service, please execute init.sql in MySQL:"
echo "  mysql -u root -p123 < init.sql"
echo ""
echo "Or manually create the database and table using the SQL in init.sql"
echo ""
read -p "Press Enter to continue..."

# 构建项目
echo "[INFO] Building project..."
mvn clean package -DskipTests
if [ $? -ne 0 ]; then
    echo "[ERROR] Build failed!"
    exit 1
fi

echo ""
echo "[INFO] Build successful!"
echo ""

# 启动服务
echo "========================================"
echo "Starting Spring Boot Application"
echo "Port: 3600"
echo "========================================"
echo ""
mvn spring-boot:run
