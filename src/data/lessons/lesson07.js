// 第7章：面向对象编程
export default {
  id: 7,
  title: '面向对象编程（OOP）',
  category: '进阶',
  difficulty: 'medium',
  description: '学习JavaScript中的类、对象、继承和封装等面向对象编程概念',
  content: `# 面向对象编程（OOP）

## 什么是面向对象编程？

面向对象编程（Object-Oriented Programming，OOP）是一种编程思想，把程序看作是一个个"对象"的集合。

生活比喻：就像现实世界中，一辆汽车是一个对象，它有属性（颜色、品牌、速度）和方法（启动、刹车、加速）。

为什么要用OOP？代码复用、易于维护、模块化、更接近现实。

## 类（Class）和对象

类就像一个"模板"或"蓝图"，用来创建对象。

// 定义一个Person类
class PersonExample {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(\`你好，我是\${this.name}，今年\${this.age}岁\`);
  }
}

// 创建对象（实例化）
console.log("=== 创建对象 ===");
const person1 = new PersonExample("张三", 25);
const person2 = new PersonExample("李四", 30);

// 调用方法
person1.greet();
person2.greet();

console.log("每个对象都是独立的");

## 属性和方法

类可以有属性（数据）和方法（行为）。

// 汽车类示例
class CarExample {
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  
  accelerate(amount) {
    this.speed += amount;
    console.log(\`\${this.brand}加速到\${this.speed}km/h\`);
  }
  
  brake() {
    this.speed = 0;
    console.log(\`\${this.brand}已停车\`);
  }
}

console.log("=== 汽车加速演示 ===");
const myCar = new CarExample("特斯拉");
myCar.accelerate(50);
myCar.accelerate(30);
myCar.brake();

## Getter和Setter

Getter和Setter用来控制属性的读取和设置。

// 圆形类示例
class CircleExample {
  constructor(radius) {
    this._radius = radius;
  }
  
  get radius() {
    return this._radius;
  }
  
  set radius(value) {
    if (value <= 0) {
      console.log("半径必须大于0");
      return;
    }
    this._radius = value;
  }
  
  get area() {
    return Math.PI * this._radius ** 2;
  }
}

console.log("=== Getter和Setter演示 ===");
const circle = new CircleExample(5);
console.log("半径:", circle.radius);
console.log("面积:", circle.area.toFixed(2));

circle.radius = 10;
console.log("新面积:", circle.area.toFixed(2));

circle.radius = -5;

## 静态方法

静态方法属于类本身，不属于实例对象。

// 数学工具类
class MathHelper {
  static PI = 3.14159;
  
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

// 直接通过类名调用
console.log("=== 静态方法演示 ===");
console.log("PI:", MathHelper.PI);
console.log("5 + 3 =", MathHelper.add(5, 3));
console.log("4 × 5 =", MathHelper.multiply(4, 5));

## 继承（Inheritance）

继承允许一个类继承另一个类的属性和方法。

// 动物基类
class AnimalBase {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name}发出声音\`);
  }
}

// 狗类继承动物类
class DogExample extends AnimalBase {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(\`\${this.name}汪汪叫\`);
  }
  
  fetch() {
    console.log(\`\${this.name}去捡球\`);
  }
}

console.log("=== 继承演示 ===");
const dog = new DogExample("旺财", "金毛");
dog.speak();
dog.fetch();

## 多层继承

继承可以有多个层级。

// 生物基类
class LivingThing {
  constructor(name) {
    this.name = name;
  }
  
  breathe() {
    console.log(\`\${this.name}在呼吸\`);
  }
}

// 哺乳动物类
class MammalExample extends LivingThing {
  constructor(name, furColor) {
    super(name);
    this.furColor = furColor;
  }
  
  nurse() {
    console.log(\`\${this.name}在哺乳\`);
  }
}

// 猫类
class CatExample extends MammalExample {
  constructor(name, furColor) {
    super(name, furColor);
  }
  
  meow() {
    console.log(\`\${this.name}喵喵叫\`);
  }
}

console.log("=== 多层继承演示 ===");
const cat = new CatExample("咪咪", "白色");
cat.breathe();
cat.nurse();
cat.meow();

## 封装（Encapsulation）

封装是指隐藏对象的内部细节，只暴露必要的接口。

// 银行账户类（使用私有属性）
class BankAccountExample {
  #balance = 0;
  
  constructor(owner) {
    this.owner = owner;
  }
  
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(\`存入\${amount}元，余额：\${this.#balance}元\`);
    }
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(\`取出\${amount}元，余额：\${this.#balance}元\`);
    } else {
      console.log("余额不足");
    }
  }
  
  getBalance() {
    return this.#balance;
  }
}

console.log("=== 封装演示 ===");
const account = new BankAccountExample("张三");
account.deposit(1000);
account.withdraw(300);
console.log("当前余额:", account.getBalance());

## 多态（Polymorphism）

多态是指不同的对象可以响应相同的方法调用。

// 形状基类
class ShapeBase {
  area() {
    return 0;
  }
}

// 矩形类
class RectangleExample extends ShapeBase {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  area() {
    return this.width * this.height;
  }
}

// 圆形类
class CircleShape extends ShapeBase {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// 多态：同样调用area()，不同对象有不同实现
console.log("=== 多态演示 ===");
const shapes = [
  new RectangleExample(5, 10),
  new CircleShape(7)
];

shapes.forEach(shape => {
  console.log(\`面积：\${shape.area().toFixed(2)}\`);
});

## 实战案例：游戏角色系统

面向对象编程的实际应用。

// 角色基类
class GameCharacter {
  constructor(name, hp, attack) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
  }
  
  attackTarget(target) {
    console.log(\`\${this.name}攻击\${target.name}\`);
    target.takeDamage(this.attack);
  }
  
  takeDamage(damage) {
    this.hp -= damage;
    console.log(\`\${this.name}受到\${damage}点伤害，剩余HP：\${this.hp}\`);
    
    if (this.hp <= 0) {
      console.log(\`\${this.name}被击败了！\`);
    }
  }
}

// 战士类
class WarriorExample extends GameCharacter {
  constructor(name) {
    super(name, 150, 20);
    this.defense = 10;
  }
  
  defend() {
    console.log(\`\${this.name}进入防御姿态！\`);
    this.defense += 5;
  }
}

// 法师类
class MageExample extends GameCharacter {
  constructor(name) {
    super(name, 80, 30);
    this.mana = 100;
  }
  
  castSpell(target) {
    if (this.mana >= 20) {
      console.log(\`\${this.name}释放魔法！\`);
      target.takeDamage(this.attack * 1.5);
      this.mana -= 20;
    } else {
      console.log("魔法值不足！");
    }
  }
}

// 创建角色并战斗
const warrior = new WarriorExample("剑圣");
const mage = new MageExample("法师");

console.log("\\n=== 战斗开始 ===");
warrior.attackTarget(mage);
mage.castSpell(warrior);`,
  starterCode: `// ===== 面向对象编程练习（ES6+） =====

// 1. 创建一个简单的类
console.log("=== 创建类和对象 ===");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(\`你好，我是\${this.name}，今年\${this.age}岁\`);
  }
}

const person1 = new Person("张三", 25);
const person2 = new Person("李四", 30);

person1.greet();
person2.greet();

// 2. 带方法的类
console.log("\\n=== 类的方法 ===");
class Counter {
  constructor() {
    this.count = 0;
  }
  
  increment() {
    this.count++;
    console.log(\`计数：\${this.count}\`);
  }
  
  decrement() {
    this.count--;
    console.log(\`计数：\${this.count}\`);
  }
  
  reset() {
    this.count = 0;
    console.log("计数器已重置");
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();

// 3. 继承
console.log("\\n=== 继承 ===");
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name}发出声音\`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(\`\${this.name}汪汪叫\`);
  }
  
  fetch() {
    console.log(\`\${this.name}去捡球\`);
  }
}

const dog = new Dog("旺财", "金毛");
dog.speak();
dog.fetch();

// 4. Getter和Setter
console.log("\\n=== Getter和Setter ===");
class Circle {
  constructor(radius) {
    this._radius = radius;
  }
  
  get radius() {
    return this._radius;
  }
  
  set radius(value) {
    if (value > 0) {
      this._radius = value;
    } else {
      console.log("半径必须大于0");
    }
  }
  
  get area() {
    return Math.PI * this._radius ** 2;
  }
}

const circle = new Circle(5);
console.log("半径:", circle.radius);
console.log("面积:", circle.area.toFixed(2));

circle.radius = 10;
console.log("新面积:", circle.area.toFixed(2));

// 5. 静态方法
console.log("\\n=== 静态方法 ===");
class Calculator {
  static add(a, b) {
    return a + b;
  }
  
  static multiply(a, b) {
    return a * b;
  }
}

console.log("5 + 3 =", Calculator.add(5, 3));
console.log("4 × 5 =", Calculator.multiply(4, 5));

console.log("\\n💡 面向对象编程让代码更有组织性和可复用性！");`,
  solution: `// 综合练习：图书管理系统

// 基类：图书
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isAvailable = true;
  }
  
  borrow() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(\`《\${this.title}》已借出\`);
    } else {
      console.log(\`《\${this.title}》已被借出\`);
    }
  }
  
  returnBook() {
    this.isAvailable = true;
    console.log(\`《\${this.title}》已归还\`);
  }
  
  getInfo() {
    return \`《\${this.title}》 - \${this.author}\`;
  }
}

// 子类：电子书
class EBook extends Book {
  constructor(title, author, isbn, fileSize) {
    super(title, author, isbn);
    this.fileSize = fileSize;
  }
  
  download() {
    console.log(\`正在下载《\${this.title}》(\${this.fileSize}MB)...\`);
  }
}

// 图书馆类
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  
  addBook(book) {
    this.books.push(book);
    console.log(\`已添加：\${book.getInfo()}\`);
  }
  
  listBooks() {
    console.log(\`\\n\${this.name}的藏书：\`);
    this.books.forEach((book, index) => {
      const status = book.isAvailable ? "可借" : "已借出";
      console.log(\`\${index + 1}. \${book.getInfo()} [\${status}]\`);
    });
  }
}

// 使用示例
console.log("=== 图书管理系统 ===");
const library = new Library("市图书馆");

const book1 = new Book("JavaScript高级程序设计", "Nicholas C. Zakas", "978-1");
const book2 = new Book("你不知道的JavaScript", "Kyle Simpson", "978-2");
const ebook1 = new EBook("ES6标准入门", "阮一峰", "978-3", 5.2);

library.addBook(book1);
library.addBook(book2);
library.addBook(ebook1);

library.listBooks();

console.log("\\n=== 借阅操作 ===");
book1.borrow();
ebook1.download();

library.listBooks();`,
};
