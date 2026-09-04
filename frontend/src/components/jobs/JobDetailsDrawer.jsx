import React, { useEffect, useRef } from 'react'
import { X, CheckCircle, AlertTriangle, ExternalLink, Bookmark, Briefcase, MapPin, DollarSign, Clock, Building } from 'lucide-react'

export default function JobDetailsDrawer({ job, isOpen, onClose, onSave, onApply }) {
  const drawerRef = useRef(null)

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden' // Prevent bg scroll
    }
    return () => {
      window.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Close on click outside
  const handleBackdropClick = (e) => {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      onClose()
    }
  }

  if (!isOpen || !job) return null

  // Function to format match score color
  const getMatchColor = (score) => {
    if (!score) return 'text-gray-500 bg-gray-100 dark:bg-gray-800'
    if (score >= 90) return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/30'
    if (score >= 75) return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/30'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/30'
    return 'text-red-600 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
  }

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        ref={drawerRef}
        className="w-full max-w-2xl bg-white dark:bg-[#0f0f0f] h-full shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 custom-scrollbar relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white/80 dark:bg-[#0f0f0f]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800/60">
          <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => onSave(job)}
              className="p-2 text-gray-500 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-500 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-full transition-colors"
            >
              <Bookmark className={`w-5 h-5 ${job.isSaved ? 'fill-current text-yellow-500' : ''}`} />
            </button>
            <button 
              onClick={() => onApply(job)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center"
            >
              {job.isApplied ? 'Application Started' : 'Apply Now'} <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
          
          {/* Header Info */}
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h1>
                <div className="flex items-center text-lg text-gray-600 dark:text-gray-300 font-medium">
                  <Building className="w-5 h-5 mr-2 text-gray-400" />
                  {job.company}
                </div>
              </div>
              {job.companyLogo && (
                <img src={job.companyLogo} alt={`${job.company} logo`} className="w-16 h-16 object-contain rounded-xl border border-gray-100 dark:border-gray-800 p-1 bg-white" />
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                <MapPin className="w-4 h-4 mr-1.5 opacity-70" /> {job.location || job.workMode}
              </span>
              <span className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                <Briefcase className="w-4 h-4 mr-1.5 opacity-70" /> {job.experienceLevel || job.employmentType}
              </span>
              {(job.salaryMin || job.salaryMax) && (
                <span className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                  <DollarSign className="w-4 h-4 mr-1.5 opacity-70" /> 
                  {job.salaryMin ? `${job.salaryMin.toLocaleString()}` : ''}
                  {job.salaryMin && job.salaryMax ? ' - ' : ''}
                  {job.salaryMax ? `${job.salaryMax.toLocaleString()}` : ''} {job.currency}
                </span>
              )}
              <span className="flex items-center px-3 py-1.5 bg-gray-100 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium">
                <Clock className="w-4 h-4 mr-1.5 opacity-70" /> 
                {new Date(job.postedAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          <hr className="border-gray-100 dark:border-gray-800/60" />

          {/* Match Score Section */}
          {job.matchScore !== undefined && (
            <div className="bg-gray-50 dark:bg-[#151515] rounded-2xl p-6 border border-gray-100 dark:border-gray-800/60">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Why this matches you</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${getMatchColor(job.matchScore)}`}>
                  {job.matchScore}% Match
                </span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {job.matchReason}
              </p>
              
              {job.missingSkills && job.missingSkills.length > 0 && (
                <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-xl">
                  <h4 className="flex items-center text-sm font-semibold text-orange-800 dark:text-orange-400 mb-2">
                    <AlertTriangle className="w-4 h-4 mr-1.5" /> Skill Gap Identified
                  </h4>
                  <p className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                    You match most requirements, but you might need to brush up on:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.missingSkills.map(skill => (
                      <span key={skill} className="px-2.5 py-1 bg-white dark:bg-[#0f0f0f] border border-orange-200 dark:border-orange-800/50 text-orange-700 dark:text-orange-400 rounded-md text-xs font-medium shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Required Skills */}
          {job.skills && job.skills.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-100 dark:border-blue-900/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          <hr className="border-gray-100 dark:border-gray-800/60" />

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Job Description</h3>
            <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
              {job.description}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
