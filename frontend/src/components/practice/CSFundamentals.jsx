import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { csSubjects } from '../../data/csQuestions'
import useQuizStore from '../../stores/quizStore'
import { CheckCircle2, PlayCircle, RotateCcw, AlertCircle, BookOpen } from 'lucide-react'

export default function CSFundamentals({ activeSubject = 'dbms' }) {
  const navigate = useNavigate()
  const { progress, completedParts } = useQuizStore()
  const [showMobileWarning, setShowMobileWarning] = useState(false)

  // Filter subject based on activeSubject
  const subject = csSubjects.find(s => s.id === activeSubject)

  if (!subject) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl animate-in fade-in">
        <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mb-4">
          <BookOpen className="w-8 h-8 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Coming Soon!</h3>
        <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
          We are currently building the curriculum and practice questions for this subject. Check back later!
        </p>
      </div>
    )
  }

  // Calculate overall subject stats
  const totalParts = subject.parts.length;
  const completedCount = subject.parts.filter(p => completedParts[p.id]).length;
  const subjectProgress = totalParts > 0 ? Math.round((completedCount / totalParts) * 100) : 0;

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="space-y-6">
        
        {/* Subject Header */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl p-6 border border-indigo-100 dark:border-indigo-800/30">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{subject.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-2xl">{subject.description}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{subjectProgress}%</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Completed</div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="h-2 w-full bg-indigo-200/50 dark:bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-1000 ease-out" 
              style={{ width: `${subjectProgress}%` }}
            />
          </div>
        </div>

        {/* Tree Layout */}
        <div className="relative pl-6">
          {/* Vertical connecting line */}
          <div className="absolute left-[31px] top-6 bottom-8 w-0.5 bg-indigo-100 dark:bg-indigo-900/30"></div>

          <div className="space-y-6 relative z-10">
            {subject.parts.map((part, index) => {
              const partProgress = progress[part.id];
              const isCompleted = !!completedParts[part.id];
              const score = completedParts[part.id]?.score;
              const total = completedParts[part.id]?.total;
              const questionsCount = part.questions?.length || 15;
              
              const isLast = index === subject.parts.length - 1;

              return (
                <div key={part.id} className="relative flex items-start group">
                  
                  {/* Branch line */}
                  <div className="absolute left-[-17px] top-7 w-6 h-0.5 bg-indigo-100 dark:bg-indigo-900/30"></div>
                  
                  {/* Node Dot */}
                  <div className="absolute left-[-23px] top-5 w-4 h-4 rounded-full border-2 border-white dark:border-[#0e0a16] z-10 flex items-center justify-center bg-indigo-50 dark:bg-indigo-900">
                     <div className={`w-2 h-2 rounded-full ${isCompleted ? 'bg-emerald-500' : partProgress && partProgress.currentQuestionIndex > 0 ? 'bg-amber-500' : 'bg-indigo-300 dark:bg-indigo-600'}`}></div>
                  </div>

                  <div className="ml-4 flex-1">
                    <div className="bg-white dark:bg-[#140e21] rounded-2xl p-5 border border-slate-200 dark:border-indigo-900/30 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                            {part.title}
                          </h3>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                            part.difficulty.includes('Easy') ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                            part.difficulty.includes('Hard') || part.difficulty.includes('Interview') ? 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400' :
                            'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          }`}>
                            {part.difficulty}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-3 text-xs font-medium">
                          <div className="flex items-center text-slate-500 dark:text-slate-400">
                             <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 mr-2"></div>
                             {questionsCount} Questions
                          </div>
                          
                          {isCompleted ? (
                            <div className="flex items-center text-emerald-600 dark:text-emerald-400">
                              <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
                              Score: {score}/{total}
                            </div>
                          ) : partProgress && partProgress.currentQuestionIndex > 0 ? (
                            <div className="flex items-center text-amber-600 dark:text-amber-500">
                              <AlertCircle className="w-3.5 h-3.5 mr-1.5" />
                              Progress: {partProgress.currentQuestionIndex}/{questionsCount}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <button
                        onClick={(e) => {
                          if (window.innerWidth < 768) {
                            e.preventDefault();
                            setShowMobileWarning(true);
                          } else {
                            navigate(`/student/practice/quiz/${subject.id}/${part.id}`);
                          }
                        }}
                        className={`shrink-0 flex items-center justify-center px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                          isCompleted 
                            ? 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:hover:bg-emerald-900/40 dark:text-emerald-300' 
                            : partProgress && partProgress.currentQuestionIndex > 0
                              ? 'bg-amber-50 hover:bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:hover:bg-amber-900/40 dark:text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                              : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 dark:text-indigo-300'
                        }`}
                      >
                        {isCompleted ? 'Review Mistakes' : partProgress && partProgress.currentQuestionIndex > 0 ? 'Resume Practice' : 'Start Practice'}
                      </button>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>
        
      </div>

      {showMobileWarning && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div 
            className="bg-white dark:bg-[#121826] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col items-center text-center animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-2xl flex items-center justify-center mb-6 text-rose-500">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">PC/Laptop Required</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed">
              To provide you with the best experience and proper code formatting, practice sessions are only available on desktop devices. Please use a PC or laptop to continue.
            </p>
            <button 
              onClick={() => setShowMobileWarning(false)}
              className="w-full py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
