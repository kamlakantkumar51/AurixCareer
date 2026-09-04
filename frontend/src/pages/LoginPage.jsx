import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../services/api'
import useAuthStore from '../stores/authStore'
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react'
import Logo from '../components/Logo'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const login = useAuthStore(state => state.login)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    try {
      const response = await api.post('/auth/login', { email, password })
      const { data } = response.data
      
      login(data, data.token)
      
      if (data.role === 'RECRUITER') navigate('/recruiter/dashboard')
      else if (data.role === 'ADMIN') navigate('/admin/dashboard')
      else navigate('/student/dashboard')
      
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const features = [
    "Practice & DSA",
    "CS Fundamentals",
    "AI Job Matching",
    "Resume Analysis",
    "Interview Prep"
  ]

  return (
    <div className="flex min-h-screen font-sans bg-white dark:bg-[#0a0f1a] overflow-hidden">
      
      {/* Left side - Branding (Deep Purple) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#4f46e5] flex-col justify-between p-8 xl:p-12 h-screen overflow-hidden">
        
        <div>
          <div className="mb-8">
            <Logo className="h-10 items-start" forceWhite={true} showTagline={true} />
          </div>

          <h1 className="text-4xl xl:text-5xl font-black text-white leading-tight mb-4">
            "From preparation <br />
            to placement."
          </h1>
          
          <p className="text-white/90 font-medium text-base max-w-md mb-8">
            Your complete toolkit to crack top tech interviews and land your dream job.
          </p>

          <div className="space-y-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-3 text-white">
                <div className="w-5 h-5 rounded-full border-[1.5px] border-white/80 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-base font-bold">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements at bottom */}
        <div className="flex -space-x-3 mt-6">
           <img className="w-10 h-10 rounded-full border-2 border-[#4f46e5] object-cover" src="https://i.pravatar.cc/100?img=33" alt="Student 1" />
           <img className="w-10 h-10 rounded-full border-2 border-[#4f46e5] object-cover" src="https://i.pravatar.cc/100?img=47" alt="Student 2" />
           <img className="w-10 h-10 rounded-full border-2 border-[#4f46e5] object-cover" src="https://i.pravatar.cc/100?img=12" alt="Student 3" />
           <div className="w-10 h-10 rounded-full border-2 border-[#4f46e5] bg-white flex items-center justify-center text-[10px] font-bold text-[#4f46e5]">
             +2k
           </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex w-full lg:w-1/2 flex-col justify-center px-6 sm:px-12 xl:px-24 h-screen bg-white dark:bg-[#0a0f1a] relative">
        
        {/* Go Back Link */}
        <div className="absolute top-8 left-8 sm:left-12 xl:left-24">
          <Link to="/" className="flex items-center text-[#4f46e5] font-bold text-sm hover:text-[#4338ca] transition-colors">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Go Back
          </Link>
        </div>

        <div className="w-full max-w-[420px] mx-auto mt-12">
          
          <div className="mb-8">
            <h2 className="text-2xl sm:text-[28px] font-bold text-slate-800 dark:text-white tracking-tight">
              Already a Member? Please proceed.
            </h2>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-lg bg-red-50 dark:bg-red-500/10 p-3 border border-red-200 dark:border-red-500/20">
                <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}
            
            <div>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="block w-full rounded-xl border border-slate-200 dark:border-slate-700 py-4 px-5 text-slate-900 dark:text-white shadow-sm bg-[#f4f7ff] dark:bg-slate-800/50 placeholder:text-slate-500 focus:ring-2 focus:ring-inset focus:ring-[#4f46e5] focus:border-transparent sm:text-base transition-all font-medium"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div>
              <div className="relative flex items-center rounded-xl border border-slate-200 dark:border-slate-700 bg-[#f4f7ff] dark:bg-slate-800/50 shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#4f46e5]">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  className="block w-full bg-transparent border-0 py-4 px-5 text-slate-900 dark:text-white placeholder:text-slate-500 focus:ring-0 sm:text-base transition-all font-medium tracking-widest"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <div className="pr-2 bg-white dark:bg-[#1a1f2e] h-full flex items-center rounded-r-xl border-l border-slate-200 dark:border-slate-700 ml-auto">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="p-3 text-slate-500 hover:text-[#4f46e5] transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <Link to="/forgot-password" className="text-sm font-semibold text-[#4f46e5] hover:text-[#4338ca] transition-colors">
                  Forgot Password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full justify-center rounded-xl bg-[#5832D0] py-4 px-3 text-base font-bold text-white hover:bg-[#4a2ab0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5832D0] disabled:opacity-50 transition-all active:scale-[0.98]"
            >
              {loading ? 'Logging in...' : 'Log in'}
            </button>
          </form>

          {/* Create Account link for Students since we removed the top one */}
          <div className="mt-6 flex justify-center">
             <p className="text-sm text-slate-500 font-medium">New to AurixCareer? <Link to="/register" className="text-[#4f46e5] font-bold hover:underline">Create an account</Link></p>
          </div>

          <div className="mt-10">
            <Link 
              to="/recruiter-landing"
              className="flex items-center justify-between rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-md transition-shadow group bg-white dark:bg-[#0a0f1a]"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center shrink-0">
                  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8 44.5L14 36L17.5 28.5L25.5 35L22 45.5L18.8 44.5Z" fill="#5832D0"/>
                    <path d="M19 14.5C21.4853 14.5 23.5 12.4853 23.5 10C23.5 7.51472 21.4853 5.5 19 5.5C16.5147 5.5 14.5 7.51472 14.5 10C14.5 12.4853 16.5147 14.5 19 14.5Z" fill="#1CE5C3"/>
                    <path d="M26.5 19L24.5 24L17.5 28.5L13.5 22.5L12 17L17 15L23.5 15.5L26.5 19Z" fill="#E2E8F0"/>
                    <path d="M27.5 22L29.5 26.5V31H34.5V23L29 18.5L27.5 22Z" fill="#94A3B8"/>
                    <path d="M14.5 34.5L11 32L9 26L13.5 22.5L16.5 27.5L14.5 34.5Z" fill="#5832D0"/>
                    <path d="M14 26L18 20L19 23L16 28L14 26Z" fill="#0F172A"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-slate-800 dark:text-white group-hover:text-[#5832D0] transition-colors">Register to Recruit from AurixCareer</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Click here to register</p>
                </div>
              </div>
              <svg className="w-6 h-6 text-slate-400 group-hover:text-[#5832D0] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <p className="mt-12 text-center text-[13px] text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
            By continuing, you agree to our <br/>
            <Link to="/terms" className="text-[#0070f3] hover:underline">Terms and Conditions</Link> and <Link to="/privacy" className="text-[#0070f3] hover:underline">Privacy Policy.</Link>
          </p>

        </div>
      </div>
    </div>
  )
}
