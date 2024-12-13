```
user 123456 3306
电脑 服务 mysql服务是否启动
cmd 命令行
启动  mysqld --console;   关闭  mysqladmin -uroot shutdown;
登录  mysql -u root -p;
显示数据库  show databases;
创建数据库  create database appsql;
创建表  create table appsql_user( id  INT NOT NULL AUTO_INCREMENT, user_name CHAR(100), name CHAR(100), paasword CHAR(50),infor VARCHAR(1000),level INT,PRIMARY KEY( id )) ENGINE=InnoDB DEFAULT CHARSET=utf8;
查看表  show tables; desc appsql_user(表名);
删除表   DROP TABLE  TABLE_NAME(表名);

增  INSERT INTO appsql_user(user_name,create_time)  values ('苦哈哈',NOW());
删 delete from 表名 where name = '张三';、
改 update 表名 set user_name = '123',password = '345' where user_name = '张三';
查 select * from appsql_user;

其他知识
like  '%com'  以com结尾
'%a'     //以a结尾的数据
'a%'     //以a开头的数据
'%a%'    //含有a的数据
UNION  连接两个以上的select 集合
ORDER BY 排序   ASC 或 DESC
GROUP BY  分组  COUNT(*)
INNER JOIN  内连接，等值连接  字段匹配关系记录 （无数据 null表示）
LEFT JOIN 左表所有记录，右表可无对应记录
RIGHT JOIN

SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a INNER JOIN tcount_tbl b  ON  a.runoob_author = b.runoob_author;
==
SELECT a.runoob_id, a.runoob_author, b.runoob_count FROM runoob_tbl a, tcount_tbl b WHERE a.runoob_author = b.runoob_author;
NULL 值处理  和任何值比较皆为 NULL
 IS NULL 和 IS NOT NULL
ifnull(字段,0)  如果是null 转为 0

事务  执行一系列操作
begin / start transaction  开启事务
curd 操作
rollback  事务回滚
commit 提交
alter 操作数据库对象
插入表字段  alter table appsql_user add create_time DATETIME;  (ADD,MODIFY修改列定义,CHANGE修改列名称,DROP删除)
索引  index
```
