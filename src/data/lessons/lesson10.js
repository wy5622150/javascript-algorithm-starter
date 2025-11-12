// 练习1：循环基础练习
export default {
  id: 10,
  title: '循环练习',
  category: '练习',
  difficulty: 'easy',
  description: '通过实际练习巩固循环知识',
  isExercise: true, // 标记这是练习题课程
  introduction: `# 循环练习题

## 📝 练习说明

这些练习题将帮助你巩固循环的基础知识。每道题都有独立的代码模板和标准答案。

**学习建议：**
1. 点击展开练习题，查看要求
2. 在右侧代码编辑器中完成代码
3. 点击"运行"按钮测试结果
4. 遇到困难可以查看标准答案
5. 理解答案后，尝试自己重新实现`,
  exercises: [
    {
      id: 1,
      title: '练习1：打印数字序列 ⭐',
      description: `**要求：** 使用for循环打印1到10的所有数字。

**预期输出：**
\`\`\`
1
2
3
...
10
\`\`\`

**提示：** 使用 \`for (let i = 1; i <= 10; i++)\``,
      starterCode: `// 练习1：打印数字序列
console.log("=== 练习1：打印1到10 ===");
// 在这里写代码
for (let i = 1; i <= 10; i++) {
  // 你的代码
}`,
      solution: `// 练习1：打印数字序列 - 标准答案
console.log("=== 练习1：打印1到10 ===");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}`
    },
    {
      id: 2,
      title: '练习2：计算总和 ⭐',
      description: `**要求：** 计算1到50的所有数字之和。

**预期输出：**
\`\`\`
1到50的总和: 1275
\`\`\`

**提示：** 
- 创建一个变量 \`sum\` 初始值为0
- 在循环中累加：\`sum += i\``,
      starterCode: `// 练习2：计算总和
console.log("=== 练习2：计算1到50的总和 ===");
let sum = 0;
// 在这里写循环代码

console.log(\`1到50的总和: \${sum}\`);`,
      solution: `// 练习2：计算总和 - 标准答案
console.log("=== 练习2：计算1到50的总和 ===");
let sum = 0;
for (let i = 1; i <= 50; i++) {
  sum += i;
}
console.log(\`1到50的总和: \${sum}\`);`
    },
    {
      id: 3,
      title: '练习3：打印偶数 ⭐',
      description: `**要求：** 打印1到20之间的所有偶数。

**预期输出：**
\`\`\`
2
4
6
...
20
\`\`\`

**提示：** 
- 方法1：使用 \`i % 2 === 0\` 判断偶数
- 方法2：让i每次增加2，从2开始`,
      starterCode: `// 练习3：打印偶数
console.log("=== 练习3：打印1到20的偶数 ===");
// 在这里写代码`,
      solution: `// 练习3：打印偶数 - 标准答案
console.log("=== 练习3：打印1到20的偶数 ===");
// 方法1：判断偶数
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// 方法2：步长为2（更高效）
// for (let i = 2; i <= 20; i += 2) {
//   console.log(i);
// }`
    },
    {
      id: 4,
      title: '练习4：倒计时 ⭐',
      description: `**要求：** 从10倒数到1，然后输出"发射！"。

**预期输出：**
\`\`\`
10
9
8
...
1
发射！🚀
\`\`\`

**提示：** 使用 \`for (let i = 10; i >= 1; i--)\``,
      starterCode: `// 练习4：倒计时
console.log("=== 练习4：倒计时 ===");
// 在这里写代码`,
      solution: `// 练习4：倒计时 - 标准答案
console.log("=== 练习4：倒计时 ===");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("发射！🚀");`
    },
    {
      id: 5,
      title: '练习5：数组遍历 ⭐⭐',
      description: `**要求：** 遍历数组 \`["苹果", "香蕉", "橙子", "葡萄", "西瓜"]\`，打印每个水果及其索引。

**预期输出：**
\`\`\`
第1个水果: 苹果
第2个水果: 香蕉
第3个水果: 橙子
第4个水果: 葡萄
第5个水果: 西瓜
\`\`\`

**提示：** 使用 \`for (let i = 0; i < fruits.length; i++)\``,
      starterCode: `// 练习5：数组遍历
console.log("=== 练习5：遍历水果数组 ===");
const fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"];
// 在这里写代码`,
      solution: `// 练习5：数组遍历 - 标准答案
console.log("=== 练习5：遍历水果数组 ===");
const fruits = ["苹果", "香蕉", "橙子", "葡萄", "西瓜"];
for (let i = 0; i < fruits.length; i++) {
  console.log(\`第\${i + 1}个水果: \${fruits[i]}\`);
}`
    },
    {
      id: 6,
      title: '练习6：找出最大值 ⭐⭐',
      description: `**要求：** 在数组 \`[23, 45, 12, 67, 34, 89, 15]\` 中找出最大值。

**预期输出：**
\`\`\`
最大值: 89
\`\`\`

**提示：** 
- 假设第一个元素是最大值
- 遍历数组，如果发现更大的值就更新`,
      starterCode: `// 练习6：找出最大值
console.log("=== 练习6：找出最大值 ===");
const numbers = [23, 45, 12, 67, 34, 89, 15];
let max = numbers[0];
// 在这里写代码

console.log(\`最大值: \${max}\`);`,
      solution: `// 练习6：找出最大值 - 标准答案
console.log("=== 练习6：找出最大值 ===");
const numbers = [23, 45, 12, 67, 34, 89, 15];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(\`最大值: \${max}\`);`
    },
    {
      id: 7,
      title: '练习7：打印乘法表 ⭐⭐',
      description: `**要求：** 打印3的乘法表（3×1到3×9）。

**预期输出：**
\`\`\`
3 × 1 = 3
3 × 2 = 6
3 × 3 = 9
...
3 × 9 = 27
\`\`\`

**提示：** 在循环中使用模板字符串`,
      starterCode: `// 练习7：打印乘法表
console.log("=== 练习7：3的乘法表 ===");
// 在这里写代码`,
      solution: `// 练习7：打印乘法表 - 标准答案
console.log("=== 练习7：3的乘法表 ===");
for (let i = 1; i <= 9; i++) {
  console.log(\`3 × \${i} = \${3 * i}\`);
}`
    },
    {
      id: 8,
      title: '练习8：统计奇数个数 ⭐⭐',
      description: `**要求：** 统计1到100之间有多少个奇数。

**预期输出：**
\`\`\`
1到100之间有 50 个奇数
\`\`\`

**提示：** 
- 创建计数器变量
- 使用 \`i % 2 !== 0\` 判断奇数
- 每找到一个奇数，计数器加1`,
      starterCode: `// 练习8：统计奇数个数
console.log("=== 练习8：统计1到100的奇数个数 ===");
let oddCount = 0;
// 在这里写代码

console.log(\`1到100之间有 \${oddCount} 个奇数\`);`,
      solution: `// 练习8：统计奇数个数 - 标准答案
console.log("=== 练习8：统计1到100的奇数个数 ===");
let oddCount = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddCount++;
  }
}
console.log(\`1到100之间有 \${oddCount} 个奇数\`);`
    },
    {
      id: 9,
      title: '练习9：查找元素 ⭐⭐',
      description: `**要求：** 在数组 \`[10, 20, 30, 40, 50]\` 中查找数字30，找到后输出其索引位置并停止查找。

**预期输出：**
\`\`\`
找到了！30在索引2的位置
\`\`\`

**提示：** 使用 \`break\` 语句在找到后立即退出循环`,
      starterCode: `// 练习9：查找元素
console.log("=== 练习9：查找数字30 ===");
const arr = [10, 20, 30, 40, 50];
// 在这里写代码`,
      solution: `// 练习9：查找元素 - 标准答案
console.log("=== 练习9：查找数字30 ===");
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 30) {
    console.log(\`找到了！30在索引\${i}的位置\`);
    break;
  }
}`
    },
    {
      id: 10,
      title: '练习10：跳过特定数字 ⭐⭐',
      description: `**要求：** 打印1到10的数字，但跳过5。

**预期输出：**
\`\`\`
1
2
3
4
6
7
8
9
10
\`\`\`

**提示：** 使用 \`continue\` 语句跳过5`,
      starterCode: `// 练习10：跳过特定数字
console.log("=== 练习10：打印1到10但跳过5 ===");
// 在这里写代码`,
      solution: `// 练习10：跳过特定数字 - 标准答案
console.log("=== 练习10：打印1到10但跳过5 ===");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}`
    },
    {
      id: 11,
      title: '练习11：嵌套循环 - 打印矩形 ⭐⭐⭐',
      description: `**要求：** 使用嵌套循环打印一个3行5列的星号矩形。

**预期输出：**
\`\`\`
* * * * *
* * * * *
* * * * *
\`\`\`

**提示：** 
- 外层循环控制行数（3行）
- 内层循环控制列数（5列）
- 每行结束后换行`,
      starterCode: `// 练习11：嵌套循环 - 打印矩形
console.log("=== 练习11：打印3行5列星号矩形 ===");
// 在这里写代码`,
      solution: `// 练习11：嵌套循环 - 打印矩形 - 标准答案
console.log("=== 练习11：打印3行5列星号矩形 ===");
for (let row = 1; row <= 3; row++) {
  let line = "";
  for (let col = 1; col <= 5; col++) {
    line += "* ";
  }
  console.log(line);
}`
    },
    {
      id: 12,
      title: '练习12：累乘计算 ⭐⭐⭐',
      description: `**要求：** 计算5的阶乘（5! = 5 × 4 × 3 × 2 × 1）。

**预期输出：**
\`\`\`
5的阶乘是: 120
\`\`\`

**提示：** 
- 创建变量 \`result = 1\`
- 循环中使用累乘：\`result *= i\``,
      starterCode: `// 练习12：累乘计算
console.log("=== 练习12：计算5的阶乘 ===");
let factorial = 1;
// 在这里写代码

console.log(\`5的阶乘是: \${factorial}\`);`,
      solution: `// 练习12：累乘计算 - 标准答案
console.log("=== 练习12：计算5的阶乘 ===");
let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(\`5的阶乘是: \${factorial}\`);`
    },
    {
      id: 13,
      title: '挑战1：九九乘法表 ⭐⭐⭐',
      description: `**要求：** 打印完整的九九乘法表（1×1到9×9）。

**预期输出：**
\`\`\`
1×1=1  
1×2=2  2×2=4  
1×3=3  2×3=6  3×3=9  
...
\`\`\`

**提示：** 使用嵌套循环，外层控制行，内层控制列`,
      starterCode: `// 挑战1：九九乘法表
console.log("=== 挑战1：九九乘法表 ===");
// 在这里写代码`,
      solution: `// 挑战1：九九乘法表 - 标准答案
console.log("=== 挑战1：九九乘法表 ===");
for (let i = 1; i <= 9; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += \`\${j}×\${i}=\${i * j}  \`;
  }
  console.log(line);
}`
    },
    {
      id: 14,
      title: '挑战2：斐波那契数列 ⭐⭐⭐',
      description: `**要求：** 打印斐波那契数列的前10项（1, 1, 2, 3, 5, 8, 13...）。

**预期输出：**
\`\`\`
1
1
2
3
5
8
13
21
34
55
\`\`\`

**提示：** 每一项等于前两项之和`,
      starterCode: `// 挑战2：斐波那契数列
console.log("=== 挑战2：斐波那契数列前10项 ===");
// 在这里写代码`,
      solution: `// 挑战2：斐波那契数列 - 标准答案
console.log("=== 挑战2：斐波那契数列前10项 ===");
let fib1 = 1, fib2 = 1;
console.log(fib1);
console.log(fib2);
for (let i = 3; i <= 10; i++) {
  const next = fib1 + fib2;
  console.log(next);
  fib1 = fib2;
  fib2 = next;
}`
    },
    {
      id: 15,
      title: '挑战3：质数判断 ⭐⭐⭐⭐',
      description: `**要求：** 找出1到50之间的所有质数。

**预期输出：**
\`\`\`
质数: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
共有 15 个质数
\`\`\`

**提示：** 
- 质数只能被1和自己整除
- 检查2到√n之间是否有因数`,
      starterCode: `// 挑战3：质数判断
console.log("=== 挑战3：1到50的质数 ===");
const primes = [];
// 在这里写代码

console.log(\`质数: \${primes.join(", ")}\`);
console.log(\`共有 \${primes.length} 个质数\`);`,
      solution: `// 挑战3：质数判断 - 标准答案
console.log("=== 挑战3：1到50的质数 ===");
const primes = [];
for (let num = 2; num <= 50; num++) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(num);
  }
}
console.log(\`质数: \${primes.join(", ")}\`);
console.log(\`共有 \${primes.length} 个质数\`);`
    }
  ]
};
