import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getJobs, deleteJob } from '../../services/mockData'
import { 
  PlusCircle, 
  Search, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users,
  MoreVertical,
  Eye,
  Edit2,
  Trash2,
  Briefcase
} from 'lucide-react'

export default function RecruiterJobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('ALL') // ALL, ACTIVE, DRAFT, CLOSED
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setJobs(getJobs())
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const filteredJobs = jobs.filter(job => {
    if (activeTab !== 'ALL' && job.status !== activeTab) return false
    if (searchTerm && !job.title.toLowerCase().includes(searchTerm.toLowerCase())) return false
    return true
  })

  const handleDelete = async (jobId) => {
    if (window.confirm('Are you sure you want to delete this job posting? This action cannot be undone.')) {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        setJobs(deleteJob(jobId))
      } catch (err) {
        console.error('Failed to delete job', err)
        alert('Failed to delete job. Please try again.')
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 anim-fade-up">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Postings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage your job and internship postings.</p>
        </div>
        <Link
          to="/recruiter/jobs/create"
          className="w-full sm:w-auto flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-500 hover:to-indigo-500 font-medium transition-all shadow-sm btn-glow-blue card-press"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Create Job
        </Link>
      </div>

      <div className="bg-white dark:bg-[#121826] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
        {/* Tabs and Search */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex space-x-1 sm:space-x-2 overflow-x-auto pb-2 sm:pb-0 hide-scrollbar w-full sm:w-auto">
            {['ALL', 'ACTIVE', 'DRAFT', 'CLOSED'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors flex-1 sm:flex-none ${
                  activeTab === tab 
                    ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800/50'
                }`}
              >
                {tab.charAt(0) + tab.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
          <div className="relative w-full sm:w-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-full sm:w-64 transition-all"
            />
          </div>
        </div>

        {/* Job List */}
        <div className="overflow-hidden">
          {loading ? (
            <div className="p-8 text-center text-gray-500">Loading jobs...</div>
          ) : filteredJobs.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800/50 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No postings found</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm max-w-sm">
                {searchTerm ? 'No jobs match your search criteria.' : "You haven't posted any jobs yet. Create your first job posting to start hiring."}
              </p>
              {!searchTerm && (
                <Link
                  to="/recruiter/jobs/create"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
                >
                  Create Your First Job
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 p-4 md:p-6 bg-gray-50/50 dark:bg-transparent stagger">
              {filteredJobs.map(job => (
                <div key={job.id} className="card-lift shimmer-on-hover gradient-border-top flex flex-col lg:flex-row lg:items-center justify-between p-4 sm:p-5 rounded-2xl border border-gray-200 dark:border-gray-800/60 hover:border-indigo-200/50 dark:hover:border-indigo-700/30 bg-white dark:bg-[#0f1724] shadow-sm transition-all duration-300 gap-4 group overflow-hidden">
                  
                  {/* Left: Job Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                      <Link to={`/recruiter/jobs/${job.id}`} className="text-lg font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 truncate max-w-full">
                        {job.title}
                      </Link>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-bold shrink-0 ${
                        job.status === 'ACTIVE' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-900/50' :
                        job.status === 'DRAFT' ? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 border border-gray-200 dark:border-gray-700' :
                        'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-900/50'
                      }`}>
                        {job.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-800"><MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 text-gray-400" /> {job.location || job.mode}</span>
                      <span className="flex items-center bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-800"><Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 text-gray-400" /> {job.type.replace('_', ' ')}</span>
                      {(job.salaryMin || job.salaryMax) && (
                        <span className="flex items-center bg-gray-50 dark:bg-gray-800/50 px-2 py-1 rounded-md border border-gray-100 dark:border-gray-800">
                          <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 text-gray-400" /> 
                          {job.salaryMin && job.salaryMax ? `${job.salaryMin} - ${job.salaryMax}` : `${job.salaryMin || job.salaryMax}`}
                        </span>
                      )}
                      <span className="flex items-center text-xs text-gray-400 dark:text-gray-500 ml-auto sm:ml-0 w-full sm:w-auto pt-1 sm:pt-0">
                        Posted {new Date(job.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Stats */}
                  <div className="grid grid-cols-3 sm:flex flex-row items-center justify-between sm:justify-start gap-4 sm:gap-6 py-4 lg:py-0 border-y lg:border-y-0 lg:border-l border-gray-100 dark:border-gray-800 lg:pl-8 lg:px-4">
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">Total</span>
                      <Link to={`/recruiter/jobs/${job.id}/applications`} className="flex items-center text-base sm:text-lg font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-lg transition-colors">
                        <Users className="w-4 h-4 mr-1.5" />
                        {job._count?.applications || 0}
                      </Link>
                    </div>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">Shortlist</span>
                      <span className="text-base sm:text-lg font-bold text-emerald-600 dark:text-emerald-400">
                        {job.applications?.filter(a => a.status === 'SHORTLISTED' || a.status === 'INTERVIEW').length || 0}
                      </span>
                    </div>
                    <div className="w-px h-8 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] sm:text-xs font-bold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wider">Hired</span>
                      <span className="text-base sm:text-lg font-bold text-purple-600 dark:text-purple-400">
                        {job.applications?.filter(a => a.status === 'HIRED').length || 0}
                      </span>
                    </div>
                  </div>

                  {/* Right: Actions */}
                  <div className="flex items-center justify-end gap-2 lg:pl-4 pt-2 sm:pt-0">
                    <Link to={`/recruiter/jobs/${job.id}/applications`} className="card-press flex-1 sm:flex-none flex items-center justify-center p-2.5 sm:p-2 text-indigo-600 dark:text-indigo-400 hover:text-white hover:bg-indigo-600 dark:hover:bg-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl transition-all border border-indigo-100 dark:border-indigo-800/50 hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]" title="View Applications">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                    <Link to={`/recruiter/jobs/${job.id}/edit`} className="card-press flex-1 sm:flex-none flex items-center justify-center p-2.5 sm:p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-xl transition-all border border-gray-100 dark:border-gray-800/50" title="Edit Job">
                      <Edit2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>
                    <button onClick={() => handleDelete(job.id)} className="card-press flex-1 sm:flex-none flex items-center justify-center p-2.5 sm:p-2 text-red-500 dark:text-red-400 hover:text-white hover:bg-red-600 dark:hover:bg-red-700 bg-red-50 dark:bg-red-900/20 rounded-xl transition-all border border-red-100 dark:border-red-800/50 hover:shadow-[0_0_12px_rgba(239,68,68,0.4)] btn-glow-red" title="Delete Job">
                      <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
