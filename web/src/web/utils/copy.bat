set backup_dir=E:\code\test\demo\src\utils\public
set source_dir=E:\code\test1

echo 正在备份 %source_dir% 到 %backup_dir%...
xcopy "%source_dir%" "%backup_dir%" /e /i /y

if %errorlevel% equ 0 (
    echo 备份成功！
) else (
    echo 备份失败！
)
pause




@REM robocopy "C:\重要数据" "D:\备份\重要数据" /e /copyall /mir
@REM echo 备份完成！
@REM pause