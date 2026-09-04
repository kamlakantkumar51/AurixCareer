import { useMemo } from 'react'
import { BarChart2, CheckCircle2, Flame, BookOpen } from 'lucide-react'
import useQuizStore from '../../stores/quizStore'

export default function ProgressStats() {
  const { completedParts, topicProgress } = useQuizStore()

  const stats = useMemo(() => {
    const topicsCompleted = Object.keys(completedParts).length;
    
    let problemsSolved = 0;
    Object.values(topicProgress).forEach(t => {
      problemsSolved += (t.correct || 0);
    });

    return {
      problemsSolved,
      streak: 1, // Requires a daily login tracker, defaulting to 1 for now
      notesCreated: 0, // Notes are local to ProblemTracker for now
      topicsCompleted,
      subjectProgress: [
        { subject: 'Aptitude', progress: Math.min(100, topicsCompleted * 10) },
        { subject: 'DSA', progress: 0 },
        { subject: 'DBMS', progress: 0 },
        { subject: 'OS', progress: 0 },
        { subject: 'Networks', progress: 0 },
      ]
    }
  }, [completedParts, topicProgress])

  return (
    <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/60 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Your Progress</h3>
        <BarChart2 className="w-5 h-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.problemsSolved}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1"><CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" /> Solved</span>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.streak} <span className="text-sm font-normal text-gray-500">days</span></span>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1"><Flame className="w-3 h-3 mr-1 text-orange-500" /> Streak</span>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.notesCreated}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1"><BookOpen className="w-3 h-3 mr-1 text-[#7b32d9]" /> Notes</span>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{stats.topicsCompleted}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center mt-1">Topics</span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-4">Subject Progress</h4>
        <div className="space-y-4">
          {stats.subjectProgress.map(sub => (
            <div key={sub.subject}>
              <div className="flex justify-between text-xs mb-1">
                <span className="font-medium text-gray-700 dark:text-gray-300">{sub.subject}</span>
                <span className="text-gray-500 dark:text-gray-400">{sub.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#1a1a1a] rounded-full h-1.5">
                <div 
                  className="bg-[#7b32d9] h-1.5 rounded-full transition-all duration-1000" 
                  style={{ width: `${sub.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
