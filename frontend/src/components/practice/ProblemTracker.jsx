import { useState, useEffect } from 'react'
import { Plus, CheckCircle, Clock, ExternalLink, Filter, Edit3, Bookmark, X } from 'lucide-react'
import { fetchProblems } from '../../services/mockPracticeApi'

const STATUSES = ['All', 'Not Started', 'Solved', 'Revisit', 'Mastered']

export default function ProblemTracker({ searchQuery }) {
  const [problems, setProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTopic, setActiveTopic] = useState('All')
  
  // Modal State
  const [selectedProblemForNote, setSelectedProblemForNote] = useState(null)
  const [noteText, setNoteText] = useState('')
  const [insightText, setInsightText] = useState('')
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newProblem, setNewProblem] = useState({ name: '', link: '', difficulty: 'Medium', topic: '' })
  const [tempStatus, setTempStatus] = useState('')

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const data = await fetchProblems()
      // Initialize properties
      const enhancedData = data.map(p => ({ ...p, isBookmarked: false, note: '', insight: '' }))
      setProblems(enhancedData)
      setLoading(false)
    }
    loadData()
  }, [])

  const filteredProblems = problems.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTopic = activeTopic === 'All' || p.topic === activeTopic
    return matchesSearch && matchesTopic
  })

  const toggleStatus = (id) => {
    setProblems(problems.map(prob => 
      prob.id === id 
        ? { ...prob, status: prob.status === 'Solved' ? 'Not Started' : 'Solved' } 
        : prob
    ))
  }

  const toggleBookmark = (id) => {
    setProblems(problems.map(prob => 
      prob.id === id ? { ...prob, isBookmarked: !prob.isBookmarked } : prob
    ))
  }

  const openNoteModal = (problem) => {
    setSelectedProblemForNote(problem)
    setNoteText(problem.note || '')
    setInsightText(problem.insight || '')
    setTempStatus(problem.status || 'Not Started')
  }

  const saveNote = () => {
    if (!selectedProblemForNote) return
    setProblems(problems.map(prob => 
      prob.id === selectedProblemForNote.id 
        ? { ...prob, note: noteText, insight: insightText, status: tempStatus } 
        : prob
    ))
    setSelectedProblemForNote(null)
    setNoteText('')
    setInsightText('')
  }

  const handleAddProblem = (e) => {
    e.preventDefault();
    if (!newProblem.name || !newProblem.link) return;
    
    const added = {
      id: Date.now().toString(),
      name: newProblem.name,
      link: newProblem.link,
      difficulty: newProblem.difficulty,
      topic: newProblem.topic || 'General',
      status: 'Not Started',
      isBookmarked: false,
      note: '',
      insight: ''
    };
    
    setProblems([added, ...problems]);
    setIsAddModalOpen(false);
    setNewProblem({ name: '', link: '', difficulty: 'Medium', topic: '' });
  }

  const getDifficultyStyle = (diff) => {
    switch(diff) {
      case 'Easy': return 'text-green-500 border-green-500/30 bg-green-500/5'
      case 'Medium': return 'text-orange-500 border-orange-500/30 bg-orange-500/5'
      case 'Hard': return 'text-red-500 border-red-500/30 bg-red-500/5'
      default: return 'text-gray-500 border-gray-500/30 bg-gray-500/5'
    }
  }

  const DUMMY_COMPANIES = ['Amazon', 'Google', 'Microsoft']

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Problem Tracker</h2>
        <button 
          onClick={() => setIsAddModalOpen(true)}
          className="flex items-center px-4 py-2 bg-[#7b32d9] hover:bg-[#8b42e9] text-white text-sm font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(123,50,217,0.3)] hover:shadow-[0_0_25px_rgba(123,50,217,0.5)] transform hover:-translate-y-0.5 hover:scale-105 active:scale-95 group"
        >
          <Plus className="w-4 h-4 mr-1 group-hover:rotate-90 transition-transform duration-300" /> Add Problem
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Filters */}
        <div className="flex space-x-2 overflow-x-auto pb-2 no-scrollbar items-center w-full">
          
          <div className="flex items-center text-sm font-medium text-gray-500 mr-2 flex-shrink-0"><Filter className="w-4 h-4 mr-1"/> Pattern:</div>
          <select 
            value={activeTopic}
            onChange={(e) => setActiveTopic(e.target.value)}
            className="bg-white border border-gray-200 text-gray-600 rounded-md text-xs px-3 py-1.5 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-400 outline-none focus:ring-1 focus:ring-indigo-500"
          >
            <option value="All">All Patterns</option>
            {[...new Set(problems.map(p => p.topic))].filter(Boolean).map(topic => (
              <option key={topic} value={topic}>{topic}</option>
            ))}
          </select>
        </div>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[1,2,3].map(i => <div key={i} className="h-20 bg-gray-100 dark:bg-gray-800 rounded-xl animate-pulse"></div>)}
        </div>
      ) : (
        <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800/60 rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100 dark:divide-gray-800/60">
          {filteredProblems.map(p => (
            <div key={p.id} className="flex items-center justify-between p-5 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
              
              {/* Left Side: Checkbox & Info */}
              <div className="flex items-start space-x-4 w-1/2">
                <input 
                  type="checkbox" 
                  checked={p.status === 'Solved' || p.status === 'Mastered'}
                  onChange={() => toggleStatus(p.id)}
                  className="mt-1 w-5 h-5 rounded border-gray-300 dark:border-gray-600 bg-transparent text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                />
                <div>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-base font-bold text-gray-900 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-white transition-colors">
                    {p.name}
                  </a>
                  <div className="flex items-center space-x-2 mt-2">
                    {DUMMY_COMPANIES.slice(0, Math.floor(Math.random() * 3) + 1).map(company => (
                      <span key={company} className="flex items-center space-x-1 px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#1a1a1a] text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                        <span>{company}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Middle: Difficulty */}
              <div className="flex justify-center w-1/4">
                 <span className={`px-3 py-1 rounded-md text-xs font-medium border ${getDifficultyStyle(p.difficulty)}`}>
                   {p.difficulty}
                 </span>
              </div>

              {/* Right: Icons */}
              <div className="flex items-center justify-end space-x-5 w-1/4 opacity-60 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => openNoteModal(p)}
                  className={`${p.note || p.insight ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-white'} transition-colors`} 
                  title="Notes & Status"
                >
                  <Edit3 className="w-5 h-5" />
                </button>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors" title="Solve on Platform">
                  <ExternalLink className="w-5 h-5" />
                </a>
                <button 
                  onClick={() => toggleBookmark(p.id)}
                  className={`${p.isBookmarked ? 'text-yellow-500' : 'text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400'} transition-colors`} 
                  title="Bookmark"
                >
                  <Bookmark className={`w-5 h-5 ${p.isBookmarked ? 'fill-current' : ''}`} />
                </button>
              </div>

            </div>
          ))}
          
          {filteredProblems.length === 0 && (
            <div className="p-12 text-center text-gray-500 dark:text-gray-400">
              No problems found.
            </div>
          )}
        </div>
      )}

      {/* Note & Status Modal */}
      {selectedProblemForNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#121212] rounded-2xl shadow-xl w-full max-w-lg border border-gray-200 dark:border-gray-800/60 overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Header */}
            <div className="flex justify-between items-start p-5 pb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProblemForNote.name}
                </h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium border ${getDifficultyStyle(selectedProblemForNote.difficulty)}`}>
                    {selectedProblemForNote.difficulty}
                  </span>
                  <span>•</span>
                  <span>{selectedProblemForNote.topic}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {DUMMY_COMPANIES.slice(0, Math.floor(Math.random() * 3) + 1).map(company => (
                    <span key={company} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-[#1a1a1a] text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800">
                      {company}
                    </span>
                  ))}
                </div>
              </div>
              <button onClick={() => setSelectedProblemForNote(null)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5">
              <hr className="border-gray-200 dark:border-gray-800/60" />
            </div>

            {/* Body */}
            <div className="p-5 space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
              
              {/* Status Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Your Status</h4>
                <div className="grid grid-cols-2 gap-3 sm:flex sm:space-x-6 sm:gap-0">
                  {STATUSES.filter(s => s !== 'All').map(status => (
                    <label key={status} className="flex items-center space-x-2 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="status" 
                        value={status}
                        checked={tempStatus === status}
                        onChange={(e) => setTempStatus(e.target.value)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 dark:border-gray-600 focus:ring-indigo-600 dark:bg-gray-800 focus:ring-2"
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                        {status}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-gray-800/60 border-dashed" />

              {/* Notes Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">My Notes</h4>
                <textarea 
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add your approach, intuition, or time complexities here..."
                  className="w-full h-24 p-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-gray-900 dark:text-white text-sm"
                />
              </div>

              {/* Insights Section */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Mistake / Key Insight</h4>
                <textarea 
                  value={insightText}
                  onChange={(e) => setInsightText(e.target.value)}
                  placeholder="What did you miss? What's the trick to this problem?"
                  className="w-full h-20 p-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none text-gray-900 dark:text-white text-sm"
                />
              </div>

            </div>

            {/* Footer */}
            <div className="flex justify-between items-center p-5 border-t border-gray-200 dark:border-gray-800/60 bg-gray-50 dark:bg-[#0f0f0f]">
              <a 
                href={selectedProblemForNote.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
              >
                Open Problem <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <button 
                onClick={saveNote}
                className="px-5 py-2 text-sm font-medium text-white bg-[#7b32d9] hover:bg-[#8b42e9] rounded-lg transition-colors shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Problem Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#121212] rounded-2xl shadow-xl w-full max-w-md border border-gray-200 dark:border-gray-800/60 overflow-hidden animate-in zoom-in-95 duration-200">
            
            <div className="flex justify-between items-center p-5 pb-4 border-b border-gray-200 dark:border-gray-800/60">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Plus className="w-5 h-5 mr-2 text-[#7b32d9]" /> Add New Problem
              </h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddProblem} className="p-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Problem Name <span className="text-red-500">*</span></label>
                <input 
                  type="text" required
                  value={newProblem.name}
                  onChange={(e) => setNewProblem({...newProblem, name: e.target.value})}
                  placeholder="e.g. Two Sum"
                  className="w-full p-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#7b32d9] focus:border-[#7b32d9] outline-none text-gray-900 dark:text-white text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Problem URL <span className="text-red-500">*</span></label>
                <input 
                  type="url" required
                  value={newProblem.link}
                  onChange={(e) => setNewProblem({...newProblem, link: e.target.value})}
                  placeholder="https://leetcode.com/problems/..."
                  className="w-full p-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#7b32d9] focus:border-[#7b32d9] outline-none text-gray-900 dark:text-white text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Difficulty</label>
                  <select 
                    value={newProblem.difficulty}
                    onChange={(e) => setNewProblem({...newProblem, difficulty: e.target.value})}
                    className="w-full p-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#7b32d9] focus:border-[#7b32d9] outline-none text-gray-900 dark:text-white text-sm transition-all"
                  >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Pattern / Topic</label>
                  <input 
                    type="text"
                    value={newProblem.topic}
                    onChange={(e) => setNewProblem({...newProblem, topic: e.target.value})}
                    placeholder="e.g. Arrays"
                    className="w-full p-2.5 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl focus:ring-2 focus:ring-[#7b32d9] focus:border-[#7b32d9] outline-none text-gray-900 dark:text-white text-sm transition-all"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800/60 flex justify-end space-x-3">
                <button 
                  type="button" 
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 text-sm font-bold text-white bg-[#7b32d9] hover:bg-[#8b42e9] rounded-xl transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Save Problem
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
