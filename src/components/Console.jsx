import { Terminal, X } from 'lucide-react';

// 控制台输出组件
export default function Console({ output, onClear }) {
  return (
    <div className="flex flex-col h-full bg-gray-900">
      <div className="flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 px-5 py-3 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-emerald-400" />
          <span className="text-sm font-semibold text-gray-200">控制台输出</span>
        </div>
        <button
          onClick={onClear}
          className="p-1.5 hover:bg-gray-700 rounded-lg transition-all duration-200"
          title="清空"
        >
          <X size={16} className="text-gray-400 hover:text-gray-200" />
        </button>
      </div>
      <div className="flex-1 p-5 overflow-auto">
        {output.length === 0 ? (
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
            点击"运行"按钮执行代码...
          </div>
        ) : (
          <div className="space-y-2">
            {output.map((item, index) => (
              <div
                key={index}
                className={`text-sm font-mono p-3 rounded-lg ${
                  item.type === 'error' 
                    ? 'text-red-300 bg-red-900/20 border border-red-800/30' 
                    : 'text-emerald-300 bg-emerald-900/10 border border-emerald-800/20'
                }`}
              >
                <span className="mr-2">
                  {item.type === 'error' ? '❌' : '✓'}
                </span>
                {item.message}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
