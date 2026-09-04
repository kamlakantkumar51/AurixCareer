import { useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      const response = await api.post('/auth/forgot-password', { email })
      setMessage(response.data.message || 'If that email exists, we sent a password reset link.')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send reset link')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen font-sans bg-white dark:bg-[#0a0f1a] overflow-hidden justify-center items-center px-6">
      <div className="w-full max-w-[380px]">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-widest uppercase">
            RESET PASSWORD
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
            Enter your email to receive a reset link.
          </p>
        </div>

        {message ? (
          <div className="rounded-lg bg-green-50 dark:bg-green-500/10 p-4 border border-green-200 dark:border-green-500/20 text-center">
            <p className="text-sm font-medium text-green-700 dark:text-green-400">{message}</p>
            <p className="text-xs text-green-600/70 dark:text-green-400/70 mt-2">Check your server console (mock email).</p>
            <Link to="/login" className="mt-4 block text-sm font-bold text-[#4f46e5] hover:text-[#4338ca]">
              Back to Login
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
              <label className="text-sm font-black text-[#1e293b] dark:text-slate-200">Email</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                className="block w-full rounded-lg border-0 py-3 px-4 text-slate-900 dark:text-white shadow-sm ring-1 ring-inset ring-slate-200 dark:ring-white/10 bg-[#eef2ff] dark:bg-slate-800/50 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-[#4f46e5] sm:text-sm transition-all font-medium"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full justify-center rounded-lg bg-[#4f46e5] py-3 px-3 text-sm font-black text-white shadow-md shadow-[#4f46e5]/20 hover:bg-[#4338ca] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5] disabled:opacity-50 transition-all active:scale-[0.98]"
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </form>
        )}
        
        {!message && (
          <div className="mt-8 flex items-center justify-center">
            <Link to="/login" className="flex items-center text-sm font-bold text-[#4f46e5] hover:text-[#4338ca] transition-colors">
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
