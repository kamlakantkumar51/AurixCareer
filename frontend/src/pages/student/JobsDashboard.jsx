import React, { useState, useEffect, useMemo } from 'react'
import { Briefcase, Tag } from 'lucide-react'
import JobCard from '../../components/jobs/JobCard'
import JobSkeleton from '../../components/jobs/JobSkeleton'
import JobDetailsDrawer from '../../components/jobs/JobDetailsDrawer'
import { fetchRecommendedJobs, fetchJobSearch, toggleSaveJob, applyForJob, getSavedJobs, getAppliedJobs } from '../../services/jobsApi'

export default function JobsDashboard() {
  // Data State
  const [jobs, setJobs] = useState([])
  const [savedJobIds, setSavedJobIds] = useState(new Set())
  const [appliedJobIds, setAppliedJobIds] = useState(new Set())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // UI State
  const [activeTab, setActiveTab] = useState('Opportunities') // Opportunities, Applications, Offers
  const [isEligible, setIsEligible] = useState(true)
  const [isNonEligible, setIsNonEligible] = useState(false)
  const [selectedJob, setSelectedJob] = useState(null)

  // Popular Tags (Static mock data for UI)
  const popularTags = [
    "It Product & Services", "Communications", "Excel", 
    "Google Sheets", "Operations Management", 
    "This Role Is Designed To Provide...", "Full Time", "Development"
  ]

  // Initial Load
  useEffect(() => {
    const loadUserJobData = async () => {
      try {
        const [saved, applied] = await Promise.all([getSavedJobs(), getAppliedJobs()]);
        setSavedJobIds(new Set(saved.data || []))
        setAppliedJobIds(new Set(applied.data || []))
      } catch (e) {
        console.error("Failed to load user job data", e)
      }
    }
    loadUserJobData()
  }, [])

  // Main Data Fetching Logic
  useEffect(() => {
    const loadJobs = async () => {
      setLoading(true)
      setError(null)
      try {
        let fetchedJobs = [];
        if (activeTab === 'Opportunities') {
          const res = await fetchRecommendedJobs();
          fetchedJobs = res.data || [];
        } else if (activeTab === 'Applications') {
          const res = await fetchRecommendedJobs(); // Fallback for demo
          fetchedJobs = (res.data || []).filter(j => appliedJobIds.has(j.id));
        } else {
          fetchedJobs = [];
        }
        setJobs(fetchedJobs)
      } catch (err) {
        console.error("Failed to load jobs", err)
        setError("Unable to load live opportunities.")
      } finally {
        setLoading(false)
      }
    }
    
    loadJobs()
  }, [activeTab, appliedJobIds])

  // Process Jobs for display
  const processedJobs = useMemo(() => {
    let result = jobs.map(j => ({
      ...j,
      isSaved: savedJobIds.has(j.id),
      isApplied: appliedJobIds.has(j.id)
    }))
    
    // Sort
    result.sort((a, b) => new Date(b.createdAt || b.postedAt) - new Date(a.createdAt || a.postedAt))
    
    return result
  }, [jobs, savedJobIds, appliedJobIds])

  // Handlers
  const handleSave = async (job) => {
    try {
      await toggleSaveJob(job);
      setSavedJobIds(prev => {
        const next = new Set(prev)
        if (next.has(job.id)) next.delete(job.id)
        else next.add(job.id)
        return next
      })
    } catch (e) {
      console.error("Failed to save job", e)
    }
  }

  const handleApply = async (job) => {
    try {
      if (!appliedJobIds.has(job.id)) {
        await applyForJob(job).catch(console.error);
        setAppliedJobIds(prev => {
          const next = new Set(prev)
          next.add(job.id)
          return next
        })
      }
    } finally {
      if (job.sourceUrl && job.sourceUrl !== '#') {
        window.open(job.sourceUrl, '_blank')
      }
    }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center space-x-3 mt-4 mb-8">
        <div className="p-2 border-2 border-purple-600 rounded-lg">
          <Briefcase className="w-8 h-8 text-purple-600" />
        </div>
        <h1 className="text-4xl font-normal text-slate-900 dark:text-white tracking-tight">
          Jobs
        </h1>
      </div>

      {/* Main Layout Grid */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Column (Main Content) */}
        <div className="flex-1 w-full flex flex-col min-w-0">
          
          {/* Tabs & Filters Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 dark:border-gray-800 mb-6 gap-4">
            
            {/* Tabs */}
            <div className="flex space-x-8">
              {['Opportunities', 'Applications', 'Offers'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-base font-bold transition-all relative ${
                    activeTab === tab 
                      ? 'text-purple-600 dark:text-purple-400' 
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600 dark:bg-purple-400" />
                  )}
                </button>
              ))}
            </div>

            {/* Checkbox Filters */}
            <div className="flex items-center space-x-6 pb-3">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={isEligible}
                  onChange={(e) => setIsEligible(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900">Eligible</span>
              </label>
              
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input 
                  type="checkbox" 
                  checked={isNonEligible}
                  onChange={(e) => setIsNonEligible(e.target.checked)}
                  className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-600 cursor-pointer"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900">Non Eligible</span>
              </label>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {!error && loading ? (
              [1, 2, 3].map(i => <JobSkeleton key={i} />)
            ) : processedJobs.length > 0 ? (
              processedJobs.map(job => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onClick={setSelectedJob}
                  onSave={handleSave}
                  onApply={handleApply}
                />
              ))
            ) : (
              <div className="text-center py-16 bg-white dark:bg-[#121212] rounded-xl border border-gray-200 dark:border-gray-800">
                <p className="text-gray-500 dark:text-gray-400">No jobs found in this category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-6">
          
          {/* Popular Tags Box */}
          <div className="bg-white dark:bg-[#121212] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="w-4 h-4 text-purple-600" />
              <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
                POPULAR TAGS
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {popularTags.map(tag => (
                <button 
                  key={tag} 
                  className="px-4 py-1.5 rounded-full border border-purple-400 text-purple-600 dark:border-purple-500/50 dark:text-purple-400 text-sm font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors bg-white dark:bg-transparent"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Opportunities Stats Box */}
          <div className="bg-white dark:bg-[#121212] rounded-xl border border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-xl font-extrabold text-purple-900 dark:text-purple-400">Opportunities</h2>
              <span className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-xs font-bold text-blue-600 dark:text-blue-400">
                47
              </span>
            </div>
            
            <p className="text-xs text-gray-500 font-medium mb-6">
              Opportunities you are / were eligible for
            </p>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#f3e8ff] dark:bg-purple-900/30 p-3 rounded-lg flex flex-col justify-between h-24">
                <span className="text-3xl font-black text-purple-900 dark:text-purple-300">32</span>
                <span className="text-xs font-bold text-purple-800 dark:text-purple-400">Jobs</span>
              </div>
              
              <div className="bg-[#ffedd5] dark:bg-orange-900/20 p-3 rounded-lg flex flex-col justify-between h-24">
                <span className="text-3xl font-black text-orange-600 dark:text-orange-400">15</span>
                <span className="text-xs font-bold text-orange-700 dark:text-orange-500 leading-tight">Job + Internship</span>
              </div>
              
              <div className="bg-[#e0f2fe] dark:bg-sky-900/20 p-3 rounded-lg flex flex-col justify-between h-24">
                <span className="text-3xl font-black text-sky-600 dark:text-sky-400">0</span>
                <span className="text-xs font-bold text-sky-700 dark:text-sky-500">Internships</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Detail Drawer */}
      <JobDetailsDrawer 
        job={selectedJob} 
        isOpen={!!selectedJob} 
        onClose={() => setSelectedJob(null)}
        onSave={handleSave}
        onApply={handleApply}
      />
    </div>
  )
}
