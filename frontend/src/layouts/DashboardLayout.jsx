import { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  User,
  FileText,
  Briefcase,
  Bookmark,
  LogOut,
  Menu,
  X,
  Code,
  Target,
  BookOpen,
  Compass,
  PlusCircle,
  Users,
  Search,
  BarChart,
  Bell,
  Settings,
  Building
} from 'lucide-react'
import useAuthStore from '../stores/authStore'
import ThemeToggle from '../components/ThemeToggle'
import Logo from '../components/Logo'

const SidebarItem = ({ icon: Icon, label, path, active, onClick }) => (
  <Link
    to={path}
    onClick={onClick}
    className={`relative flex items-center space-x-3 px-4 py-2.5 mx-2 rounded-xl transition-all duration-200 group card-press shimmer-on-hover ${
      active
        ? 'nav-item-active bg-gradient-to-r from-indigo-600/20 to-violet-600/10 text-indigo-400 dark:text-indigo-300 font-semibold shadow-sm'
        : 'text-gray-500 hover:bg-white/5 dark:text-gray-400 hover:text-white dark:hover:text-white'
    }`}
  >
    <div className={`p-1.5 rounded-lg transition-all duration-200 ${
      active
        ? 'bg-indigo-500/20 text-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.5)]'
        : 'group-hover:bg-white/10 group-hover:text-white'
    }`}>
      <Icon className="w-4 h-4" />
    </div>
    <span className="text-sm">{label}</span>
    {active && (
      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(99,102,241,0.9)]" />
    )}
  </Link>
)

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const studentLinks = [
    { icon: LayoutDashboard, label: 'Overview', path: '/student/dashboard' },
    { icon: Compass, label: 'AI Navigator', path: '/student/navigator' },
    { icon: Briefcase, label: 'Jobs', path: '/student/jobs' },
    { icon: Bookmark, label: 'Saved', path: '/student/saved' },
    { icon: Code, label: 'Practice', path: '/student/practice' },
    { icon: BookOpen, label: 'Notes', path: '/student/notes' },
  ]

  const recruiterLinks = [
    { section: 'MAIN' },
    { icon: LayoutDashboard, label: 'Dashboard', path: '/recruiter/dashboard' },
    { section: 'RECRUITING' },
    { icon: Users, label: 'Candidates', path: '/recruiter/candidates' },
    { icon: FileText, label: 'Applications', path: '/recruiter/applications' },
    { icon: Target, label: 'Interviews', path: '/recruiter/interviews' },
    { section: 'JOBS' },
    { icon: Briefcase, label: 'My Postings', path: '/recruiter/jobs' },
    { icon: PlusCircle, label: 'Create Job', path: '/recruiter/jobs/create' },
    { section: 'TOOLS' },
    { icon: Search, label: 'Talent Search', path: '/recruiter/search' },
    { icon: BarChart, label: 'Analytics', path: '/recruiter/analytics' },
    { section: 'ACCOUNT' },
    { icon: Building, label: 'Company Profile', path: '/recruiter/company' },
    { icon: User, label: 'Recruiter Profile', path: '/recruiter/profile' },
    { icon: Bell, label: 'Notifications', path: '/recruiter/notifications' },
  ]

  const adminLinks = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/admin/dashboard' },
    { icon: User, label: 'Users', path: '/admin/users' },
  ]

  const navLinks = user?.role === 'RECRUITER'
    ? recruiterLinks
    : user?.role === 'ADMIN'
      ? adminLinks
      : studentLinks

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-[#070b14] font-sans">

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-900/70 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 dark:glass-sidebar bg-white dark:bg-[#0B1120] border-r border-gray-200 dark:border-indigo-900/20 transform transition-all duration-300 ease-out md:translate-x-0 md:static ${
        isMobileMenuOpen ? 'translate-x-0 shadow-2xl shadow-indigo-900/30' : '-translate-x-full'
      }`}>
        {/* Subtle top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="flex items-center justify-start h-16 px-6 mt-2 mb-1">
            <Logo className="h-6" showTagline={false} />
            <button
              className="md:hidden ml-auto text-gray-500 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-3 px-1 space-y-0.5 hide-scrollbar">
            {navLinks.map((link, idx) => {
              if (link.section) {
                return (
                  <div key={`section-${idx}`} className="pt-5 pb-1.5 px-6">
                    <span className="text-[9px] font-bold text-gray-400/60 dark:text-indigo-400/40 tracking-[0.15em] uppercase">
                      {link.section}
                    </span>
                  </div>
                )
              }
              return (
                <SidebarItem
                  key={link.path}
                  icon={link.icon}
                  label={link.label}
                  path={link.path}
                  active={location.pathname === link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              )
            })}
          </div>

          {/* User & Logout Area */}
          <div className="p-4 border-t border-gray-200/50 dark:border-indigo-900/20 space-y-3">
            {/* Theme section */}
            <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-gray-50 dark:bg-white/[0.03] border border-gray-100 dark:border-white/5">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Theme</span>
              <ThemeToggle />
            </div>

            {/* User chip */}
            <Link
              to={`/${user?.role?.toLowerCase() || 'student'}/profile`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center space-x-3 px-3 py-2.5 rounded-xl bg-gray-50 hover:bg-indigo-50 dark:bg-white/[0.04] dark:hover:bg-indigo-600/10 border border-gray-200/70 dark:border-white/5 hover:border-indigo-200 dark:hover:border-indigo-500/30 transition-all duration-200 group card-press shimmer-on-hover"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-xs font-bold text-white shadow-[0_0_10px_rgba(99,102,241,0.5)] flex-shrink-0">
                {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                  {user?.email}
                </p>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 truncate capitalize">{user?.role?.toLowerCase()}</p>
              </div>
            </Link>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="flex w-full items-center space-x-3 px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10 rounded-xl transition-all duration-200 btn-glow-red group"
            >
              <LogOut className="w-4 h-4 group-hover:translate-x-[-2px] transition-transform" />
              <span>Sign out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="flex items-center justify-between h-16 px-4 md:px-8 bg-white dark:glass-header dark:bg-[#0B1120] border-b border-gray-200 dark:border-indigo-900/15 sticky top-0 z-30">
          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-gray-500 hover:text-indigo-500 dark:hover:text-indigo-400 focus:outline-none mr-4 p-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-bold text-gray-900 dark:text-white text-gradient-blue">AurixCareer</span>
          </div>
          
          <div className="flex items-center justify-end w-full space-x-3 md:space-x-5 ml-auto">
            {/* Search bar */}
            <div className="relative hidden md:block">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search anything..." 
                className="w-64 pl-9 pr-4 py-2 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/8 rounded-xl text-sm text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400/50 focus:bg-white dark:focus:bg-white/8 transition-all duration-200 placeholder:text-gray-400"
              />
            </div>

            {/* Notifications */}
            <Link 
              to={user?.role === 'RECRUITER' ? '/recruiter/notifications' : '/student/notifications'}
              className="relative text-gray-500 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors bell-hover p-1.5 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-500/10"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gradient-to-br from-red-500 to-rose-600 border-2 border-white dark:border-[#0B1120] rounded-full flex items-center justify-center text-[9px] text-white font-bold shadow-[0_0_6px_rgba(239,68,68,0.6)]">
                3
              </span>
            </Link>

            {/* Avatar */}
            <Link 
              to={user?.role === 'RECRUITER' ? '/recruiter/profile' : '/student/profile'}
              className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 flex items-center justify-center text-sm font-bold text-white cursor-pointer transition-all duration-200 shadow-[0_0_12px_rgba(99,102,241,0.4)] hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] hover:scale-110"
            >
              {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 md:p-8 bg-gray-50 dark:bg-[#070b14]">
          <div className="page-enter">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
