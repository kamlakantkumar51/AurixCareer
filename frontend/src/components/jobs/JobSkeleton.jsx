import React from 'react'

export default function JobSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 relative overflow-hidden animate-pulse">
      {/* Shimmer Effect */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent shimmer-animation z-10" />
      
      <div className="flex flex-col md:flex-row gap-6">
        
        <div className="w-16 h-16 bg-gray-200 dark:bg-gray-800 rounded-2xl flex-shrink-0" />
        
        <div className="flex-1 space-y-4">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <div className="space-y-2 w-full max-w-sm">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4" />
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-1/2" />
            </div>
            <div className="w-24 h-8 bg-gray-200 dark:bg-gray-800 rounded-lg flex-shrink-0" />
          </div>

          <div className="flex flex-wrap gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-20 h-6 bg-gray-100 dark:bg-gray-800/50 rounded-md" />
            ))}
          </div>

          <div className="space-y-2">
            <div className="h-3 bg-gray-100 dark:bg-gray-800/50 rounded w-full" />
            <div className="h-3 bg-gray-100 dark:bg-gray-800/50 rounded w-5/6" />
          </div>
        </div>

      </div>
    </div>
  )
}
