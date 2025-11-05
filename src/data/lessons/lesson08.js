// 第8章：递归
export default {
  id: 8,
  title: '递归（Recursion）',
  category: '进阶',
  difficulty: 'medium',
  description: '学习递归的概念、应用场景和常见问题',
  content: `# 递归（Recursion）

## 什么是递归？

递归是一种函数调用自己的编程技巧。

生活比喻：就像照镜子，镜子里有你，你手里拿着镜子，镜子里的你也拿着镜子，镜子里的镜子里又有你...无限循环下去。

递归的核心：函数调用自己，直到满足某个条件停止。

## 递归的基本结构

递归函数必须有两个部分：基准条件（停止条件）和递归调用。

// 递归函数的基本结构
function recursiveFunction(n) {
  // 1. 基准条件（停止条件）
  if (n <= 0) {
    return "停止";
  }
  
  // 2. 递归调用（调用自己）
  console.log("当前n:", n);
  return recursiveFunction(n - 1);
}

console.log("=== 递归基本结构 ===");
recursiveFunction(3);

## 简单示例：倒计时

用递归实现一个倒计时功能。

// 倒计时函数
function countdown(n) {
  // 基准条件
  if (n <= 0) {
    console.log("发射！🚀");
    return;
  }
  
  // 打印当前数字
  console.log(n);
  
  // 递归调用
  countdown(n - 1);
}

console.log("=== 倒计时演示 ===");
countdown(5);

## 经典案例：阶乘

阶乘是递归的经典应用。5的阶乘 = 5 × 4 × 3 × 2 × 1 = 120

// 计算阶乘
function factorial(n) {
  // 基准条件：0! = 1, 1! = 1
  if (n <= 1) {
    return 1;
  }
  
  // 递归公式：n! = n × (n-1)!
  return n * factorial(n - 1);
}

console.log("=== 阶乘计算 ===");
console.log("5的阶乘:", factorial(5));
console.log("3的阶乘:", factorial(3));

## 递归的执行过程

理解递归的调用栈。

// 计算3的阶乘的执行过程
function factorialWithLog(n) {
  console.log(\`计算 \${n}!\`);
  
  if (n <= 1) {
    console.log("返回 1");
    return 1;
  }
  
  const result = n * factorialWithLog(n - 1);
  console.log(\`\${n}! = \${result}\`);
  return result;
}

console.log("=== 递归执行过程 ===");
factorialWithLog(3);

## 斐波那契数列

斐波那契数列：1, 1, 2, 3, 5, 8, 13...每个数是前两个数的和。

// 斐波那契数列（递归实现）
function fibonacci(n) {
  // 基准条件
  if (n <= 1) {
    return 1;
  }
  
  // 递归公式：fib(n) = fib(n-1) + fib(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("=== 斐波那契数列 ===");
console.log("前7项:");
for (let i = 0; i < 7; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}

## 数组求和

用递归计算数组所有元素的和。

// 递归求和
function sumArray(arr) {
  // 基准条件：空数组
  if (arr.length === 0) {
    return 0;
  }
  
  // 递归：第一个元素 + 剩余元素的和
  return arr[0] + sumArray(arr.slice(1));
}

console.log("=== 数组求和 ===");
const numbers = [1, 2, 3, 4, 5];
console.log("数组:", numbers);
console.log("总和:", sumArray(numbers));

## 字符串反转

用递归反转字符串。

// 递归反转字符串
function reverseString(str) {
  // 基准条件：空字符串或单个字符
  if (str.length <= 1) {
    return str;
  }
  
  // 递归：最后一个字符 + 反转剩余部分
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log("=== 字符串反转 ===");
console.log("原字符串: hello");
console.log("反转后:", reverseString("hello"));

## 递归 vs 循环

同样的问题可以用递归或循环解决。

// 循环实现阶乘
function factorialLoop(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 递归实现阶乘
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log("=== 递归 vs 循环 ===");
console.log("循环实现:", factorialLoop(5));
console.log("递归实现:", factorialRecursive(5));

## 递归的优缺点

递归的特点分析。

优点：
- 代码简洁优雅
- 适合处理树形结构
- 某些问题用递归更容易理解

缺点：
- 可能导致栈溢出
- 性能可能不如循环
- 重复计算问题（如斐波那契）

// 演示栈溢出风险
function dangerousRecursion(n) {
  console.log(n);
  dangerousRecursion(n + 1);  // 没有停止条件！
}

// dangerousRecursion(1);  // 不要运行！会导致栈溢出

## 尾递归优化

尾递归是一种特殊的递归形式，可以被优化。

// 普通递归（不是尾递归）
function factorialNormal(n) {
  if (n <= 1) return 1;
  return n * factorialNormal(n - 1);  // 递归调用后还有乘法操作
}

// 尾递归（递归调用是最后一个操作）
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator);  // 递归调用是最后的操作
}

console.log("普通递归:", factorialNormal(5));
console.log("尾递归:", factorialTail(5));

## 递归的应用场景

递归特别适合这些场景。

场景1：树形结构遍历（文件系统、DOM树）
场景2：分治算法（快速排序、归并排序）
场景3：数学问题（阶乘、斐波那契）
场景4：回溯算法（迷宫、八皇后）

// 示例：计算数字的各位数字之和
function sumDigits(n) {
  // 基准条件
  if (n < 10) {
    return n;
  }
  
  // 递归：最后一位 + 其余位的和
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log("12345的各位数字之和:", sumDigits(12345));

## 实战案例：目录树

用递归处理嵌套的目录结构。

// 目录结构（树形数据）
const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    { name: "file1.txt", type: "file" },
    {
      name: "folder1",
      type: "folder",
      children: [
        { name: "file2.txt", type: "file" },
        { name: "file3.txt", type: "file" }
      ]
    },
    { name: "file4.txt", type: "file" }
  ]
};

// 递归打印目录树
function printTree(node, indent = "") {
  console.log(indent + node.name);
  
  if (node.children) {
    node.children.forEach(child => {
      printTree(child, indent + "  ");
    });
  }
}

console.log("目录结构:");
printTree(fileSystem);

## 递归练习题

常见的递归练习。

// 练习1：计算数组最大值
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  
  const maxOfRest = findMax(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log("数组最大值:", findMax([3, 7, 2, 9, 1]));

// 练习2：判断回文字符串
function isPalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  
  return isPalindrome(str.slice(1, -1));
}

console.log("level是回文?", isPalindrome("level"));
console.log("hello是回文?", isPalindrome("hello"));

## 递归的调试技巧

如何调试递归函数。

技巧1：添加日志输出
技巧2：限制递归深度
技巧3：画出递归树
技巧4：从简单案例开始

// 带调试信息的递归
function debugRecursion(n, depth = 0) {
  const indent = "  ".repeat(depth);
  console.log(\`\${indent}进入: n=\${n}, depth=\${depth}\`);
  
  if (n <= 0) {
    console.log(\`\${indent}返回: 0\`);
    return 0;
  }
  
  const result = n + debugRecursion(n - 1, depth + 1);
  console.log(\`\${indent}返回: \${result}\`);
  return result;
}

debugRecursion(3);`,
  starterCode: `// ===== 递归练习 =====

// 1. 简单的倒计时
console.log("=== 倒计时 ===");
function countdown(n) {
  if (n <= 0) {
    console.log("发射！🚀");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);

// 2. 计算阶乘
console.log("\\n=== 阶乘 ===");
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log("5! =", factorial(5));
console.log("3! =", factorial(3));

// 3. 斐波那契数列
console.log("\\n=== 斐波那契数列 ===");
function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("前7项:");
for (let i = 0; i < 7; i++) {
  console.log(\`fib(\${i}) = \${fibonacci(i)}\`);
}

// 4. 数组求和
console.log("\\n=== 数组求和 ===");
function sumArray(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}

const numbers = [1, 2, 3, 4, 5];
console.log("数组:", numbers);
console.log("总和:", sumArray(numbers));

// 5. 字符串反转
console.log("\\n=== 字符串反转 ===");
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverseString(str.slice(0, -1));
}

console.log("hello 反转:", reverseString("hello"));

// 6. 计算数字各位之和
console.log("\\n=== 数字各位之和 ===");
function sumDigits(n) {
  if (n < 10) {
    return n;
  }
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log("12345的各位之和:", sumDigits(12345));

console.log("\\n💡 递归是函数调用自己，记得设置停止条件！");`,
  solution: `// 递归综合练习答案

// 1. 计算幂运算（x的n次方）
function power(x, n) {
  if (n === 0) {
    return 1;
  }
  return x * power(x, n - 1);
}

console.log("2的3次方:", power(2, 3));
console.log("5的2次方:", power(5, 2));

// 2. 数组扁平化
function flattenArray(arr) {
  let result = [];
  
  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  
  return result;
}

const nested = [1, [2, 3], [4, [5, 6]]];
console.log("\\n扁平化前:", nested);
console.log("扁平化后:", flattenArray(nested));

// 3. 深度克隆对象
function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  
  const clone = Array.isArray(obj) ? [] : {};
  
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  
  return clone;
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 999;

console.log("\\n原对象:", original);
console.log("克隆对象:", cloned);

// 4. 二分查找（递归实现）
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) {
    return -1;
  }
  
  const mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, left, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, right);
  }
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13];
console.log("\\n在数组中查找7:", binarySearch(sortedArray, 7));
console.log("在数组中查找4:", binarySearch(sortedArray, 4));

// 5. 汉诺塔问题
function hanoi(n, from, to, aux) {
  if (n === 1) {
    console.log(\`移动盘子从 \${from} 到 \${to}\`);
    return;
  }
  
  hanoi(n - 1, from, aux, to);
  console.log(\`移动盘子从 \${from} 到 \${to}\`);
  hanoi(n - 1, aux, to, from);
}

console.log("\\n汉诺塔（3个盘子）:");
hanoi(3, 'A', 'C', 'B');`,
};
