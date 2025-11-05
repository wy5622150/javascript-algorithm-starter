// 课程章节索引文件
// 每个章节独立管理，便于维护和扩展

import lesson01 from './lesson01.js';
import lesson02 from './lesson02.js';
import lesson03 from './lesson03.js';
import lesson04 from './lesson04.js';
import lesson05 from './lesson05.js';
import lesson06 from './lesson06.js';
import lesson07 from './lesson07.js';
import lesson08 from './lesson08.js';
import lesson09 from './lesson09.js';

// 导出所有课程（按ID顺序）
export const lessons = [
  lesson01,  // id: 1 - 变量与数据类型
  lesson06,  // id: 2 - 引用类型
  lesson02,  // id: 3 - 条件判断
  lesson03,  // id: 4 - 循环
  lesson04,  // id: 5 - 函数
  lesson05,  // id: 6 - 传值与传址
  lesson07,  // id: 7 - 面向对象编程
  lesson08,  // id: 8 - 递归
  lesson09,  // id: 9 - 栈和队列
];

// 按分类导出
export const lessonsByCategory = {
  基础: lessons.filter(lesson => lesson.category === '基础'),
  进阶: lessons.filter(lesson => lesson.category === '进阶'),
};

// 按难度导出
export const lessonsByDifficulty = {
  easy: lessons.filter(lesson => lesson.difficulty === 'easy'),
  medium: lessons.filter(lesson => lesson.difficulty === 'medium'),
  hard: lessons.filter(lesson => lesson.difficulty === 'hard'),
};

// 根据ID获取课程
export const getLessonById = (id) => {
  return lessons.find(lesson => lesson.id === id);
};

// 获取下一课程
export const getNextLesson = (currentId) => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  return currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
};

// 获取上一课程
export const getPreviousLesson = (currentId) => {
  const currentIndex = lessons.findIndex(lesson => lesson.id === currentId);
  return currentIndex > 0 ? lessons[currentIndex - 1] : null;
};
