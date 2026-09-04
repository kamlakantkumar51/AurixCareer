import { Building } from 'lucide-react'

export default function JobCard({ job, onClick, onSave, onApply }) {
  
  // Format salary
  const formatSalary = () => {
    if (!job.salaryMin && !job.salaryMax) return 'Not disclosed'
    const currency = job.currency === 'INR' ? 'INR' : job.currency || '$'
    if (job.salaryMin && job.salaryMax) {
      return `${currency} ${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}`
    }
    return `${currency} ${(job.salaryMin || job.salaryMax).toLocaleString()}`
  }

  // Format posted time (mock for UI: "3 hours ago" or "2 days ago")
  const getPostedTime = () => {
    const posted = new Date(job.postedAt || Date.now())
    const diff = Math.floor((Date.now() - posted.getTime()) / (1000 * 60 * 60))
    if (diff < 24) return diff <= 0 ? 'Just now' : `${diff} hours ago`
    return `${Math.floor(diff / 24)} days ago`
  }

  // Mock deadline for UI
  const getDeadline = () => {
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 5)
    return `Registrations open till ${deadline.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })} - 09:30 AM`
  }

  return (
    <div 
      className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/60 rounded-xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col gap-4"
      onClick={() => onClick(job)}
    >
      {/* Top Header Row */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          {/* Logo */}
          <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-800 flex-shrink-0 flex items-center justify-center border border-gray-200 dark:border-gray-700">
            {job.companyLogo ? (
              <img src={job.companyLogo} alt={job.company} className="w-8 h-8 object-contain" />
            ) : (
              <Building className="w-6 h-6 text-gray-400" />
            )}
          </div>
          
          {/* Title & Company */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                {job.title}
              </h3>
              <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-[10px] font-bold rounded-full whitespace-nowrap">
                +1 more
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{job.company}</p>
          </div>
        </div>

        {/* Status Badges */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 font-medium whitespace-nowrap">
            {getPostedTime()}
          </span>
          <span className="px-3 py-1 bg-green-100/50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-bold rounded-full border border-green-200/50 dark:border-green-800/30">
            Eligible
          </span>
        </div>
      </div>

      <div className="h-px w-full bg-gray-100 dark:bg-gray-800 my-1"></div>

      {/* Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-gray-500 font-medium">Job type</span>
          <span className="text-sm text-gray-800 dark:text-gray-200 font-medium truncate">
            {job.employmentType || 'Full-Time'}
          </span>
        </div>
        
        {job.salaryMin || job.salaryMax ? (
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 font-medium">CTC</span>
            <span className="text-sm text-gray-800 dark:text-gray-200 font-medium truncate">
              {formatSalary()}
            </span>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-500 font-medium">Industry</span>
            <span className="text-sm text-gray-800 dark:text-gray-200 font-medium truncate">
              IT Product & Services
            </span>
          </div>
        )}
        
        <div className="flex flex-col gap-1 md:col-span-2">
          <span className="text-xs text-gray-500 font-medium">Location</span>
          <span className="text-sm text-gray-800 dark:text-gray-200 font-medium truncate">
            {job.location || job.workMode}
          </span>
        </div>
      </div>

      {/* Skills (if provided, mimicking the tags under the BA & Operations role in screenshot) */}
      {job.skills && job.skills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {job.skills.slice(0, 4).map((skill, idx) => (
            <span key={idx} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] font-medium rounded">
              {skill}
            </span>
          ))}
        </div>
      )}

      {/* Footer Banner & Button */}
      <div className="flex justify-between items-center mt-2">
        <div className="bg-[#e8f5e9] dark:bg-green-900/10 border border-[#c8e6c9] dark:border-green-800/30 text-[#2e7d32] dark:text-green-400 px-3 py-1.5 rounded text-xs font-bold">
          {getDeadline()}
        </div>
        
        <button 
          onClick={(e) => { e.stopPropagation(); onApply(job); }}
          className={`px-5 py-2 text-sm font-bold rounded-lg transition-all border ${
            job.isApplied 
              ? 'bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-900/20 dark:border-purple-800' 
              : 'bg-white text-purple-600 border-purple-300 hover:bg-purple-50 dark:bg-transparent dark:text-purple-400 dark:border-purple-600/50 dark:hover:bg-purple-900/20'
          }`}
        >
          {job.isApplied ? 'Applied' : 'Apply Now'}
        </button>
      </div>
    </div>
  )
}
