import { useState } from 'react';
import LessonList from './components/LessonList';
import LessonContent from './components/LessonContent';
import CodeEditor from './components/CodeEditor';
import Console from './components/Console';
import { lessons } from './data/lessons/index.js';

function App() {
  const [selectedLessonId, setSelectedLessonId] = useState(1);
  const [output, setOutput] = useState([]);
  const [currentCode, setCurrentCode] = useState('');

  const selectedLesson = lessons.find(l => l.id === selectedLessonId);
  
  // 当选择新课程时，重置代码编辑器
  const handleSelectLesson = (id) => {
    setSelectedLessonId(id);
    const lesson = lessons.find(l => l.id === id);
    setCurrentCode(lesson?.starterCode || '');
    setOutput([]);
  };
  
  // 当模块展开时更新代码
  const handleCodeChange = (code) => {
    setCurrentCode(code);
  };

  // 运行代码
  const handleRunCode = (code) => {
    const logs = [];
    
    // 重写console.log来捕获输出
    const originalLog = console.log;
    console.log = (...args) => {
      logs.push({
        type: 'log',
        message: args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' ')
      });
      originalLog(...args);
    };

    try {
      // 使用eval执行代码（注意：生产环境应使用更安全的方式）
      eval(code);
      setOutput(logs);
    } catch (error) {
      logs.push({
        type: 'error',
        message: error.message
      });
      setOutput(logs);
    } finally {
      // 恢复原始console.log
      console.log = originalLog;
    }
  };

  // 清空控制台
  const handleClearConsole = () => {
    setOutput([]);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 顶部导航栏 */}
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 shadow-xl">
        <h1 className="text-2xl font-bold">JavaScript 学习平台</h1>
        <p className="text-sm text-indigo-100 mt-1">从零基础系统学习 JavaScript 核心概念 🚀</p>
      </header>

      {/* 主内容区域 */}
      <div className="flex-1 flex overflow-hidden gap-4 p-4">
        {/* 左侧：课程列表 */}
        <div className="w-80 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
          <LessonList
            lessons={lessons}
            selectedId={selectedLessonId}
            onSelect={handleSelectLesson}
          />
        </div>

        {/* 中间：课程内容 */}
        <div className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100">
          <LessonContent
            lesson={selectedLesson}
            onCodeChange={handleCodeChange}
          />
        </div>

        {/* 右侧：代码编辑器和控制台 */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex-1 bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-800">
            <CodeEditor
              initialCode={currentCode || selectedLesson?.starterCode || ''}
              onRun={handleRunCode}
            />
          </div>
          <div className="h-72 bg-gray-900 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-800">
            <Console
              output={output}
              onClear={handleClearConsole}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
