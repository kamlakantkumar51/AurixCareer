import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getJobs } from '../../services/mockData'
import { Briefcase, ChevronRight, Users } from 'lucide-react'

export default function GlobalApplications() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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
    fetchJobs()
  }, [])

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Applications</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Select a job posting to view and manage its applicant pipeline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {loading ? (
          <div className="col-span-full p-12 text-center text-blue-500">Loading jobs...</div>
        ) : jobs.length === 0 ? (
          <div className="col-span-full p-12 text-center flex flex-col items-center bg-white dark:bg-[#121826] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <Briefcase className="w-12 h-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No active jobs</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">You need to post a job before you can receive applications.</p>
            <Link to="/recruiter/jobs/create" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Create Job Posting
            </Link>
          </div>
        ) : (
          jobs.map(job => (
            <Link 
              key={job.id} 
              to={`/recruiter/jobs/${job.id}/applications`}
              className="bg-white dark:bg-[#121826] rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {job.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium mr-3 ${
                    job.status === 'ACTIVE' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    job.status === 'DRAFT' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400' :
                    'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {job.status}
                  </span>
                </div>
              </div>
              
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 dark:border-gray-800/50 pt-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span className="font-medium text-lg">{job._count?.applications || 0}</span>
                  <span className="text-sm ml-1 text-gray-500 dark:text-gray-400">Applications</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
