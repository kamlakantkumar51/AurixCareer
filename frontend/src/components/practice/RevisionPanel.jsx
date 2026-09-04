import { AlertCircle, Clock, BookOpen, AlertTriangle, X } from 'lucide-react'
import useQuizStore from '../../stores/quizStore'

export default function RevisionPanel() {
  const { revisionQueue, removeFromRevision, clearRevision } = useQuizStore()

  return (
    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/10 border border-yellow-200 dark:border-yellow-800/30 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center space-x-2 mb-6">
        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500" />
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Today's Revision</h3>
      </div>

      <div className="space-y-4">
        
        {/* CS Fundamentals Revision */}
        <div className="bg-white dark:bg-gray-900/50 p-4 rounded-2xl border border-yellow-100 dark:border-yellow-800/30">
          <div className="flex items-center justify-between mb-3">
             <div className="flex items-center space-x-2 text-sm font-medium text-amber-600 dark:text-amber-400">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>{revisionQueue.length} CS Questions to Revisit</span>
             </div>
             {revisionQueue.length > 0 && (
               <button onClick={clearRevision} className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Clear All</button>
             )}
          </div>
          
          {revisionQueue.length > 0 ? (
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-3">
              {revisionQueue.slice(0, 5).map(q => (
                <li key={q.id} className="relative pl-3 border-l-2 border-amber-200 dark:border-amber-800/50 group">
                  <span className="text-gray-900 dark:text-gray-200 font-medium block text-xs mb-0.5">{q.topic}</span>
                  <p className="line-clamp-2 text-xs mb-1">{q.question}</p>
                  <button 
                    onClick={() => removeFromRevision(q.id)}
                    className="absolute top-0 right-0 p-1 text-slate-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Remove from revision"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </li>
              ))}
              {revisionQueue.length > 5 && (
                 <li className="text-xs font-bold text-center pt-2 text-slate-500">
                   +{revisionQueue.length - 5} more questions
                 </li>
              )}
            </ul>
          ) : (
            <div className="text-xs text-center text-slate-500 dark:text-slate-400 py-2">
               You have no questions to revise! Great job.
            </div>
          )}
        </div>

        {/* Existing Dummy DSA Revision */}
        <div className="bg-white dark:bg-gray-900/50 p-4 rounded-2xl border border-yellow-100 dark:border-yellow-800/30">
          <div className="flex items-center justify-between mb-2">
             <div className="flex items-center space-x-2 text-sm font-medium text-red-600 dark:text-red-400">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span>3 DSA Problems to Revisit</span>
             </div>
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 pl-4 mt-2">
            <li className="list-disc"><span className="text-gray-900 dark:text-gray-200 font-medium text-xs">LRU Cache</span> (Hard)</li>
            <li className="list-disc"><span className="text-gray-900 dark:text-gray-200 font-medium text-xs">Merge K Lists</span> (Hard)</li>
            <li className="list-disc"><span className="text-gray-900 dark:text-gray-200 font-medium text-xs">Word Break</span> (Medium)</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
