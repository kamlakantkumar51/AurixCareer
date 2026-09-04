import { useState, useEffect, useMemo, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { csSubjects } from '../../data/csQuestions'
import useQuizStore from '../../stores/quizStore'
import { ArrowLeft, CheckCircle2, XCircle, AlertCircle, RefreshCcw, ChevronRight, Timer, Play, BookOpen } from 'lucide-react'

export default function QuizPlayer() {
  const { subjectId, partId } = useParams()
  const navigate = useNavigate()
  
  const { progress, completedParts, submitAnswer, nextQuestion, finishPart, resetPart, quizMode, setQuizMode } = useQuizStore()

  // Find subject and part
  const subject = csSubjects.find(s => s.id === subjectId)
  const part = subject?.parts.find(p => p.id === partId)

  const [localSelection, setLocalSelection] = useState(null)
  
  // Timer State
  const [timeLeft, setTimeLeft] = useState(45)
  const [startTime, setStartTime] = useState(null)
  const [hasStarted, setHasStarted] = useState(false)
  
  const partProgress = progress[partId] || { currentQuestionIndex: 0, answers: {} }
  const isCompleted = !!completedParts[partId]

  const currentQuestionIndex = partProgress.currentQuestionIndex || 0
  const currentQuestion = part?.questions[currentQuestionIndex]
  const isAptitude = subjectId === 'aptitude'

  // Pre-quiz selection removed so user can always choose mode

  // Timer Effect
  useEffect(() => {
    if (hasStarted && currentQuestion && !progress[partId]?.answers?.[currentQuestion.id]) {
      setStartTime(Date.now())
      if (quizMode === 'timed') {
        setTimeLeft(45)
      } else {
        setTimeLeft(null)
      }
    }
  }, [hasStarted, currentQuestionIndex, currentQuestion, quizMode, progress, partId])

  useEffect(() => {
    let interval;
    if (hasStarted && quizMode === 'timed' && timeLeft > 0 && currentQuestion && !progress[partId]?.answers?.[currentQuestion.id]) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [hasStarted, quizMode, timeLeft, currentQuestion, progress, partId]);

  useEffect(() => {
    if (hasStarted && quizMode === 'timed' && timeLeft === 0 && currentQuestion && !progress[partId]?.answers?.[currentQuestion.id]) {
      handleTimeOut();
    }
  }, [hasStarted, quizMode, timeLeft, currentQuestion, progress, partId]);

  // Redirect if invalid
  useEffect(() => {
    if (!subject || !part) {
      navigate('/student/practice')
    }
  }, [subject, part, navigate])

  if (!subject || !part) return null

  // If completed, show summary
  if (isCompleted || currentQuestionIndex >= part.questions.length) {
    const score = completedParts[partId]?.score || 0
    const total = completedParts[partId]?.total || part.questions.length
    const accuracy = Math.round((score / total) * 100) || 0

    // Ensure we trigger finishPart if not already done
    if (!isCompleted && currentQuestionIndex >= part.questions.length) {
      let finalScore = 0
      const currentAnswers = partProgress.answers || {}
      part.questions.forEach(q => {
        if (currentAnswers[q.id] === q.correctAnswer) finalScore++
      })
      finishPart(partId, finalScore, part.questions.length)
    }

    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1a] font-sans p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-2xl bg-white dark:bg-[#140e21] rounded-3xl p-8 border border-slate-200 dark:border-indigo-900/30 shadow-2xl animate-in fade-in zoom-in-95 duration-500">
          
          <div className="text-center mb-8">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${accuracy >= 70 ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' : 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'}`}>
               <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{subject.id.toUpperCase()} — {part.title.split('—').pop().trim()} Complete</h1>
            <p className="text-slate-500 dark:text-slate-400">You've finished this practice module.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Score</div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{score}/{total}</div>
            </div>
            <div className="bg-slate-50 dark:bg-white/5 rounded-2xl p-4 text-center">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Accuracy</div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{accuracy}%</div>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl p-4 text-center border border-emerald-100 dark:border-emerald-900/20">
              <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Correct</div>
              <div className="text-2xl font-black text-emerald-700 dark:text-emerald-400">{score}</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/10 rounded-2xl p-4 text-center border border-red-100 dark:border-red-900/20">
              <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-1">Incorrect</div>
              <div className="text-2xl font-black text-red-700 dark:text-red-400">{total - score}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                resetPart(partId)
                window.scrollTo(0,0)
              }}
              className="flex items-center justify-center px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 font-bold transition-colors"
            >
              <RefreshCcw className="w-4 h-4 mr-2" /> Retry Part
            </button>
            <button 
              onClick={() => navigate('/student/practice')}
              className="flex items-center justify-center px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Pre-quiz mode selection for Aptitude
  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1a] font-sans p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-xl bg-white dark:bg-[#140e21] rounded-3xl p-8 border border-slate-200 dark:border-indigo-900/30 shadow-2xl animate-in zoom-in-95 duration-500">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-3">Select Practice Mode</h1>
            <p className="text-slate-500 dark:text-slate-400">Choose how you want to attempt this {isAptitude ? 'Aptitude ' : ''}section.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <button 
              onClick={() => setQuizMode('practice')}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${quizMode === 'practice' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300'}`}
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Practice Mode</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Learn at your own pace. No time limits. Detailed explanations.</p>
            </button>

            <button 
              onClick={() => setQuizMode('timed')}
              className={`p-6 rounded-2xl border-2 text-left transition-all ${quizMode === 'timed' ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300'}`}
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-xl flex items-center justify-center mb-4">
                <Timer className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Timed Assessment</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Strict proctoring. Distraction-free full screen mode.</p>
            </button>
          </div>

          <button 
            onClick={() => {
              if (quizMode === 'timed') {
                navigate(`/student/assessment/${subjectId}/${partId}`)
              } else {
                setHasStarted(true)
              }
            }}
            className="w-full flex items-center justify-center px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <Play className="w-5 h-5 mr-2" /> Start Now
          </button>
        </div>
      </div>
    )
  }

  const hasSubmitted = currentQuestion ? (partProgress.answers || {})[currentQuestion.id] !== undefined : false;
  const submittedAnswer = currentQuestion ? (partProgress.answers || {})[currentQuestion.id] : undefined;
  const isCorrect = currentQuestion ? submittedAnswer === currentQuestion.correctAnswer : false;

  const handleTimeOut = () => {
    const timeTaken = 45;
    const correct = false;
    submitAnswer(partId, currentQuestion.id, -1, correct, currentQuestion, timeTaken)
  }

  const handleSelect = (index) => {
    if (!hasSubmitted) {
      setLocalSelection(index)
    }
  }

  const handleSubmit = () => {
    if (localSelection !== null && !hasSubmitted) {
      const correct = localSelection === currentQuestion.correctAnswer
      const timeTaken = startTime ? Math.floor((Date.now() - startTime) / 1000) : 0
      submitAnswer(partId, currentQuestion.id, localSelection, correct, currentQuestion, timeTaken)
      setLocalSelection(null) // reset local selection for next question
    }
  }

  const handleNext = () => {
    nextQuestion(partId)
    window.scrollTo(0, 0)
  }

  const progressPercentage = ((currentQuestionIndex) / part.questions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1a] font-sans">
      
      {/* Top Navbar */}
      <div className="bg-white dark:bg-[#140e21] border-b border-slate-200 dark:border-indigo-900/30 sticky top-0 z-10 px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => navigate('/student/practice')}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">{subject.id.toUpperCase()} {isAptitude && quizMode === 'timed' ? 'TIMED TEST' : 'PRACTICE'}</div>
            <h2 className="text-sm md:text-base font-bold text-slate-900 dark:text-white line-clamp-1">{part.title}</h2>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
           {quizMode === 'timed' && !hasSubmitted && (
             <div className={`flex items-center px-4 py-1.5 rounded-full font-bold ${timeLeft <= 10 ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'}`}>
               <Timer className="w-4 h-4 mr-2" />
               00:{timeLeft.toString().padStart(2, '0')}
             </div>
           )}
           <div className="text-sm font-bold text-slate-500 dark:text-slate-400">
             Q {currentQuestionIndex + 1} / {part.questions.length}
           </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-1 w-full bg-slate-200 dark:bg-slate-800">
        <div 
          className="h-full bg-indigo-500 transition-all duration-300" 
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-12 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        
        {/* Question Card */}
        <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-indigo-900/30 shadow-xl relative">
          
          <div className="flex justify-between items-start mb-6">
             <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
               {currentQuestion.topic}
             </span>
             <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
               {currentQuestion.difficulty}
             </span>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-relaxed mb-8 whitespace-pre-line">
            {currentQuestion.question}
          </h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              // Determine styles based on state
              let btnStyle = "border-slate-200 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-indigo-500 text-slate-700 dark:text-slate-200";
              
              if (hasSubmitted) {
                if (index === currentQuestion.correctAnswer) {
                  // This is the correct answer
                  btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-500";
                } else if (index === submittedAnswer && submittedAnswer !== currentQuestion.correctAnswer) {
                  // User selected this and it's wrong
                  btnStyle = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                } else {
                  // Unselected wrong answer
                  btnStyle = "border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/50 text-slate-400 dark:text-slate-500 opacity-60";
                }
              } else {
                if (localSelection === index) {
                  // Selected but not submitted
                  btnStyle = "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 ring-1 ring-indigo-500";
                }
              }

              return (
                <button
                  key={index}
                  disabled={hasSubmitted}
                  onClick={() => handleSelect(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all flex justify-between items-center ${btnStyle}`}
                >
                  <div className="flex items-center">
                     <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm mr-4 shrink-0 border ${
                       hasSubmitted 
                        ? (index === currentQuestion.correctAnswer 
                            ? 'bg-emerald-500 border-emerald-600 text-white' 
                            : index === submittedAnswer 
                              ? 'bg-red-500 border-red-600 text-white'
                              : 'bg-slate-200 border-slate-300 dark:bg-slate-800 dark:border-slate-700 text-slate-400'
                          )
                        : (localSelection === index 
                            ? 'bg-indigo-500 border-indigo-600 text-white' 
                            : 'bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 text-slate-500 dark:text-slate-400'
                          )
                     }`}>
                       {String.fromCharCode(65 + index)}
                     </div>
                     <span className="font-medium text-[15px]">{option}</span>
                  </div>
                  
                  {hasSubmitted && index === currentQuestion.correctAnswer && <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />}
                  {hasSubmitted && index === submittedAnswer && index !== currentQuestion.correctAnswer && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Feedback Section */}
        {hasSubmitted && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 space-y-4">
            
            <div className={`rounded-2xl p-5 border ${isCorrect ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/30' : 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30'}`}>
               <div className="flex items-start">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 mr-3 shrink-0" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-red-500 mt-0.5 mr-3 shrink-0" />
                  )}
                  <div className="w-full">
                    <h4 className={`text-lg font-bold mb-2 ${isCorrect ? 'text-emerald-800 dark:text-emerald-400' : 'text-red-800 dark:text-red-400'}`}>
                      {submittedAnswer === -1 ? 'Time is up!' : isCorrect ? 'Correct Answer!' : 'Incorrect'}
                    </h4>
                    
                    {!isCorrect && (
                       <div className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4 bg-white dark:bg-[#140e21] p-3 rounded-lg border border-slate-200 dark:border-slate-700 inline-block">
                         Correct Answer: <span className="font-bold text-emerald-600 dark:text-emerald-400">{String.fromCharCode(65 + currentQuestion.correctAnswer)}</span>
                       </div>
                    )}
                    
                    <div className="text-[15px] leading-relaxed text-slate-700 dark:text-slate-300 bg-white/50 dark:bg-black/20 p-4 rounded-xl whitespace-pre-line w-full">
                      <span className="font-bold uppercase text-xs tracking-wider opacity-70 block mb-1">Explanation</span>
                      {currentQuestion.explanation}
                    </div>
                  </div>
               </div>
            </div>

            <div className="flex justify-end pt-4">
               <button 
                 onClick={handleNext}
                 className="flex items-center px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95"
               >
                 Next Question <ChevronRight className="w-5 h-5 ml-1" />
               </button>
            </div>
            
          </div>
        )}

        {/* Submit Button (if not submitted) */}
        {!hasSubmitted && (
          <div className="flex justify-end pt-4">
             <button 
               disabled={localSelection === null}
               onClick={handleSubmit}
               className="flex items-center px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-indigo-500/20 transition-all hover:scale-[1.02] active:scale-95"
             >
               Submit Answer
             </button>
          </div>
        )}

      </div>
    </div>
  )
}
