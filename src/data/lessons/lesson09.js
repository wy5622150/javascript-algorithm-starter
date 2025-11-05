// 第9章：栈和队列
export default {
  id: 9,
  title: '栈和队列（Stack & Queue）',
  category: '进阶',
  difficulty: 'medium',
  description: '学习栈和队列这两种重要的数据结构，以及如何用JavaScript数组模拟它们',
  content: `# 栈和队列（Stack & Queue）

## 什么是数据结构？

数据结构是组织和存储数据的方式。栈和队列是两种最基础、最重要的数据结构。

生活比喻：
- 栈就像一摞盘子，只能从顶部拿取和放置
- 队列就像排队买票，先来的人先买到票

## 栈（Stack）

栈是一种后进先出（LIFO - Last In First Out）的数据结构。

// 用数组模拟栈
console.log("=== 栈的基本操作 ===");
const stack = [];

// push：入栈（添加到顶部）
stack.push(1);
stack.push(2);
stack.push(3);
console.log("入栈后:", stack);

// pop：出栈（从顶部移除）
const removed = stack.pop();
console.log("出栈元素:", removed);
console.log("出栈后:", stack);

// peek：查看栈顶元素（不移除）
const top = stack[stack.length - 1];
console.log("栈顶元素:", top);

## 栈的特点

栈遵循后进先出（LIFO）原则。

// 演示LIFO特性
console.log("=== LIFO演示 ===");
const lifoStack = [];

lifoStack.push("第1个");
lifoStack.push("第2个");
lifoStack.push("第3个");
console.log("入栈顺序: 第1个 → 第2个 → 第3个");

console.log("出栈:", lifoStack.pop());  // 第3个
console.log("出栈:", lifoStack.pop());  // 第2个
console.log("出栈:", lifoStack.pop());  // 第1个

## 实现栈类

用类封装栈的操作。

// 栈类实现
class Stack {
  constructor() {
    this.items = [];
  }
  
  // 入栈
  push(element) {
    this.items.push(element);
  }
  
  // 出栈
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }
  
  // 查看栈顶
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
  
  // 判断是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  
  // 获取大小
  size() {
    return this.items.length;
  }
  
  // 清空栈
  clear() {
    this.items = [];
  }
}

console.log("=== 使用栈类 ===");
const myStack = new Stack();
myStack.push("A");
myStack.push("B");
myStack.push("C");
console.log("栈顶:", myStack.peek());
console.log("大小:", myStack.size());
console.log("出栈:", myStack.pop());
console.log("剩余大小:", myStack.size());

## 栈的应用：括号匹配

检查括号是否匹配是栈的经典应用。

// 括号匹配检查
function isBalanced(str) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  
  for (let char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {
        return false;
      }
      const last = stack.pop();
      if (pairs[last] !== char) {
        return false;
      }
    }
  }
  
  return stack.length === 0;
}

console.log("=== 括号匹配 ===");
console.log("(()): ", isBalanced("(())"));
console.log("([{}]): ", isBalanced("([{}])"));
console.log("((]): ", isBalanced("((])"));
console.log("({[}]): ", isBalanced("({[}])"));

## 栈的应用：函数调用栈

JavaScript使用栈来管理函数调用。

// 函数调用栈演示
function first() {
  console.log("进入first函数");
  second();
  console.log("离开first函数");
}

function second() {
  console.log("进入second函数");
  third();
  console.log("离开second函数");
}

function third() {
  console.log("进入third函数");
  console.log("离开third函数");
}

console.log("=== 函数调用栈 ===");
first();

## 队列（Queue）

队列是一种先进先出（FIFO - First In First Out）的数据结构。

// 用数组模拟队列
console.log("=== 队列的基本操作 ===");
const queue = [];

// enqueue：入队（添加到尾部）
queue.push(1);
queue.push(2);
queue.push(3);
console.log("入队后:", queue);

// dequeue：出队（从头部移除）
const first = queue.shift();
console.log("出队元素:", first);
console.log("出队后:", queue);

// front：查看队首元素
const front = queue[0];
console.log("队首元素:", front);

## 队列的特点

队列遵循先进先出（FIFO）原则。

// 演示FIFO特性
console.log("=== FIFO演示 ===");
const fifoQueue = [];

fifoQueue.push("第1个");
fifoQueue.push("第2个");
fifoQueue.push("第3个");
console.log("入队顺序: 第1个 → 第2个 → 第3个");

console.log("出队:", fifoQueue.shift());  // 第1个
console.log("出队:", fifoQueue.shift());  // 第2个
console.log("出队:", fifoQueue.shift());  // 第3个

## 实现队列类

用类封装队列的操作。

// 队列类实现
class Queue {
  constructor() {
    this.items = [];
  }
  
  // 入队
  enqueue(element) {
    this.items.push(element);
  }
  
  // 出队
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }
  
  // 查看队首
  front() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }
  
  // 判断是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  
  // 获取大小
  size() {
    return this.items.length;
  }
  
  // 清空队列
  clear() {
    this.items = [];
  }
}

console.log("=== 使用队列类 ===");
const myQueue = new Queue();
myQueue.enqueue("A");
myQueue.enqueue("B");
myQueue.enqueue("C");
console.log("队首:", myQueue.front());
console.log("大小:", myQueue.size());
console.log("出队:", myQueue.dequeue());
console.log("剩余大小:", myQueue.size());

## 队列的应用：打印队列

模拟打印机的打印队列。

// 打印队列模拟（包含完整的Queue类）
class QueueForPrint {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    return this.items.shift();
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}

class PrintQueue {
  constructor() {
    this.queue = new QueueForPrint();
  }
  
  addJob(job) {
    this.queue.enqueue(job);
    console.log(\`添加打印任务: \${job}\`);
  }
  
  processJob() {
    if (this.queue.isEmpty()) {
      console.log("没有打印任务");
      return;
    }
    const job = this.queue.dequeue();
    console.log(\`正在打印: \${job}\`);
  }
  
  showQueue() {
    console.log("当前队列:", this.queue.items);
  }
}

console.log("=== 打印队列 ===");
const printer = new PrintQueue();
printer.addJob("文档1.pdf");
printer.addJob("文档2.docx");
printer.addJob("图片.jpg");
printer.showQueue();
printer.processJob();
printer.processJob();
printer.showQueue();

## 栈 vs 队列

对比栈和队列的区别。

// 同样的数据，不同的输出顺序
console.log("=== 栈 vs 队列 ===");

const stackDemo = [];
const queueDemo = [];

// 添加相同的数据
const data = [1, 2, 3, 4, 5];
data.forEach(item => {
  stackDemo.push(item);
  queueDemo.push(item);
});

console.log("原始数据:", data);

// 栈：后进先出
console.log("栈输出:", [
  stackDemo.pop(),
  stackDemo.pop(),
  stackDemo.pop()
]);

// 队列：先进先出
console.log("队列输出:", [
  queueDemo.shift(),
  queueDemo.shift(),
  queueDemo.shift()
]);

## 双端队列（Deque）

双端队列允许在两端进行操作。

// 双端队列实现
class Deque {
  constructor() {
    this.items = [];
  }
  
  // 前端添加
  addFront(element) {
    this.items.unshift(element);
  }
  
  // 后端添加
  addRear(element) {
    this.items.push(element);
  }
  
  // 前端移除
  removeFront() {
    return this.items.shift();
  }
  
  // 后端移除
  removeRear() {
    return this.items.pop();
  }
  
  // 查看前端
  peekFront() {
    return this.items[0];
  }
  
  // 查看后端
  peekRear() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}

console.log("=== 双端队列 ===");
const deque = new Deque();
deque.addRear(1);
deque.addRear(2);
deque.addFront(0);
console.log("前端:", deque.peekFront());
console.log("后端:", deque.peekRear());

## 性能对比

栈和队列的性能分析。

操作对比：

栈（使用数组）：
- push（入栈）：O(1)
- pop（出栈）：O(1)
- peek（查看栈顶）：O(1)

队列（使用数组）：
- push（入队）：O(1)
- shift（出队）：O(n) - 需要移动所有元素
- 查看队首：O(1)

注意：数组实现的队列，出队操作性能较差。

## 实战案例：浏览器历史记录

用栈实现浏览器的前进后退功能。

// 浏览器历史记录
class BrowserHistory {
  constructor() {
    this.backStack = [];
    this.forwardStack = [];
    this.current = null;
  }
  
  visit(url) {
    if (this.current) {
      this.backStack.push(this.current);
    }
    this.current = url;
    this.forwardStack = [];  // 清空前进栈
    console.log(\`访问: \${url}\`);
  }
  
  back() {
    if (this.backStack.length === 0) {
      console.log("没有历史记录");
      return;
    }
    this.forwardStack.push(this.current);
    this.current = this.backStack.pop();
    console.log(\`后退到: \${this.current}\`);
  }
  
  forward() {
    if (this.forwardStack.length === 0) {
      console.log("没有前进记录");
      return;
    }
    this.backStack.push(this.current);
    this.current = this.forwardStack.pop();
    console.log(\`前进到: \${this.current}\`);
  }
  
  showCurrent() {
    console.log(\`当前页面: \${this.current}\`);
  }
}

console.log("=== 浏览器历史记录 ===");
const browser = new BrowserHistory();
browser.visit("google.com");
browser.visit("github.com");
browser.visit("stackoverflow.com");
browser.back();
browser.back();
browser.forward();
browser.showCurrent();`,
  starterCode: `// ===== 栈和队列练习 =====

// 1. 栈的基本操作
console.log("=== 栈操作 ===");
const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
console.log("栈:", stack);

console.log("出栈:", stack.pop());
console.log("栈顶:", stack[stack.length - 1]);

// 2. 队列的基本操作
console.log("\\n=== 队列操作 ===");
const queue = [];

queue.push(1);
queue.push(2);
queue.push(3);
console.log("队列:", queue);

console.log("出队:", queue.shift());
console.log("队首:", queue[0]);

// 3. 栈类
console.log("\\n=== 栈类 ===");
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}

const myStack = new Stack();
myStack.push("A");
myStack.push("B");
myStack.push("C");
console.log("栈顶:", myStack.peek());
console.log("大小:", myStack.size());

// 4. 队列类
console.log("\\n=== 队列类 ===");
class Queue {
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }
  
  dequeue() {
    return this.items.shift();
  }
  
  front() {
    return this.items[0];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
  
  size() {
    return this.items.length;
  }
}

const myQueue = new Queue();
myQueue.enqueue("X");
myQueue.enqueue("Y");
myQueue.enqueue("Z");
console.log("队首:", myQueue.front());
console.log("大小:", myQueue.size());

// 5. LIFO vs FIFO
console.log("\\n=== LIFO vs FIFO ===");
const stackDemo = [1, 2, 3];
const queueDemo = [1, 2, 3];

console.log("栈（LIFO）:", stackDemo.pop(), stackDemo.pop());
console.log("队列（FIFO）:", queueDemo.shift(), queueDemo.shift());

console.log("\\n💡 栈是后进先出，队列是先进先出！");`,
  solution: `// 栈和队列综合练习答案

// 1. 用栈实现进制转换
function decimalToBinary(num) {
  const stack = [];
  
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  
  let binary = '';
  while (stack.length > 0) {
    binary += stack.pop();
  }
  
  return binary;
}

console.log("=== 进制转换 ===");
console.log("10的二进制:", decimalToBinary(10));
console.log("25的二进制:", decimalToBinary(25));

// 2. 用队列实现击鼓传花游戏
function hotPotato(names, num) {
  const queue = [];
  
  // 所有人入队
  names.forEach(name => queue.push(name));
  
  while (queue.length > 1) {
    // 传花num次
    for (let i = 0; i < num; i++) {
      queue.push(queue.shift());
    }
    // 淘汰一人
    const eliminated = queue.shift();
    console.log(\`\${eliminated}被淘汰\`);
  }
  
  return queue[0];
}

console.log("\\n=== 击鼓传花 ===");
const players = ["张三", "李四", "王五", "赵六", "钱七"];
const winner = hotPotato(players, 3);
console.log(\`获胜者: \${winner}\`);

// 3. 用栈实现字符串反转
function reverseString(str) {
  const stack = [];
  
  for (let char of str) {
    stack.push(char);
  }
  
  let reversed = '';
  while (stack.length > 0) {
    reversed += stack.pop();
  }
  
  return reversed;
}

console.log("\\n=== 字符串反转 ===");
console.log("hello反转:", reverseString("hello"));

// 4. 用两个栈实现队列
class QueueWithStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  
  enqueue(element) {
    this.stack1.push(element);
  }
  
  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}

console.log("\\n=== 用栈实现队列 ===");
const queueWithStacks = new QueueWithStacks();
queueWithStacks.enqueue(1);
queueWithStacks.enqueue(2);
queueWithStacks.enqueue(3);
console.log("出队:", queueWithStacks.dequeue());
console.log("出队:", queueWithStacks.dequeue());

// 5. 回文检查器（使用双端队列）
function isPalindrome(str) {
  const deque = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('');
  
  while (deque.length > 1) {
    if (deque.shift() !== deque.pop()) {
      return false;
    }
  }
  
  return true;
}

console.log("\\n=== 回文检查 ===");
console.log("level是回文?", isPalindrome("level"));
console.log("hello是回文?", isPalindrome("hello"));
console.log("A man a plan a canal Panama是回文?", isPalindrome("A man a plan a canal Panama"));`,
};
