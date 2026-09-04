import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { 
  Briefcase, 
  Users, 
  CheckCircle, 
  Calendar,
  TrendingUp,
  ArrowRight,
  Plus,
  Search,
  FileText,
  Video,
  MoreVertical,
  Star,
  Check,
  Bookmark
} from 'lucide-react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line
} from 'recharts'
import useAuthStore from '../../stores/authStore'

const METRIC_COLORS = {
  Briefcase: { bg: 'from-blue-500/20 to-cyan-500/10', icon: 'text-blue-400', border: 'hover:border-blue-500/30', glow: 'hover:shadow-blue-500/10' },
  FileText:  { bg: 'from-violet-500/20 to-purple-500/10', icon: 'text-violet-400', border: 'hover:border-violet-500/30', glow: 'hover:shadow-violet-500/10' },
  Bookmark:  { bg: 'from-amber-500/20 to-yellow-500/10', icon: 'text-amber-400', border: 'hover:border-amber-500/30', glow: 'hover:shadow-amber-500/10' },
  Calendar:  { bg: 'from-emerald-500/20 to-teal-500/10', icon: 'text-emerald-400', border: 'hover:border-emerald-500/30', glow: 'hover:shadow-emerald-500/10' },
  Users:     { bg: 'from-rose-500/20 to-pink-500/10', icon: 'text-rose-400', border: 'hover:border-rose-500/30', glow: 'hover:shadow-rose-500/10' },
}

const MetricCard = ({ title, value, icon: Icon, trend, trendUp, data }) => {
  const colors = METRIC_COLORS[Icon?.displayName || Icon?.name] || METRIC_COLORS.Briefcase
  return (
    <div className={`card-3d shimmer-on-hover gradient-border-top bg-white dark:bg-[#0f1724] rounded-2xl p-5 border border-gray-200 dark:border-gray-800/60 relative overflow-hidden group hover:border-gray-300 dark:${colors.border} transition-all duration-300 hover:shadow-xl ${colors.glow}`}>
      {/* Background glow orb */}
      <div className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none`} />
      
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center space-x-3">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${colors.bg} ${colors.icon} ring-1 ring-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
        </div>
      </div>
      
      <div className="mt-4 relative z-10 flex items-end justify-between">
        <div>
          <p className="text-3xl font-bold text-gray-900 dark:text-white mb-1 anim-count-up tabular-nums">{value}</p>
          {trend && (
            <p className={`text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-emerald-500 dark:text-emerald-400' : 'text-gray-400'}`}>
              <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-[10px] ${trendUp ? 'bg-emerald-500/15' : 'bg-gray-500/15'}`}>{trendUp ? '↑' : '↓'}</span>
              {trend}
            </p>
          )}
        </div>
        
        {data && (
          <div className="w-24 h-12 opacity-70 group-hover:opacity-100 transition-opacity">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={trendUp ? '#34D399' : '#8B5CF6'} 
                  strokeWidth={2} 
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}

export default function RecruiterDashboard() {
  const { user } = useAuthStore()
  const [stats, setStats] = useState({
    activeJobs: 0,
    totalApplications: 0,
    shortlisted: 0,
    interviews: 0,
    hired: 0
  })
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('30')

  const sparklineData1 = [{value: 10}, {value: 20}, {value: 15}, {value: 30}, {value: 25}, {value: 40}]
  const sparklineData2 = [{value: 20}, {value: 10}, {value: 30}, {value: 20}, {value: 40}, {value: 30}]
  const sparklineData3 = [{value: 5}, {value: 15}, {value: 10}, {value: 25}, {value: 20}, {value: 35}]
  const sparklineData4 = [{value: 30}, {value: 20}, {value: 40}, {value: 30}, {value: 10}, {value: 20}]

  useEffect(() => {
    const fetchStats = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
        // Mock static response
        setStats({
          activeJobs: 2,
          totalApplications: 15,
          shortlisted: 5,
          interviews: 2,
          hired: 1,
          chartData: [
            { name: 'Mon', applications: 2 },
            { name: 'Tue', applications: 5 },
            { name: 'Wed', applications: 3 },
            { name: 'Thu', applications: 8 },
            { name: 'Fri', applications: 15 },
          ],
          aiInsights: {
            topCandidate: {
              firstName: 'Rahul',
              lastName: 'Sharma',
              title: 'Frontend Developer',
              matchScore: 94
            },
            matchedSkills: ['React', 'JavaScript', 'Node.js'],
            skillsToImprove: ['AWS']
          }
        });
      } catch (error) {
        console.error('Error fetching dashboard stats:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [timeRange])

  if (loading) {
    return (
      <div className="animate-pulse space-y-8">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-[#121826] rounded-2xl border border-gray-100 dark:border-gray-800"></div>
          ))}
        </div>
        <div className="h-64 bg-gray-200 dark:bg-[#121826] rounded-2xl border border-gray-100 dark:border-gray-800"></div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 anim-fade-up">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Good morning, {user?.email?.split('@')[0]} <span className="text-2xl">👋</span>
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Manage your hiring pipeline and discover the best talent.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            to="/recruiter/search"
            className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-all text-sm shadow-sm card-press"
          >
            <Search className="w-4 h-4 mr-2" />
            Find Candidates
          </Link>
          <Link
            to="/recruiter/jobs/create"
            className="flex items-center justify-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-500 hover:to-indigo-500 font-medium transition-all text-sm shadow-sm btn-glow-blue card-press"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create Job
          </Link>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 stagger">
        <MetricCard 
          title="Active Jobs" 
          value={stats.activeJobs || 8} 
          icon={Briefcase}
          trend="2 this week"
          trendUp={true}
          data={sparklineData1}
        />
        <MetricCard 
          title="Total Applications" 
          value={stats.totalApplications || 128} 
          icon={FileText}
          trend="12% this month"
          trendUp={true}
          data={sparklineData2}
        />
        <MetricCard 
          title="Shortlisted" 
          value={stats.shortlisted || 24} 
          icon={Bookmark}
          trend="8% this month"
          trendUp={true}
          data={sparklineData3}
        />
        <MetricCard 
          title="Interviews" 
          value={stats.interviews || 12} 
          icon={Calendar}
          trend="4% this month"
          trendUp={true}
          data={sparklineData4}
        />
      </div>

      {/* Analytics, Funnel & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Applications Over Time</h3>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300 py-1.5 pl-3 pr-8 appearance-none outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-auto"
            >
              <option value="7">7 Days</option>
              <option value="30">30 Days</option>
              <option value="90">90 Days</option>
            </select>
          </div>
          <div className="h-[200px] sm:h-[250px] -ml-4 sm:-ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stats.chartData || []} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorApplications" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#374151" opacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 11}} dy={10} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#6B7280', fontSize: 11}} 
                  allowDecimals={false}
                  domain={[0, dataMax => (dataMax === 0 ? 10 : 'auto')]}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.5rem', color: '#F9FAFB' }}
                  itemStyle={{ color: '#60A5FA' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="applications" 
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorApplications)" 
                  activeDot={{ r: 6, fill: '#3B82F6', stroke: '#fff', strokeWidth: 2 }}
                  dot={{ r: 4, fill: '#3B82F6', strokeWidth: 0 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Funnel */}
        <div className="bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Recruitment Funnel</h3>
            <select 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-xs rounded-lg text-gray-700 dark:text-gray-300 py-1.5 pl-3 pr-8 appearance-none outline-none focus:ring-1 focus:ring-blue-500 w-full sm:w-auto"
            >
              <option value="7">7 Days</option>
              <option value="30">30 Days</option>
              <option value="90">90 Days</option>
            </select>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 h-auto sm:h-64 relative pb-4">
            
            {/* Layer 1 */}
            <div className="w-full flex items-center justify-between sm:justify-center relative group">
              <div className="h-10 sm:h-12 w-[60%] sm:w-[90%] bg-blue-500 rounded-sm sm:rounded-none sm:clip-path-funnel-1" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }}></div>
              <div className="absolute right-0 sm:right-auto sm:translate-x-32 flex flex-col sm:flex-row items-end sm:items-center space-x-0 sm:space-x-2">
                <span className="text-gray-900 dark:text-white font-bold text-sm">{stats.totalApplications}</span>
                <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1 hidden sm:block"></span>Apps</span>
              </div>
            </div>
            
            {/* Layer 2 */}
            <div className="w-full flex items-center justify-between sm:justify-center relative">
              <div className="h-10 sm:h-12 w-[50%] sm:w-[70%] bg-emerald-500 rounded-sm sm:rounded-none sm:clip-path-funnel-2" style={{ clipPath: 'polygon(5% 0%, 95% 0%, 85% 100%, 15% 100%)' }}></div>
              <div className="absolute right-0 sm:right-auto sm:translate-x-24 flex flex-col sm:flex-row items-end sm:items-center space-x-0 sm:space-x-2">
                <span className="text-gray-900 dark:text-white font-bold text-sm">{stats.shortlisted} <span className="text-gray-400 dark:text-gray-500 font-normal text-xs hidden sm:inline">({stats.totalApplications ? Math.round((stats.shortlisted/stats.totalApplications)*100) : 0}%)</span></span>
                <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 hidden sm:block"></span>Shortlist</span>
              </div>
            </div>

            {/* Layer 3 */}
            <div className="w-full flex items-center justify-between sm:justify-center relative">
              <div className="h-10 sm:h-12 w-[40%] sm:w-[50%] bg-orange-500 rounded-sm sm:rounded-none sm:clip-path-funnel-3" style={{ clipPath: 'polygon(7% 0%, 93% 0%, 80% 100%, 20% 100%)' }}></div>
              <div className="absolute right-0 sm:right-auto sm:translate-x-16 flex flex-col sm:flex-row items-end sm:items-center space-x-0 sm:space-x-2">
                <span className="text-gray-900 dark:text-white font-bold text-sm">{stats.interviews} <span className="text-gray-400 dark:text-gray-500 font-normal text-xs hidden sm:inline">({stats.totalApplications ? Math.round((stats.interviews/stats.totalApplications)*100) : 0}%)</span></span>
                <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-1 hidden sm:block"></span>Interview</span>
              </div>
            </div>

            {/* Layer 4 */}
            <div className="w-full flex items-center justify-between sm:justify-center relative">
              <div className="h-10 sm:h-12 w-[30%] sm:w-[30%] bg-purple-500 rounded-sm sm:rounded-none sm:clip-path-funnel-4" style={{ clipPath: 'polygon(10% 0%, 90% 0%, 75% 100%, 25% 100%)' }}></div>
              <div className="absolute right-0 sm:right-auto sm:translate-x-12 flex flex-col sm:flex-row items-end sm:items-center space-x-0 sm:space-x-2">
                <span className="text-gray-900 dark:text-white font-bold text-sm">{stats.hired} <span className="text-gray-400 dark:text-gray-500 font-normal text-xs hidden sm:inline">({stats.totalApplications ? Math.round((stats.hired/stats.totalApplications)*100) : 0}%)</span></span>
                <span className="text-gray-500 dark:text-gray-400 text-xs flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1 hidden sm:block"></span>Hired</span>
              </div>
            </div>

          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3 flex-1 flex flex-col justify-between">
            <Link to="/recruiter/jobs/create" className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 hover:bg-blue-50 dark:hover:bg-gray-800/40 border border-transparent dark:border-gray-800 hover:border-blue-100 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-white">Create Job</p>
                <p className="text-xs text-gray-500">Post a new job opening</p>
              </div>
            </Link>
            
            <Link to="/recruiter/search" className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 hover:bg-purple-50 dark:hover:bg-gray-800/40 border border-transparent dark:border-gray-800 hover:border-purple-100 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-white">Find Candidates</p>
                <p className="text-xs text-gray-500">Search from our talent pool</p>
              </div>
            </Link>

            <Link to="/recruiter/applications" className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 hover:bg-emerald-50 dark:hover:bg-gray-800/40 border border-transparent dark:border-gray-800 hover:border-emerald-100 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-white">Review Applications</p>
                <p className="text-xs text-gray-500">Check pending applications</p>
              </div>
            </Link>

            <Link to="/recruiter/interviews" className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/20 hover:bg-orange-50 dark:hover:bg-gray-800/40 border border-transparent dark:border-gray-800 hover:border-orange-100 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-200 group-hover:text-orange-600 dark:group-hover:text-white">Schedule Interview</p>
                <p className="text-xs text-gray-500">Plan interviews easily</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-1 bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Recent Applications</h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white border border-blue-200 dark:border-gray-700 bg-blue-50 dark:bg-transparent px-3 py-1.5 rounded-lg transition-colors">View All</button>
          </div>
          
          <div className="space-y-4">
            <div className="hidden sm:grid grid-cols-5 text-xs text-gray-500 font-medium mb-2 px-2">
              <div className="col-span-2">Candidate</div>
              <div>Job Position</div>
              <div>Match</div>
              <div className="text-right">Status</div>
            </div>
            
            {[
              { name: 'Rahul Sharma', email: 'rahulsharma@gmail.com', role: 'Frontend Developer', match: 92, status: 'Shortlisted', statusColor: 'emerald', time: '2h ago', img: 'R' },
              { name: 'Ankit Kumar', email: 'ankitkumar@gmail.com', role: 'MERN Developer', match: 87, status: 'Under Review', statusColor: 'blue', time: '5h ago', img: 'A' },
              { name: 'Priya Singh', email: 'priyasingh@gmail.com', role: 'UI/UX Designer', match: 81, status: 'Interview', statusColor: 'purple', time: '1d ago', img: 'P' },
              { name: 'Neeraj Verma', email: 'neerajverma@gmail.com', role: 'Backend Developer', match: 76, status: 'Under Review', statusColor: 'blue', time: '1d ago', img: 'N' },
            ].map((app, i) => (
              <div key={i} className="flex flex-col sm:grid sm:grid-cols-5 gap-3 sm:gap-0 items-start sm:items-center p-3 sm:p-2 hover:bg-gray-50 dark:hover:bg-gray-800/30 border sm:border-none border-gray-100 dark:border-gray-800 rounded-xl transition-colors group">
                <div className="col-span-2 flex items-center space-x-3 w-full">
                  <div className="w-10 h-10 sm:w-8 sm:h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-sm sm:text-xs font-bold text-gray-700 dark:text-white relative shrink-0">
                    {app.img}
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-white dark:border-[#121826] rounded-full"></div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">{app.name}</p>
                    <p className="text-[10px] text-gray-500 truncate">{app.email}</p>
                  </div>
                  <div className="sm:hidden flex items-center justify-end">
                    <span className={`text-[10px] font-medium px-2 py-1 rounded-md bg-${app.statusColor}-50 text-${app.statusColor}-600 dark:bg-${app.statusColor}-900/30 dark:text-${app.statusColor}-400 border border-${app.statusColor}-200 dark:border-${app.statusColor}-900/50`}>
                      {app.status}
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 truncate pr-2 sm:block hidden">{app.role}</div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 sm:block hidden">{app.match}%</div>
                <div className="text-right flex items-center justify-end space-x-3 sm:col-span-1 col-span-full w-full sm:w-auto">
                  <span className={`hidden sm:inline-block text-[10px] font-medium px-2 py-1 rounded-md bg-${app.statusColor}-50 text-${app.statusColor}-600 dark:bg-${app.statusColor}-900/30 dark:text-${app.statusColor}-400 border border-${app.statusColor}-200 dark:border-${app.statusColor}-900/50`}>
                    {app.status}
                  </span>
                  <div className="sm:hidden flex w-full justify-between items-center text-xs">
                    <span className="text-gray-500">{app.role}</span>
                    <span className="font-bold text-emerald-600">{app.match}% Match</span>
                  </div>
                  <button className="hidden sm:block text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">Upcoming Interviews</h3>
            <button className="text-xs text-blue-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white border border-blue-200 dark:border-gray-700 bg-blue-50 dark:bg-transparent px-3 py-1.5 rounded-lg transition-colors">View Calendar</button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-3">Today</h4>
              <div className="space-y-3">
                {[
                  { time: '10:30 AM', name: 'Rahul Sharma', role: 'Frontend Developer', type: 'Technical Interview', img: 'R' },
                  { time: '02:00 PM', name: 'Priya Singh', role: 'MERN Developer', type: 'HR Interview', img: 'P' },
                ].map((interview, i) => (
                  <div key={i} className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-gray-700 bg-gray-50 dark:bg-gray-800/10 transition-colors">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-400 leading-tight">{interview.time.replace(' ', '\n')}</div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-white shrink-0">
                      {interview.img}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-200 truncate">{interview.name}</p>
                      <p className="text-[10px] text-gray-500 truncate">{interview.role} • {interview.type}</p>
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors shrink-0">
                      <Video className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-semibold text-gray-500 mb-3">Tomorrow</h4>
              <div className="space-y-3">
                {[
                  { time: '11:00 AM', name: 'Ankit Kumar', role: 'Backend Developer', type: 'Technical Interview', img: 'A' },
                ].map((interview, i) => (
                  <div key={i} className="flex items-center space-x-3 sm:space-x-4 p-3 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-gray-700 bg-gray-50 dark:bg-gray-800/10 transition-colors">
                    <div className="w-14 sm:w-16 text-[10px] sm:text-xs font-bold text-gray-700 dark:text-gray-400 leading-tight">{interview.time.replace(' ', '\n')}</div>
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center text-xs font-bold text-blue-700 dark:text-white shrink-0">
                      {interview.img}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-200 truncate">{interview.name}</p>
                      <p className="text-[10px] text-gray-500 truncate">{interview.role} • {interview.type}</p>
                    </div>
                    <button className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition-colors shrink-0">
                      <Video className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Hiring Insights */}
        {stats.aiInsights && (
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-[#121826] dark:to-[#121826] rounded-2xl p-4 sm:p-6 border border-blue-100 dark:border-gray-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-5 dark:opacity-10 pointer-events-none">
              <Star className="w-24 h-24 text-blue-600 dark:text-blue-500" />
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">AI Hiring Insights</h3>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-900/50">Beta</span>
            </div>
            
            <div className="space-y-6 relative z-10">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Top Matched Candidate</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-white dark:bg-gray-800/30 border border-gray-200 dark:border-gray-700/50 gap-3 sm:gap-0 shadow-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-gray-700 flex items-center justify-center text-sm font-bold text-blue-700 dark:text-white shrink-0">
                      {stats.aiInsights.topCandidate.firstName.charAt(0)}{stats.aiInsights.topCandidate.lastName ? stats.aiInsights.topCandidate.lastName.charAt(0) : ''}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-200 truncate">{stats.aiInsights.topCandidate.firstName} {stats.aiInsights.topCandidate.lastName}</p>
                      <p className="text-[10px] text-gray-500 truncate">{stats.aiInsights.topCandidate.title}</p>
                    </div>
                  </div>
                  <div className="self-end sm:self-auto px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/50 rounded-lg text-xs font-bold shrink-0">
                    {stats.aiInsights.topCandidate.matchScore}% Match
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Skills Matched</p>
                <div className="flex flex-wrap gap-2">
                  {stats.aiInsights.matchedSkills.map((skill, i) => (
                    <span key={i} className="flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30">
                      <Check className="w-3 h-3 mr-1" /> {skill}
                    </span>
                  ))}
                </div>
              </div>

              {stats.aiInsights.skillsToImprove.length > 0 && (
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Skills to Improve</p>
                  <div className="flex flex-wrap gap-2">
                    {stats.aiInsights.skillsToImprove.map((skill, i) => (
                      <span key={i} className="flex items-center px-2.5 py-1 text-xs font-medium rounded-md bg-orange-50 dark:bg-orange-900/10 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-900/30">
                        <Plus className="w-3 h-3 mr-1" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              <Link to={`/recruiter/applications`} className="block w-full text-center py-2.5 mt-2 rounded-xl bg-blue-100 dark:bg-blue-600/10 text-blue-700 dark:text-blue-500 hover:bg-blue-200 dark:hover:bg-blue-600/20 text-sm font-bold transition-colors border border-blue-200 dark:border-blue-900/50">
                View All Applications
              </Link>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
