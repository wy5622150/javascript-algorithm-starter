import { useState, useEffect } from 'react';
import { Play, RotateCcw } from 'lucide-react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

// 代码编辑器组件
export default function CodeEditor({ initialCode, onRun }) {
  const [code, setCode] = useState(initialCode);

  // 当切换课程时，更新代码编辑器内容
  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleRun = () => {
    onRun(code);
  };

  const handleReset = () => {
    setCode(initialCode);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-3 border-b border-gray-700">
        <span className="text-sm font-semibold text-gray-200 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          代码编辑器
        </span>
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md"
          >
            <RotateCcw size={15} />
            重置
          </button>
          <button
            onClick={handleRun}
            className="flex items-center gap-1.5 px-4 py-2 text-sm bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-lg transition-all duration-200 font-medium shadow-md hover:shadow-lg"
          >
            <Play size={15} />
            运行
          </button>
        </div>
      </div>
      
      {/* CodeMirror编辑器 */}
      <div className="flex-1 overflow-auto">
        <CodeMirror
          value={code}
          height="100%"
          theme={oneDark}
          extensions={[javascript({ jsx: true })]}
          onChange={(value) => setCode(value)}
          basicSetup={{
            lineNumbers: true,
            highlightActiveLineGutter: true,
            highlightSpecialChars: true,
            foldGutter: true,
            drawSelection: true,
            dropCursor: true,
            allowMultipleSelections: true,
            indentOnInput: true,
            bracketMatching: true,
            closeBrackets: true,
            autocompletion: true,
            rectangularSelection: true,
            crosshairCursor: true,
            highlightActiveLine: true,
            highlightSelectionMatches: true,
            closeBracketsKeymap: true,
            searchKeymap: true,
            foldKeymap: true,
            completionKeymap: true,
            lintKeymap: true,
          }}
          style={{
            fontSize: '14px',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
}
