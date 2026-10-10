@echo off
echo ========================================
echo Starting Java Web Backend Service
echo ========================================
echo.

REM 检查 Java 是否安装
where java >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Java is not installed or not in PATH
    echo Please install JDK 11 or higher
    pause
    exit /b 1
)

echo [INFO] Java version:
java -version
echo.

REM 检查 Maven 是否安装
where mvn >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Maven is not installed or not in PATH
    echo Please install Maven 3.6 or higher
    echo.
    echo You can download Maven from: https://maven.apache.org/download.cgi
    pause
    exit /b 1
)

echo [INFO] Maven version:
mvn -version
echo.

REM 初始化数据库提示
echo ========================================
echo IMPORTANT: Database Initialization
echo ========================================
echo Before starting the service, please execute init.sql in MySQL:
echo   mysql -u root -p123 ^< init.sql
echo.
echo Or manually create the database and table using the SQL in init.sql
echo.
pause

REM 构建项目
echo [INFO] Building project...
call mvn clean package -DskipTests
if %errorlevel% neq 0 (
    echo [ERROR] Build failed!
    pause
    exit /b 1
)

echo.
echo [INFO] Build successful!
echo.

REM 启动服务
echo ========================================
echo Starting Spring Boot Application
echo Port: 3600
echo ========================================
echo.
call mvn spring-boot:run

pause
