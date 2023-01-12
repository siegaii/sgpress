去年一直在做 DevOps 应用 YAML 用的蛮多的，今天系统性梳理了一下 YAML 的用法

YAML 是一种数据序列化语言，一般用它来编写配置文件，类似于 XML 和 JSON 文件,但它的语法更简洁。

## YAML 的用法
使用编写的基本规则：

- 大小写敏感
- 使用缩进表示层级关系
- 缩紧不允许使用 Tab，只能是空格
- 缩进的空格数目不重要，只要相同层级的元素左侧对齐即可
- \# 表示注释
- YAML 支持三种数据结构：
  - 对象：键值对的集合，又称为映射（mapping）/ 哈希（hashes） / 字典（dictionary）
  - 数组：一组按次序排列的值，又称为序列（sequence） / 列表（list）
  - 纯量（scalars）：单个的、不可再分的值

**YAML 中的对象**  
```yml
# 写法 1
hello: siegaii # 对应 js 中 {hello: "siegaii"}
# 写法 2
hello: {name: siegaii, eye: blue} # 对应 js 中 {hello: {name: "siegaii", eye: "blue"}}
```

**YAML 中的数组** 
```yml
# 一组连词线开头的行，构成一个数组，对应 js 数组 ['Hello', 'siegaii', 'blue']
- Hello
- siegaii
- blue

# yaml 中表示一个二维数组更简单，[['Hello', 'siegaii', 'blue']]
- 
  - Hello
  - siegaii
  - blue 

# 复合结构
# 对象对数组的组合，js 对象 { Hello: [ 'siegaii', 'blue' ] }
Hello: [siegaii, blue]
```

**YAML 中的纯量**   
纯量及最基本不可再分割的值，主要有：字符串、布尔值、整数、浮点数、Null、时间、日期等值
```yml
# 字符串
String: Str 

# 整型、浮点数
int.value: 10 # 十进制
int.value1: 0b1010_0111_0100_1010_1110 # 二进制
float.value: 3.14159
float.value1: 314159e-5 # 科学计数法

# 布尔值
TRUE: true
FALSE: false

# Null
null.value: ~ # ~ 代表 null

# 时间，时间使用ISO 8601格式，时间和日期之间使用T连接，最后使用+代表时区
datetime.value: !!timestamp 2023-01-11T09:22:00+08:00

# 日期,日期必须使用ISO 8601格式，即yyyy-MM-dd
date.value: !!timestamp 2023-01-11
```

## YAML 强制转换数据类型
```yml
# 在 yaml 中做数据类型转换，对应js 中 {strInt: '777', strBoolean: 'true'}
strInt: !!str 777
strBoolean: !!str true
```

## 同 XML、JSON 的对比
1. XML 的阅读难度很高，JSON 相对 XML 要简洁一些但文件内容较长后同样难以阅读，相比 YAML 需要更多的带宽与存储
2. JSON 有严格的语法要求，没有注释，适合序列化格式和通过 HTTP 连接传输数据
3. YAML 有较高的可读性，极简的语法设计，可视为极简版的 JSON
