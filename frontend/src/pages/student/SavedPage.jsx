import { useState, useEffect } from 'react'
import { Bookmark, Briefcase } from 'lucide-react'
import JobCard from '../../components/jobs/JobCard'
import { fetchSavedJobs } from '../../services/mockJobsApi'

export default function SavedPage() {
  const [savedJobs, setSavedJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadSavedItems = async () => {
      setLoading(true)
      try {
        const jobs = await fetchSavedJobs()
        setSavedJobs(jobs)
      } catch (err) {
        console.error("Failed to load saved items", err)
      } finally {
        setLoading(false)
      }
    }
    loadSavedItems()
  }, [])

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex items-center space-x-3 mb-8">
        <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
          <Bookmark className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Saved Items
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            All your bookmarked jobs and resources in one place.
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm min-h-[500px]">
        <h2 className="text-xl font-bold mb-6 flex items-center text-gray-900 dark:text-white">
          <Briefcase className="w-5 h-5 mr-2 text-indigo-500" /> Saved Jobs
        </h2>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2].map(i => (
              <div key={i} className="h-48 bg-gray-100 dark:bg-gray-800 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        ) : savedJobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {savedJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Bookmark className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No saved jobs yet</h3>
            <p className="text-gray-500 dark:text-gray-400">
              When you see a job you like, click the bookmark icon to save it for later.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
