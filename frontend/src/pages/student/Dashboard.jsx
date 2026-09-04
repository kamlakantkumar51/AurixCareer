import { useState, useEffect } from 'react'
import { Sparkles, ArrowRight, CheckCircle2, Play, Activity, Clock, Info, ExternalLink, Target, ChevronRight, AlertTriangle, Briefcase, Zap, TrendingUp, Award, BarChart2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import useAuthStore from '../../stores/authStore'
import api from '../../services/api'
import useQuizStore from '../../stores/quizStore'
import { getStudentProfile } from '../../services/mockData'

// SVG Progress Ring Component
const ProgressRing = ({ radius, stroke, progress, colorClass, label, glow }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke="rgba(255,255,255,0.05)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className={`${colorClass} transition-all duration-1000 ease-in-out`}
          stroke="currentColor"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, filter: glow ? `drop-shadow(0 0 12px currentColor)` : 'none' }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-slate-900 dark:text-white">
        <span className="text-3xl font-bold tracking-tighter">{progress}</span>
        {label && <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">{label}</span>}
      </div>
    </div>
  )
}

export default function StudentDashboard() {
  const { user } = useAuthStore()
  const [profile, setProfile] = useState(null)
  const { completedParts = {}, revisionQueue = [] } = useQuizStore()

  const nextActions = [
    Object.keys(completedParts).length === 0 
      ? { id: 1, title: 'Start a Practice Aptitude Test', tag: 'Priority', tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20', link: '/student/practice' }
      : { id: 1, title: 'Continue your Aptitude Training', tag: 'Priority', tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20', link: '/student/practice' },
    
    revisionQueue.length > 0
      ? { id: 2, title: `Review ${revisionQueue.length} incorrect answers`, tag: 'Priority', tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20', link: '/student/practice' }
      : { id: 2, title: 'Complete your first AI Mock Interview', tag: 'Important', tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20', link: '/student/practice' },

    { id: 3, title: 'Add 3 more skills to your profile', tag: 'Important', tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20', link: '/student/profile' },
    { id: 4, title: 'Explore top roles at Microsoft', tag: 'Nice to have', tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20', link: '/student/jobs' },
  ]

  const mockAllJobs = [
    { role: 'Software Engineer', company: 'Google', location: 'San Francisco, CA', match: '92%' },
    { role: 'Frontend Developer', company: 'Stripe', location: 'Remote', match: '88%' },
    { role: 'Full Stack Intern', company: 'Microsoft', location: 'Seattle, WA', match: '85%' },
    { role: 'Data Scientist', company: 'Amazon', location: 'Seattle, WA', match: '80%' },
    { role: 'Backend Developer', company: 'Netflix', location: 'Remote', match: '89%' }
  ];
  
  const matchedJobs = profile?.preferredRoles?.length > 0
    ? mockAllJobs.filter(j => profile.preferredRoles.includes(j.role)).slice(0,3)
    : mockAllJobs.slice(0, 3);

  const totalCorrect = Object.values(completedParts).reduce((acc, part) => acc + (part.score || 0), 0);
  const totalQuestions = Object.values(completedParts).reduce((acc, part) => acc + (part.total || 0), 0);
  const technicalScore = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 68;
  const communicationScore = profile ? 81 : 0;
  const problemSolvingScore = totalQuestions > 0 ? Math.min(100, technicalScore + 12) : 74;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        setProfile(getStudentProfile())
      } catch (err) {
        console.error(err)
      }
    }
    fetchProfile()
  }, [])

  const targetRole = profile?.targetRole || 'Software Engineer'
  const readinessScore = profile?.placementReadinessScore || 75

  const calculateProfileCompletion = () => {
    if (!profile) return { percentage: 0, missing: [] };
    const fields = [
      { key: 'firstName', label: 'Basic Info' },
      { key: 'lastName', label: 'Basic Info' },
      { key: 'phone', label: 'Contact' },
      { key: 'location', label: 'Location' },
      { key: 'targetRole', label: 'Career Goals' },
      { key: 'cgpa', label: 'Academic' },
      { key: 'graduationYear', label: 'Academic' }
    ];
    let completed = 0;
    const missing = [];
    fields.forEach(f => {
      if (profile[f.key]) completed++;
      else if (!missing.includes(f.label)) missing.push(f.label);
    });
    if (profile.skills && profile.skills.length > 0) completed++;
    else missing.push('Skills');

    const totalFields = fields.length + 1;
    const percentage = Math.round((completed / totalFields) * 100);
    return { percentage, missing };
  };

  const { percentage: completionPercentage, missing: missingFields } = calculateProfileCompletion();

  return (
    <div className="space-y-6 anim-fade-up bg-slate-50 dark:bg-[#070b14] min-h-screen text-slate-900 dark:text-slate-200 -m-4 md:-m-8 p-4 md:p-8 font-sans">
      
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-1">
            Dashboard
          </h1>
          <p className="text-sm text-slate-400">Welcome back, {(user?.email || '').split('@')[0]}!</p>
        </div>
        <div className="mt-4 md:mt-0 flex items-center space-x-4">
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 stagger">
        
        {/* Career Snapshot */}
        <div className="card-3d shimmer-on-hover gradient-border-top lg:col-span-8 bg-white dark:bg-[#0f1724] rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between group">
          {/* BG glow */}
          <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="flex items-center space-x-6 w-full md:w-auto mb-6 md:mb-0 relative z-10">
            <ProgressRing radius={50} stroke={6} progress={readinessScore} colorClass="text-cyan-500 dark:text-cyan-400" label="SCORE" glow />
            <div>
              <p className="text-[10px] text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold mb-1">Career Snapshot</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{targetRole}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center"><Briefcase className="w-4 h-4 mr-2 opacity-50"/>Entry Level • Actively Preparing</p>
            </div>
          </div>
          <div className="flex space-x-8 w-full md:w-auto border-t md:border-t-0 border-white/5 pt-6 md:pt-0 relative z-10">
             <div className="text-center">
               <span className="block text-2xl font-bold text-slate-900 dark:text-white tabular-nums">65%</span>
               <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 block">Interview Ready</span>
             </div>
             <div className="text-center">
               <span className="block text-2xl font-bold text-slate-900 dark:text-white tabular-nums">{completionPercentage}%</span>
               <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 block">Profile Complete</span>
             </div>
             <div className="text-center">
               <span className="block text-2xl font-bold text-slate-900 dark:text-white">Top 15%</span>
               <span className="text-[10px] uppercase tracking-wider text-slate-500 mt-1 block">Role Match Top</span>
             </div>
          </div>
        </div>

        {/* Profile Strength */}
        <div className="card-3d shimmer-on-hover lg:col-span-4 bg-white dark:bg-[#0f1724] rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-xl relative flex flex-col group overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center"><Target className="w-4 h-4 mr-2 text-purple-400" /> Profile Strength</h3>
            <Link to="/student/profile" className="text-xs text-slate-400 hover:text-slate-900 dark:text-white flex items-center transition-colors">Improve <ChevronRight className="w-3 h-3 ml-1" /></Link>
          </div>
          <div className="flex items-center space-x-6 mb-6 relative z-10">
            <ProgressRing radius={40} stroke={5} progress={completionPercentage} colorClass="text-purple-500" glow />
            <div className="space-y-3 flex-1">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 mr-2"/>Basic Info</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 mr-2"/>Skills</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center text-slate-600 dark:text-slate-300"><CheckCircle2 className="w-3 h-3 text-emerald-500 dark:text-emerald-400 mr-2"/>Career Goals</span>
              </div>
              {missingFields.length > 0 && (
                <div className="flex items-center justify-between text-xs mt-3 pt-3 border-t border-white/5">
                  <span className="text-rose-400 flex items-center font-medium"><AlertTriangle className="w-3 h-3 mr-2"/>Missing: {missingFields[0]}</span>
                  <Link to="/student/profile" className="text-purple-400 hover:text-purple-300 font-bold">+add</Link>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Next Best Actions */}
        <div className="card-3d shimmer-on-hover lg:col-span-8 bg-white dark:bg-[#0f1724] rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-xl group overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center"><Zap className="w-4 h-4 mr-2 text-amber-400" /> Next Best Actions</h3>
            <button className="text-xs text-slate-400 hover:text-slate-900 dark:text-white transition-colors">View all</button>
          </div>

          <div className="space-y-3">
            {nextActions.map((action) => (
              <div key={action.id} className="card-lift flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-100 dark:bg-slate-800/30 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-white/5 rounded-2xl transition-all group gap-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-900 flex items-center justify-center border border-slate-300 dark:border-white/5 group-hover:border-cyan-500/30 transition-colors shrink-0">
                    <Target className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                  </div>
                  <span className="text-sm text-slate-800 dark:text-slate-200 font-medium">{action.title}</span>
                </div>
                <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto">
                  <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${action.tagColor}`}>
                    {action.tag}
                  </span>
                  <Link to={action.link || "#"} className="px-5 py-2 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-xl transition-colors border border-cyan-500/20 shrink-0 flex items-center">
                    Do it <ChevronRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Matched Opportunities */}
        <div className="lg:col-span-4 bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-2xl flex flex-col">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center"><Briefcase className="w-4 h-4 mr-2 text-emerald-400" /> Matched Opportunities</h3>
             <Link to="/student/jobs" className="text-xs text-slate-400 hover:text-slate-900 dark:text-white transition-colors">All <ChevronRight className="inline w-3 h-3" /></Link>
          </div>
          
          <div className="space-y-2 flex-1">
             {matchedJobs.map((job, idx) => (
               <div key={idx} className="flex justify-between items-center p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/20 hover:bg-slate-200 dark:hover:bg-slate-800/60 border border-slate-200 dark:border-transparent hover:border-slate-300 dark:hover:border-white/5">
                 <div>
                   <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{job.role}</h4>
                   <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wide">{job.company} • {job.location}</p>
                 </div>
                 <div className="flex items-center text-emerald-400 font-bold text-sm">
                   {job.match} <ChevronRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300" />
                 </div>
               </div>
             ))}
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-white/5 shadow-2xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center"><Activity className="w-4 h-4 mr-2 text-blue-400" /> Interview Performance</h3>
          <Link to="/student/practice" className="px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white dark:text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 flex items-center hover:scale-105 active:scale-95">
            Practice now <ChevronRight className="w-3 h-3 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">
          <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-[#0a0f1a]/50 rounded-2xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
            <ProgressRing radius={40} stroke={5} progress={communicationScore} colorClass="text-blue-500 dark:text-blue-400" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-5 uppercase tracking-widest font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Communication</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-[#0a0f1a]/50 rounded-2xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
            <ProgressRing radius={40} stroke={5} progress={technicalScore} colorClass="text-purple-500 dark:text-purple-400" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-5 uppercase tracking-widest font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Technical</span>
          </div>
          <div className="flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-[#0a0f1a]/50 rounded-2xl border border-slate-200 dark:border-white/5 relative overflow-hidden group">
            <ProgressRing radius={40} stroke={5} progress={problemSolvingScore} colorClass="text-emerald-500 dark:text-emerald-400" />
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-5 uppercase tracking-widest font-bold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">Problem Solving</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-5 border-t border-white/5 mt-2 text-[11px] text-slate-500 font-medium">
          <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-2 text-slate-400" /> Last practiced {totalQuestions > 0 ? 'recently' : 'never'}</span>
          <span className="flex items-center"><Award className="w-3.5 h-3.5 mr-2 text-amber-500" /> {Object.keys(completedParts).length} sessions completed</span>
        </div>
      </div>

    </div>
  )
}
