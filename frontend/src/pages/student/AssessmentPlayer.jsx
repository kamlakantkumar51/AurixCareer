import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { csSubjects } from '../../data/csQuestions';
import { ArrowLeft, CheckCircle2, XCircle, AlertTriangle, Monitor, Clock, BookOpen, AlertCircle, Maximize, Play, Target } from 'lucide-react';
import axios from 'axios';
import useAuthStore from '../../stores/authStore';

export default function AssessmentPlayer() {
  const { user, logout } = useAuthStore();
  const { subjectId, partId } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef(null);

  // Subject and Part Lookup
  const subject = csSubjects.find(s => s.id === subjectId);
  const part = subject?.parts.find(p => p.id === partId);

  // States
  const [phase, setPhase] = useState('PRE_TEST'); // PRE_TEST, ACTIVE, SUBMITTED, REVIEW
  
  // Test State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { questionId: selectedOptionIndex }
  const answersRef = useRef({});
  const [timeLeft, setTimeLeft] = useState(0); // in seconds
  const [startTime, setStartTime] = useState(null);
  const startTimeRef = useRef(null);
  
  // Proctoring State
  const MAX_VIOLATIONS = 3;
  const [violations, setViolations] = useState(0);
  const [violationWarning, setViolationWarning] = useState(null);
  const [violationTypes, setViolationTypes] = useState([]);

  // Result State
  const [result, setResult] = useState(null);
  const [profile, setProfile] = useState(null);

  const totalQuestions = part?.questions?.length || 0;
  const currentQuestion = part?.questions?.[currentQuestionIndex];
  // Set overall time to totalQuestions * 45s or any logic. Let's do 45 seconds per question.
  const TOTAL_DURATION = totalQuestions * 45; 

  // Redirect if invalid
  useEffect(() => {
    if (!subject || !part) navigate('/student/practice');
  }, [subject, part, navigate]);

  // Fetch Student Profile for full name
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/students/profile', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (response.data.success) {
          setProfile(response.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };
    fetchProfile();
  }, []);

  // Handle Fullscreen Request
  const requestFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        await document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        await document.documentElement.msRequestFullscreen();
      }
      return true;
    } catch (err) {
      console.error("Failed to enter fullscreen", err);
      alert("Please allow fullscreen mode to start the assessment.");
      return false;
    }
  };

  const exitFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Start Assessment
  const handleStart = async () => {
    const success = await requestFullscreen();
    if (success) {
      try {
        // Log start to backend
        const token = localStorage.getItem('token');
        await axios.post('/api/assessment/start', { assessmentId: partId }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch (err) {
        console.error("Backend start log failed", err);
      }
      
      setPhase('ACTIVE');
      setTimeLeft(TOTAL_DURATION);
      const now = Date.now();
      setStartTime(now);
      startTimeRef.current = now;
      setViolations(0);
      violationsRef.current = 0;
      setViolationTypes([]);
      violationTypesRef.current = [];
    }
  };

  // Timer Effect
  useEffect(() => {
    if (phase !== 'ACTIVE') return;
    
    if (timeLeft <= 0) {
      handleSubmit(true, 'COMPLETED');
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  // Proctoring Engine
  const violationsRef = useRef(0);
  const violationTypesRef = useRef([]);

  const logViolation = useCallback((type) => {
    if (phase !== 'ACTIVE') return;
    
    violationsRef.current += 1;
    violationTypesRef.current.push({ type, timestamp: new Date().toISOString() });
    
    const newCount = violationsRef.current;
    setViolations(newCount);
    setViolationTypes([...violationTypesRef.current]);
    
    if (newCount > MAX_VIOLATIONS) {
      handleSubmit(true, 'TERMINATED_PROCTORING');
    } else {
      setViolationWarning(`Assessment focus lost. Violation ${newCount} of ${MAX_VIOLATIONS}. Please return to the assessment.`);
    }
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== 'ACTIVE') return;

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        logViolation('TAB_SWITCH');
      }
    };

    const handleBlur = () => logViolation('WINDOW_BLUR');
    
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        logViolation('EXIT_FULLSCREEN');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [phase, logViolation]);

  const resumeFromWarning = async () => {
    setViolationWarning(null);
    await requestFullscreen();
  };

  // Navigation
  const handleSelect = (idx) => {
    setAnswers(prev => {
      const newAnswers = { ...prev, [currentQuestion.id]: idx };
      answersRef.current = newAnswers;
      return newAnswers;
    });
  };

  // Submission
  const handleSubmit = async (force = false, status = 'COMPLETED') => {
    const currentAnswers = answersRef.current;
    if (!force) {
      const unanswered = totalQuestions - Object.keys(currentAnswers).length;
      const confirmed = window.confirm(`Are you sure you want to finish?\nYou answered ${Object.keys(currentAnswers).length} of ${totalQuestions} questions.${unanswered > 0 ? `\n${unanswered} questions unanswered.` : ''}`);
      if (!confirmed) return;
    }

    setPhase('SUBMITTED');
    await exitFullscreen();

    // Calculate score
    let score = 0;
    let correctCount = 0;
    let incorrectCount = 0;
    
    part.questions.forEach(q => {
      const selected = currentAnswers[q.id];
      if (selected === q.correctAnswer) {
        score++;
        correctCount++;
      } else if (selected !== undefined) {
        incorrectCount++;
      }
    });

    const unanswered = totalQuestions - correctCount - incorrectCount;
    const percentage = (score / totalQuestions) * 100;
    const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000);

    const resultData = {
      assessmentId: partId,
      score,
      totalQuestions,
      correctAnswers: correctCount,
      incorrectAnswers: incorrectCount,
      unanswered,
      percentage,
      timeTaken,
      startedAt: new Date(startTimeRef.current).toISOString(),
      proctoringViolations: violationsRef.current,
      violationTypes: violationTypesRef.current,
      completionStatus: status
    };

    setResult(resultData);

    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/assessment/submit', resultData, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (err) {
      console.error("Failed to submit result", err);
    }
  };

  // Format Time
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (!subject || !part) return null;

  // Render Pre-Test
  if (phase === 'PRE_TEST') {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1a] p-4 md:p-8 flex items-center justify-center font-sans">
        <div className="w-full max-w-2xl bg-white dark:bg-[#140e21] rounded-3xl p-8 border border-slate-200 dark:border-indigo-900/30 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Monitor className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Assessment Mode</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Strict proctoring enabled for {part.title}</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-8 border border-slate-100 dark:border-slate-800">
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 uppercase tracking-wider text-sm flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-indigo-500" /> Assessment Details
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              <li className="flex justify-between"><span>Subject</span> <span className="font-bold text-slate-900 dark:text-white">{subject.title}</span></li>
              <li className="flex justify-between"><span>Total Questions</span> <span className="font-bold text-slate-900 dark:text-white">{totalQuestions}</span></li>
              <li className="flex justify-between"><span>Time Limit</span> <span className="font-bold text-slate-900 dark:text-white">{formatTime(TOTAL_DURATION)}</span></li>
              <li className="flex justify-between"><span>Difficulty</span> <span className="font-bold text-slate-900 dark:text-white">{part.difficulty}</span></li>
            </ul>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/10 rounded-2xl p-6 mb-8 border border-amber-200 dark:border-amber-900/30">
             <h3 className="font-bold text-amber-800 dark:text-amber-400 mb-4 flex items-center">
               <AlertTriangle className="w-5 h-5 mr-2" /> Proctoring Rules
             </h3>
             <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-300/80">
               <li>Assessment requires <b>Fullscreen Mode</b>.</li>
               <li>Tab switching or exiting fullscreen will be recorded.</li>
               <li>Maximum <b>{MAX_VIOLATIONS} violations</b> allowed.</li>
               <li>Test will auto-submit on the 4th violation.</li>
             </ul>
          </div>

          <div className="flex space-x-4">
             <button 
               onClick={() => navigate('/student/practice')}
               className="flex-1 py-4 px-6 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
             >
               Cancel
             </button>
             <button 
               onClick={handleStart}
               className="flex-1 py-4 px-6 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-500/30 transition-all flex items-center justify-center"
             >
               <Maximize className="w-5 h-5 mr-2" /> Start Assessment
             </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Submitted / Review
  if (phase === 'SUBMITTED' || phase === 'REVIEW') {
    if (!result) return null;

    if (phase === 'REVIEW') {
      return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#0a0f1a] p-4 font-sans">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center bg-white dark:bg-[#140e21] p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
               <h2 className="text-xl font-bold dark:text-white">Review Answers</h2>
               <button onClick={() => setPhase('SUBMITTED')} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg font-bold dark:text-white">Back to Score</button>
            </div>
            
            {part.questions.map((q, idx) => {
              const selected = answers[q.id];
              const isCorrect = selected === q.correctAnswer;
              
              return (
                <div key={q.id} className="bg-white dark:bg-[#140e21] rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-slate-500 font-bold">Q{idx + 1}</span>
                    {selected === undefined ? (
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold">Unanswered</span>
                    ) : isCorrect ? (
                      <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-bold flex items-center"><CheckCircle2 className="w-3 h-3 mr-1"/> Correct</span>
                    ) : (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-bold flex items-center"><XCircle className="w-3 h-3 mr-1"/> Incorrect</span>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 whitespace-pre-line">{q.question}</h3>
                  
                  <div className="space-y-3 mb-6">
                    {q.options.map((opt, oIdx) => {
                      const isSelected = selected === oIdx;
                      const isActualCorrect = q.correctAnswer === oIdx;
                      let style = "border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 opacity-60";
                      
                      if (isActualCorrect) {
                        style = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 ring-1 ring-emerald-500";
                      } else if (isSelected && !isActualCorrect) {
                        style = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
                      }

                      return (
                        <div key={oIdx} className={`px-5 py-3 rounded-xl border-2 flex justify-between items-center ${style}`}>
                           <div className="flex items-center">
                             <div className="font-bold mr-4">{String.fromCharCode(65 + oIdx)}</div>
                             <span className="font-medium text-[15px]">{opt}</span>
                           </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl p-5">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-2">Explanation</span>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    const formatDuration = (seconds) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const handleLogout = () => {
      logout();
      navigate('/login');
    };

    return (
      <div className="min-h-screen bg-[#f8faff] dark:bg-[#0a0f1a] p-4 md:p-8 flex items-center justify-center font-sans relative overflow-hidden">
        {/* Decorative background dots */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="w-full max-w-xl bg-white dark:bg-[#140e21] rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-indigo-900/20 relative z-10 text-center">
          
          <div className="mb-6">
            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-medium text-slate-900 dark:text-white mb-3">
              Thank You
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-[15px]">
              Your assessment has been submitted successfully.
            </p>
          </div>

          <div className="py-8 space-y-5 text-sm text-left px-4 md:px-8">
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/50 pb-5">
              <span className="text-slate-500 dark:text-slate-400">Candidate Name</span>
              <span className="font-bold text-slate-900 dark:text-white uppercase">
                {profile && (profile.firstName || profile.lastName) 
                  ? `${profile.firstName || ''} ${profile.lastName || ''}`.trim() 
                  : (user?.name || user?.email?.split('@')[0] || 'CANDIDATE')}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/50 pb-5">
              <span className="text-slate-500 dark:text-slate-400">Submission Time</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {new Date(result.startedAt).toLocaleString('en-US', { 
                  month: 'numeric', day: 'numeric', year: 'numeric', 
                  hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true 
                })}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800/50 pb-5">
              <span className="text-slate-500 dark:text-slate-400">Test Duration</span>
              <span className="font-bold text-slate-900 dark:text-white">{formatDuration(result.timeTaken)}</span>
            </div>
            <div className="flex justify-between items-center pb-2">
              <span className="text-slate-500 dark:text-slate-400">Score Result</span>
              <span className="font-bold text-indigo-600 dark:text-indigo-400">{result.score} / {result.totalQuestions} ({Math.round(result.percentage)}%)</span>
            </div>
          </div>
          
          <div className="mt-2 mb-8 text-slate-400 dark:text-slate-500 text-[13px]">
            You may close this window. We'll be in touch about next steps.
          </div>

          <div className="flex flex-col space-y-4 max-w-[200px] mx-auto">
             <button 
               onClick={handleLogout}
               className="w-full py-3 px-6 rounded-full border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
             >
               Log Out
             </button>
             <button 
               onClick={() => setPhase('REVIEW')}
               className="text-xs text-slate-500 hover:text-slate-700 underline underline-offset-2"
             >
               Review Answers
             </button>
          </div>

        </div>
      </div>
    )
  }

  // Render ACTIVE Assessment
  const isTimeCritical = timeLeft <= 300; // less than 5 min
  const isTimeCriticalSevere = timeLeft <= 60; // less than 1 min

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-[#0a0f1a] font-sans flex flex-col relative select-none">
      
      {/* Proctoring Warning Overlay */}
      {violationWarning && (
        <div className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <AlertCircle className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Focus Lost</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">{violationWarning}</p>
            <button 
              onClick={resumeFromWarning}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold transition-all shadow-lg shadow-amber-500/20"
            >
              Acknowledge & Continue
            </button>
          </div>
        </div>
      )}

      {/* Sticky Top Header */}
      <div className="sticky top-0 z-10 bg-white dark:bg-[#140e21] border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex items-center justify-between shadow-sm">
         <div className="flex items-center space-x-3">
           <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-lg tracking-tighter">CF</div>
           <div className="hidden md:block text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Assessment Mode</div>
         </div>
         
         <div className="flex items-center space-x-6">
           <div className="font-bold text-slate-500 dark:text-slate-400">
             Question <span className="text-slate-900 dark:text-white">{currentQuestionIndex + 1}</span> of {totalQuestions}
           </div>
           <div className={`flex items-center px-4 py-2 rounded-xl font-bold transition-colors ${
             isTimeCriticalSevere ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 animate-pulse' : 
             isTimeCritical ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' :
             'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
           }`}>
             <Clock className="w-5 h-5 mr-2" />
             {formatTime(timeLeft)}
           </div>
           <button 
             onClick={() => handleSubmit(false)}
             className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-bold text-sm hover:opacity-90"
           >
             Finish Test
           </button>
         </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1 bg-slate-100 dark:bg-slate-800 w-full">
         <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }} />
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto space-y-8">
           
           <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line select-none">
             {currentQuestion?.question}
           </h2>
           
           <div className="space-y-4">
             {currentQuestion?.options.map((opt, idx) => {
               const isSelected = answers[currentQuestion.id] === idx;
               return (
                 <button 
                   key={idx}
                   onClick={() => handleSelect(idx)}
                   className={`w-full text-left p-5 rounded-2xl border-2 transition-all flex items-center ${
                     isSelected 
                       ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-900 dark:text-white' 
                       : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-[#140e21] text-slate-700 dark:text-slate-300 hover:border-indigo-300'
                   }`}
                 >
                   <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 shrink-0 transition-colors ${
                     isSelected ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-slate-300 dark:border-slate-600'
                   }`}>
                     <div className={`w-3 h-3 rounded-full ${isSelected ? 'bg-white' : 'bg-transparent'}`} />
                   </div>
                   <span className="text-lg font-medium">{opt}</span>
                 </button>
               )
             })}
           </div>

        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white dark:bg-[#140e21] border-t border-slate-200 dark:border-slate-800 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button 
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
            className="px-6 py-3 rounded-xl font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
          >
            Previous
          </button>
          
          <div className="flex items-center space-x-1 overflow-x-auto max-w-sm hide-scrollbar px-4">
            {part?.questions.map((q, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold shrink-0 transition-colors ${
                  currentQuestionIndex === idx ? 'bg-indigo-600 text-white ring-2 ring-indigo-600 ring-offset-2 dark:ring-offset-[#140e21]' : 
                  answers[q.id] !== undefined ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-400' :
                  'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button 
            disabled={currentQuestionIndex === totalQuestions - 1}
            onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
            className="px-6 py-3 rounded-xl font-bold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 transition-colors"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
}
