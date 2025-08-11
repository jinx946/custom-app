## 写入文件
### dir 列出文件
### mkdir 创建目录
### 定义变量 set
set name=John
echo %name%  :: 输出 John
### set /p 读取用户输入
set /p input=请输入内容：
echo 你输入的是：%input%
### 算术运算 set /a
set /a result=10 + 5
echo 结果是：%result%  :: 输出 15
### if 条件判断
set num=10
if %num% gtr 5 (
  echo 大于5
) else (
  echo 小于等于5
)
### for 循环
for %%f in (*.txt) do (
  echo 文件：%%f
)

### 创建一个名为output.txt的文件，并写入内容
chcp 936 >nul  :: 设置控制台编码为GBK（中文Windows默认编码）防止乱码
echo 这是中文内容 > output.txt
@REM 复制文件夹
### 复制单个文件 copy
copy "C:\data\report.txt" "D:\backup\report.txt"
:: 复制所有.txt文件到目标目录
copy "C:\data\*.txt" "D:\backup\"
:: 覆盖文件时不提示
copy "C:\data\file.dat" "D:\backup\" /y
### 复制文件夹 xcopy
xcopy "C:\data" "D:\backup" /e && echo 复制成功！
参数 说明
/e 复制所有子目录（包括空目录）
/s 复制非空子目录
/i 如果目标是目录且不存在，则自动创建
/y 覆盖文件时不提示
/h 复制隐藏和系统文件
/d 仅复制源中比目标新的文件
### 高级同步 rebocopy
robocopy C:\data D:\backup /mir
参数 说明
/e 复制子目录（包括空目录）
/mir 镜像同步（删除目标中多余文件）
/copyall 复制所有文件属性（包括权限）
/z 支持断点续传
/r:3 失败时重试 3 次
/w:3 重试间隔 3 秒
/log:log.txt 记录日志到文件
### 移动文件（相当于剪切） move
move "C:\old\file.txt" "D:\new\file.txt"
### 删除文件 del
del "C:\file.txt"
### 重命名文件 ren
ren "oldname.txt" "newname.txt"
copy "C:\My Documents\file.txt" "D:\Backup\"
### call 调用其他批处理文件
call "other_script.bat"
### || 和 &&
&&：前一条命令成功时执行后续命令。
||：前一条命令失败时执行后续命令。
7. 常用特殊符号
### 符号 作用 示例
> 输出重定向（覆盖） dir > files.txt
>> 输出重定向（追加） echo 新内容 >> log.txt
` ` 管道（传递输出） `dir find "txt"`
^ 转义字符（输出特殊符号） echo 这是^>符号

### 重启电脑
shutdown /r /t 10 ::10秒后重启 /r 重启  /s 关机  /h 休眠

<code>
@echo off
set backup_dir=D:\backup
set source_dir=C:\data

echo 正在备份 %source_dir% 到 %backup_dir%...
xcopy "%source_dir%" "%backup_dir%" /e /i /y

if %errorlevel% equ 0 (
    echo 备份成功！
) else (
    echo 备份失败！
)
pause
</code>
