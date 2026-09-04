import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getJobs, getApplications, updateApplicationStatus } from '../../services/mockData'
import api from '../../services/api'
import { 
  ArrowLeft, Search, Filter, CheckCircle, XCircle, 
  Calendar, Eye, ChevronRight, Download, Briefcase, 
  GraduationCap, Mail, MapPin, Star, Clock, X, MessageSquare,
  Video, Plus
} from 'lucide-react'

export default function JobApplications() {
  const { id: jobId } = useParams()
  const [job, setJob] = useState(null)
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeTab, setActiveTab] = useState('ALL')
  const [selectedApps, setSelectedApps] = useState([])
  
  // Detail View State
  const [selectedApp, setSelectedApp] = useState(null)
  const [noteInput, setNoteInput] = useState('')
  
  // Interview scheduling state
  const [showInterviewModal, setShowInterviewModal] = useState(false)
  const [interviewDate, setInterviewDate] = useState('')
  const [interviewTime, setInterviewTime] = useState('')

  const TABS = [
    { id: 'ALL', label: 'All' },
    { id: 'APPLIED', label: 'New' },
    { id: 'UNDER_REVIEW', label: 'Review' },
    { id: 'SHORTLISTED', label: 'Shortlisted' },
    { id: 'INTERVIEW', label: 'Interview' },
    { id: 'OFFER', label: 'Offer' },
    { id: 'HIRED', label: 'Hired' },
    { id: 'REJECTED', label: 'Rejected' }
  ]

  const PIPELINE_STAGES = ['APPLIED', 'UNDER_REVIEW', 'SHORTLISTED', 'INTERVIEW', 'OFFER', 'HIRED']

  useEffect(() => {
    fetchData()
  }, [jobId])

  const fetchData = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const jobRes = getJobs().find(j => j.id === jobId);
      if (jobRes) {
        setJob(jobRes)
      }
      const appRes = getApplications().filter(a => a.jobId === jobId);
      setApplications(appRes)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const updateStatus = async (appId, newStatus) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 100));
      updateApplicationStatus(appId, newStatus);
      setApplications(apps => apps.map(app => app.id === appId ? { ...app, status: newStatus } : app))
      if (selectedApp?.id === appId) {
        setSelectedApp(prev => ({ ...prev, status: newStatus }))
      }
    } catch (err) {
      console.error('Failed to update status', err)
    }
  }

  const scheduleInterview = async () => {
    if (!interviewDate || !interviewTime || !selectedApp) return
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setShowInterviewModal(false)
      setInterviewDate('')
      setInterviewTime('')
      updateStatus(selectedApp.id, 'INTERVIEW')
    } catch (err) {
      console.error('Failed to schedule interview', err)
    }
  }

  const saveNote = async (appId) => {
    if (!noteInput.trim()) return
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const updatedNotes = selectedApp.notes ? `${selectedApp.notes}\n\n${new Date().toLocaleDateString()}: ${noteInput}` : `${new Date().toLocaleDateString()}: ${noteInput}`
      
      // Mock updating notes
      setApplications(apps => apps.map(app => app.id === appId ? { ...app, notes: updatedNotes } : app))
      setSelectedApp(prev => ({ ...prev, notes: updatedNotes }))
      setNoteInput('')
    } catch (err) {
      console.error('Failed to save note', err)
    }
  }

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedApps(filteredApplications.map(app => app.id))
    } else {
      setSelectedApps([])
    }
  }

  const toggleSelect = (appId) => {
    if (selectedApps.includes(appId)) {
      setSelectedApps(selectedApps.filter(id => id !== appId))
    } else {
      setSelectedApps([...selectedApps, appId])
    }
  }

  const filteredApplications = applications.filter(app => {
    if (activeTab !== 'ALL' && app.status !== activeTab) {
      // "New" maps to APPLIED
      if (!(activeTab === 'APPLIED' && app.status === 'APPLIED')) return false
    }
    
    if (searchTerm) {
      const name = `${app.studentProfile.firstName} ${app.studentProfile.lastName}`.toLowerCase()
      if (!name.includes(searchTerm.toLowerCase())) return false
    }
    
    return true
  })

  const getStatusColor = (status) => {
    switch(status) {
      case 'HIRED': case 'OFFER': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
      case 'REJECTED': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
      case 'SHORTLISTED': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'
      case 'INTERVIEW': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
      case 'UNDER_REVIEW': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
    }
  }

  if (loading) {
    return <div className="flex h-64 items-center justify-center text-blue-500">Loading ATS...</div>
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      <div className="flex items-center space-x-4">
        <Link to="/recruiter/jobs" className="p-2 bg-[#121826] border border-gray-800 rounded-lg text-gray-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">{job?.title}</h1>
          <p className="text-gray-400 mt-1">Applicant Tracking Pipeline</p>
        </div>
      </div>

      <div className="bg-[#121826] rounded-xl border border-gray-800 shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-800 hide-scrollbar">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? 'border-blue-500 text-blue-400 bg-blue-900/10'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              }`}
            >
              {tab.label}
              <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-800 text-xs text-gray-400">
                {tab.id === 'ALL' 
                  ? applications.length 
                  : applications.filter(a => a.status === tab.id).length}
              </span>
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="p-4 border-b border-gray-800 flex flex-col md:flex-row justify-between gap-4 bg-gray-900/20">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search candidates by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 text-white rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-full md:w-80"
            />
          </div>
          
          {selectedApps.length > 0 && (
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-300">{selectedApps.length} selected</span>
              <button 
                onClick={() => {
                  selectedApps.forEach(id => updateStatus(id, 'SHORTLISTED'))
                  setSelectedApps([])
                }}
                className="px-4 py-2 bg-emerald-900/30 text-emerald-400 border border-emerald-900/50 rounded-lg text-sm font-medium hover:bg-emerald-900/50"
              >
                Shortlist
              </button>
              <button 
                onClick={() => {
                  selectedApps.forEach(id => updateStatus(id, 'REJECTED'))
                  setSelectedApps([])
                }}
                className="px-4 py-2 bg-red-900/30 text-red-400 border border-red-900/50 rounded-lg text-sm font-medium hover:bg-red-900/50"
              >
                Reject
              </button>
            </div>
          )}
        </div>

        {/* Applications Table */}
        <div className="overflow-x-auto min-h-[400px]">
          {filteredApplications.length === 0 ? (
            <div className="p-16 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-gray-400">No candidates in this stage.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-800/50 border-b border-gray-800">
                  <th className="px-6 py-3 w-12 text-center">
                    <input 
                      type="checkbox" onChange={toggleSelectAll} 
                      checked={filteredApplications.length > 0 && selectedApps.length === filteredApplications.length}
                      className="rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Candidate</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Applied Date</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">Stage</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {filteredApplications.map(app => (
                  <tr key={app.id} className="hover:bg-gray-800/30 transition-colors cursor-pointer" onClick={(e) => {
                    // Prevent row click if clicking checkbox or action buttons
                    if (e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) return;
                    setSelectedApp(app)
                  }}>
                    <td className="px-6 py-4 text-center">
                      <input 
                        type="checkbox" onChange={() => toggleSelect(app.id)} checked={selectedApps.includes(app.id)}
                        className="rounded border-gray-700 bg-gray-900 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 text-white flex items-center justify-center font-bold">
                          {app.studentProfile.firstName?.charAt(0) || 'U'}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{app.studentProfile.firstName} {app.studentProfile.lastName}</div>
                          <div className="text-xs text-gray-400 mt-0.5">{app.studentProfile.user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(app.appliedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                        {app.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button onClick={() => updateStatus(app.id, 'SHORTLISTED')} className="p-2 text-gray-500 hover:text-emerald-400 hover:bg-emerald-900/20 rounded-lg transition-colors" title="Shortlist">
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button onClick={() => updateStatus(app.id, 'REJECTED')} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-900/20 rounded-lg transition-colors" title="Reject">
                          <XCircle className="w-4 h-4" />
                        </button>
                        <button onClick={() => setSelectedApp(app)} className="p-2 text-gray-500 hover:text-blue-400 hover:bg-blue-900/20 rounded-lg transition-colors" title="View Detail">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Application Detail Modal/Drawer */}
      {selectedApp && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedApp(null)}></div>
          
          <div className="relative w-full max-w-4xl bg-[#121826] border-l border-gray-800 shadow-2xl flex flex-col h-full animate-in slide-in-from-right">
            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-blue-900/30 text-blue-400 flex items-center justify-center font-bold text-lg border border-blue-900/50">
                  {selectedApp.studentProfile.firstName?.charAt(0) || 'U'}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{selectedApp.studentProfile.firstName} {selectedApp.studentProfile.lastName}</h2>
                  <p className="text-sm text-gray-400">{job?.title} Application</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg text-sm font-medium flex items-center transition-colors">
                  <Download className="w-4 h-4 mr-2" /> Resume
                </button>
                <button onClick={() => setSelectedApp(null)} className="p-2 text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Split Content */}
            <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
              
              {/* Left Column: Candidate Info */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 border-r border-gray-800">
                
                <section>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Contact & Info</h3>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-300">
                      <Mail className="w-4 h-4 mr-3 text-gray-500" /> {selectedApp.studentProfile.user.email}
                    </div>
                    {selectedApp.studentProfile.location && (
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="w-4 h-4 mr-3 text-gray-500" /> {selectedApp.studentProfile.location}
                      </div>
                    )}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedApp.studentProfile.skills?.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 border border-gray-700 text-gray-300 text-xs font-medium rounded-full">
                        {s.skill.name}
                      </span>
                    ))}
                    {(!selectedApp.studentProfile.skills || selectedApp.studentProfile.skills.length === 0) && (
                      <span className="text-sm text-gray-500">No skills listed.</span>
                    )}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" /> Experience
                  </h3>
                  <div className="space-y-4">
                    {selectedApp.studentProfile.experience?.length > 0 ? selectedApp.studentProfile.experience.map((exp, i) => (
                      <div key={i} className="border-l-2 border-gray-800 pl-4">
                        <h4 className="text-sm font-semibold text-white">{exp.role}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{exp.company} • {exp.duration}</p>
                        {exp.description && <p className="text-xs text-gray-400 mt-2 leading-relaxed">{exp.description}</p>}
                      </div>
                    )) : <p className="text-sm text-gray-500">No experience listed.</p>}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" /> Education
                  </h3>
                  <div className="space-y-4">
                    {selectedApp.studentProfile.education?.length > 0 ? selectedApp.studentProfile.education.map((edu, i) => (
                      <div key={i} className="border-l-2 border-gray-800 pl-4">
                        <h4 className="text-sm font-semibold text-white">{edu.degree} in {edu.branch}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">{edu.college} • Class of {edu.graduationYear}</p>
                        {edu.cgpa && <p className="text-xs text-emerald-400 mt-1 font-medium">CGPA: {edu.cgpa}</p>}
                      </div>
                    )) : <p className="text-sm text-gray-500">No education listed.</p>}
                  </div>
                </section>
                
              </div>

              {/* Right Column: ATS Pipeline & Actions */}
              <div className="w-full md:w-80 bg-gray-900/30 overflow-y-auto p-6 flex flex-col">
                
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Pipeline Stage</h3>
                
                <div className="space-y-2 mb-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-800 before:to-transparent">
                  {PIPELINE_STAGES.map((stage, index) => {
                    const isActive = selectedApp.status === stage
                    const isPassed = PIPELINE_STAGES.indexOf(selectedApp.status) > index && selectedApp.status !== 'REJECTED'
                    const isRejected = selectedApp.status === 'REJECTED'
                    
                    return (
                      <button
                        key={stage}
                        onClick={() => updateStatus(selectedApp.id, stage)}
                        className={`w-full flex items-center p-3 rounded-xl border relative z-10 transition-all ${
                          isActive 
                            ? 'bg-blue-900/20 border-blue-500 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                            : isPassed
                            ? 'bg-emerald-900/10 border-emerald-900/50 text-emerald-500 hover:bg-emerald-900/20'
                            : 'bg-[#121826] border-gray-800 text-gray-500 hover:border-gray-700 hover:text-gray-300'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                          isActive ? 'bg-blue-500 text-white' : isPassed ? 'bg-emerald-500/20 text-emerald-500' : 'bg-gray-800 text-gray-500'
                        }`}>
                          {isActive ? <Star className="w-3 h-3 fill-current" /> : isPassed ? <CheckCircle className="w-4 h-4" /> : <div className="w-2 h-2 rounded-full bg-current" />}
                        </div>
                        <span className="text-sm font-medium">{stage.replace('_', ' ')}</span>
                      </button>
                    )
                  })}
                  <button
                    onClick={() => updateStatus(selectedApp.id, 'REJECTED')}
                    className={`w-full flex items-center p-3 rounded-xl border relative z-10 mt-4 transition-all ${
                      selectedApp.status === 'REJECTED'
                        ? 'bg-red-900/20 border-red-500 text-red-400' 
                        : 'bg-[#121826] border-gray-800 text-gray-500 hover:border-red-900/50 hover:text-red-400'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center mr-3">
                      <XCircle className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">Reject Candidate</span>
                  </button>
                  
                  {selectedApp.status === 'INTERVIEW' && (
                    <button
                      onClick={() => setShowInterviewModal(true)}
                      className="w-full flex items-center justify-center p-3 mt-4 rounded-xl border border-indigo-500/50 bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-[0_0_15px_rgba(99,102,241,0.2)] transition-all"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Schedule Interview
                    </button>
                  )}
                </div>

                <div className="mt-auto">
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" /> Recruiter Notes
                  </h3>
                  
                  {selectedApp.notes && (
                    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mb-4 text-xs text-gray-300 whitespace-pre-wrap max-h-40 overflow-y-auto">
                      {selectedApp.notes}
                    </div>
                  )}

                  <textarea 
                    value={noteInput}
                    onChange={(e) => setNoteInput(e.target.value)}
                    rows={3}
                    placeholder="Add a private note about this candidate..."
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 text-sm text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none mb-3"
                  />
                  <button 
                    onClick={() => saveNote(selectedApp.id)}
                    disabled={!noteInput.trim()}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-800 disabled:text-gray-500 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Save Note
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Interview Modal */}
      {showInterviewModal && selectedApp && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowInterviewModal(false)}></div>
          <div className="relative w-full max-w-md bg-white dark:bg-[#121826] rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-800 animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
                <Video className="w-5 h-5 mr-2 text-indigo-500" />
                Schedule Interview
              </h3>
              <button onClick={() => setShowInterviewModal(false)} className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Set up an interview with <span className="font-semibold text-gray-900 dark:text-white">{selectedApp.studentProfile.firstName} {selectedApp.studentProfile.lastName}</span>.
            </p>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Date</label>
                <input 
                  type="date" 
                  value={interviewDate}
                  onChange={e => setInterviewDate(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time</label>
                <input 
                  type="time" 
                  value={interviewTime}
                  onChange={e => setInterviewTime(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <button 
                onClick={() => setShowInterviewModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={scheduleInterview}
                disabled={!interviewDate || !interviewTime}
                className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Ensure lucide-react has 'Users' icon; if not, fallback to User icon
function Users(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
