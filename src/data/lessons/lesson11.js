// 练习2：函数基础练习
export default {
  id: 11,
  title: '函数练习',
  category: '练习',
  difficulty: 'easy',
  description: '通过实际练习巩固函数知识',
  isExercise: true,
  introduction: `# 函数练习题

## 📝 练习说明

这些练习题将帮助你巩固函数的基础知识。推荐使用ES6箭头函数语法。

**学习建议：**
1. 优先使用箭头函数（现代JavaScript推荐）
2. 给函数起有意义的名字
3. 先思考函数需要什么参数和返回什么值
4. 测试函数是否按预期工作`,
  exercises: [
    {
      id: 1,
      title: '练习1：简单的问候函数 ⭐',
      description: `**要求：** 创建一个函数 \`greet\`，接收一个名字参数，返回问候语。

**示例：**
\`\`\`javascript
greet("小明")  // 返回: "你好，小明！"
greet("小红")  // 返回: "你好，小红！"
\`\`\`

**提示：** 使用箭头函数和模板字符串`,
      starterCode: `// 练习1：简单的问候函数
// const greet = ...

console.log(greet("小明"));
console.log(greet("小红"));`,
      solution: `// 练习1：简单的问候函数 - 标准答案
const greet = name => \`你好，\${name}！\`;

console.log(greet("小明"));
console.log(greet("小红"));`
    },
    {
      id: 2,
      title: '练习2：加法函数 ⭐',
      description: `**要求：** 创建一个函数 \`add\`，接收两个数字参数，返回它们的和。

**示例：**
\`\`\`javascript
add(5, 3)   // 返回: 8
add(10, 20) // 返回: 30
\`\`\`

**提示：** \`const add = (a, b) => a + b;\``,
      starterCode: `// 练习2：加法函数
// const add = ...

console.log("5 + 3 =", add(5, 3));
console.log("10 + 20 =", add(10, 20));`,
      solution: `// 练习2：加法函数 - 标准答案
const add = (a, b) => a + b;

console.log("5 + 3 =", add(5, 3));
console.log("10 + 20 =", add(10, 20));`
    },
    {
      id: 3,
      title: '练习3：判断奇偶 ⭐',
      description: `**要求：** 创建一个函数 \`isEven\`，判断一个数字是否为偶数。

**示例：**
\`\`\`javascript
isEven(4)  // 返回: true
isEven(7)  // 返回: false
\`\`\`

**提示：** 使用 \`num % 2 === 0\``,
      starterCode: `// 练习3：判断奇偶
// const isEven = ...

console.log("4是偶数:", isEven(4));
console.log("7是偶数:", isEven(7));`,
      solution: `// 练习3：判断奇偶 - 标准答案
const isEven = num => num % 2 === 0;

console.log("4是偶数:", isEven(4));
console.log("7是偶数:", isEven(7));`
    },
    {
      id: 4,
      title: '练习4：计算平方 ⭐',
      description: `**要求：** 创建一个函数 \`square\`，计算一个数字的平方。

**示例：**
\`\`\`javascript
square(5)  // 返回: 25
square(8)  // 返回: 64
\`\`\`

**提示：** \`const square = x => x * x;\``,
      starterCode: `// 练习4：计算平方
// const square = ...

console.log("5的平方:", square(5));
console.log("8的平方:", square(8));`,
      solution: `// 练习4：计算平方 - 标准答案
const square = x => x * x;

console.log("5的平方:", square(5));
console.log("8的平方:", square(8));`
    },
    {
      id: 5,
      title: '练习5：找出最大值 ⭐',
      description: `**要求：** 创建一个函数 \`max\`，返回两个数字中的较大值。

**示例：**
\`\`\`javascript
max(10, 20)  // 返回: 20
max(50, 30)  // 返回: 50
\`\`\`

**提示：** 使用三元运算符 \`a > b ? a : b\``,
      starterCode: `// 练习5：找出最大值
// const max = ...

console.log("max(10, 20):", max(10, 20));
console.log("max(50, 30):", max(50, 30));`,
      solution: `// 练习5：找出最大值 - 标准答案
const max = (a, b) => a > b ? a : b;

console.log("max(10, 20):", max(10, 20));
console.log("max(50, 30):", max(50, 30));`
    },
    {
      id: 6,
      title: '练习6：默认参数 ⭐⭐',
      description: `**要求：** 创建一个函数 \`greetWithDefault\`，如果没有传入名字，默认使用"访客"。

**示例：**
\`\`\`javascript
greetWithDefault("小明")  // 返回: "欢迎，小明！"
greetWithDefault()        // 返回: "欢迎，访客！"
\`\`\`

**提示：** 使用默认参数 \`(name = "访客")\``,
      starterCode: `// 练习6：默认参数
// const greetWithDefault = ...

console.log(greetWithDefault("小明"));
console.log(greetWithDefault());`,
      solution: `// 练习6：默认参数 - 标准答案
const greetWithDefault = (name = "访客") => \`欢迎，\${name}！\`;

console.log(greetWithDefault("小明"));
console.log(greetWithDefault());`
    },
    {
      id: 7,
      title: '练习7：温度转换 ⭐⭐',
      description: `**要求：** 创建一个函数 \`celsiusToFahrenheit\`，将摄氏度转换为华氏度。
公式：华氏度 = 摄氏度 × 9/5 + 32

**示例：**
\`\`\`javascript
celsiusToFahrenheit(0)   // 返回: 32
celsiusToFahrenheit(100) // 返回: 212
\`\`\``,
      starterCode: `// 练习7：温度转换
// const celsiusToFahrenheit = ...

console.log("0°C =", celsiusToFahrenheit(0), "°F");
console.log("100°C =", celsiusToFahrenheit(100), "°F");`,
      solution: `// 练习7：温度转换 - 标准答案
const celsiusToFahrenheit = celsius => celsius * 9 / 5 + 32;

console.log("0°C =", celsiusToFahrenheit(0), "°F");
console.log("100°C =", celsiusToFahrenheit(100), "°F");`
    },
    {
      id: 8,
      title: '练习8：字符串长度检查 ⭐⭐',
      description: `**要求：** 创建一个函数 \`isLongString\`，判断字符串长度是否超过10个字符。

**示例：**
\`\`\`javascript
isLongString("你好")           // 返回: false
isLongString("这是一个很长的字符串") // 返回: true
\`\`\`

**提示：** 使用 \`str.length > 10\``,
      starterCode: `// 练习8：字符串长度检查
// const isLongString = ...

console.log('"你好" 是长字符串:', isLongString("你好"));
console.log('"这是一个很长的字符串" 是长字符串:', isLongString("这是一个很长的字符串"));`,
      solution: `// 练习8：字符串长度检查 - 标准答案
const isLongString = str => str.length > 10;

console.log('"你好" 是长字符串:', isLongString("你好"));
console.log('"这是一个很长的字符串" 是长字符串:', isLongString("这是一个很长的字符串"));`
    },
    {
      id: 9,
      title: '练习9：数组求和 ⭐⭐',
      description: `**要求：** 创建一个函数 \`sumArray\`，计算数组中所有数字的总和。

**示例：**
\`\`\`javascript
sumArray([1, 2, 3, 4, 5])  // 返回: 15
sumArray([10, 20, 30])     // 返回: 60
\`\`\`

**提示：** 使用循环累加`,
      starterCode: `// 练习9：数组求和
// const sumArray = ...

console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5]));
console.log("sumArray([10, 20, 30]):", sumArray([10, 20, 30]));`,
      solution: `// 练习9：数组求和 - 标准答案
const sumArray = arr => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};
// 或使用reduce方法（更简洁）
// const sumArray = arr => arr.reduce((sum, num) => sum + num, 0);

console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5]));
console.log("sumArray([10, 20, 30]):", sumArray([10, 20, 30]));`
    },
    {
      id: 10,
      title: '练习10：计算平均值 ⭐⭐',
      description: `**要求：** 创建一个函数 \`average\`，计算数组中所有数字的平均值。

**示例：**
\`\`\`javascript
average([10, 20, 30])     // 返回: 20
average([1, 2, 3, 4, 5])  // 返回: 3
\`\`\`

**提示：** 总和除以数组长度`,
      starterCode: `// 练习10：计算平均值
// const average = ...

console.log("average([10, 20, 30]):", average([10, 20, 30]));
console.log("average([1, 2, 3, 4, 5]):", average([1, 2, 3, 4, 5]));`,
      solution: `// 练习10：计算平均值 - 标准答案
const average = arr => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
};

console.log("average([10, 20, 30]):", average([10, 20, 30]));
console.log("average([1, 2, 3, 4, 5]):", average([1, 2, 3, 4, 5]));`
    },
    {
      id: 11,
      title: '练习11：字符串反转 ⭐⭐',
      description: `**要求：** 创建一个函数 \`reverseString\`，反转一个字符串。

**示例：**
\`\`\`javascript
reverseString("hello")  // 返回: "olleh"
reverseString("JavaScript") // 返回: "tpircSavaJ"
\`\`\`

**提示：** 可以使用 \`str.split('').reverse().join('')\``,
      starterCode: `// 练习11：字符串反转
// const reverseString = ...

console.log('reverseString("hello"):', reverseString("hello"));
console.log('reverseString("JavaScript"):', reverseString("JavaScript"));`,
      solution: `// 练习11：字符串反转 - 标准答案
const reverseString = str => str.split('').reverse().join('');

console.log('reverseString("hello"):', reverseString("hello"));
console.log('reverseString("JavaScript"):', reverseString("JavaScript"));`
    },
    {
      id: 12,
      title: '练习12：数组过滤 ⭐⭐⭐',
      description: `**要求：** 创建一个函数 \`filterEven\`，返回数组中的所有偶数。

**示例：**
\`\`\`javascript
filterEven([1, 2, 3, 4, 5, 6])  // 返回: [2, 4, 6]
filterEven([10, 15, 20, 25])    // 返回: [10, 20]
\`\`\`

**提示：** 使用数组的 \`filter\` 方法`,
      starterCode: `// 练习12：数组过滤
// const filterEven = ...

console.log("filterEven([1, 2, 3, 4, 5, 6]):", filterEven([1, 2, 3, 4, 5, 6]));
console.log("filterEven([10, 15, 20, 25]):", filterEven([10, 15, 20, 25]));`,
      solution: `// 练习12：数组过滤 - 标准答案
const filterEven = arr => arr.filter(num => num % 2 === 0);

console.log("filterEven([1, 2, 3, 4, 5, 6]):", filterEven([1, 2, 3, 4, 5, 6]));
console.log("filterEven([10, 15, 20, 25]):", filterEven([10, 15, 20, 25]));`
    },
    {
      id: 13,
      title: '练习13：计算阶乘 ⭐⭐⭐',
      description: `**要求：** 创建一个函数 \`factorial\`，计算一个数字的阶乘。
例如：5! = 5 × 4 × 3 × 2 × 1 = 120

**示例：**
\`\`\`javascript
factorial(5)  // 返回: 120
factorial(3)  // 返回: 6
\`\`\`

**提示：** 可以使用循环或递归`,
      starterCode: `// 练习13：计算阶乘
// const factorial = ...

console.log("factorial(5):", factorial(5));
console.log("factorial(3):", factorial(3));`,
      solution: `// 练习13：计算阶乘 - 标准答案
// 方法1：循环
const factorial = n => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};
// 方法2：递归
// const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);

console.log("factorial(5):", factorial(5));
console.log("factorial(3):", factorial(3));`
    },
    {
      id: 14,
      title: '练习14：判断质数 ⭐⭐⭐',
      description: `**要求：** 创建一个函数 \`isPrime\`，判断一个数字是否为质数。

**示例：**
\`\`\`javascript
isPrime(7)   // 返回: true
isPrime(10)  // 返回: false
\`\`\`

**提示：** 
- 质数只能被1和自己整除
- 检查2到√n之间是否有因数`,
      starterCode: `// 练习14：判断质数
// const isPrime = ...

console.log("isPrime(7):", isPrime(7));
console.log("isPrime(10):", isPrime(10));
console.log("isPrime(13):", isPrime(13));`,
      solution: `// 练习14：判断质数 - 标准答案
const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log("isPrime(7):", isPrime(7));
console.log("isPrime(10):", isPrime(10));
console.log("isPrime(13):", isPrime(13));`
    },
    {
      id: 15,
      title: '练习15：数组去重 ⭐⭐⭐',
      description: `**要求：** 创建一个函数 \`removeDuplicates\`，去除数组中的重复元素。

**示例：**
\`\`\`javascript
removeDuplicates([1, 2, 2, 3, 4, 4, 5])  // 返回: [1, 2, 3, 4, 5]
removeDuplicates([1, 1, 1, 1])           // 返回: [1]
\`\`\`

**提示：** 可以使用 \`new Set()\` 或循环判断`,
      starterCode: `// 练习15：数组去重
// const removeDuplicates = ...

console.log("removeDuplicates([1, 2, 2, 3, 4, 4, 5]):", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("removeDuplicates([1, 1, 1, 1]):", removeDuplicates([1, 1, 1, 1]));`,
      solution: `// 练习15：数组去重 - 标准答案
// 方法1：使用Set（最简洁）
const removeDuplicates = arr => [...new Set(arr)];
// 方法2：使用filter
// const removeDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) === index);

console.log("removeDuplicates([1, 2, 2, 3, 4, 4, 5]):", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("removeDuplicates([1, 1, 1, 1]):", removeDuplicates([1, 1, 1, 1]));`
    }
  ]
};
