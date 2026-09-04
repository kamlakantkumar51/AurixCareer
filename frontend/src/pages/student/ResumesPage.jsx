import { useState, useEffect, useRef } from 'react'
import { FileText, Upload, Trash2, CheckCircle, AlertCircle, FileUp, Zap, Sparkles, Star, Download, Edit3, RefreshCw, Eye, X, MoreVertical } from 'lucide-react'
import { getResumes, addResume, deleteResume as mockDeleteResume } from '../../services/mockData'
import api from '../../services/api'
import useAuthStore from '../../stores/authStore'

export default function ResumesPage() {
  const { user } = useAuthStore()
  const [resumes, setResumes] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  
  // Modals state
  const [previewResume, setPreviewResume] = useState(null)
  const [deleteResume, setDeleteResume] = useState(null)
  const [editResume, setEditResume] = useState(null)
  const [replaceResume, setReplaceResume] = useState(null)

  const fileInputRef = useRef(null)
  const replaceInputRef = useRef(null)

  useEffect(() => {
    fetchResumes()
  }, [])

  const fetchResumes = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      setResumes(getResumes())
    } catch (err) {
      console.error(err)
      setError('Failed to load resumes. Did you complete your profile?')
    } finally {
      setLoading(false)
    }
  }

  const showSuccess = (msg) => {
    setSuccess(msg)
    setTimeout(() => setSuccess(''), 4000)
  }

  const showError = (msg) => {
    setError(msg)
    setTimeout(() => setError(''), 5000)
  }

  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setUploading(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      addResume({
        fileName: file.name,
        title: file.name.split('.')[0] || 'Resume',
        fileSize: file.size,
        isPrimary: getResumes().length === 0
      })
      showSuccess('Resume uploaded successfully.')
      fetchResumes()
    } catch (err) {
      showError('Failed to upload resume')
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleReplaceUpload = async (e) => {
    const file = e.target.files[0]
    if (!file || !replaceResume) return

    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      // mock replace
      showSuccess('Resume updated successfully.')
      setReplaceResume(null)
      fetchResumes()
    } catch (err) {
      showError('Failed to replace resume')
    } finally {
      if (replaceInputRef.current) replaceInputRef.current.value = ''
    }
  }

  const handleDelete = async () => {
    if (!deleteResume) return
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      mockDeleteResume(deleteResume.id)
      showSuccess('Resume deleted successfully')
      setDeleteResume(null)
      fetchResumes() // refetch to handle primary fallback
    } catch (err) {
      showError('Failed to delete resume')
    }
  }

  const handleSetPrimary = async (id) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const resumes = getResumes();
      resumes.forEach(r => r.isPrimary = r.id === id);
      showSuccess('Primary resume updated')
      fetchResumes()
    } catch (err) {
      showError('Failed to set primary resume')
    }
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault()
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const resumes = getResumes();
      const r = resumes.find(x => x.id === editResume.id);
      if (r) {
        r.title = editResume.title;
        r.targetRole = editResume.targetRole;
        r.description = editResume.description;
      }
      showSuccess('Resume metadata updated')
      setEditResume(null)
      fetchResumes()
    } catch (err) {
      showError('Failed to update resume')
    }
  }

  const handleDownload = async (resume) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const dummyData = "This is a mock resume file.\nName: " + resume.fileName;
      const url = window.URL.createObjectURL(new Blob([dummyData], { type: 'text/plain' }))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', resume.fileName)
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(url)
    } catch (err) {
      showError('Failed to download resume.')
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const isAtLimit = resumes.length >= 5

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 dark:border-gray-800 pb-5 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Resume Management</h1>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Upload and manage up to 5 resumes. Set a primary resume for quick applications.
          </p>
        </div>
        <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg font-medium text-gray-700 dark:text-gray-300">
          <span>{resumes.length} / 5 Resumes Used</span>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-50 text-red-800 border border-red-200 dark:bg-red-900/20 dark:border-red-800/30 flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" /> {error}
        </div>
      )}
      {success && (
        <div className="p-4 rounded-xl bg-green-50 text-green-800 border border-green-200 dark:bg-green-900/20 dark:border-green-800/30 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" /> {success}
        </div>
      )}

      {/* Upload Zone */}
      {!isAtLimit ? (
        <div 
          className="relative border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl p-10 text-center hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-colors group cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileUpload}
            accept=".pdf,.doc,.docx"
            className="hidden" 
          />
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
            {uploading ? <Sparkles className="w-8 h-8 animate-spin" /> : <FileUp className="w-8 h-8" />}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {uploading ? 'Analyzing with AI...' : 'Upload Resume'}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm mx-auto">
            Support for PDF, DOC, DOCX. Max file size: 10 MB.
          </p>
        </div>
      ) : (
        <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-center">
          <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
          <p className="text-amber-800 dark:text-amber-400 font-medium">You have reached the maximum limit of 5 resumes.</p>
          <p className="text-amber-700/80 dark:text-amber-400/80 text-sm mt-1">Delete an existing resume to upload a new one.</p>
        </div>
      )}

      {/* Resumes List */}
      <div className="space-y-6">
        
        {loading ? (
          <p className="text-gray-500 text-center py-8">Loading resumes...</p>
        ) : resumes.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
            <FileText className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">No resumes yet</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-sm mx-auto">Upload your first resume and start building your AI-powered career profile.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resumes.map(resume => {
              const fileExt = resume.fileName.split('.').pop().toUpperCase()
              return (
                <div key={resume.id} className={`bg-white dark:bg-gray-900 rounded-3xl border ${resume.isPrimary ? 'border-blue-500 shadow-blue-500/10 shadow-lg' : 'border-gray-200 dark:border-gray-800'} p-6 flex flex-col`}>
                  
                  {/* Top row */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm ${resume.isPrimary ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}>
                        {fileExt}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white max-w-[200px] truncate" title={resume.title || resume.fileName}>
                          {resume.title || resume.fileName}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {formatFileSize(resume.fileSize)} • Updated {new Date(resume.updatedAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    {/* Primary Badge */}
                    {resume.isPrimary ? (
                      <span className="flex items-center text-xs font-bold text-blue-700 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/40 px-3 py-1 rounded-full">
                        <Star className="w-3 h-3 mr-1 fill-current" /> Primary
                      </span>
                    ) : (
                      <button 
                        onClick={() => handleSetPrimary(resume.id)}
                        className="text-xs font-medium text-gray-500 hover:text-blue-600 transition-colors"
                      >
                        Set as Primary
                      </button>
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="mb-6 flex-1 space-y-2">
                    {resume.targetRole && (
                      <p className="text-sm text-gray-700 dark:text-gray-300"><span className="font-semibold">Target:</span> {resume.targetRole}</p>
                    )}
                    {resume.description && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">{resume.description}</p>
                    )}
                    {!resume.targetRole && !resume.description && (
                      <p className="text-sm text-gray-400 italic">No metadata added.</p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2">
                    <button 
                      onClick={() => setPreviewResume(resume)}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Eye className="w-4 h-4" /> <span>Preview</span>
                    </button>
                    <button 
                      onClick={() => handleDownload(resume)}
                      className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors"
                    >
                      <Download className="w-4 h-4" /> <span>Download</span>
                    </button>
                    
                    {/* More Actions Menu Button */}
                    <div className="relative group flex-1">
                      <button className="w-full flex items-center justify-center space-x-1 px-3 py-2 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                        <span>Edit...</span>
                      </button>
                      <div className="absolute bottom-full left-0 w-full mb-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                        <button 
                          onClick={() => setEditResume(resume)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
                        >
                          <Edit3 className="w-4 h-4 inline mr-2" /> Edit Metadata
                        </button>
                        <button 
                          onClick={() => setReplaceResume(resume)}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 rounded-md"
                        >
                          <RefreshCw className="w-4 h-4 inline mr-2" /> Replace File
                        </button>
                        <button 
                          onClick={() => setDeleteResume(resume)}
                          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/30 rounded-md mt-1"
                        >
                          <Trash2 className="w-4 h-4 inline mr-2" /> Delete Resume
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* --- MODALS --- */}

      {/* 1. Preview Modal */}
      {previewResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-800">
              <h3 className="font-bold text-lg dark:text-white truncate">{previewResume.fileName}</h3>
              <button onClick={() => setPreviewResume(null)} className="p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full">
                <X className="w-5 h-5 dark:text-white" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-950 p-4">
              {previewResume.fileName.toLowerCase().endsWith('.pdf') ? (
                <iframe 
                  src={`http://localhost:5000${previewResume.fileUrl}`} 
                  className="w-full h-full rounded-xl shadow-inner border border-gray-200 dark:border-gray-800"
                  title="Resume Preview"
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <FileText className="w-16 h-16 text-gray-400 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4">Preview not available for Word documents.</p>
                  <button onClick={() => handleDownload(previewResume)} className="px-6 py-2 bg-blue-600 text-white rounded-lg">
                    Download to view
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. Delete Confirmation Modal */}
      {deleteResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Delete Resume?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete <strong>{deleteResume.title || deleteResume.fileName}</strong>? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button 
                onClick={() => setDeleteResume(null)}
                className="px-4 py-2 font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="px-4 py-2 font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg"
              >
                Delete Resume
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 3. Edit Metadata Modal */}
      {editResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Edit Resume Details</h3>
            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Resume Title</label>
                <input 
                  type="text" 
                  value={editResume.title || ''} 
                  onChange={e => setEditResume({...editResume, title: e.target.value})}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
                  placeholder="e.g. Software Engineer Resume"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Target Role</label>
                <input 
                  type="text" 
                  value={editResume.targetRole || ''} 
                  onChange={e => setEditResume({...editResume, targetRole: e.target.value})}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
                  placeholder="e.g. Full Stack Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
                <textarea 
                  value={editResume.description || ''} 
                  onChange={e => setEditResume({...editResume, description: e.target.value})}
                  className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white h-24 resize-none"
                  placeholder="e.g. Tailored for backend roles"
                />
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button 
                  type="button"
                  onClick={() => setEditResume(null)}
                  className="px-4 py-2 font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Replace File Input (Hidden) */}
      <input 
        type="file" 
        ref={replaceInputRef} 
        onChange={handleReplaceUpload}
        accept=".pdf,.doc,.docx"
        className="hidden" 
      />
      {/* Auto-trigger replace file dialog when replaceResume is set */}
      {replaceResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md p-6 border border-gray-200 dark:border-gray-800 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Replace File</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
              You are replacing the file for <strong>{replaceResume.title || replaceResume.fileName}</strong>. This will keep the metadata intact.
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setReplaceResume(null)}
                className="px-4 py-2 font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg"
              >
                Cancel
              </button>
              <button 
                onClick={() => replaceInputRef.current?.click()}
                className="px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center"
              >
                <Upload className="w-4 h-4 mr-2" /> Select New File
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
