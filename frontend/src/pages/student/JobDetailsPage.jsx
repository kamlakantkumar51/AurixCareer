import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Briefcase, DollarSign, Clock, ExternalLink, Bookmark, CheckCircle, FileText, AlertCircle } from 'lucide-react'
import { fetchJobById, simulateResumeMatch } from '../../services/mockJobsApi'

export default function JobDetailsPage() {
  const { id } = useParams()
  const [job, setJob] = useState(null)
  const [loading, setLoading] = useState(true)
  const [matchData, setMatchData] = useState(null)
  const [analyzing, setAnalyzing] = useState(false)

  useEffect(() => {
    const loadJob = async () => {
      try {
        const data = await fetchJobById(id)
        setJob(data)
      } catch (err) {
        console.error("Job not found", err)
      } finally {
        setLoading(false)
      }
    }
    loadJob()
  }, [id])

  const handleAnalyzeResume = async () => {
    setAnalyzing(true)
    try {
      const data = await simulateResumeMatch(id)
      setMatchData(data)
    } finally {
      setAnalyzing(false)
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>
  }

  if (!job) {
    return <div className="text-center py-12">Job not found</div>
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <Link to="/student/jobs" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Jobs
      </Link>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-3xl">
              {job.logo}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{job.title}</h1>
              <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">{job.company}</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-xl flex items-center justify-center transition-colors">
              <Bookmark className="w-5 h-5 mr-2" /> Save Job
            </button>
            <button className="flex-1 md:flex-none px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl flex items-center justify-center transition-colors">
              Apply Now <ExternalLink className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100 dark:border-gray-800">
          <div className="flex flex-col">
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1"><MapPin className="w-4 h-4 mr-1" /> Location</span>
            <span className="font-semibold text-gray-900 dark:text-white">{job.location}</span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1"><Briefcase className="w-4 h-4 mr-1" /> Work Mode</span>
            <span className="font-semibold text-gray-900 dark:text-white">{job.workMode}</span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1"><DollarSign className="w-4 h-4 mr-1" /> Salary</span>
            <span className="font-semibold text-gray-900 dark:text-white">{job.salary}</span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1"><Clock className="w-4 h-4 mr-1" /> Posted</span>
            <span className="font-semibold text-gray-900 dark:text-white">{job.postedDate}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-3xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">About the Role</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              {job.description}
            </p>

            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Responsibilities</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-600 dark:text-gray-300">
              {job.responsibilities.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Required Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {job.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">Preferred Skills</h3>
            <div className="flex flex-wrap gap-2">
              {job.preferredSkills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800/50 text-gray-500 dark:text-gray-400 text-sm rounded-lg border border-gray-200 border-dashed dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Resume Matcher Module */}
          <div className="bg-gradient-to-b from-indigo-900 to-gray-900 rounded-3xl p-6 shadow-sm border border-indigo-800/50 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-indigo-400" />
                <h2 className="text-lg font-bold">Resume Analyzer</h2>
              </div>
              
              {!matchData && !analyzing ? (
                <>
                  <p className="text-sm text-indigo-200 mb-6">See how well your resume matches this job description before applying.</p>
                  <button 
                    onClick={handleAnalyzeResume}
                    className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-colors"
                  >
                    Analyze My Resume
                  </button>
                </>
              ) : analyzing ? (
                <div className="py-8 flex flex-col items-center justify-center space-y-4">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-400"></div>
                  <p className="text-sm text-indigo-200 animate-pulse">Running AI analysis against JD...</p>
                </div>
              ) : (
                <div className="space-y-6 animate-in fade-in duration-500">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-200">Match Score</span>
                    <div className="flex items-end space-x-1">
                      <span className="text-3xl font-bold text-white">{matchData.overallScore}</span>
                      <span className="text-sm text-indigo-300 pb-1">/ 100</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-indigo-950 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${matchData.overallScore >= 80 ? 'bg-green-400' : matchData.overallScore >= 60 ? 'bg-yellow-400' : 'bg-red-400'}`} 
                      style={{ width: `${matchData.overallScore}%` }}
                    ></div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2 flex items-center"><CheckCircle className="w-3 h-3 mr-1 text-green-400" /> Matches</h4>
                      <div className="flex flex-wrap gap-2">
                        {matchData.matchingSkills.map((s, i) => <span key={i} className="text-xs px-2 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/30">{s}</span>)}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2 flex items-center"><AlertCircle className="w-3 h-3 mr-1 text-red-400" /> Missing</h4>
                      <div className="flex flex-wrap gap-2">
                        {matchData.missingSkills.map((s, i) => <span key={i} className="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded border border-red-500/30">{s}</span>)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-indigo-800/50">
                    <p className="text-sm text-indigo-100"><strong className="text-indigo-300">Tip:</strong> {matchData.atsSuggestions}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}
