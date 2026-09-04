import { useState } from 'react'
import { Bell, Briefcase, FileText, Calendar, User, CheckCircle2, MoreVertical, Check } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function RecruiterNotifications() {
  const [activeTab, setActiveTab] = useState('ALL')
  
  // Dummy data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'APPLICATION',
      title: 'New Application Received',
      message: 'Rahul Sharma applied for Senior React Developer.',
      time: '2 hours ago',
      read: false,
      icon: FileText,
      color: 'blue'
    },
    {
      id: 2,
      type: 'INTERVIEW',
      title: 'Interview Accepted',
      message: 'Priya Singh accepted the interview invite for tomorrow at 2:00 PM.',
      time: '5 hours ago',
      read: false,
      icon: Calendar,
      color: 'emerald'
    },
    {
      id: 3,
      type: 'JOB',
      title: 'Job Posting Expiring Soon',
      message: 'Your job posting for "UI/UX Designer" will expire in 2 days.',
      time: '1 day ago',
      read: true,
      icon: Briefcase,
      color: 'orange'
    },
    {
      id: 4,
      type: 'SYSTEM',
      title: 'Platform Update',
      message: 'We have added new AI resume parsing capabilities to your dashboard.',
      time: '2 days ago',
      read: true,
      icon: Bell,
      color: 'purple'
    },
    {
      id: 5,
      type: 'APPLICATION',
      title: 'Candidate Withdrew',
      message: 'Ankit Kumar withdrew their application for MERN Developer.',
      time: '3 days ago',
      read: true,
      icon: User,
      color: 'gray'
    }
  ])

  const unreadCount = notifications.filter(n => !n.read).length

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })))
  }

  const markAsRead = (id) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const filteredNotifications = notifications.filter(n => {
    if (activeTab === 'UNREAD') return !n.read
    if (activeTab === 'APPLICATIONS') return n.type === 'APPLICATION'
    if (activeTab === 'INTERVIEWS') return n.type === 'INTERVIEW'
    return true
  })

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Notifications
            {unreadCount > 0 && (
              <span className="px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold border border-blue-200 dark:border-blue-900/50">
                {unreadCount} New
              </span>
            )}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Stay updated on your candidates and job postings.</p>
        </div>
        
        {unreadCount > 0 && (
          <button 
            onClick={markAllAsRead}
            className="w-full sm:w-auto px-4 py-2 bg-white dark:bg-[#121826] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg text-sm font-medium transition-colors flex items-center justify-center shadow-sm"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Mark all as read
          </button>
        )}
      </div>

      <div className="bg-white dark:bg-[#121826] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-gray-100 dark:border-gray-800 p-2 sm:p-4 overflow-x-auto hide-scrollbar gap-2 sm:gap-4">
          {['ALL', 'UNREAD', 'APPLICATIONS', 'INTERVIEWS'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-colors ${
                activeTab === tab 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {tab.charAt(0) + tab.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-100 dark:divide-gray-800">
          {filteredNotifications.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900/50 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No notifications yet</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
                When candidates apply or you have upcoming interviews, they will appear here.
              </p>
            </div>
          ) : (
            filteredNotifications.map(notification => {
              const Icon = notification.icon
              const colorMap = {
                blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50',
                emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50',
                orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-900/50',
                purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50',
                gray: 'bg-gray-100 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700/50'
              }

              return (
                <div 
                  key={notification.id} 
                  className={`p-4 sm:p-6 hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors flex flex-col sm:flex-row gap-4 sm:gap-6 ${
                    !notification.read ? 'bg-blue-50/30 dark:bg-blue-900/5' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative shrink-0">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${colorMap[notification.color]}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {!notification.read && (
                        <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 border-2 border-white dark:border-[#121826] rounded-full"></div>
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0 pt-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-1">
                        <h4 className={`text-sm sm:text-base font-bold truncate ${
                          !notification.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                          {notification.title}
                        </h4>
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-500 shrink-0">
                          {notification.time}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 break-words leading-relaxed">
                        {notification.message}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center justify-between sm:justify-center shrink-0 pl-16 sm:pl-0 pt-2 sm:pt-0">
                    <button className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                    {!notification.read && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation()
                          markAsRead(notification.id)
                        }}
                        className="sm:hidden text-xs font-medium text-blue-600 dark:text-blue-400 flex items-center"
                      >
                        <Check className="w-4 h-4 mr-1" /> Mark read
                      </button>
                    )}
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
