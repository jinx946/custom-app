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

## 数据结构

1. 数组（Arrays），固定大小，存储相同类型的元素，访问效率高，插入删除效率低
2. 列表（List），动态大小，存储不同类型的元素，插入删除效率高，访问效率低

- ArrayList，基于数组实现，随机访问效率高，插入删除效率低
  - add(element)，在末尾插入元素
  - remove()，删除最后一个元素
  - get(index)，获取指定位置的元素
  - set(index, element)，设置指定位置的元素
  - size()，获取元素数量
  - sort()，对元素进行排序

| 方法                 | 描述                           |
| ------------------ | ---------------------------- |
| `add()`            | 将元素插入到指定位置的 arraylist 中      |
| `addAll()`         | 添加集合中的所有元素到 arraylist 中      |
| `clear()`          | 删除 arraylist 中的所有元素          |
| `clone()`          | 复制一份 arraylist               |
| `contains()`       | 判断元素是否在 arraylist            |
| `get()`            | 通过索引值获取 arraylist 中的元素       |
| `indexOf()`        | 返回 arraylist 中元素的索引值         |
| `removeAll()`      | 删除存在于指定集合中的 arraylist 里的所有元素 |
| `remove()`         | 删除 arraylist 里的单个元素          |
| `size()`           | 返回 arraylist 里元素数量           |
| `isEmpty()`        | 判断 arraylist 是否为空            |
| `subList()`        | 截取部分 arraylist 的元素           |
| `set()`            | 替换 arraylist 中指定索引的元素        |
| `sort()`           | 对 arraylist 元素进行排序           |
| `toArray()`        | 将 arraylist 转换为数组            |
| `toString()`       | 将 arraylist 转换为字符串           |
| `ensureCapacity()` | 设置指定容量大小的 arraylist          |
| `lastIndexOf()`    | 返回指定元素在 arraylist 中最后一次出现的位置 |
| `retainAll()`      | 保留 arraylist 中在指定集合中也存在的那些元素 |
| `containsAll()`    | 查看 arraylist 是否包含指定集合中的所有元素  |
| `trimToSize()`     | 将 arraylist 中的容量调整为数组中的元素个数  |
| `removeRange()`    | 删除 arraylist 中指定索引之间存在的元素    |
| `replaceAll()`     | 将给定的操作内容替换掉数组中每一个元素          |
| `removeIf()`       | 删除所有满足特定条件的 arraylist 元素     |
| `forEach()`        | 遍历 arraylist 中每一个元素并执行特定操作   |

- LinkedList，基于链表实现，随机访问效率低，插入删除效率高

| 方法                                               | 描述                                                |
| ------------------------------------------------ | ------------------------------------------------- |
| `public boolean add(E e)`                        | 链表末尾添加元素，返回是否成功，成功为 true，失败为 false。               |
| `public void add(int index, E element)`          | 向指定位置插入元素。                                        |
| `public boolean addAll(Collection c)`            | 将一个集合的所有元素添加到链表后面，返回是否成功，成功为 true，失败为 false。      |
| `public boolean addAll(int index, Collection c)` | 将一个集合的所有元素添加到链表的指定位置后面，返回是否成功，成功为 true，失败为 false。 |
| `public void addFirst(E e)`                      | 元素添加到头部。                                          |
| `public void addLast(E e)`                       | 元素添加到尾部。                                          |
| `public boolean offer(E e)`                      | 向链表末尾添加元素，返回是否成功，成功为 true，失败为 false。              |
| `public boolean offerFirst(E e)`                 | 头部插入元素，返回是否成功，成功为 true，失败为 false。                 |
| `public boolean offerLast(E e)`                  | 尾部插入元素，返回是否成功，成功为 true，失败为 false。                 |
| `public void clear()`                            | 清空链表。                                             |
| `public E removeFirst()`                         | 删除并返回第一个元素。                                       |
| `public E removeLast()`                          | 删除并返回最后一个元素。                                      |
| `public boolean remove(Object o)`                | 删除某一元素，返回是否成功，成功为 true，失败为 false。                 |
| `public E remove(int index)`                     | 删除指定位置的元素。                                        |
| `public E poll()`                                | 删除并返回第一个元素。                                       |
| `public E remove()`                              | 删除并返回第一个元素。                                       |
| `public boolean contains(Object o)`              | 判断是否含有某一元素。                                       |
| `public E get(int index)`                        | 返回指定位置的元素。                                        |
| `public E getFirst()`                            | 返回第一个元素。                                          |
| `public E getLast()`                             | 返回最后一个元素。                                         |
| `public int indexOf(Object o)`                   | 查找指定元素从前往后第一次出现的索引。                               |
| `public int lastIndexOf(Object o)`               | 查找指定元素最后一次出现的索引。                                  |
| `public E peek()`                                | 返回第一个元素。                                          |
| `public E element()`                             | 返回第一个元素。                                          |
| `public E peekFirst()`                           | 返回头部元素。                                           |
| `public E peekLast()`                            | 返回尾部元素。                                           |
| `public E set(int index, E element)`             | 设置指定位置的元素。                                        |
| `public Object clone()`                          | 克隆该列表。                                            |
| `public Iterator descendingIterator()`           | 返回倒序迭代器。                                          |
| `public int size()`                              | 返回链表元素个数。                                         |
| `public ListIterator listIterator(int index)`    | 返回从指定位置开始到末尾的迭代器。                                 |
| `public Object[] toArray()`                      | 返回一个由链表元素组成的数组。                                   |
| `public T[] toArray(T[] a)`                      | 返回一个由链表元素转换类型而成的数组。                               |

3. 集合（Set），不重复元素，无序存储，插入删除效率高，访问效率低

- HashSet，基于哈希表实现，无序，高效查找和插入

| 方法                                  | 返回值           | 说明                              | 示例                                           |
| ----------------------------------- | ------------- | ------------------------------- | -------------------------------------------- |
| `add(E e)`                          | `boolean`     | 添加元素到集合，成功返回 true，重复元素返回 false。 | `set.add("Java");`                           |
| `remove(Object o)`                  | `boolean`     | 删除指定元素，成功返回 true，元素不存在返回 false。 | `set.remove("Python");`                      |
| `contains(Object o)`                | `boolean`     | 检查集合是否包含指定元素。                   | `if (set.contains("Java")) { ... }`          |
| `size()`                            | `int`         | 返回集合中的元素数量。                     | `int count = set.size();`                    |
| `isEmpty()`                         | `boolean`     | 判断集合是否为空。                       | `if (set.isEmpty()) { ... }`                 |
| `clear()`                           | `void`        | 清空集合中的所有元素。                     | `set.clear();`                               |
| `iterator()`                        | `Iterator<E>` | 返回集合的迭代器，用于遍历元素。                | `for (String s : set) { ... }`               |
| `toArray()`                         | `Object[]`    | 将集合转换为数组。                       | `Object[] arr = set.toArray();`              |
| `toArray(T[] a)`                    | `T[]`         | 将集合转换为指定类型的数组。                  | `String[] arr = set.toArray(new String[0]);` |
| `addAll(Collection<? extends E> c)` | `boolean`     | 添加另一个集合的所有元素（并集操作）。             | `set.addAll(Arrays.asList("A", "B"));`       |
| `retainAll(Collection<?> c)`        | `boolean`     | 仅保留与指定集合共有的元素（交集操作）。            | `set.retainAll(otherSet);`                   |
| `removeAll(Collection<?> c)`        | `boolean`     | 删除与指定集合共有的元素（差集操作）。             | `set.removeAll(otherSet);`                   |

- TreeSet，基于红黑树实现，有序，性能较差，不允许null

4. 映射（Map），键值对存储，有序存储，插入删除效率高，访问效率低

- HashMap，基于哈希表实现，插入删除效率高

| 方法                   | 描述                                                    |
| -------------------- | ----------------------------------------------------- |
| `clear()`            | 删除 hashMap 中的所有键/值对                                   |
| `clone()`            | 复制一份 hashMap                                          |
| `isEmpty()`          | 判断 hashMap 是否为空                                       |
| `size()`             | 计算 hashMap 中键/值对的数量                                   |
| `put()`              | 将键/值对添加到 hashMap 中                                    |
| `putAll()`           | 将所有键/值对添加到 hashMap 中                                  |
| `putIfAbsent()`      | 如果 hashMap 中不存在指定的键，则将指定的键/值对插入到 hashMap 中。           |
| `remove()`           | 删除 hashMap 中指定键 key 的映射关系                             |
| `containsKey()`      | 检查 hashMap 中是否存在指定的 key 对应的映射关系。                      |
| `containsValue()`    | 检查 hashMap 中是否存在指定的 value 对应的映射关系。                    |
| `replace()`          | 替换 hashMap 中是指定的 key 对应的 value。                       |
| `replaceAll()`       | 将 hashMap 中的所有映射关系替换成给定的函数所执行的结果。                     |
| `get()`              | 获取指定 key 对应对 value                                    |
| `getOrDefault()`     | 获取指定 key 对应对 value，如果找不到 key ，则返回设置的默认值               |
| `forEach()`          | 对 hashMap 中的每个映射执行指定的操作。                              |
| `entrySet()`         | 返回 hashMap 中所有映射项的集合集合视图。                             |
| `keySet()`           | 返回 hashMap 中所有 key 组成的集合视图。                           |
| `values()`           | 返回 hashMap 中存在的所有 value 值。                            |
| `merge()`            | 添加键值对到 hashMap 中                                      |
| `compute()`          | 对 hashMap 中指定 key 的值进行重新计算                            |
| `computeIfAbsent()`  | 对 hashMap 中指定 key 的值进行重新计算，如果不存在这个 key，则添加到 hashMap 中 |
| `computeIfPresent()` | 对 hashMap 中指定 key 的值进行重新计算，前提是该 key 存在于 hashMap 中。    |

- TreeMap，基于红黑树实现，插入删除效率低，有序存储
- Iterator（迭代器）
  Java迭代器（Iterator）是 Java 集合框架中的一种机制，是一种用于遍历集合（如列表、集合和映射等）的接口。
  它提供了一种统一的方式来访问集合中的元素，而不需要了解底层集合的具体实现细节。
  可用于迭代 ArrayList 和 HashSet 等集合
  \| 方法 | 描述 |
  \|------|------|
  | `boolean hasNext()` | 返回迭代器是否还有下一个元素 |
  | `E next()` | 返回迭代器的下一个元素 |
  | `void remove()` | 删除迭代器的上一个元素 |
- Object 类

| 序号 | 方法 & 描述                                                                                                                                |
| -- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | `protected Object clone()`<br>创建并返回一个对象的拷贝                                                                                             |
| 2  | `boolean equals(Object obj)`<br>比较两个对象是否相等                                                                                             |
| 3  | `protected void finalize()`<br>当 GC (垃圾回收器)确定不存在对该对象的有更多引用时，由对象的垃圾回收器调用此方法。                                                            |
| 4  | `Class<?> getClass()`<br>获取对象的运行时对象的类                                                                                                  |
| 5  | `int hashCode()`<br>获取对象的 hash 值                                                                                                       |
| 6  | `void notify()`<br>唤醒在该对象上等待的某个线程                                                                                                      |
| 7  | `void notifyAll()`<br>唤醒在该对象上等待的所有线程                                                                                                   |
| 8  | `String toString()`<br>返回对象的字符串表示形式                                                                                                    |
| 9  | `void wait()`<br>让当前线程进入等待状态。直到其他线程调用此对象的 notify() 方法或 notifyAll() 方法。                                                                 |
| 10 | `void wait(long timeout)`<br>让当前线程处于等待(阻塞)状态，直到其他线程调用此对象的 notify() 方法或 notifyAll() 方法，或者超过参数设置的 timeout 超时时间。                          |
| 11 | `void wait(long timeout, int nanos)`<br>与 wait(long timeout) 方法类似，多了一个 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。所以超时的时间还需要加上 nanos 纳秒。 |

- NIO Files 类

| 方法                                                                                              | 描述                 |
| ----------------------------------------------------------------------------------------------- | ------------------ |
| **文件操作**                                                                                        |                    |
| `static Path copy(Path source, Path target, CopyOption... options)`                             | 将文件从源路径复制到目标路径     |
| `static Path move(Path source, Path target, CopyOption... options)`                             | 移动或重命名文件           |
| `static void delete(Path path)`                                                                 | 删除文件               |
| `static boolean deleteIfExists(Path path)`                                                      | 如果文件存在则删除          |
| **文件属性**                                                                                        |                    |
| `static boolean exists(Path path, LinkOption... options)`                                       | 检查文件是否存在           |
| `static boolean isDirectory(Path path, LinkOption... options)`                                  | 检查路径是否为目录          |
| `static boolean isRegularFile(Path path, LinkOption... options)`                                | 检查路径是否为常规文件        |
| `static boolean isReadable(Path path)`                                                          | 检查文件是否可读           |
| `static boolean isWritable(Path path)`                                                          | 检查文件是否可写           |
| `static boolean isExecutable(Path path)`                                                        | 检查文件是否可执行          |
| `static long size(Path path)`                                                                   | 返回文件大小(字节)         |
| `static FileTime getLastModifiedTime(Path path, LinkOption... options)`                         | 获取文件最后修改时间         |
| **文件内容操作**                                                                                      |                    |
| `static byte[] readAllBytes(Path path)`                                                         | 读取文件所有字节           |
| `static List<String> readAllLines(Path path)`                                                   | 读取文件所有行            |
| `static List<String> readAllLines(Path path, Charset cs)`                                       | 用指定字符集读取文件所有行      |
| `static Stream<String> lines(Path path)`                                                        | 返回文件中行的流           |
| `static Stream<String> lines(Path path, Charset cs)`                                            | 用指定字符集返回文件中行的流     |
| `static Path write(Path path, byte[] bytes, OpenOption... options)`                             | 将字节写入文件            |
| `static Path write(Path path, Iterable<? extends CharSequence> lines, OpenOption... options)`   | 将文本行写入文件           |
| **目录操作**                                                                                        |                    |
| `static Stream<Path> list(Path dir)`                                                            | 列出目录中的条目           |
| `static DirectoryStream<Path> newDirectoryStream(Path dir)`                                     | 打开目录流              |
| `static Path createDirectory(Path dir, FileAttribute<?>... attrs)`                              | 创建目录               |
| `static Path createDirectories(Path dir, FileAttribute<?>... attrs)`                            | 创建目录(包括所有不存在的父目录)  |
| **临时文件/目录**                                                                                     |                    |
| `static Path createTempFile(Path dir, String prefix, String suffix, FileAttribute<?>... attrs)` | 创建临时文件             |
| `static Path createTempDirectory(Path dir, String prefix, FileAttribute<?>... attrs)`           | 创建临时目录             |
| **其他**                                                                                          |                    |
| `static Path createFile(Path path, FileAttribute<?>... attrs)`                                  | 创建新文件              |
| `static SeekableByteChannel newByteChannel(Path path, OpenOption... options)`                   | 打开或创建文件，返回可查找的字节通道 |
| `static InputStream newInputStream(Path path, OpenOption... options)`                           | 打开文件输入流            |
| `static OutputStream newOutputStream(Path path, OpenOption... options)`                         | 打开文件输出流            |
| `static BufferedReader newBufferedReader(Path path)`                                            | 打开缓冲读取器            |
| `static BufferedWriter newBufferedWriter(Path path, OpenOption... options)`                     | 打开缓冲写入器            |
| `static String probeContentType(Path path)`                                                     | 探测文件内容类型           |

5. 栈（Stack），后进先出

- Stack，代表一个栈，通常按照后进先出（LIFO）的顺序操作元素。

6. 队列（Queue），先进先出

实现类： LinkedList, PriorityQueue, ArrayDeque。

7. 堆（Heap），优先队列

- 优先队列，实现类： PriorityQueue。
- 树，实现类： TreeNode。
- 图，实现类： Graph。

8. 字典（Dictionary）新的java已废弃，使用Map替代
9. 哈希表（Hash Table）
10. 属性（Properties），键值对存储

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
数组，用于存储多个相同类型的元素，如 int\[], String\[] 等。
日期时间类，用于处理日期和时间，如 LocalDate, LocalDateTime 等。

### 继承

不支持多继承,单继承,多重继承,子类拥有父类非 private 的属性、方法。
extends 类只能单继承,接口可以多继承。
implements 实现多个接口。接口不能 implements 接口。
super,用来引用当前对象的父类
this,指向当前对象

### 重写(Override) 与 重载(Overload)

重写：子类可以重新定义父类的方法，实现不同的行为。名字和参数列表必须相同。
重载：一个类可以有多个方法，每个方法的参数列表不同，用于处理不同的输入。

### 多态

多态：父类引用可以指向子类对象，实现不同的行为。

### 抽象类

如果一个类包含抽象方法，那么该类必须是抽象类。
抽象类不能实例化，只能作为父类被继承。
任何子类必须重写父类的抽象方法，或者声明自身为抽象类。重写后,子类可以实例化。

### interface 接口

接口：一个类可以实现多个接口，定义了类必须实现的方法。
接口不能实例化，只能作为父类被实现。
接口可以包含默认方法，也可以包含抽象方法。

### enum 枚举类型

枚举类型：定义了有限的取值范围，每个取值都是一个常量。
枚举类型可以实现接口，也可以继承自其他类。
枚举类型可以包含方法，也可以包含字段。

### 字面量 true/false/null

### 包与导入

1. package 包,相似功能的类组织在一起，包名通常使用小写字母和下划线。
2. import 导入类

### 反射(Reflection)

反射API：反射API 提供了在运行时动态获取类、方法、字段等信息的能力。
获取类对象：Class.forName("类名")
获取方法对象：Class.getDeclaredMethods()
获取字段对象：Class.getDeclaredFields()

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
2. final 最终，不可变/不可继承/不可重写 , 修饰变量（包括类属性、对象属性、局部变量和形参）、方法（包括类方法和对象方法）和类,驼峰命名法+下划线
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

### 文档注释

单行注释 //
多行注释 /*  xxx  */
文档注释 /** xxx */
使用 javadoc 工具软件来生成信息
javadoc 标签
javadoc 工具软件识别以下标签：

| 标签 | 描述 | 示例 |
|--|--|--|
| @author | 标识一个类的作者 | @author description |
| @deprecated | 指名一个过期的类或成员 | @deprecated description |
| @docRoot | 指明当前文档根目录的路径 | Directory Path |
| @exception | 标志一个类抛出的异常 | @exception exception-name explanation |
| {@inheritDoc} | 从直接父类继承的注释 | Inherits a comment from the immediate surperclass. |
| {@link} | 插入一个到另一个主题的链接 | {@link name text}
| {@linkplain} | 插入一个到另一个主题的链接，但是该链接显示纯文本字体 | Inserts an in-line link to another topic. |
| @param | 说明一个方法的参数 | @param parameter-name explanation |
| @return | 说明返回值类型 | @return explanation |
| @see | 指定一个到另一个主题的链接 | @see anchor |
| @serial | 说明一个序列化属性 | @serial description |
| @serialData | 说明通过writeObject( ) 和 writeExternal( )方法写的数据 | @serialData description |
| @serialField | 说明一个ObjectStreamField组件 | @serialField name type description |
| @since | 标记当引入一个特定的变化时 | @since release |
| @throws | 和 @exception标签一样. | The @throws tag has the same meaning as the @exception tag. |
| {@value} | 显示常量的值，该常量必须是static属性。 | Displays the value of a constant, which must be a static field. |
| @version | 指定类的版本 | @version info |

### 实例

### java8 新特性

Lambda 表达式 − Lambda 允许把函数作为一个方法的参数（函数作为参数传递到方法中）。

方法引用 − 方法引用提供了非常有用的语法，可以直接引用已有Java类或对象（实例）的方法或构造器。与lambda联合使用，方法引用可以使语言的构造更紧凑简洁，减少冗余代码。

默认方法 − 默认方法就是一个在接口里面有了一个实现的方法。

新工具 − 新的编译工具，如：Nashorn引擎 jjs、 类依赖分析器jdeps。

Stream API −新添加的Stream API（java.util.stream） 把真正的函数式编程风格引入到Java中。

Date Time API − 加强对日期与时间的处理。

Optional 类 − Optional 类已经成为 Java 8 类库的一部分，用来解决空指针异常。

Nashorn, JavaScript 引擎 − Java 8提供了一个新的Nashorn javascript引擎，它允许我们在JVM上运行特定的javascript应用。

### MySQL 连接

[JDBC 连接数据库](http://dev.mysql.com/downloads/connector/j/)

### 常用类库

集合框架、IO/NIO、多线程、日期时间、网络编程
第三方库: JSON 处理、单元测试、日志记录、Web 开发、数据库、构建工具


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

+-/%\* ++ --
< > <= >= == !=
&& || !
& | ^ \~ << >> >>>
?: 三目运算符
instanceof 检查对象是否为指定类型的实例

## 流（Stream）、文件（File）和 IO

java.io

1. 流（Stream）

- 字节流（处理二进制数据）
  字节流用于处理二进制数据，例如文件、图像、视频等。

| 类名                    | 类型        | 描述                                          |
| --------------------- | --------- | ------------------------------------------- |
| InputStream           | 抽象类 (输入流) | 所有字节输入流的超类，处理字节的输入操作。                       |
| OutputStream          | 抽象类       | 所有字节输出流的超类，处理字节的输出操作抽象类 (输出流)处理字节的输出操作。     |
| FileInputStream       | 输入流       | 从文件中读取字节数据。                                 |
| FileOutputStream      | 输出流       | 将字节数据写入文件。                                  |
| BufferedInputStream   | 输入流       | 为字节输入流提供缓冲功能，提高读取效率。                        |
| BufferedOutputStream  | 输出流       | 为字节输出流提供缓冲功能，提高写入效率。                        |
| ByteArrayInputStream  | 输入流       | 将内存中的字节数组作为输入源。                             |
| ByteArrayOutputStream | 输出流       | 将数据写入到内存中的字节数组。                             |
| DataInputStream       | 输入流       | 允许从输入流中读取 Java 原生数据类型（如 int、float、boolean）。 |
| DataOutputStream      | 输出流       | 允许向输出流中写入 Java 原生数据类型。                      |
| ObjectInputStream     | 输入流       | 从输入流中读取序列化对象。                               |
| ObjectOutputStream    | 输出流       | 将对象序列化并写入输出流中。                              |
| PipedInputStream      | 输入流       | 用于在管道中读取字节数据，通常与 PipedOutputStream 配合使用。    |
| PipedOutputStream     | 输出流       | 用于在管道中写入字节数据，通常与 PipedInputStream 配合使用。     |
| FilterInputStream     | 输入流       | 字节输入流的包装类，用于对其他输入流进行过滤处理。                   |
| FilterOutputStream    | 输出流       | 字节输出流的包装类，用于对其他输出流进行过滤处理。                   |
| SequenceInputStream   | 输入流       | 将多个输入流串联为一个输入流进行处理。                         |

- 字符流（处理文本数据）
  字符流用于处理文本数据，例如文本文件、XML、JSON等。

| 类名               | 类型        | 描述                                 |
| ---------------- | --------- | ---------------------------------- |
| Reader           | 抽象类 (输入流) | 所有字符输入流的超类，处理字符的输入操作。              |
| Writer           | 抽象类 (输出流) | 所有字符输出流的超类，处理字符的输出操作。              |
| FileReader       | 输入流       | 从文件中读取字符数据。                        |
| FileWriter       | 输出流       | 将字符数据写入文件。                         |
| BufferedReader   | 输入流       | 为字符输入流提供缓冲功能，支持按行读取，提高读取效率。        |
| BufferedWriter   | 输出流       | 为字符输出流提供缓冲功能，支持按行写入，提高写入效率。        |
| CharArrayReader  | 输入流       | 将字符数组作为输入源。                        |
| CharArrayWriter  | 输出流       | 将数据写入到字符数组。                        |
| StringReader     | 输入流       | 将字符串作为输入源。                         |
| StringWriter     | 输出流       | 将数据写入到字符串缓冲区。                      |
| PrintWriter      | 输出流       | 便捷的字符输出流，支持自动刷新和格式化输出。             |
| PipedReader      | 输入流       | 用于在管道中读取字符数据，通常与 PipedWriter 配合使用。 |
| PipedWriter      | 输出流       | 用于在管道中写入字符数据，通常与 PipedReader 配合使用。 |
| LineNumberReader | 输入流       | 带行号的缓冲字符输入流，允许跟踪读取的行号。             |
| PushbackReader   | 输入流       | 允许在读取字符后将字符推回流中，以便再次读取。            |

- 辅助类

| 类名               | 类型      | 描述                             |
| ---------------- | ------- | ------------------------------ |
| File             | 文件和目录操作 | 用于表示文件或目录，并提供文件操作，如创建、删除、重命名等。 |
| RandomAccessFile | 随机访问文件  | 支持文件的随机访问，可以从文件的任意位置读写数据。      |
| Console          | 控制台输入输出 | 提供对系统控制台的输入和输出支持。              |

- FileInputStream
  从文件中读取字节数据。
- FileOutputStream
  将字节数据写入文件。

## Scanner 类

用于从标准输入（键盘）读取用户输入的文本数据。

## 异常处理

## 内存分配

## 常用操作

### 泛型（Generics）

  只代表引用类型

  - 泛型标记符

  | 泛型参数 | 类型  | 描述 |
  |------|------|----|
  | T | Type | 泛型类型参数 |
  | E | Element | Element 类型，用于集合中的元素 |
  | K | Key | Key 类型，用于映射中的键 |
  | V | Value | 映射中的值类型 |
  | N | Number | Number 类型，用于数值类型 |
  | ? | Wildcard | 通配符类型，用于表示任意类型 |

### 序列化（Serialization）

  - 序列化是指将对象转换为字节序列的过程。
  - 反序列化是指将字节序列转换为对象的过程。
  - 序列化和反序列化是通过实现 Serializable 接口来实现的。
  - ObjectInputStream 类，用于从字节序列中读取对象。
  - ObjectOutputStream 类，用于将对象写入字节序列。

### 网络编程

网络编程是指编写运行在多个设备（计算机）的程序，这些设备都通过网络连接起来。
java.net 包提供了网络编程的基本类和接口，包括 Socket、ServerSocket、InetAddress 等。
| 类名 | 类型 | 描述 |

|------|------|----|
| Socket | Socket 类 | 用于创建客户端套接字，用于连接到服务器 |
| ServerSocket | ServerSocket 类 | 用于创建服务器套接字，用于监听客户端连接 |
| InetAddress | InetAddress 类 | 用于表示网络地址，如 IP 地址 |
| URL | URL 类 | 用于表示网络资源地址 |
| TCP | TCP 类 | 用于表示 TCP 协议的套接字 |
| UDP | UDP 类 | 用于表示 UDP 协议的套接字 |

#### 套接字（Socket）

套接字（Socket）是网络编程的基础，用于表示网络连接的两端点。每个套接字都有一个本地地址和端口号，用于标识本地的网络地址和端口号。服务器套接字（ServerSocket）用于监听客户端连接，客户端套接字（Socket）用于连接到服务器套接字。

- 构造方法

| 序号 | 方法 | 描述 |

|------|------|----|
| 1 | public Socket(String host, int port) throws UnknownHostException, IOException. | 创建一个流套接字并将其连接到指定主机上的指定端口号。 |
| 2 | public Socket(InetAddress host, int port) throws IOException. | 创建一个流套接字并将其连接到指定 IP 地址的指定端口号。 |
| 3 | public Socket(String host, int port, InetAddress localAddress, int localPort) throws IOException. | 创建一个套接字并将其连接到指定远程主机上的指定远程端口。 |
| 4 | public Socket(InetAddress host, int port, InetAddress localAddress, int localPort) throws IOException. | 创建一个套接字并将其连接到指定远程地址上的指定远程端口。 |
| 5 | public Socket() throws IOException. | 通过系统默认类型的 SocketImpl 创建未连接套接字。 |

- 方法

| 序号 | 方法 | 描述 |

|------|------|----|
| 1 | public void close() throws IOException. | 关闭套接字，释放系统资源。 |
| 2 | public void connect() throws IOException. | 连接到服务器套接字。 |
| 3 | public void disconnect() throws IOException. | 断开与服务器套接字的连接。 |
| 4 | public void getInetAddress() throws IOException. | 获取本地地址。 |
| 5 | public void getPort() throws IOException. | 获取本地口号。 |
| 6 | public void getRemoteAddress() throws IOException. | 获取远程地址。 |
| 7 | public void getRemotePort() throws IOException. | 获取远程口号。 |
| 8 | public void getLocalSocketAddress() throws IOException. | 获取本地套接字地址。 |
| 9 | public void getRemoteSocketAddress() throws IOException. | 获取远程套接字地址。 |

#### ServerSocket

服务器套接字（ServerSocket）是网络编程的基础，用于监听客户端连接。每个服务器套接字都有一个本地地址和端口号，用于标识本地的网络地址和端口号。客户端套接字（Socket）用于连接到服务器套接字。

- 构造方法

| 序号 | 方法 | 描述 |

|------|------|----|
| 1 | public ServerSocket(int port) throws IOException. | 创建一个服务器套接字并将其绑定到指定端口号。 |
| 2 | public ServerSocket(int port, int backlog) throws IOException. | 创建一个服务器套接字并将其绑定到指定端口号，指定队列长度。 |
| 3 | public ServerSocket(int port, int backlog, InetAddress localAddress) throws IOException. | 创建一个服务器套接字并将其绑定到指定端口号，指定队列长度，指定本地地址。 |
| 4 | public ServerSocket(int port, int backlog, InetAddress localAddress, int localPort) throws IOException. | 创建一个服务器套接字并将其绑定到指定端口号，指定队列长度，指定本地地址，指定本地端口。 |

- 方法

| 序号 | 方法 | 描述 |
|------|------|----|
| 1 | public void close() throws IOException. | 关闭服务器套接字，释放系统资源。 |
| 2 | public Socket accept() throws IOException. | 接受客户端连接，返回一个新套接字对象。 |
| 3 | public void bind(SocketAddress localAddress, int backlog) throws IOException. | 绑定服务器套接字到指定地址和端口号，指定队列长度。 |
| 4 | public void bind(SocketAddress localAddress) throws IOException. | 绑定服务器套接字到指定地址和端口号。 |
| 5 | public void bind(int port) throws IOException. | 绑定服务器套接字到指定端口号。 |
| 6 | public void setSoTimeout(int timeout) throws IOException. | 设置服务器套接字的超时时间。 |
| 7 | public void setSoLinger(int linger, int lingerTime) throws IOException. | 设置服务器套接字的 linger 选项。 |
| 8 | public void setSoLinger(int linger) throws IOException. | 设置服务器套接字的 linger 选项。 |
| 9 | public void setSoLinger(int linger, int lingerTime) throws IOException. | 设置服务器套接字的 linger 选项。 |
| 10 | public void setSoLinger(int linger) throws IOException. | 设置服务器套接字的 linger 选项。 |

#### InetAddress

网络地址（InetAddress）是网络编程的基础，用于表示网络地址，如 IP 地址。每个网络地址都有一个本地地址和端口号，用于标识本地的网络地址和端口号。服务器套接字（ServerSocket）用于监听客户端连接，客户端套接字（Socket）用于连接到服务器套接字。

- 方法
| 序号 | 方法 | 描述 |
|------|------|----|
| 1 | public static InetAddress getByAddress(byte[] addr) | 在给定原始 IP 地址的情况下，返回 InetAddress 对象。 |
| 2 | public static InetAddress getByAddress(String host, byte[] addr) | 根据提供的主机名和 IP 地址创建 InetAddress。 |
| 3 | public static InetAddress getByName(String host) | 在给定主机名的情况下确定主机的 IP 地址。 |
| 4 | public String getHostAddress() | 返回 IP 地址字符串（以文本表现形式）。 |
| 5 | public String getHostName() | 获取此 IP 地址的主机名。 |
| 6 | public static InetAddress getLocalHost() | 返回本地主机。 |
| 7 | public String toString() | 将此 IP 地址转换为 String。 |

### 发送邮件

[JavaMail](https://www.oracle.com/java/technologies/javamail.html)
[JAF](https://www.oracle.com/java/technologies/downloads.html)

## 多线程编程

Java 给多线程编程提供了内置的支持。 一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。
通过实现 Runnable 接口；
通过继承 Thread 类本身；
通过 Callable 和 Future 创建线程。

- 创建线程 ：new Thread()
- 启动线程 ：start()
- 线程执行 ：run()
- 线程结束 ：线程执行完毕或被中断时，线程会自动结束。

## Applet 程序

设计运行在浏览器中的小程序程序。
Applet的生命周期
Applet 类中的四个方法给我们提供了一个框架，你可以在该框架上开发小程序：

- init: 该方法的目的是为你的 Applet 提供所需的任何初始化。在 Applet 标记内的 param 标签被处理后调用该方法。
- start: 浏览器调用 init 方法后，该方法被自动调用。每当用户从其他页面返回到包含 Applet 的页面时，则调用该方法。
- stop: 当用户从包含 Applet 的页面移除的时候，该方法自动被调用。因此，可以在相同的 Applet 中反复调用该方法。
- destroy: 此方法仅当浏览器正常关闭时调用。因为 Applet 只有在 HTML 网页上有效，所以你不应该在用户离开包含 Applet 的页面后遗漏任何资源。
- paint: 该方法在 start() 方法之后立即被调用，或者在 Applet 需要重绘在浏览器的时候调用。paint() 方法实际上继承于 java.awt














## 日志记录

1. 2026-10-10 项目搭建完成、ai生成项目代码、接口调用成功，数据库写入成功
   日志记录模块正常运行，日志记录成功。
   增加vscode 热更新功能，实现代码修改后自动重启项目。 pom.xml 配置  spring-boot-devtools +  settings.json 配置  "java.autobuild.enabled": true
   调试： Debugger for Java 插件 + F5 启动调试模式 进入
2. 2026-10-12 基础语法
3. 10-13 基础语法 面向对象 数据结构
4. 11-26 迭代器、序列化、泛型、多线程等，基础知识已全部学完
