import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Calendar, Clock, MapPin, Video, CheckCircle, XCircle, User, Star, Edit2, Plus, MessageSquare } from 'lucide-react'

import { getInterviews } from '../../services/mockData'

export default function RecruiterInterviews() {
  const [interviews, setInterviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('SCHEDULED') // SCHEDULED, COMPLETED, CANCELLED
  
  const [selectedInterview, setSelectedInterview] = useState(null)
  const [feedbackInput, setFeedbackInput] = useState('')
  const [scoreInput, setScoreInput] = useState('')

  useEffect(() => {
    fetchInterviews()
  }, [])

  const fetchInterviews = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setInterviews(getInterviews())
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdate = async (id, data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      // Mock update
      setInterviews(prev => prev.map(i => i.id === id ? { ...i, ...data } : i))
      if (selectedInterview?.id === id) {
        setSelectedInterview({ ...selectedInterview, ...data })
      }
    } catch (err) {
      console.error("Failed to update interview", err)
    }
  }

  const submitFeedback = () => {
    if (!selectedInterview) return
    const updateData = {
      feedback: feedbackInput,
      score: scoreInput ? parseFloat(scoreInput) : undefined,
      status: 'COMPLETED'
    }
    handleUpdate(selectedInterview.id, updateData)
  }

  const openInterview = (interview) => {
    setSelectedInterview(interview)
    setFeedbackInput(interview.feedback || '')
    setScoreInput(interview.score || '')
  }

  const filteredInterviews = interviews.filter(i => i.status === activeTab)

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Interviews</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage and evaluate your scheduled candidate interviews.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#121826] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-100 dark:border-gray-800 hide-scrollbar overflow-x-auto">
          {['SCHEDULED', 'COMPLETED', 'CANCELLED'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {tab.charAt(0) + tab.slice(1).toLowerCase()}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-xs text-gray-500 dark:text-gray-400">
                {interviews.filter(i => i.status === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Interviews List */}
        <div className="p-6 min-h-[400px]">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredInterviews.length === 0 ? (
            <div className="text-center flex flex-col items-center py-16">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No {activeTab.toLowerCase()} interviews</h3>
              <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm">
                When you schedule interviews with candidates from the Applications board, they will appear here.
              </p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredInterviews.map(interview => (
                <div 
                  key={interview.id}
                  onClick={() => openInterview(interview)}
                  className="group flex flex-col md:flex-row items-start md:items-center justify-between p-5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900/50 bg-gray-50/30 dark:bg-gray-900/20 hover:bg-blue-50/20 dark:hover:bg-blue-900/10 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-200 dark:border-indigo-800/50">
                      {interview.application.studentProfile.firstName?.charAt(0) || 'U'}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {interview.application.studentProfile.firstName} {interview.application.studentProfile.lastName}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                        {interview.application.job.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-4 md:gap-8">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {new Date(interview.scheduledAt).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {new Date(interview.scheduledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    
                    {interview.status === 'SCHEDULED' && (
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleUpdate(interview.id, { status: 'COMPLETED' }) }}
                          className="px-3 py-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-900/50 rounded-lg text-xs font-semibold transition-colors flex items-center"
                        >
                          <CheckCircle className="w-3 h-3 mr-1" /> Complete
                        </button>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleUpdate(interview.id, { status: 'CANCELLED' }) }}
                          className="px-3 py-1.5 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 rounded-lg text-xs font-semibold transition-colors flex items-center"
                        >
                          <XCircle className="w-3 h-3 mr-1" /> Cancel
                        </button>
                      </div>
                    )}
                    
                    {interview.status === 'COMPLETED' && interview.score !== null && (
                      <div className="flex items-center px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-bold border border-indigo-100 dark:border-indigo-800/30">
                        <Star className="w-3 h-3 mr-1 fill-current" /> {interview.score}/10
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interview Detail Modal */}
      {selectedInterview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedInterview(null)}></div>
          
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#121826] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
            
            <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/30 rounded-t-2xl">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <Video className="w-5 h-5 mr-2 text-blue-500" />
                Interview Details
              </h2>
              <button onClick={() => setSelectedInterview(null)} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                <XCircle className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              
              <div className="flex items-center space-x-4 mb-8 p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl">
                <div className="w-14 h-14 rounded-full bg-blue-200 dark:bg-blue-900/50 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold text-xl">
                  {selectedInterview.application.studentProfile.firstName?.charAt(0) || 'U'}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {selectedInterview.application.studentProfile.firstName} {selectedInterview.application.studentProfile.lastName}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Applying for <span className="font-medium text-gray-900 dark:text-gray-300">{selectedInterview.application.job.title}</span>
                  </p>
                </div>
                <div className="ml-auto text-right text-sm text-gray-500 dark:text-gray-400 space-y-1">
                  <div className="flex items-center justify-end"><Calendar className="w-4 h-4 mr-2" /> {new Date(selectedInterview.scheduledAt).toLocaleDateString()}</div>
                  <div className="flex items-center justify-end"><Clock className="w-4 h-4 mr-2" /> {new Date(selectedInterview.scheduledAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" /> Interview Feedback
                  </label>
                  <textarea 
                    value={feedbackInput}
                    onChange={(e) => setFeedbackInput(e.target.value)}
                    placeholder="Enter your detailed feedback, strengths, weaknesses, and decision notes..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                    <Star className="w-4 h-4 mr-2" /> Candidate Score (1-10)
                  </label>
                  <input 
                    type="number" 
                    min="1" max="10" step="0.5"
                    value={scoreInput}
                    onChange={(e) => setScoreInput(e.target.value)}
                    placeholder="e.g. 8.5"
                    className="w-full md:w-1/3 px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

            </div>

            <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex justify-end gap-3 bg-gray-50/50 dark:bg-gray-900/30 rounded-b-2xl">
              <button 
                onClick={() => setSelectedInterview(null)}
                className="px-5 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={submitFeedback}
                className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm shadow-blue-500/20 transition-all flex items-center"
              >
                Save Evaluation
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
