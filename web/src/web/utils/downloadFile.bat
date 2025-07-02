cd /d "%~dp0"
echo run script
node downloadFile.js
pause

@REM http-server -p 8084 :: 这个也可以