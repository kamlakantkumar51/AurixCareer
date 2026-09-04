import { useState, useRef, useEffect } from 'react'
import { Sparkles, UploadCloud, Database, CheckCircle2, Target, TrendingUp, AlertTriangle, Briefcase, Zap, ChevronRight, Check, ChevronDown, Award, FileText, Settings, BarChart2 } from 'lucide-react'
import { analyzeResume } from '../../services/mockCareerApi'

export default function CareerNavigator() {
  const [file, setFile] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [analysisData, setAnalysisData] = useState(null)
  const [selectedRole, setSelectedRole] = useState('')
  const [showRoleDropdown, setShowRoleDropdown] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileUpload = async (e) => {
    const selectedFile = e.target.files[0]
    if (!selectedFile) return
    
    setFile(selectedFile)
    setIsProcessing(true)
    
    try {
      const data = await analyzeResume(selectedFile)
      setAnalysisData(data)
      // Set the highest matched role as default
      if (data.recommendedRoles && data.recommendedRoles.length > 0) {
        setSelectedRole(data.recommendedRoles[0].role)
      }
    } catch (error) {
      console.error("Failed to analyze resume", error)
    } finally {
      setIsProcessing(false)
    }
  }

  if (!analysisData) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0e0a16] text-slate-900 dark:text-slate-200 -m-4 md:-m-8 p-4 md:p-8 font-sans pb-16 animate-in fade-in duration-500 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center mb-2">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-3 border border-indigo-500/30">
              <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            AI Career Navigator
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Your personalized, multi-role career intelligence system.</p>
        </div>

        <div className="max-w-3xl w-full mx-auto mt-12 flex-1">
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-10 border border-slate-200 dark:border-indigo-900/30 shadow-xl text-center">
            <div className="w-24 h-24 bg-indigo-50 dark:bg-indigo-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
              {isProcessing ? (
                <Database className="w-10 h-10 text-indigo-500 animate-bounce" />
              ) : (
                <UploadCloud className="w-10 h-10 text-indigo-500" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              {isProcessing ? "Analyzing Resume..." : "Discover Your True Career Matches"}
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
              {isProcessing 
                ? "Our AI is extracting your skills, evaluating your projects, and dynamically discovering the best-fit roles for your unique profile."
                : "Upload your resume to instantly see which tech roles you are best suited for, identify skill gaps, and generate personalized roadmaps."
              }
            </p>
            
            <input type="file" ref={fileInputRef} className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} />
            
            <button 
              onClick={() => !isProcessing && fileInputRef.current?.click()}
              disabled={isProcessing}
              className={`px-8 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${
                isProcessing ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-105 active:scale-95 shadow-indigo-500/25'
              }`}
            >
              {isProcessing ? "Processing..." : "Upload Resume (PDF/DOCX)"}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Helper variables for the active role context
  const activeRoleData = analysisData.recommendedRoles.find(r => r.role === selectedRole) || analysisData.recommendedRoles[0];
  const activeRoadmap = analysisData.careerRoadmaps[selectedRole] || [];
  const activeGaps = analysisData.skillGaps[selectedRole] || [];
  const activeJobs = analysisData.jobMatches[selectedRole] || [];
  const activeInsight = analysisData.aiInsights[selectedRole] || "";
  const activeResumeSuggestions = analysisData.resumeHealth.suggestions[selectedRole] || [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0e0a16] text-slate-900 dark:text-slate-200 -m-4 md:-m-8 p-4 md:p-8 font-sans pb-16 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center mb-2">
            <div className="w-10 h-10 bg-indigo-500/20 rounded-xl flex items-center justify-center mr-3 border border-indigo-500/30">
              <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
            </div>
            AI Career Navigator
          </h1>
          <p className="text-slate-500 dark:text-slate-400">Your personalized career command center</p>
        </div>
        
        <div className="mt-4 md:mt-0 flex items-center bg-white dark:bg-[#140e21] border border-slate-200 dark:border-indigo-900/30 rounded-xl p-1.5 shadow-sm">
          <div className="px-3 py-1.5 flex items-center">
             <FileText className="w-4 h-4 text-slate-400 mr-2" />
             <span className="text-sm font-medium text-slate-600 dark:text-slate-300 truncate max-w-[150px]">{file?.name || 'resume.pdf'}</span>
          </div>
          <button 
             onClick={() => setAnalysisData(null)}
             className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-300 transition-colors ml-2"
          >
             Change
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto">
        
        {/* LEFT COLUMN: Overview & Role Switcher */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Overall Career Readiness */}
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm relative overflow-hidden">
             <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500 rounded-full blur-[80px] opacity-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
             <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <Award className="w-4 h-4 mr-2 text-indigo-500" /> Overall Career Readiness
             </h3>
             <div className="flex items-end space-x-3 mb-2">
                <span className="text-5xl font-black text-slate-900 dark:text-white">{analysisData.overallCareerReadiness}</span>
                <span className="text-lg font-medium text-slate-400 mb-1">/100</span>
             </div>
             <p className="text-xs text-slate-500 dark:text-slate-400">Based on technical skills, projects, and fundamentals.</p>
             
             <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 mt-5 overflow-hidden">
                <div className="bg-indigo-500 h-full rounded-full" style={{ width: `${analysisData.overallCareerReadiness}%` }}></div>
             </div>
          </div>

          {/* Role Switcher & Top Matches */}
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-4">
              <Target className="w-4 h-4 mr-2 text-emerald-500" /> Top Career Matches
            </h3>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Select a role below to dynamically update your dashboard context.</p>

            <div className="space-y-2">
               {analysisData.recommendedRoles.map((role, idx) => {
                 const isSelected = selectedRole === role.role;
                 return (
                   <div 
                     key={idx}
                     onClick={() => setSelectedRole(role.role)}
                     className={`p-3 rounded-xl cursor-pointer transition-all border flex justify-between items-center ${
                       isSelected 
                       ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-500/50 shadow-sm' 
                       : 'bg-slate-50 dark:bg-slate-800/30 border-transparent hover:bg-slate-100 dark:hover:bg-slate-800/70'
                     }`}
                   >
                     <div className="flex items-center space-x-3">
                       <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                         isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                       }`}>
                         {idx + 1}
                       </div>
                       <span className={`text-sm font-bold ${isSelected ? 'text-indigo-900 dark:text-indigo-100' : 'text-slate-700 dark:text-slate-300'}`}>
                         {role.role}
                       </span>
                     </div>
                     <span className={`text-sm font-bold ${
                        role.matchScore >= 80 ? 'text-emerald-500' : role.matchScore >= 70 ? 'text-amber-500' : 'text-slate-500'
                     }`}>
                       {role.matchScore}%
                     </span>
                   </div>
                 )
               })}
            </div>
          </div>

          {/* Resume Health Mini-widget */}
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-4">
              <FileText className="w-4 h-4 mr-2 text-cyan-500" /> Resume Health
            </h3>
            <div className="space-y-3">
               {Object.entries(analysisData.resumeHealth.metrics).slice(0,3).map(([key, value]) => (
                 <div key={key}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-600 dark:text-slate-400">{key}</span>
                      <span className="text-slate-900 dark:text-white">{value}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1">
                      <div className="bg-cyan-500 h-full rounded-full" style={{ width: `${value}%` }}></div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Dynamic Context Dashboard */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Active Target Banner */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-10">
               <Target className="w-48 h-48 translate-x-12 -translate-y-12" />
             </div>
             <div className="relative z-10">
               <span className="text-indigo-200 text-xs font-bold uppercase tracking-wider mb-1 block">Current Target Role</span>
               <h2 className="text-3xl font-black mb-2">{selectedRole}</h2>
               <div className="flex items-center space-x-4 text-sm font-medium">
                 <span className="flex items-center bg-white/10 px-3 py-1 rounded-full"><Zap className="w-4 h-4 mr-1.5 text-yellow-300"/> {activeRoleData.matchScore}% Match</span>
                 <span className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-300"/> {activeRoleData.confidence} Confidence</span>
               </div>
             </div>
          </div>

          {/* AI Insights & Reason */}
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm">
             <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-4">
                <Sparkles className="w-4 h-4 mr-2 text-purple-500" /> AI Career Insight
             </h3>
             <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
               {activeInsight}
             </p>
             <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Why this match?</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400">{activeRoleData.reasons}</p>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Dynamic Roadmap */}
            <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm flex flex-col">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <TrendingUp className="w-4 h-4 mr-2 text-indigo-500" /> Dynamic Roadmap
              </h3>
              <div className="relative flex-1 pl-4">
                <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                <div className="space-y-4">
                  {activeRoadmap.map((step, idx) => {
                    const isLast = idx === activeRoadmap.length - 1;
                    return (
                      <div key={idx} className="relative flex items-center group">
                        <div className={`absolute -left-6 w-3 h-3 rounded-full border-2 border-white dark:border-[#140e21] z-10 ${
                          isLast ? 'bg-indigo-500 w-4 h-4 -left-[26px] animate-pulse' : 'bg-slate-400 dark:bg-slate-600'
                        }`}></div>
                        <span className={`text-sm ml-2 ${isLast ? 'font-bold text-indigo-600 dark:text-indigo-400' : 'font-medium text-slate-600 dark:text-slate-400'}`}>
                          {step}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Skill Gaps */}
            <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm flex flex-col">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-6">
                <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" /> Role Skill Gaps
              </h3>
              <div className="space-y-4 flex-1">
                {activeGaps.map((gap, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span className="text-slate-700 dark:text-slate-300">{gap.skill}</span>
                      <span className="text-slate-500 dark:text-slate-400">{gap.score}%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 mb-1 overflow-hidden">
                      <div className={`h-full rounded-full ${gap.score > 75 ? 'bg-emerald-500' : gap.score > 40 ? 'bg-amber-500' : 'bg-rose-500'}`} style={{ width: `${gap.score}%` }}></div>
                    </div>
                    <span className={`text-[10px] font-medium ${gap.priority === 'High Priority' ? 'text-rose-500' : gap.priority === 'Needs Improvement' ? 'text-amber-500' : 'text-emerald-500'}`}>
                      {gap.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Job Matches */}
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-blue-500" /> Job Matches for {selectedRole}
              </h3>
              <button className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline">View All</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeJobs.map((job, idx) => (
                <div key={idx} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors bg-slate-50 dark:bg-slate-800/30">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-sm">{job.role}</h4>
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider">{job.company} • {job.location}</p>
                    </div>
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-lg border border-emerald-200 dark:border-emerald-800/50">
                      {job.match}
                    </span>
                  </div>
                  <div className="mt-3 text-xs">
                     <p className="text-slate-600 dark:text-slate-400 line-clamp-2"><span className="font-semibold text-slate-700 dark:text-slate-300">Why:</span> {job.why}</p>
                  </div>
                </div>
              ))}
              {activeJobs.length === 0 && (
                 <div className="col-span-2 text-center text-sm text-slate-500 py-4">No specific job matches found for this role yet.</div>
              )}
            </div>
          </div>

          {/* Resume Optimization */}
          <div className="bg-white dark:bg-[#140e21] rounded-3xl p-6 border border-slate-200 dark:border-indigo-900/30 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center mb-4">
              <Settings className="w-4 h-4 mr-2 text-slate-500" /> Optimize Resume for {selectedRole}
            </h3>
            <ul className="space-y-3">
              {activeResumeSuggestions.map((suggestion, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mr-3 shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-indigo-500" />
                  </div>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}
