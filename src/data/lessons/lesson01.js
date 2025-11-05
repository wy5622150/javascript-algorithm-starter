export default {
  id: 1,
  title: '变量与数据类型',
  category: '基础',
  difficulty: 'easy',
  description: '学习JavaScript中的变量声明和基本数据类型',
  content: `# 变量与数据类型

## 什么是变量？

变量就像一个"盒子"，用来存储数据。你可以给这个盒子起个名字，然后往里面放东西。

想象一下：你有一个标签写着"年龄"的盒子，里面放着数字25。这就是一个变量！

## 变量声明的三种方式

JavaScript提供了三种创建变量的方法，让我们一个一个来看：

### let - 可以改变的变量（ES6+，推荐）

let 用来创建一个可以修改的变量。就像一个可以换东西的盒子。

let name = "张三";     // 创建一个叫name的变量，放入"张三"
let age = 25;          // 创建一个叫age的变量，放入25
age = 26;              // 可以改变！把age里的25换成26

**什么时候用let？** 当你知道这个值以后可能会变化时，比如：年龄、分数、计数器等。

### const - 不能改变的常量（ES6+，推荐）

const 用来创建一个不能修改的常量。就像一个用胶水封死的盒子，里面的东西不能换。

const PI = 3.14159;        // 圆周率永远是3.14159
const MAX_SIZE = 100;      // 最大值设定为100
// PI = 3.14;              // ❌ 错误！const声明的变量不能修改

**什么时候用const？** 当你知道这个值永远不会变时，比如：圆周率、配置项、固定的文本等。

**💡 小技巧：** 优先使用const，只有当你确定需要修改时才用let。这样代码更安全！

### var - 旧的变量声明方式（ES5，不推荐）

⚠️ var是JavaScript早期的变量声明方式，现在不推荐使用了。

var oldStyle = "尽量避免使用";

**为什么不推荐？** var有一些奇怪的行为（比如变量提升），容易导致bug。现代JavaScript都用let和const。

## 基本数据类型

数据类型就是"数据的种类"。就像水果有苹果、香蕉、橙子，数据也有不同的类型。

### Number（数字类型）

用来表示数字，可以是整数或小数。

const integer = 42;        // 整数
const float = 3.14;        // 小数（浮点数）
const negative = -10;      // 负数

**用途：** 年龄、价格、分数、距离等所有需要计算的数值。

### String（字符串类型）

用来表示文字和文本。字符串要用引号包起来。

const str1 = "双引号也可以";
const str2 = '单引号也可以';
const str3 = \`反引号最强大\`;  // ES6+ 模板字符串（推荐）

**模板字符串的神奇之处：**

模板字符串（用反引号 \` \`）可以直接在字符串中插入变量，非常方便！

const name = "张三";
const age = 25;

// ✅ ES6+ 模板字符串（推荐）- 清晰易读
const message = \`我叫\${name}，今年\${age}岁\`;

// ❌ ES5 字符串拼接 - 容易出错
const oldMessage = "我叫" + name + "，今年" + age + "岁";

**用途：** 姓名、地址、提示信息等所有文字内容。

### Boolean（布尔类型）

只有两个值：true（真）或 false（假）。就像开关只有"开"和"关"两种状态。

const isStudent = true;     // 是学生
const isAdult = false;      // 不是成年人

**用途：** 判断条件，比如：是否登录、是否通过考试、开关状态等。

### Undefined 和 Null

这两个比较特殊，表示"没有值"。

let notDefined;             // undefined - 声明了但没赋值
const empty = null;         // null - 明确表示"空"

**区别：**
- undefined：系统自动给的，表示"还没有值"
- null：程序员主动设置的，表示"这里是空的"

## 类型检查

想知道一个变量是什么类型？用 typeof 运算符！

typeof 42;          // "number" - 是数字
typeof "hello";     // "string" - 是字符串
typeof true;        // "boolean" - 是布尔值
typeof undefined;   // "undefined" - 是undefined

**用途：** 在写代码时，有时需要检查变量的类型，确保不会出错。`,
  starterCode: `// ===== 变量与数据类型练习（ES6+） =====

// 1. 变量声明示例（使用const和let）
const myName = "张三";      // 字符串类型，不会改变用const
let myAge = 25;             // 数字类型，可能改变用let
const PI = 3.14159;         // 常量，不可修改

console.log("姓名:", myName);           // 输出: 姓名: 张三
console.log("年龄:", myAge);            // 输出: 年龄: 25
console.log("圆周率:", PI);             // 输出: 圆周率: 3.14159

// 2. 模板字符串（ES6+，推荐）
const greeting = \`你好，我叫\${myName}，今年\${myAge}岁\`;
console.log("\\n" + greeting);  // 输出: 你好，我叫张三，今年25岁

// 3. 类型检查
console.log("\\n类型检查:");
console.log(\`myName的类型: \${typeof myName}\`);   // 输出: string
console.log(\`myAge的类型: \${typeof myAge}\`);     // 输出: number
console.log(\`PI的类型: \${typeof PI}\`);           // 输出: number

// 4. 布尔类型
const isStudent = true;
const hasLicense = false;
console.log("\\n是否是学生:", isStudent);           // 输出: true
console.log("是否有驾照:", hasLicense);             // 输出: false

// 5. undefined 和 null
let notAssigned;
const emptyValue = null;
console.log("\\nnotAssigned:", notAssigned);        // 输出: undefined
console.log("emptyValue:", emptyValue);             // 输出: null
console.log("notAssigned类型:", typeof notAssigned); // 输出: undefined
console.log("emptyValue类型:", typeof emptyValue);   // 输出: object (这是JS的历史遗留问题)

// 💡 练习：尝试修改myAge的值，观察输出变化
// 💡 挑战：尝试修改PI的值，看看会发生什么错误`,
  solution: `let myName = "张三";
let myAge = 25;
const BIRTH_YEAR = 2024 - myAge;

console.log("姓名:", myName, "类型:", typeof myName);
console.log("年龄:", myAge, "类型:", typeof myAge);
console.log("出生年份:", BIRTH_YEAR, "类型:", typeof BIRTH_YEAR);`,
};
