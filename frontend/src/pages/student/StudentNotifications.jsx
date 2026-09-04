import { useState } from 'react'
import { Bell, Briefcase, FileText, Calendar, CheckCircle2, MoreVertical, Check, Award, Target, Eye } from 'lucide-react'

export default function StudentNotifications() {
  const [activeTab, setActiveTab] = useState('ALL')
  
  // Dummy data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'APPLICATION',
      title: 'Application Viewed',
      message: 'Your application for Frontend Developer at TechCorp was viewed by the recruiter.',
      time: '2 hours ago',
      read: false,
      icon: Eye,
      color: 'blue'
    },
    {
      id: 2,
      type: 'INTERVIEW',
      title: 'Interview Invite!',
      message: 'Congratulations! You have been invited for an interview with Stripe.',
      time: '5 hours ago',
      read: false,
      icon: Calendar,
      color: 'emerald'
    },
    {
      id: 3,
      type: 'PRACTICE',
      title: 'New Quiz Available',
      message: 'A new Advanced React quiz has been added to the CS Fundamentals section.',
      time: '1 day ago',
      read: true,
      icon: Target,
      color: 'purple'
    },
    {
      id: 4,
      type: 'ACHIEVEMENT',
      title: 'Level Up!',
      message: 'You have reached the "Intermediate" tier in problem-solving.',
      time: '2 days ago',
      read: true,
      icon: Award,
      color: 'orange'
    },
    {
      id: 5,
      type: 'SYSTEM',
      title: 'Profile Tip',
      message: 'Adding 3 more skills can boost your visibility to recruiters by 40%.',
      time: '3 days ago',
      read: true,
      icon: Bell,
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
    if (activeTab === 'APPLICATIONS') return n.type === 'APPLICATION' || n.type === 'INTERVIEW'
    if (activeTab === 'PRACTICE') return n.type === 'PRACTICE' || n.type === 'ACHIEVEMENT'
    return true
  })

  const getColorClasses = (color, isRead) => {
    if (isRead) return 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      gray: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
    }
    return colorMap[color] || colorMap.gray
  }

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
          <p className="text-gray-500 dark:text-gray-400 mt-1">Stay updated on your applications and practice progress.</p>
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

      <div className="bg-white dark:bg-[#121826] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Tabs */}
        <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-800 hide-scrollbar">
          {['ALL', 'UNREAD', 'APPLICATIONS', 'PRACTICE'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab 
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/50'
              }`}
            >
              {tab.charAt(0) + tab.slice(1).toLowerCase()}
            </button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="divide-y divide-gray-100 dark:divide-gray-800/50">
          {filteredNotifications.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900/50 rounded-full flex items-center justify-center mb-4">
                <Bell className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">All caught up!</h3>
              <p className="text-gray-500 dark:text-gray-400">You don't have any notifications in this section.</p>
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`p-4 sm:p-6 flex items-start gap-4 transition-colors ${
                  notification.read 
                    ? 'hover:bg-gray-50 dark:hover:bg-gray-800/30' 
                    : 'bg-blue-50/30 dark:bg-blue-900/10 hover:bg-blue-50/50 dark:hover:bg-blue-900/20'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${getColorClasses(notification.color, notification.read)}`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-1">
                    <h4 className={`text-sm font-bold truncate ${notification.read ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white'}`}>
                      {notification.title}
                    </h4>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-500 whitespace-nowrap shrink-0">
                      {notification.time}
                    </span>
                  </div>
                  <p className={`text-sm line-clamp-2 sm:line-clamp-none ${notification.read ? 'text-gray-500 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
                    {notification.message}
                  </p>
                </div>
                
                {!notification.read && (
                  <button 
                    onClick={() => markAsRead(notification.id)}
                    className="shrink-0 p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-colors"
                    title="Mark as read"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                )}
                
                <button className="shrink-0 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-lg transition-colors sm:hidden">
                   <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
