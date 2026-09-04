import React from 'react'

const Logo = ({ className = "h-8", showText = true, showTagline = false, forceWhite = false }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="flex items-center space-x-2 h-full">
        <svg viewBox="0 0 100 100" className="h-full aspect-square" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <mask id="arrow-cutout">
              <rect width="100" height="100" fill="white" />
              <polygon points="18,86 80,50 85,55 95,25 65,30 70,40 12,74" fill="black" stroke="black" strokeWidth="6" strokeLinejoin="round" />
            </mask>
          </defs>
          <polygon points="45,15 55,15 85,90 65,90 50,50 35,90 15,90" className={forceWhite ? "text-white" : "text-gray-900 dark:text-white"} fill="currentColor" mask="url(#arrow-cutout)" />
          <polygon points="18,86 80,50 85,55 95,25 65,30 70,40 12,74" fill="#f59e0b" />
        </svg>
        
        {showText && (
          <div className="flex flex-col justify-center">
            <span className={`text-2xl font-bold tracking-tight leading-none font-sans ${forceWhite ? "text-white" : "text-gray-900 dark:text-white"}`}>
              Aurix<span className="text-[#f59e0b]">Career</span>
            </span>
            {showTagline && (
              <span className="text-[0.55rem] tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-1 uppercase font-semibold">
                Build Skills. Build Future.
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Logo
