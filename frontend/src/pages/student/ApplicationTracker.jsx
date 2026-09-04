import { useState, useEffect } from 'react'
import { MoreHorizontal, Calendar, ArrowRight } from 'lucide-react'
import { fetchApplications } from '../../services/mockJobsApi'
import { Link } from 'react-router-dom'

const COLUMNS = [
  { id: 'Saved', title: 'Saved', color: 'bg-gray-100 dark:bg-gray-800' },
  { id: 'Applied', title: 'Applied', color: 'bg-blue-50 dark:bg-blue-900/20' },
  { id: 'Screening', title: 'Screening', color: 'bg-purple-50 dark:bg-purple-900/20' },
  { id: 'Interview', title: 'Interview', color: 'bg-yellow-50 dark:bg-yellow-900/20' },
  { id: 'Offer', title: 'Offer', color: 'bg-green-50 dark:bg-green-900/20' },
  { id: 'Rejected', title: 'Rejected', color: 'bg-red-50 dark:bg-red-900/20' }
]

export default function ApplicationTracker() {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchApplications()
        setApplications(data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  // Drag and drop is simplified for this demo to click-to-move
  const moveApp = (id, newStatus) => {
    setApplications(apps => apps.map(app => app.id === id ? { ...app, status: newStatus } : app))
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white">
            Application Tracker
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Manage your job search pipeline and track your progress.
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 gap-6 snap-x">
        {COLUMNS.map(col => (
          <div key={col.id} className="snap-start flex-shrink-0 w-80 flex flex-col">
            <div className="flex items-center justify-between mb-4 px-1">
              <h3 className="font-bold text-gray-700 dark:text-gray-300">{col.title}</h3>
              <span className="text-xs font-medium bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full">
                {applications.filter(a => a.status === col.id).length}
              </span>
            </div>
            
            <div className={`flex-1 rounded-2xl p-3 min-h-[500px] border border-gray-200 dark:border-gray-800 shadow-inner ${col.color}`}>
              {loading ? (
                <div className="space-y-3">
                  {[1, 2].map(i => (
                    <div key={i} className="bg-white dark:bg-gray-900 h-28 rounded-xl animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {applications.filter(a => a.status === col.id).map(app => (
                    <div key={app.id} className="bg-white dark:bg-gray-950 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 group hover:border-blue-300 dark:hover:border-blue-700 transition-all cursor-grab relative">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                           <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-sm">
                             {app.logo}
                           </div>
                           <div>
                             <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight"><Link to={`/student/jobs/${app.id}`} className="hover:underline">{app.title}</Link></h4>
                             <p className="text-xs text-gray-500 dark:text-gray-400">{app.company}</p>
                           </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="flex items-center text-[10px] text-gray-400 dark:text-gray-500 mb-3 mt-3">
                        <Calendar className="w-3 h-3 mr-1" /> Updated {app.postedDate}
                      </div>

                      {/* Mock move actions for Kanban */}
                      <div className="absolute inset-0 bg-gray-900/90 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition-opacity p-2 backdrop-blur-sm z-10 pointer-events-none group-hover:pointer-events-auto">
                         <div className="flex flex-col space-y-2 w-full px-2">
                           <p className="text-xs text-center text-white font-medium mb-1">Move to...</p>
                           <div className="grid grid-cols-2 gap-2">
                             {COLUMNS.filter(c => c.id !== app.status).slice(0, 4).map(c => (
                               <button 
                                 key={c.id} 
                                 onClick={() => moveApp(app.id, c.id)}
                                 className="text-[10px] bg-gray-800 hover:bg-gray-700 text-white py-1.5 px-2 rounded flex justify-between items-center transition-colors"
                               >
                                 {c.title} <ArrowRight className="w-3 h-3" />
                               </button>
                             ))}
                           </div>
                         </div>
                      </div>

                    </div>
                  ))}
                  {applications.filter(a => a.status === col.id).length === 0 && !loading && (
                     <div className="h-full flex items-center justify-center pt-8">
                       <span className="text-xs text-gray-400 dark:text-gray-500 font-medium">Drop here</span>
                     </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
