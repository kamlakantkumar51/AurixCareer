import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Target, Trophy, Clock, BrainCircuit, AlertCircle, ChevronRight, BarChart3, Activity } from 'lucide-react'
import useQuizStore from '../../stores/quizStore'
import { aptitudeSubject } from '../../data/aptitudeQuestions'

export default function AptitudeDashboard() {
  const { progress, completedParts, topicProgress, timeMetrics, mistakeHistory } = useQuizStore()

  // Calculate overall metrics
  const totalQuestions = 150
  let attempted = 0
  let correct = 0
  let totalTime = 0
  let timedQuestionsCount = 0

  if (aptitudeSubject && aptitudeSubject.parts) {
    aptitudeSubject.parts.forEach(part => {
      const partProgress = progress[part.id]
      if (partProgress && partProgress.answers) {
        Object.entries(partProgress.answers).forEach(([qId, selectedIdx]) => {
          attempted++
          const q = part.questions.find(q => q.id === qId)
          if (q && selectedIdx === q.correctAnswer) {
            correct++
          }
          if (timeMetrics[qId]) {
             totalTime += timeMetrics[qId]
             timedQuestionsCount++
          }
        })
      }
    })
  }

  const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0
  const avgTime = timedQuestionsCount > 0 ? Math.round(totalTime / timedQuestionsCount) : 0
  const readinessScore = Math.min(100, Math.round((accuracy * 0.7) + ((attempted / totalQuestions) * 30)))

  // Sort topics by accuracy
  const topicsArray = Object.entries(topicProgress).map(([topic, stats]) => ({
     topic,
     accuracy: stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0,
     attempted: stats.attempted
  })).filter(t => t.attempted > 0)

  const weakTopics = [...topicsArray].sort((a, b) => a.accuracy - b.accuracy).slice(0, 3)
  const strongTopics = [...topicsArray].sort((a, b) => b.accuracy - a.accuracy).slice(0, 3)

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      

      <div className="grid grid-cols-1 gap-6">
        
        {/* Practice Modules */}
        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <h2 className="text-xl font-black text-slate-900 dark:text-white flex items-center">
                <BrainCircuit className="w-6 h-6 mr-3 text-indigo-600" />
                Aptitude Modules
              </h2>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {aptitudeSubject?.parts.map((part, idx) => {
                const pProgress = progress[part.id]
                const isCompleted = !!completedParts[part.id]
                const qAttempted = pProgress ? Object.keys(pProgress.answers).length : 0
                const percent = Math.round((qAttempted / part.questions.length) * 100)

                return (
                  <Link 
                    key={part.id} 
                    to={`/student/practice/quiz/aptitude/${part.id}`}
                    className="bg-white dark:bg-[#140e21] border border-slate-200 dark:border-indigo-900/30 p-5 rounded-2xl hover:border-indigo-500 dark:hover:border-indigo-500 transition-all shadow-sm hover:shadow-md group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-3">
                         <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded">Part {idx + 1}</span>
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{part.difficulty}</span>
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-2 leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {part.title.split('—').pop().trim()}
                      </h3>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                      {isCompleted ? (
                        <div className="flex items-center justify-between text-sm font-bold text-emerald-600">
                          <span>Completed</span>
                          <span>Score: {completedParts[part.id].score}/15</span>
                        </div>
                      ) : (
                        <div>
                          <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                            <span>{percent}% Progress</span>
                            <span>{qAttempted}/15</span>
                          </div>
                          <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                            <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${percent}%` }}></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </Link>
                )
             })}
           </div>
        </div>

      </div>

    </div>
  )
}
