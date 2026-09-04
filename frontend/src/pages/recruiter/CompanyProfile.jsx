import { useState, useEffect } from 'react'
import { Building2, Globe, MapPin, Loader2, Info } from 'lucide-react'
import { getRecruiterProfile, updateRecruiterProfile } from '../../services/mockData'

const CompanyProfile = () => {
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    location: '',
    logoUrl: '',
    description: ''
  })

  // Simulated fetch since we're currently building the integration
  useEffect(() => {
    // This will be replaced with real API call
    const fetchProfile = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 300));
        const data = getRecruiterProfile()?.company || {}
        setFormData({
          name: data.name || '',
          website: data.website || '',
          location: data.location || '',
          logoUrl: data.logoUrl || '',
          description: data.description || ''
        })
      } catch (error) {
        console.error('Error fetching company profile:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProfile()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSuccess(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setSuccess(false)
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      updateRecruiterProfile({ company: formData })
      setSuccess(true)
    } catch (error) {
      console.error('Error updating company profile:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setFormData({ ...formData, logoUrl: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  if (loading) {
    return (
      <div className="flex h-[calc(100vh-64px)] items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Company Profile</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your organization's public details and branding.</p>
      </div>

      <div className="bg-white dark:bg-[#121826] rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm">
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
          <div className="w-24 h-24 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-500 overflow-hidden relative group cursor-pointer shrink-0 shadow-sm">
            {formData.logoUrl ? (
              <img src={formData.logoUrl} alt="Company Logo" className="w-full h-full object-cover" />
            ) : (
              <>
                <Building2 className="w-8 h-8 mb-1 text-gray-400" />
                <span className="text-[10px] font-medium uppercase tracking-wider text-gray-400">Logo</span>
              </>
            )}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-xs text-white font-medium">Upload</span>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Company Logo</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 max-w-lg">Upload a square image (recommended 400x400px). This will be displayed on all your job postings and candidate communications.</p>
            <div className="flex items-center justify-center sm:justify-start space-x-3">
              <label className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-white text-sm font-medium rounded-lg transition-colors border border-gray-200 dark:border-gray-700 shadow-sm cursor-pointer">
                Choose File
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*" 
                  onChange={handleLogoUpload}
                />
              </label>
              <button 
                className="px-4 py-2 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-medium rounded-lg transition-colors"
                onClick={() => setFormData({ ...formData, logoUrl: '' })}
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Company Name <span className="text-red-500 dark:text-red-400">*</span></label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors outline-none"
                  placeholder="e.g. Acme Corp"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Website</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Globe className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors outline-none"
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                </div>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors outline-none"
                  placeholder="e.g. San Francisco, CA (or Remote)"
                />
              </div>
            </div>

            <div className="space-y-1.5 md:col-span-2">
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex justify-between">
                About Company
                <span className="text-gray-500 text-xs">Brief overview for candidates</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl p-3 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-colors resize-none outline-none"
                placeholder="What does your company do? What's your mission?"
              />
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-500 dark:text-blue-400 shrink-0 mt-0.5" />
            <p className="text-sm text-blue-700 dark:text-blue-300/80 leading-relaxed">
              This information is visible to all candidates viewing your job postings. 
              Make sure to keep it updated to attract the best talent to your organization.
            </p>
          </div>

          <div className="flex flex-col-reverse sm:flex-row items-center justify-end sm:space-x-4 pt-6 border-t border-gray-200 dark:border-gray-800 gap-3 sm:gap-0">
            {success && (
              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-3 sm:mb-0 text-center sm:text-left w-full sm:w-auto">Profile updated successfully!</span>
            )}
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white bg-gray-50 hover:bg-gray-100 dark:bg-transparent dark:hover:bg-gray-800 rounded-xl sm:rounded-none transition-colors border border-gray-200 sm:border-transparent dark:border-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="w-full sm:w-auto px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {saving && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CompanyProfile
