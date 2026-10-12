# Java 实践

## 流程

1. 语言环境依赖、项目依赖、springboot依赖
2. 基础语法、 项目架构、 目录结构、 数据库操作、全链路调试、 事务管理、 异常处理、 日志记录、 定时任务、 缓存、 分布式系统等
3. debugger与调试，包括断点、单步执行、变量查看、堆栈跟踪等
4. 高阶用法，包括注解、泛型、枚举、异常处理、日志记录等
5. 打包部署，包括Maven、Gradle、Docker、Kubernetes等
6. 性能优化，包括内存管理、线程池、缓存优化等

//例子 public     static    final     int   MAX = 100;
    外部是否可访问  类共享  是否可变   数据类型

## 关键字

### 访问修饰符

1. public 公共，任何地方可见
2. private 私有，同类可见，子类可见，外部不可见
3. protected 保护的，同包类可见，子类可见，外部不可见，不同包类可通过子类引用可访问
4. default 默认，包内可见，子类可见，外部不可见，不同包子类不可访问

### 类、接口、对象

1. class 类
2. interface 接口
3. extends 继承
4. implements 实现
5. new 创建对象
6. this 当前对象引用
7. super 父类引用

类和实例，局部变量定义在方法内部，方法外部无法访问，且new 对象时，左右两侧的类型必须一致。
Number 类，用于处理数值类型，如 int, long, float, double 等。
Math 类，提供数学函数，如 abs, pow, sqrt, log 等。
Character 类，用于处理字符类型，如 char 等。
String 类，用于处理字符串类型，如 String 等。
StringBuffer 类，用于处理字符串类型，如 StringBuffer 等。
StringBuilder 类，用于处理字符串类型，如 StringBuilder 等。
数组，用于存储多个相同类型的元素，如 int[], String[] 等。
日期时间类，用于处理日期和时间，如 LocalDate, LocalDateTime 等。



### 字面量 true/false/null

### 包与导入

1. package 包
2. import 导入类

### 数据类型

1. byte 8位整数
2. short 16位整数
3. int 32位整数
4. long 64位整数
5. float 32位浮点数
6. double 64位浮点数
7. char 字符型
8. boolean 布尔型

比较时，数值间可以自动转换，例如 int 与 long 可以直接比较。
byte,short,char—> int —> long—> float —> double
字符串/对象 equals 方法用于比较两个对象是否相等。
转换，转换前的位数必须低于转换后的位数。



### 流程控制
1. if else
2. switch case
3. for 循环
4. while 循环
5. do while 循环
6. break 跳出循环
7. continue 跳过当前循环
8. default 默认分支

### 异常处理

1. try catch 尝试捕获异常
2. finally 最后执行
3. throw 抛出异常
4. throws 声明方法可能抛的异常

### 修饰符

1. static 静态  驼峰命名法
2. final 最终，不可变/不可继承/不可重写  驼峰命名法+下划线
3. abstract 抽象，不可实例化
4. synchronized 同步，确保线程安全，方法只能被一个线程调用
5. volatile 强制重新读取，变量改变时，强制重写共享内存值
6. transient 临时，不参与化
7. native 本地，不参与编译
8. strictfp 严格浮点，确保一致的浮点运算
9. default 默认，实现接口时，未定义的方法

### 相关类型

1. void 无返回值
2. enum 枚举类型
3. assert 断言，用于调试时检查条件是否为 true
4. instanceof 检查对象是否为指定类型的实例

### 泛型与包

1. var 局部变量，自动推导类型
2. record 记录类，用于创建不可变的类
3. sealed 密封类，用于创建有继承关系的类
4. permits 允许的继承的子类，用于指定密封类的子类，确保只能是允许的子类

### 未使用的保留字

1. goto  保留但未使用
2. const 保留但未使用

## 变量

### 局部变量

### 类变量/静态变量

静态变量所有实例共享，程序运行期间存在，直到程序结束。

### 实例变量

### 参数变量

### 正则表达式

用于匹配字符串模式，如 Pattern 类。
Matcher 类，用于匹配字符串模式，如 Matcher 类。
matches 方法，用于检查字符串是否匹配正则表达式。
replaceAll 方法，用于替换字符串中的匹配项。
replaceFirst 方法，用于替换字符串中的第一个匹配项。

### 方法

构造函数 ，用于创建对象时初始化对象的属性。可重载，即可以有多个构造函数，每个构造函数都有不同的参数列表。
方法重载，变量作用域


### GC 垃圾回收

垃圾回收机制，自动回收不再使用的内存，避免内存泄漏。

## 访问和控制、继承

父类中声明为 public 的方法在子类中也必须为 public。
父类中声明为 protected 的方法在子类中要么声明为 protected，要么声明为 public，不能声明为 private。
父类中声明为 private 的方法，不能够被子类继承。
父类中的 final 方法可以被子类继承，但是不能被子类重写。

## 运算符

+-/%* ++ --
< > <= >= == !=
&& || !
& | ^ ~ << >> >>>
?: 三目运算符
instanceof 检查对象是否为指定类型的实例

## 流（Stream）、文件（File）和 IO

java.io

1. 流（Stream）

- 字节流（处理二进制数据）
  字节流用于处理二进制数据，例如文件、图像、视频等。

| 类名 | 类型 | 描述|
| --- | --- | --- |
| InputStream | 抽象类 (输入流)|所有字节输入流的超类，处理字节的输入操作。 |
| OutputStream | 抽象类 | 所有字节输出流的超类，处理字节的输出操作抽象类 (输出流)处理字节的输出操作。 |
| FileInputStream| 输入流 | 从文件中读取字节数据。 |
| FileOutputStream | 输出流| 将字节数据写入文件。 |
| BufferedInputStream| 输入流 | 为字节输入流提供缓冲功能，提高读取效率。 |
| BufferedOutputStream | 输出流 | 为字节输出流提供缓冲功能，提高写入效率。 |
| ByteArrayInputStream | 输入流 | 将内存中的字节数组作为输入源。 |
| ByteArrayOutputStream | 输出流 | 将数据写入到内存中的字节数组。 |
| DataInputStream | 输入流 | 允许从输入流中读取 Java 原生数据类型（如 int、float、boolean）。 |
| DataOutputStream | 输出流 | 允许向输出流中写入 Java 原生数据类型。 |
| ObjectInputStream | 输入流 | 从输入流中读取序列化对象。 |
| ObjectOutputStream | 输出流 | 将对象序列化并写入输出流中。 |
| PipedInputStream | 输入流 | 用于在管道中读取字节数据，通常与 PipedOutputStream 配合使用。 |
| PipedOutputStream | 输出流 | 用于在管道中写入字节数据，通常与 PipedInputStream 配合使用。 |
| FilterInputStream | 输入流 | 字节输入流的包装类，用于对其他输入流进行过滤处理。 |
| FilterOutputStream | 输出流 | 字节输出流的包装类，用于对其他输出流进行过滤处理。 |
| SequenceInputStream | 输入流 | 将多个输入流串联为一个输入流进行处理。 |

- 字符流（处理文本数据）
  字符流用于处理文本数据，例如文本文件、XML、JSON等。

| 类名 | 类型 | 描述 |
| --- | --- | --- |
| Reader | 抽象类 (输入流) | 所有字符输入流的超类，处理字符的输入操作。 |
| Writer | 抽象类 (输出流) | 所有字符输出流的超类，处理字符的输出操作。 |
| FileReader | 输入流 | 从文件中读取字符数据。 |
| FileWriter | 输出流 | 将字符数据写入文件。 |
| BufferedReader | 输入流 | 为字符输入流提供缓冲功能，支持按行读取，提高读取效率。 |
| BufferedWriter | 输出流 | 为字符输出流提供缓冲功能，支持按行写入，提高写入效率。 |
| CharArrayReader | 输入流 | 将字符数组作为输入源。 |
| CharArrayWriter | 输出流 | 将数据写入到字符数组。 |
| StringReader | 输入流 | 将字符串作为输入源。 |
| StringWriter | 输出流 | 将数据写入到字符串缓冲区。 |
| PrintWriter | 输出流 | 便捷的字符输出流，支持自动刷新和格式化输出。 |
| PipedReader | 输入流 | 用于在管道中读取字符数据，通常与 PipedWriter 配合使用。 |
| PipedWriter | 输出流 | 用于在管道中写入字符数据，通常与 PipedReader 配合使用。 |
| LineNumberReader | 输入流 | 带行号的缓冲字符输入流，允许跟踪读取的行号。 |
| PushbackReader | 输入流 | 允许在读取字符后将字符推回流中，以便再次读取。 |

- 辅助类


| 类名 | 类型 | 描述 |
| --- | --- | --- |
| File | 文件和目录操作 | 用于表示文件或目录，并提供文件操作，如创建、删除、重命名等。 |
| RandomAccessFile | 随机访问文件 | 支持文件的随机访问，可以从文件的任意位置读写数据。 |
| Console | 控制台输入输出 | 提供对系统控制台的输入和输出支持。 |

- FileInputStream
  从文件中读取字节数据。

- FileOutputStream
  将字节数据写入文件。

## Scanner 类

  用于从标准输入（键盘）读取用户输入的文本数据。

## 异常处理


## 内存分配

## 日志记录

1. 2026-10-10 项目搭建完成、ai生成项目代码、接口调用成功，数据库写入成功
   日志记录模块正常运行，日志记录成功。
   增加vscode 热更新功能，实现代码修改后自动重启项目。 pom.xml 配置  spring-boot-devtools +  settings.json 配置  "java.autobuild.enabled": true
   调试： Debugger for Java 插件 + F5 启动调试模式 进入

2. 2026-10-12 基础语法