import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import api from '../services/api'
import { Eye, EyeOff, CheckCircle2 } from 'lucide-react'

export default function ResetPasswordPage() {
  const { token } = useParams()
  const navigate = useNavigate()
  
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters')
    }

    setLoading(true)

    try {
      await api.post(`/auth/reset-password/${token}`, { password })
      setSuccess(true)
      setTimeout(() => navigate('/login'), 3000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to reset password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen font-sans bg-white dark:bg-[#0a0f1a] overflow-hidden justify-center items-center px-6">
      <div className="w-full max-w-[380px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-widest uppercase">
            NEW PASSWORD
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            Enter your new secure password below.
          </p>
        </div>

        {success ? (
          <div className="rounded-lg bg-green-50 dark:bg-green-500/10 p-6 border border-green-200 dark:border-green-500/20 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-bold text-green-900 dark:text-green-300">Password Reset!</h3>
            <p className="mt-2 text-sm text-green-700 dark:text-green-400">
              Your password has been successfully updated. Redirecting you to login...
            </p>
            <Link to="/login" className="mt-6 block w-full justify-center rounded-lg bg-[#4f46e5] py-3 px-3 text-sm font-black text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] transition-all">
              Go to Login now
            </Link>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="rounded-lg bg-red-50 dark:bg-red-500/10 p-3 border border-red-200 dark:border-red-500/20">
                <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
              </div>
            )}
            
            <div className="space-y-1.5">
              <label className="text-sm font-black text-[#1e293b] dark:text-slate-200">New Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  className="block w-full rounded-lg border-0 py-3 px-4 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 bg-[#eef2ff] dark:bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#4f46e5] sm:text-sm transition-all font-medium tracking-widest"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-[#4f46e5] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-black text-[#1e293b] dark:text-slate-200">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••••••"
                  className="block w-full rounded-lg border-0 py-3 px-4 pr-10 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 bg-[#eef2ff] dark:bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#4f46e5] sm:text-sm transition-all font-medium tracking-widest"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full justify-center rounded-lg bg-[#4f46e5] py-3 px-3 text-sm font-black text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5] disabled:opacity-50 transition-all active:scale-[0.98]"
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
