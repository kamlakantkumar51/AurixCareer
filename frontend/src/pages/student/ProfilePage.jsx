import { useState, useEffect } from 'react'
import { Save, User, MapPin, Phone, GraduationCap, Target, Code, ChevronLeft, Edit2, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { getStudentProfile, updateStudentProfile } from '../../services/mockData'
import useAuthStore from '../../stores/authStore'

export default function ProfilePage() {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [isEditing, setIsEditing] = useState(false)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [activeTab, setActiveTab] = useState('Summary')
  
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    location: '',
    cgpa: '',
    graduationYear: '',
    targetRole: '',
    skills: '',
    linkedinUrl: '',
    profilePicture: '',
    universityName: '',
    summary: '',
    careerJourney: ''
  })

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const p = getStudentProfile()
      if (p) {
        const skillsArray = p.skills ? p.skills.map(s => s.skill.name) : []
        
        setProfile({
          firstName: p.firstName || '',
          lastName: p.lastName || '',
          phone: p.phone || '',
          location: p.location || '',
          cgpa: p.cgpa ? p.cgpa.toString() : '',
          graduationYear: p.graduationYear ? p.graduationYear.toString() : '',
          targetRole: p.targetRole || '',
          skills: skillsArray.join(', '),
          linkedinUrl: p.linkedinUrl || '',
          profilePicture: p.profilePicture || '',
          universityName: p.universityName || '',
          summary: p.summary || '',
          careerJourney: p.careerJourney || ''
        })
      }
    } catch (error) {
      console.error('Failed to fetch profile', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      const payload = {
        ...profile,
        skills: profile.skills.split(',').map(s => ({ skill: { name: s.trim() } })).filter(s => s.skill.name)
      }

      updateStudentProfile(payload)
      setMessage('Profile updated successfully!')
      setTimeout(() => {
         setMessage('')
         setIsEditing(false)
      }, 1500)
    } catch (error) {
      setMessage('Failed to update profile.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="p-8 text-center text-slate-500">Loading profile...</div>
  }

  if (isEditing) {
    // Edit Form View
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center mb-6">
          <button onClick={() => setIsEditing(false)} className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
             <ChevronLeft className="w-5 h-5 mr-1" /> Back to Profile
          </button>
        </div>

        {message && (
          <div className={`p-4 rounded-md ${message.includes('success') ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-white dark:bg-[#140e21] shadow-sm border border-slate-200 dark:border-indigo-900/30 rounded-xl overflow-hidden">
            <div className="border-b border-slate-100 dark:border-slate-800 px-6 py-4 flex items-center space-x-3 bg-slate-50/50 dark:bg-slate-800/50">
              <User className="w-5 h-5 text-slate-500" />
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Personal Information</h2>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                <input type="text" name="firstName" value={profile.firstName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                <input type="text" name="lastName" value={profile.lastName} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Target Role</label>
                <input type="text" name="targetRole" value={profile.targetRole} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Skills (comma separated)</label>
                <input type="text" name="skills" value={profile.skills} onChange={handleChange} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">LinkedIn Profile URL</label>
                <input type="url" name="linkedinUrl" value={profile.linkedinUrl} onChange={handleChange} placeholder="https://linkedin.com/in/username" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Profile Picture URL</label>
                <input type="url" name="profilePicture" value={profile.profilePicture} onChange={handleChange} placeholder="https://example.com/avatar.png" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">University Name</label>
                <input type="text" name="universityName" value={profile.universityName} onChange={handleChange} placeholder="e.g. Parul University" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Summary</label>
                <textarea name="summary" value={profile.summary} onChange={handleChange} rows="3" placeholder="Write a short summary about yourself" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Career Journey</label>
                <textarea name="careerJourney" value={profile.careerJourney} onChange={handleChange} rows="4" placeholder="Detail your career path, achievements, and roadmap" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-slate-800 dark:border-slate-700 dark:text-white p-2.5 border" />
              </div>
            </div>
          </div>

          <div className="flex justify-end pb-8 space-x-4">
            <button type="button" onClick={() => setIsEditing(false)} className="px-6 py-3 rounded-xl font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="flex items-center space-x-2 bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 shadow-lg shadow-indigo-500/30">
              <Save className="w-5 h-5" />
              <span>{saving ? 'Saving...' : 'Save Profile'}</span>
            </button>
          </div>
        </form>
      </div>
    )
  }

  // Display View
  return (
    <div className="max-w-6xl mx-auto font-sans anim-fade-up">
      
      {/* Back to Dashboard */}
      <div className="mb-6">
        <button onClick={() => navigate('/student/dashboard')} className="flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm">
           <ChevronLeft className="w-4 h-4 mr-1" /> Back to Dashboard
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Content */}
        <div className="lg:col-span-8 card-3d shimmer-on-hover bg-white dark:bg-[#0f1724] border border-slate-200 dark:border-indigo-900/20 rounded-2xl overflow-hidden shadow-lg group">
          
          {/* Banner */}
          <div className="h-48 w-full relative overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop" 
              alt="Cover" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Profile Header */}
          <div className="px-8 pb-8 relative">
            
            {/* Avatar */}
            <div className="absolute -top-16 left-8 w-32 h-32 rounded-full border-4 border-white dark:border-[#0f1724] overflow-hidden bg-white shadow-xl ring-2 ring-indigo-500/20 shadow-indigo-500/20">
              <img 
                src={profile.profilePicture || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"} 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* User Info */}
            <div className="pt-20">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-semibold text-slate-900 dark:text-white mb-2">
                    {profile.firstName || 'Kamlakant'} {profile.lastName || 'Kumar'}
                  </h1>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full border border-indigo-100 dark:border-indigo-800/50 shadow-sm">Student</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700">2023 - 2027</span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-medium mb-4">B.Tech - CSE, PIT</p>
                  
                  <div className="flex">
                    {profile.linkedinUrl && (
                      <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex items-center text-slate-700 dark:text-slate-300 font-medium text-sm">
                   <User className="w-4 h-4 mr-2 text-indigo-500" /> {profile.universityName || 'Add your university'}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 px-8">
            {['Summary', 'Career Journey', 'Activity'].map((tab) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`py-4 px-1 mr-8 font-medium text-sm transition-colors border-b-2 ${
                   activeTab === tab 
                     ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400' 
                     : 'border-transparent text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300'
                 }`}
               >
                 {tab}
               </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'Summary' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Summary</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm whitespace-pre-wrap">
                  {profile.summary || `Passionate Computer Science student with a strong interest in Software Development, Data Structures & Algorithms, and Full Stack Web Technologies. Currently aiming for a career as a ${profile.targetRole || 'Software Development Engineer'}. Looking forward to building scalable systems and participating in collaborative technical environments.`}
                </p>
              </div>
            )}
            
            {activeTab === 'Career Journey' && (
              <div className="space-y-4 py-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Career Journey</h3>
                {profile.careerJourney ? (
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm whitespace-pre-wrap">
                    {profile.careerJourney}
                  </p>
                ) : (
                  <p className="text-slate-500 text-center py-8">Your career journey timeline will appear here. Edit your profile to add it.</p>
                )}
              </div>
            )}

            {activeTab === 'Activity' && (
              <div className="space-y-4 text-center py-8">
                <p className="text-slate-500">Recent practice activity and assessments will appear here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="card-3d shimmer-on-hover bg-white dark:bg-[#0f1724] border border-slate-200 dark:border-indigo-900/20 rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row lg:flex-col gap-4">
            <button 
              onClick={() => setIsEditing(true)}
              className="w-full flex-1 flex items-center justify-center py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white rounded-xl font-bold transition-all btn-glow-blue card-press shadow-lg shadow-indigo-500/25"
            >
              <Edit2 className="w-4 h-4 mr-2" /> Edit Profile
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
