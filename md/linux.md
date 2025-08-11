# 命令
## 文件与目录操作
### ls 列出文件 -a 列出所有文件 -l 列出文件详细信息
### cd 切换目录
  cd .. 上级目录
  cd . 当前目录
  cd / 根目录
  cd ~ 根目录
### mkdir 创建目录 -p 递归创建，如 mkdir -p dir1/dir2
### rmdir 删除空目录
### pwd 显示当前目录
### cp 复制文件/目录（-r 复制目录）
### mv 移动/重命名文件或目录
### touch 创建文件
### cat 显示文件内容 -n 显示行号
### find 搜索文件
### grep 搜索文件内容
### less / more	分页查看文件（支持上下翻页）
### head / tail	查看文件头部/尾部（tail -f 实时追踪日志）
### sort 排序
### uniq 删除重复行
### wc 统计行数/单词数/字符数
## 权限管理
### chmod 修改文件权限
### chown 修改文件所有者
### chgrp 改变文件所属组
### umask	设置默认权限掩码
## 系统信息
### user  查看用户信息
### uname  查看系统信息 -a 查看所有信息
### df  查看磁盘使用情况 -h 易读模式
### du  查看文件使用情况 -sh * 汇总当前目录大小
### free 查看内存使用情况
### top / htop	实时进程监控（CPU/内存排序）
### ps	查看进程（ps aux 或 ps -ef）
### kill	终止进程（kill -9 PID 强制终止）
## 网络操作
### ping 测试网络
### ifconfig / ip 显示网络信息 旧版用 ifconfig，新版用 ip addr
### netstat	网络状态（-tulnp 查看监听端口）
### wget / curl	下载文件或访问 API
### ssh 登录远程服务器
### scp 复制文件
## 压缩与归档
### tar	压缩和解压缩文件 打包/解压（-czvf archive.tar.gz dir 压缩，-xzvf 解压）
### gzip / gunzip	压缩/解压 .gz 文件
### zip / unzip	处理 .zip 文件
## 用户与权限
### useradd / userdel 创建用户 删除用户
### sudo 以超级用户权限执行命令
### su 切换用户
### password 修改密码