import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getJobs, addJob } from '../../services/mockData'
import api from '../../services/api'
import { ArrowLeft, CheckCircle2, Plus, Trash2 } from 'lucide-react'

export default function CreateJob() {
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditMode = !!id

  const [loading, setLoading] = useState(false)
  const [fetching, setFetching] = useState(isEditMode)
  const [step, setStep] = useState(1)
  
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    type: 'FULL_TIME',
    mode: 'REMOTE',
    location: '',
    salaryMin: '',
    salaryMax: '',
    experienceMin: '',
    experienceMax: '',
    description: '',
    responsibilities: '',
    requirements: '',
    preferredQualifications: '',
    skills: '',
    preferredSkills: '',
    screeningQuestions: [{ question: '', type: 'text' }],
    deadline: '',
    openings: 1,
    autoClose: false,
    remoteAllowed: false,
    resumeRequired: true
  })
  
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (isEditMode) {
      const fetchJob = async () => {
        try {
          await new Promise(resolve => setTimeout(resolve, 300));
          const job = getJobs().find(j => j.id === id);
          if (job) {
            setFormData({
              ...formData,
              ...job,
              skills: job.skills?.map(s => s.skill.name).join(', ') || '',
              screeningQuestions: job.screeningQuestions?.length > 0 ? job.screeningQuestions : [{ question: '', type: 'text' }]
            })
          }
        } catch (err) {
          console.error('Failed to fetch job', err)
          setErrors({ submit: 'Failed to load job details.' })
        } finally {
          setFetching(false)
        }
      }
      fetchJob()
    }
  }, [id, isEditMode])

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({ ...formData, [e.target.name]: value })
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null })
    }
  }

  const handleScreeningChange = (index, field, value) => {
    const updated = [...formData.screeningQuestions]
    updated[index][field] = value
    setFormData({ ...formData, screeningQuestions: updated })
  }

  const addScreeningQuestion = () => {
    setFormData({
      ...formData,
      screeningQuestions: [...formData.screeningQuestions, { question: '', type: 'text' }]
    })
  }

  const removeScreeningQuestion = (index) => {
    const updated = formData.screeningQuestions.filter((_, i) => i !== index)
    setFormData({ ...formData, screeningQuestions: updated })
  }

  const validateStep = (currentStep) => {
    let newErrors = {}
    if (currentStep === 1) {
      if (!formData.title.trim()) newErrors.title = 'Job title is required'
      if (formData.mode !== 'REMOTE' && !formData.location.trim()) newErrors.location = 'Location is required for non-remote roles'
    } else if (currentStep === 2) {
      if (!formData.description.trim()) newErrors.description = 'Overview is required'
    } else if (currentStep === 3) {
      if (!formData.skills.trim()) newErrors.skills = 'At least one required skill is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) setStep(step + 1)
  }

  const handleSubmit = async (e, status = 'ACTIVE') => {
    e.preventDefault()
    if (!validateStep(step)) return

    setLoading(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const payload = {
        ...formData,
        skills: formData.skills.split(',').map(s => ({ skill: { name: s.trim() } })).filter(Boolean),
        screeningQuestions: formData.screeningQuestions.filter(q => q.question.trim() !== ''),
        status
      }

      if (!isEditMode) {
        addJob(payload);
      } else {
        // mock editing
        const jobs = getJobs();
        const index = jobs.findIndex(j => j.id === id);
        if (index > -1) jobs[index] = { ...jobs[index], ...payload };
      }
      
      navigate('/recruiter/jobs')
    } catch (err) {
      console.error(err)
      setErrors({ submit: err.response?.data?.message || (isEditMode ? 'Failed to update job' : 'Failed to create job') })
    } finally {
      setLoading(false)
    }
  }

  const STEPS = [
    { id: 1, title: 'Basic Info' },
    { id: 2, title: 'Description' },
    { id: 3, title: 'Skills' },
    { id: 4, title: 'Screening' },
    { id: 5, title: 'Settings' },
    { id: 6, title: 'Preview' }
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <button 
          onClick={() => navigate('/recruiter/jobs')}
          className="p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {isEditMode ? 'Edit Job Posting' : 'Create New Job Posting'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {isEditMode ? 'Update the details of your job opportunity.' : 'Publish a new opportunity to attract talent.'}
          </p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#121826] rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
        {/* Steps Progress */}
        <div className="flex border-b border-gray-100 dark:border-gray-800 p-4 sm:p-6 overflow-x-auto hide-scrollbar">
          {STEPS.map((s, idx) => (
            <div key={s.id} className="flex-1 flex items-center min-w-[90px] sm:min-w-[100px]">
              <div className="flex flex-col items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 text-xs font-semibold mb-2 transition-colors ${
                  step > s.id ? 'bg-blue-600 border-blue-600 text-white' :
                  step === s.id ? 'border-blue-500 text-blue-500 bg-blue-50 dark:bg-blue-900/20' :
                  'border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-500 bg-gray-50 dark:bg-gray-900'
                }`}>
                  {step > s.id ? <CheckCircle2 className="w-4 h-4" /> : s.id}
                </div>
                <span className={`text-[10px] uppercase tracking-wider font-medium text-center ${
                  step >= s.id ? 'text-blue-600 dark:text-blue-400' : 'text-gray-500 dark:text-gray-600'
                }`}>{s.title}</span>
              </div>
              {idx !== STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-1 sm:mx-2 -mt-6 transition-colors ${
                  step > s.id ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-800'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <div className="p-4 sm:p-8 flex-1">
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-900 text-red-600 dark:text-red-400 rounded-lg text-sm">
              {errors.submit}
            </div>
          )}

          <form className="space-y-6 flex flex-col min-h-full">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">1. Basic Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Job Title *</label>
                    <input 
                      type="text" name="title" value={formData.title} onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border ${errors.title ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                      placeholder="e.g. Senior React Developer"
                    />
                    {errors.title && <p className="mt-1 text-sm text-red-500">{errors.title}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Department</label>
                    <input 
                      type="text" name="department" value={formData.department} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="e.g. Engineering"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Employment Type</label>
                    <select name="type" value={formData.type} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option value="FULL_TIME">Full-time</option>
                      <option value="PART_TIME">Part-time</option>
                      <option value="INTERNSHIP">Internship</option>
                      <option value="CONTRACT">Contract</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Work Mode</label>
                    <select name="mode" value={formData.mode} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    >
                      <option value="REMOTE">Remote</option>
                      <option value="HYBRID">Hybrid</option>
                      <option value="ON_SITE">On-site</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                    <input 
                      type="text" name="location" value={formData.location} onChange={handleChange}
                      className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border ${errors.location ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                      placeholder={formData.mode === 'REMOTE' ? 'e.g. Remote, India' : 'e.g. Bangalore, India'}
                    />
                    {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Salary Range (Min LPA)</label>
                    <input type="number" name="salaryMin" value={formData.salaryMin} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. 10" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Salary Range (Max LPA)</label>
                    <input type="number" name="salaryMax" value={formData.salaryMax} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="e.g. 20" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">2. Job Description</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Overview *</label>
                  <textarea name="description" value={formData.description} onChange={handleChange} rows={4}
                    className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border ${errors.description ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                    placeholder="Provide a compelling overview of the role and team..."
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Responsibilities</label>
                  <textarea name="responsibilities" value={formData.responsibilities} onChange={handleChange} rows={4}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="List the key day-to-day responsibilities..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Requirements</label>
                  <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={4}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="List the necessary qualifications, degrees, or certifications..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Qualifications</label>
                  <textarea name="preferredQualifications" value={formData.preferredQualifications} onChange={handleChange} rows={3}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="List nice-to-have qualifications..."
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 animate-in fade-in flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">3. Skills & Experience</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Required Skills (comma-separated) *</label>
                  <input type="text" name="skills" value={formData.skills} onChange={handleChange}
                    className={`w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border ${errors.skills ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all`}
                    placeholder="e.g. React, Node.js, TypeScript"
                  />
                  {errors.skills && <p className="mt-1 text-sm text-red-500">{errors.skills}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Preferred Skills (comma-separated)</label>
                  <input type="text" name="preferredSkills" value={formData.preferredSkills} onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="e.g. AWS, Docker, GraphQL"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Minimum Experience (Years)</label>
                    <input type="number" name="experienceMin" value={formData.experienceMin} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Maximum Experience (Years)</label>
                    <input type="number" name="experienceMax" value={formData.experienceMax} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="5" />
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6 animate-in fade-in flex-1">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-gray-100 dark:border-gray-800 pb-2 gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">4. Screening Questions</h3>
                  <button type="button" onClick={addScreeningQuestion} className="text-sm flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 w-fit">
                    <Plus className="w-4 h-4 mr-1" /> Add Question
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400">Add custom screening questions for candidates to answer during application.</p>

                <div className="space-y-4">
                  {formData.screeningQuestions.map((q, index) => (
                    <div key={index} className="flex flex-col sm:flex-row gap-3 items-start bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl border border-gray-200 dark:border-gray-800">
                      <div className="flex-1 space-y-3 w-full">
                        <input 
                          type="text" value={q.question} onChange={(e) => handleScreeningChange(index, 'question', e.target.value)}
                          className="w-full px-4 py-2 bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg outline-none transition-all"
                          placeholder="e.g. What is your notice period?"
                        />
                        <select 
                          value={q.type} onChange={(e) => handleScreeningChange(index, 'type', e.target.value)}
                          className="w-full sm:w-[200px] px-3 py-1.5 text-sm bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg outline-none transition-all"
                        >
                          <option value="text">Short Text</option>
                          <option value="number">Number</option>
                          <option value="boolean">Yes/No</option>
                        </select>
                      </div>
                      <button type="button" onClick={() => removeScreeningQuestion(index)} className="p-2 text-gray-500 hover:text-red-600 dark:hover:text-red-400 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg sm:mt-0 self-end sm:self-start">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  {formData.screeningQuestions.length === 0 && (
                    <div className="text-center py-6 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50/50 dark:bg-gray-900/10">
                      <p className="text-sm text-gray-500">No screening questions added.</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-6 animate-in fade-in flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">5. Application Settings</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Application Deadline</label>
                    <input type="date" name="deadline" value={formData.deadline} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Number of Openings</label>
                    <input type="number" name="openings" min="1" value={formData.openings} onChange={handleChange}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  <label className="flex items-start sm:items-center space-x-3 cursor-pointer p-4 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors hover:border-blue-200 dark:hover:border-blue-900/50">
                    <input type="checkbox" name="autoClose" checked={formData.autoClose} onChange={handleChange} className="mt-1 sm:mt-0 w-4 h-4 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-blue-600 focus:ring-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Auto-close Job</p>
                      <p className="text-xs text-gray-500">Automatically close job when deadline is reached.</p>
                    </div>
                  </label>

                  <label className="flex items-start sm:items-center space-x-3 cursor-pointer p-4 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors hover:border-blue-200 dark:hover:border-blue-900/50">
                    <input type="checkbox" name="remoteAllowed" checked={formData.remoteAllowed} onChange={handleChange} className="mt-1 sm:mt-0 w-4 h-4 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-blue-600 focus:ring-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Allow Remote Applicants</p>
                      <p className="text-xs text-gray-500">Candidates outside the primary location can apply.</p>
                    </div>
                  </label>

                  <label className="flex items-start sm:items-center space-x-3 cursor-pointer p-4 bg-gray-50 dark:bg-gray-900/30 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors hover:border-blue-200 dark:hover:border-blue-900/50">
                    <input type="checkbox" name="resumeRequired" checked={formData.resumeRequired} onChange={handleChange} className="mt-1 sm:mt-0 w-4 h-4 rounded border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-blue-600 focus:ring-blue-600" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">Require Resume</p>
                      <p className="text-xs text-gray-500">Candidates must attach a resume to apply.</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-6 animate-in fade-in flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-2">6. Preview</h3>
                
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 sm:p-6 space-y-6 border border-gray-200 dark:border-gray-800">
                  <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white break-words">{formData.title}</h4>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-500 dark:text-gray-400 mt-3">
                      <span className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm">{formData.type.replace('_', ' ')}</span>
                      <span className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm">{formData.mode}</span>
                      {formData.location && <span className="px-2 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm">{formData.location}</span>}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Overview</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line leading-relaxed break-words">{formData.description}</p>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Skills Required</h5>
                    <div className="flex flex-wrap gap-2">
                      {formData.skills.split(',').map((s, i) => s.trim() && (
                        <span key={i} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-400 text-xs font-medium rounded-full">
                          {s.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {formData.screeningQuestions.length > 0 && formData.screeningQuestions[0].question.trim() !== '' && (
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm uppercase tracking-wider">Screening Preview</h5>
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {formData.screeningQuestions.filter(q => q.question.trim() !== '').map((q, i) => (
                          <li key={i} className="break-words">{q.question}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-col-reverse sm:flex-row justify-between pt-6 border-t border-gray-100 dark:border-gray-800 mt-8 gap-3 sm:gap-0">
              {step > 1 ? (
                <button type="button" onClick={() => setStep(step - 1)}
                  className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Back
                </button>
              ) : <div className="hidden sm:block"></div>}
              
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                {step < 6 ? (
                  <button type="button" onClick={handleNext}
                    className="w-full sm:w-auto px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm"
                  >
                    Continue
                  </button>
                ) : (
                  <>
                    <button type="button" disabled={loading} onClick={(e) => handleSubmit(e, 'DRAFT')}
                      className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      {loading ? 'Saving...' : 'Save as Draft'}
                    </button>
                    <button type="button" disabled={loading} onClick={(e) => handleSubmit(e, 'ACTIVE')}
                      className="w-full sm:w-auto px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm"
                    >
                      {loading ? 'Publishing...' : 'Publish Job'}
                    </button>
                  </>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
