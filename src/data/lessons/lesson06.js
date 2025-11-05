// 第6章：变量与数据类型（二）：引用类型
export default {
  id: 2,
  title: '变量与数据类型（二）：引用类型',
  category: '基础',
  difficulty: 'medium',
  description: '深入学习JavaScript的引用类型：数组、对象、Set和Map',
  content: `# 变量与数据类型（二）：引用类型

## 什么是引用类型？

在上一章我们学习了原始类型（Number、String、Boolean等），现在来学习**引用类型**。

**引用类型**就像一个"容器"，可以存储多个值或复杂的数据结构。

**生活比喻：** 原始类型像一个数字，引用类型像一个装满东西的箱子。

## Array（数组）- 有序的列表

数组是最常用的引用类型，用来存储一组有序的数据。

### 创建数组

const fruits = ["苹果", "香蕉", "橙子"];  // 字符串数组
const numbers = [1, 2, 3, 4, 5];          // 数字数组
const mixed = [1, "hello", true, null];   // 混合类型数组

**特点：** 数组用方括号 \`[]\`，元素用逗号分隔，可以存储任何类型的数据。

### 访问数组元素

数组的索引从0开始！

const fruits = ["苹果", "香蕉", "橙子"];
console.log(fruits[0]);  // "苹果" - 第1个元素
console.log(fruits[1]);  // "香蕉" - 第2个元素
console.log(fruits[2]);  // "橙子" - 第3个元素

**记住：** 第1个元素的索引是0，不是1！

### 常用数组方法

**添加元素：**

const arr = [1, 2, 3];
arr.push(4);        // 在末尾添加：[1, 2, 3, 4]
arr.unshift(0);     // 在开头添加：[0, 1, 2, 3, 4]

**删除元素：**

const arr = [1, 2, 3, 4, 5];
arr.pop();          // 删除最后一个：[1, 2, 3, 4]
arr.shift();        // 删除第一个：[2, 3, 4]

**查找元素：**

const fruits = ["苹果", "香蕉", "橙子"];
fruits.includes("香蕉");  // true - 是否包含
fruits.indexOf("橙子");   // 2 - 返回索引位置

**数组长度：**

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);  // 5 - 数组有5个元素

## Object（对象）- 键值对的集合

对象用来存储具有属性的数据，每个属性有名字（键）和值。

### 创建对象

const person = {
  name: "张三",
  age: 25,
  isStudent: true,
  hobbies: ["读书", "游泳"]
};

**特点：** 对象用花括号 \`{}\`，属性用 \`键: 值\` 的格式，逗号分隔。

### 访问对象属性

**点语法（推荐）：**

const person = { name: "张三", age: 25 };
console.log(person.name);  // "张三"
console.log(person.age);   // 25

**方括号语法：**

console.log(person["name"]);  // "张三"
console.log(person["age"]);   // 25

**什么时候用方括号？** 当属性名是变量或包含特殊字符时。

### 修改和添加属性

const person = { name: "张三", age: 25 };

// 修改属性
person.age = 26;

// 添加新属性
person.city = "北京";
person.email = "zhangsan@example.com";

console.log(person);
// { name: "张三", age: 26, city: "北京", email: "zhangsan@example.com" }

### 删除属性

const person = { name: "张三", age: 25, city: "北京" };
delete person.city;  // 删除city属性
console.log(person);  // { name: "张三", age: 25 }

### 对象方法

对象的属性值可以是函数，这叫做"方法"。

const person = {
  name: "张三",
  age: 25,
  greet: function() {
    console.log(\`你好，我是\${this.name}\`);
  },
  // ES6+ 简写
  sayAge() {
    console.log(\`我今年\${this.age}岁\`);
  }
};

person.greet();   // 输出：你好，我是张三
person.sayAge();  // 输出：我今年25岁

## Set（集合）- 不重复的值（ES6+）

Set 是一个特殊的数据结构，只存储唯一的值，自动去重。

### 创建 Set

const numbers = new Set([1, 2, 3, 3, 4, 4, 5]);
console.log(numbers);  // Set { 1, 2, 3, 4, 5 } - 自动去重

**用途：** 数组去重、检查是否存在某个值。

### Set 常用方法

const mySet = new Set();

// 添加元素
mySet.add(1);
mySet.add(2);
mySet.add(2);  // 重复的不会添加
console.log(mySet);  // Set { 1, 2 }

// 检查是否存在
console.log(mySet.has(1));  // true
console.log(mySet.has(3));  // false

// 删除元素
mySet.delete(1);
console.log(mySet);  // Set { 2 }

// 获取大小
console.log(mySet.size);  // 1

// 清空
mySet.clear();
console.log(mySet);  // Set {}

### 数组去重实战

**传统方法（复杂）：**

const arr = [1, 2, 2, 3, 3, 4];
const unique = arr.filter((item, index) => arr.indexOf(item) === index);

**使用 Set（简单）：**

const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];  // [1, 2, 3, 4]

**太简单了！** 这就是Set的威力。

## Map（映射）- 键值对集合（ES6+）

Map 类似对象，但键可以是任何类型（对象的键只能是字符串或Symbol）。

### 创建 Map

const myMap = new Map();

// 或者直接初始化
const userMap = new Map([
  ["name", "张三"],
  ["age", 25],
  ["city", "北京"]
]);

### Map 常用方法

const myMap = new Map();

// 设置键值对
myMap.set("name", "张三");
myMap.set("age", 25);
myMap.set(1, "数字键");  // 键可以是数字
myMap.set(true, "布尔键");  // 键可以是布尔值

// 获取值
console.log(myMap.get("name"));  // "张三"
console.log(myMap.get(1));       // "数字键"

// 检查是否存在
console.log(myMap.has("age"));  // true

// 删除
myMap.delete("age");

// 获取大小
console.log(myMap.size);  // 3

// 清空
myMap.clear();

### Map vs Object

**什么时候用 Map？**
- ✅ 键不是字符串时
- ✅ 需要频繁添加/删除键值对
- ✅ 需要知道键值对的数量
- ✅ 需要按插入顺序遍历

**什么时候用 Object？**
- ✅ 键都是字符串
- ✅ 需要JSON序列化
- ✅ 数据结构固定

### 遍历 Map

const myMap = new Map([
  ["name", "张三"],
  ["age", 25],
  ["city", "北京"]
]);

// 遍历键值对
for (const [key, value] of myMap) {
  console.log(\`\${key}: \${value}\`);
}

// 只遍历键
for (const key of myMap.keys()) {
  console.log(key);
}

// 只遍历值
for (const value of myMap.values()) {
  console.log(value);
}

## 💡 引用类型总结

### 选择指南

- **Array** - 存储有序列表（购物车、成绩单）
- **Object** - 存储具有属性的数据（用户信息、配置）
- **Set** - 需要去重或快速查找（标签、ID集合）
- **Map** - 需要灵活的键值对（缓存、计数器）

### 记忆口诀

- **Array** - 有序列表，索引访问
- **Object** - 键值对，属性访问
- **Set** - 唯一值，自动去重
- **Map** - 任意键，键值映射

### ⚠️ 重要提醒

所有引用类型都是"传址"的，赋值时要小心！

const arr1 = [1, 2, 3];
const arr2 = arr1;  // ⚠️ 指向同一个数组
arr2.push(4);
console.log(arr1);  // [1, 2, 3, 4] - arr1也变了！

**安全做法：** 使用展开运算符复制

const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // ✅ 创建新数组
arr2.push(4);
console.log(arr1);  // [1, 2, 3] - arr1不变`,
  starterCode: `// ===== 引用类型练习（ES6+） =====

// 1. 数组（Array）
console.log("=== 数组 ===");
const fruits = ["苹果", "香蕉", "橙子"];
console.log("水果列表:", fruits);
console.log("第一个水果:", fruits[0]);
console.log("数组长度:", fruits.length);

// 添加和删除
fruits.push("葡萄");  // 末尾添加
console.log("添加后:", fruits);

// 2. 对象（Object）
console.log("\\n=== 对象 ===");
const person = {
  name: "张三",
  age: 25,
  city: "北京",
  hobbies: ["读书", "游泳", "编程"]
};
console.log("个人信息:", person);
console.log("姓名:", person.name);
console.log("爱好:", person.hobbies);

// 修改属性
person.age = 26;
person.email = "zhangsan@example.com";
console.log("更新后:", person);

// 3. Set（集合）- 数组去重
console.log("\\n=== Set 集合 ===");
const numbers = [1, 2, 2, 3, 3, 4, 4, 5];
console.log("原数组:", numbers);

const uniqueNumbers = [...new Set(numbers)];
console.log("去重后:", uniqueNumbers);

// Set 方法
const mySet = new Set();
mySet.add("JavaScript");
mySet.add("Python");
mySet.add("JavaScript");  // 重复，不会添加
console.log("Set内容:", mySet);
console.log("Set大小:", mySet.size);
console.log("包含Python?", mySet.has("Python"));

// 4. Map（映射）
console.log("\\n=== Map 映射 ===");
const userMap = new Map();
userMap.set("name", "李四");
userMap.set("age", 30);
userMap.set("role", "开发者");

console.log("用户名:", userMap.get("name"));
console.log("年龄:", userMap.get("age"));
console.log("Map大小:", userMap.size);

// 遍历 Map
console.log("\\n遍历Map:");
for (const [key, value] of userMap) {
  console.log(\`  \${key}: \${value}\`);
}

// 5. 引用类型的陷阱（重要！）
console.log("\\n=== 引用类型陷阱 ===");
const arr1 = [1, 2, 3];
const arr2 = arr1;  // ⚠️ 指向同一个数组
arr2.push(4);
console.log("arr1:", arr1);  // [1, 2, 3, 4] - 也变了！
console.log("arr2:", arr2);  // [1, 2, 3, 4]

// 正确的复制方法
const arr3 = [1, 2, 3];
const arr4 = [...arr3];  // ✅ 创建新数组
arr4.push(4);
console.log("\\narr3:", arr3);  // [1, 2, 3] - 不变
console.log("arr4:", arr4);  // [1, 2, 3, 4]

console.log("\\n💡 记住：引用类型赋值时要小心，使用展开运算符复制！");`,
  solution: `// 综合练习：学生管理系统

// 1. 使用数组存储学生列表
const students = [
  { id: 1, name: "张三", score: 85 },
  { id: 2, name: "李四", score: 92 },
  { id: 3, name: "王五", score: 78 }
];

console.log("=== 学生列表 ===");
students.forEach(student => {
  console.log(\`\${student.name}: \${student.score}分\`);
});

// 2. 使用 Set 存储已选课程（自动去重）
const courses = new Set();
courses.add("JavaScript");
courses.add("Python");
courses.add("JavaScript");  // 重复，不会添加
console.log("\\n已选课程:", [...courses]);

// 3. 使用 Map 存储学生成绩
const scoreMap = new Map();
scoreMap.set("张三", 85);
scoreMap.set("李四", 92);
scoreMap.set("王五", 78);

console.log("\\n=== 成绩查询 ===");
console.log("张三的成绩:", scoreMap.get("张三"));
console.log("李四的成绩:", scoreMap.get("李四"));

// 4. 计算平均分
const scores = [...scoreMap.values()];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("\\n平均分:", average.toFixed(2));

// 5. 找出优秀学生（90分以上）
const excellentStudents = students.filter(s => s.score >= 90);
console.log("\\n优秀学生:");
excellentStudents.forEach(s => console.log(s.name));`,
};
