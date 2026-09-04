import { useState } from 'react'
import { Search, Code, BookOpen, Database, Globe, Layers, BrainCircuit } from 'lucide-react'
import ProblemTracker from '../../components/practice/ProblemTracker'
import ProgressStats from '../../components/practice/ProgressStats'
import CSFundamentals from '../../components/practice/CSFundamentals'
import AptitudeDashboard from '../../components/practice/AptitudeDashboard'
import LanguagePracticeCard from '../../components/practice/LanguagePracticeCard'

const TABS = [
  { id: 'dsa', label: 'DSA Practice', icon: Code },
  { id: 'dbms', label: 'DBMS', icon: Database },
  { id: 'sql', label: 'SQL', icon: BookOpen },
  { id: 'cn', label: 'Computer Networks', icon: Globe },
  { id: 'oops', label: 'OOPs', icon: Layers },
  { id: 'aptitude', label: 'Aptitude', icon: BrainCircuit },
]

export default function PracticeDashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('dsa')

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header & Global Search */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-white">
            Practice & CS Fundamentals
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Your personal CS knowledge base and problem tracker.
          </p>
          
          <div className="relative w-full max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search problems or CS topics..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all dark:text-white"
            />
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-indigo-500 fill-current">
              <polygon points="0,100 100,0 100,100" />
           </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6 overflow-hidden">
          
          {/* Scrollable Tabs */}
          <div className="flex space-x-6 border-b border-gray-200 dark:border-gray-800 pb-px overflow-x-auto no-scrollbar scroll-smooth w-full">
            {TABS.map(tab => (
               <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-3 flex items-center whitespace-nowrap text-lg font-bold border-b-2 transition-colors ${
                    activeTab === tab.id 
                    ? 'border-indigo-500 text-indigo-600 dark:text-indigo-400' 
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
               >
                  <tab.icon className="w-5 h-5 mr-2" /> {tab.label}
               </button>
            ))}
          </div>

          <div className="min-h-[500px] pt-4">
            {activeTab === 'dsa' ? (
              <ProblemTracker searchQuery={searchQuery} />
            ) : activeTab === 'aptitude' ? (
              <AptitudeDashboard />
            ) : (
              <CSFundamentals activeSubject={activeTab} />
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <LanguagePracticeCard />
          <ProgressStats />
        </div>

      </div>
    </div>
  )
}
