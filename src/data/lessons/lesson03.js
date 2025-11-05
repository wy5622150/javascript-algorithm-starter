// 第3章：循环
export default {
  id: 4,
  title: '循环',
  category: '基础',
  difficulty: 'easy',
  description: '学习for循环、while循环和循环控制',
  content: `# 循环

## 什么是循环？

想象你要打印100遍"我爱学习"，难道要写100行 console.log 吗？当然不！这时候就需要循环。

**循环就是让程序重复执行某段代码，直到满足停止条件。**

就像跑步：绕操场跑10圈，每跑完一圈就是一次循环。

## for 循环 - 最常用的循环

for 循环适合知道要循环多少次的情况。

### 基本语法

for (初始化; 条件; 更新) {
  // 循环体：要重复执行的代码
}

**三个部分：**
1. **初始化** - 设置计数器的起始值（只执行一次）
2. **条件** - 每次循环前检查，true继续，false停止
3. **更新** - 每次循环后更新计数器

### 实际例子：打印1到5

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

**执行过程：**
1. \`let i = 1\` - 初始化，i从1开始
2. \`i <= 5\` - 检查条件，1 <= 5，true，执行循环体
3. 打印 1
4. \`i++\` - i变成2
5. \`i <= 5\` - 检查条件，2 <= 5，true，执行循环体
6. 打印 2
7. ... 重复直到 i = 6
8. \`i <= 5\` - 检查条件，6 <= 5，false，停止循环

**记忆技巧：** for循环就像设定闹钟，"从几点开始，到几点结束，每隔多久响一次"。

### 常见用法

**倒数循环：**

for (let i = 5; i >= 1; i--) {
  console.log(i);  // 输出：5, 4, 3, 2, 1
}

**步长为2：**

for (let i = 0; i <= 10; i += 2) {
  console.log(i);  // 输出：0, 2, 4, 6, 8, 10
}

## while 循环 - 不知道循环次数时使用

while 循环适合不确定要循环多少次，只知道停止条件的情况。

### 基本语法

while (条件) {
  // 循环体
  // 记得更新条件，否则会死循环！
}

### 实际例子：猜数字游戏

let target = 10;
let guess = 0;

while (guess !== target) {
  guess++;
  console.log(\`猜测：\${guess}\`);
}

console.log("猜对了！");

**解释：** 不知道要猜多少次才能猜对，所以用while循环，直到猜对为止。

## do-while 循环 - 至少执行一次

do-while 和 while 类似，但保证至少执行一次循环体。

### 基本语法

do {
  // 循环体：至少执行一次
} while (条件);

### 实际例子

let count = 0;

do {
  console.log(\`执行了 \${count + 1} 次\`);
  count++;
} while (count < 3);

**区别：** do-while 先执行再判断，while 先判断再执行。

## break - 立即跳出循环

break 用来提前结束循环，不管条件是否满足。

**实际例子：找到目标就停止**

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("找到5了，停止搜索！");
    break;  // 立即跳出循环
  }
  console.log(i);
}

// 输出：1, 2, 3, 4, 找到5了，停止搜索！

**用途：** 在数组中查找元素，找到就不用继续找了。

## continue - 跳过本次循环

continue 用来跳过当前这一次循环，继续下一次。

**实际例子：只打印奇数**

for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) {
    continue;  // 跳过偶数
  }
  console.log(i);  // 只打印奇数
}

// 输出：1, 3, 5

**区别：**
- \`break\` - 完全跳出循环，不再执行
- \`continue\` - 跳过本次，继续下一次

## 嵌套循环 - 循环中的循环

循环可以嵌套，常用于处理二维数据。

**实际例子：打印乘法表**

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`\${i} × \${j} = \${i * j}\`);
  }
}

**解释：** 外层循环控制行，内层循环控制列。

## ⚠️ 死循环警告

**什么是死循环？** 循环条件永远为true，程序会一直运行，浏览器会卡死！

**错误示例：**

// ❌ 危险！这是死循环
let i = 0;
while (i < 10) {
  console.log(i);
  // 忘记更新i，i永远是0，条件永远成立
}

**正确做法：**

// ✅ 正确
let i = 0;
while (i < 10) {
  console.log(i);
  i++;  // 记得更新条件！
}

## 💡 循环选择指南

**什么时候用 for？**
- ✅ 知道循环次数（如：循环10次）
- ✅ 遍历数组（配合数组长度）
- ✅ 需要索引值

**什么时候用 while？**
- ✅ 不知道循环次数
- ✅ 根据条件决定是否继续
- ✅ 等待某个事件发生

**什么时候用 do-while？**
- ✅ 至少要执行一次
- ✅ 比如：至少要问用户一次问题

## 实用技巧

### 1. 计算总和

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;  // 累加
}
console.log(\`1到100的和：\${sum}\`);  // 5050

### 2. 查找最大值

const numbers = [3, 7, 2, 9, 1];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(\`最大值：\${max}\`);  // 9

### 3. 倒计时

for (let i = 5; i > 0; i--) {
  console.log(i);
}
console.log("发射！🚀");`,
  starterCode: `// ===== 循环练习（ES6+） =====

// 1. 基本for循环
console.log("=== 1到5的数字 ===");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. 计算1到10的和
console.log("\\n=== 计算1到10的和 ===");
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;  // 等同于 sum = sum + i
}
console.log("总和:", sum);  // 输出: 55

// 3. while循环示例
console.log("\\n=== while循环倒计时 ===");
let count = 5;
while (count > 0) {
  console.log(count);
  count--;  // 每次减1
}
console.log("发射！🚀");

// 4. break示例 - 找到就停止
console.log("\\n=== 使用break查找 ===");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("找到5了！");
    break;  // 跳出循环
  }
  console.log("当前:", i);
}

// 5. continue示例 - 跳过偶数
console.log("\\n=== 使用continue打印奇数 ===");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;  // 跳过偶数
  }
  console.log("奇数:", i);
}

// 6. 遍历数组
console.log("\\n=== 遍历数组 ===");
const fruits = ["苹果", "香蕉", "橙子"];
for (let i = 0; i < fruits.length; i++) {
  console.log(\`第\${i + 1}个水果: \${fruits[i]}\`);
}

// 💡 练习：修改循环次数和条件，观察不同的输出
// 💡 挑战：使用循环打印九九乘法表的前3行`,
  solution: `// 综合练习答案

// 1. 计算1到100的和
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("1到100的和:", sum);

// 2. 找出数组中的最大值
const numbers = [23, 45, 12, 67, 34, 89, 15];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("\\n最大值:", max);

// 3. 输出1到20的偶数
console.log("1到20的偶数:");
for (let num = 1; num <= 20; num++) {
  if (num % 2 !== 0) continue;  // 跳过奇数
  console.log(num);
}`,
};
