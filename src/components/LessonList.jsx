import { BookOpen, Code } from 'lucide-react';

// 课程列表组件
export default function LessonList({ lessons, selectedId, onSelect }) {
  const categories = [...new Set(lessons.map(l => l.category))];

  return (
    <div className="h-full overflow-auto bg-gradient-to-b from-white to-gray-50">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3 pb-4 border-b-2 border-indigo-100">
          <BookOpen size={24} className="text-indigo-600" />
          JavaScript 学习路径
        </h2>
        
        {categories.map(category => (
          <div key={category} className="mb-8">
            <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-wider px-2">
              {category}
            </h3>
            <div className="space-y-3">
              {lessons
                .filter(lesson => lesson.category === category)
                .map(lesson => (
                  <button
                    key={lesson.id}
                    onClick={() => onSelect(lesson.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-200 ${
                      selectedId === lesson.id
                        ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xl scale-[1.02] border-2 border-indigo-400'
                        : 'bg-white hover:bg-gray-50 text-gray-800 border-2 border-gray-200 hover:border-indigo-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Code size={18} className={`mt-1 flex-shrink-0 ${
                        selectedId === lesson.id ? 'text-white' : 'text-indigo-500'
                      }`} />
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold truncate text-sm mb-1">{lesson.title}</div>
                        <div className={`text-xs mt-1 line-clamp-2 leading-relaxed ${
                          selectedId === lesson.id ? 'text-indigo-100' : 'text-gray-500'
                        }`}>
                          {lesson.description}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
