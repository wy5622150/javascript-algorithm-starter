import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// 可折叠的内容模块组件
function CollapsibleSection({ title, children, isOpen, onToggle }) {
  return (
    <div className="border-2 border-gray-200 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all duration-200 mb-5">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors duration-200"
      >
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
          {isOpen ? <ChevronDown size={24} className="text-indigo-600" /> : <ChevronRight size={24} className="text-gray-400" />}
          {title}
        </h3>
      </button>
      {isOpen && (
        <div className="p-6 pt-4 space-y-5 border-t-2 border-gray-100">
          {children}
        </div>
      )}
    </div>
  );
}

// 课程内容组件
export default function LessonContent({ lesson, onCodeChange }) {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);
  
  if (!lesson) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        选择一个课程开始学习
      </div>
    );
  }

  // 解析内容，按二级标题分组，并提取代码示例
  const parseContent = (content) => {
    const sections = [];
    const parts = content.split('\n\n');
    let currentSection = null;
    let allCodeBlocks = [];  // 收集所有代码块
    
    parts.forEach(part => {
      const trimmed = part.trim();
      if (!trimmed) return;
      
      // 检测二级标题
      if (trimmed.startsWith('## ')) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: trimmed.substring(3),
          content: [],
          codeBlocks: []  // 存储该模块的所有代码块
        };
      } else if (currentSection) {
        currentSection.content.push(part);
        
        // 收集代码块
        const lines = part.split('\n');
        if (lines.length > 2 && (trimmed.includes('const ') || trimmed.includes('let ') || 
            trimmed.includes('function ') || trimmed.includes('class ') || 
            trimmed.includes('console.log'))) {
          currentSection.codeBlocks.push(part);
          allCodeBlocks.push(part);
        }
      } else {
        // 如果还没有section，创建一个默认的
        if (sections.length === 0) {
          currentSection = {
            title: '概述',
            content: [part],
            codeBlocks: []
          };
        }
      }
    });
    
    if (currentSection) {
      sections.push(currentSection);
    }
    
    // 为每个section生成完整可运行的代码
    sections.forEach(section => {
      section.codeExample = generateRunnableCode(section, allCodeBlocks);
    });
    
    return sections;
  };
  
  // 生成可独立运行的代码
  const generateRunnableCode = (section, allCodeBlocks) => {
    if (section.codeBlocks.length === 0) {
      return lesson.starterCode || '// 该模块暂无代码示例';
    }
    
    // 合并该模块的所有代码块，添加注释和console.log
    const code = section.codeBlocks.map((block, index) => {
      // 添加分隔注释
      const comment = index === 0 
        ? `// ===== ${section.title} =====\n\n` 
        : `\n// ----- 示例 ${index + 1} -----\n\n`;
      return comment + block;
    }).join('\n\n');
    
    return code || lesson.starterCode || '// 该模块暂无代码示例';
  };

  const sections = parseContent(lesson.content);
  
  // 处理模块切换
  const handleSectionToggle = (index) => {
    const newIndex = openSectionIndex === index ? null : index;
    setOpenSectionIndex(newIndex);
    
    // 更新代码编辑器内容
    if (newIndex !== null && onCodeChange) {
      const section = sections[newIndex];
      const code = section.codeExample || lesson.starterCode || '// 该模块暂无代码示例';
      onCodeChange(code);
    }
  };

  // 渲染单个内容块
  const renderContentPart = (section, index) => {
    const trimmed = section.trim();
    if (!trimmed) return null;
    
    // 处理三级标题
    if (trimmed.startsWith('### ')) {
      const text = trimmed.substring(4);
      return (
        <h4 key={index} className="text-lg font-semibold text-gray-700 mt-5 mb-3">
          {text}
        </h4>
      );
    }
    
    // 处理代码块
    const lines = section.split('\n');
    const hasCode = lines.some(line => {
      const t = line.trim();
      return t.startsWith('let ') || t.startsWith('const ') || 
             t.startsWith('function ') || t.startsWith('console.log') ||
             t.startsWith('if ') || t.startsWith('for ') || 
             t.startsWith('while ') || t.startsWith('switch ') ||
             t.startsWith('return ') || t.includes('=>') ||
             t.startsWith('typeof ') || t.includes('//');
    });
    
    if (hasCode && lines.length > 1) {
      return (
        <div key={index} className="my-5 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border-2 border-gray-700 overflow-x-auto">
          <pre className="text-sm text-gray-100 font-mono leading-loose">
            <code>{section}</code>
          </pre>
        </div>
      );
    }
    
    // 处理特点/说明文本（包含冒号的）
    if (trimmed.includes('：') || (trimmed.includes(':') && trimmed.length < 100)) {
      return (
        <div key={index} className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-xl my-4">
          <p className="text-gray-800 font-medium text-base leading-loose">
            {trimmed}
          </p>
        </div>
      );
    }
    
    // 处理示例标记
    if (trimmed.startsWith('示例') || trimmed.startsWith('例子')) {
      return (
        <div key={index} className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 my-4">
          <p className="text-amber-900 font-medium text-base leading-loose">
            💡 {trimmed}
          </p>
        </div>
      );
    }
    
    // 普通段落
    return (
      <p key={index} className="text-gray-700 leading-loose text-base my-2">
        {trimmed}
      </p>
    );
  };

  return (
    <div className="h-full overflow-auto bg-gradient-to-b from-white to-gray-50">
      <div className="p-8 max-w-4xl">
        <div className="mb-5">
          <span className={`inline-flex items-center px-4 py-2 text-xs font-bold rounded-full ${
            lesson.difficulty === 'easy' ? 'bg-green-100 text-green-700 border-2 border-green-200' :
            lesson.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-200' :
            'bg-red-100 text-red-700 border-2 border-red-200'
          }`}>
            {lesson.difficulty === 'easy' ? '✓ 简单' : 
             lesson.difficulty === 'medium' ? '◆ 中等' : '★ 困难'}
          </span>
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
          {lesson.title}
        </h1>
        
        <p className="text-gray-600 mb-10 text-lg leading-relaxed">
          {lesson.description}
        </p>

        {/* 可折叠的内容模块 */}
        <div className="space-y-5">
          {sections.map((section, idx) => (
            <CollapsibleSection 
              key={`${lesson.id}-${idx}-${section.title}`} 
              title={section.title} 
              isOpen={openSectionIndex === idx}
              onToggle={() => handleSectionToggle(idx)}
            >
              {section.content.map((part, partIdx) => renderContentPart(part, partIdx))}
            </CollapsibleSection>
          ))}
        </div>

      </div>
    </div>
  );
}
