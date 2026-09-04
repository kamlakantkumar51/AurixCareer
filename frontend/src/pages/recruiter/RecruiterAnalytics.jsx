import { useState, useEffect } from 'react'
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  Eye, 
  CheckCircle,
  Briefcase
} from 'lucide-react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  Cell
} from 'recharts'
import api from '../../services/api'
import useAuthStore from '../../stores/authStore'

const StatCard = ({ title, value, icon: Icon, trend, trendUp }) => (
  <div className="bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm relative overflow-hidden">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{value}</p>
        {trend && (
          <p className={`text-xs font-medium flex items-center ${trendUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
            {trendUp ? '↑ ' : '↓ '}
            {trend}
          </p>
        )}
      </div>
      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400">
        <Icon className="w-6 h-6" />
      </div>
    </div>
  </div>
)

export default function RecruiterAnalytics() {
  const { user } = useAuthStore()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState('30')

  const getDummyData = (days) => {
    const trendData = [];
    let currentApps = 15;
    
    for (let i = parseInt(days); i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      currentApps += Math.floor(Math.random() * 10) - 4;
      if (currentApps < 5) currentApps = 5;
      
      trendData.push({
        name: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        date: d.toISOString().split('T')[0],
        applications: currentApps,
        views: currentApps * (Math.floor(Math.random() * 4) + 3)
      });
    }

    return {
      overview: { totalViews: 12450, totalApps: 842, conversionRate: 6.8 },
      trendData,
      statusCounts: { NEW: 350, REVIEW: 210, SHORTLISTED: 125, INTERVIEW: 80, OFFER: 45, HIRED: 32, REJECTED: 120 },
      jobPerformance: [
        { id: 1, title: 'Senior Frontend Developer', applications: 245, conversionRate: 4 },
        { id: 2, title: 'Backend Engineer (Node.js)', applications: 180, conversionRate: 6 },
        { id: 3, title: 'Product Designer', applications: 310, conversionRate: 3 },
        { id: 4, title: 'DevOps Specialist', applications: 107, conversionRate: 8 },
      ]
    };
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(getDummyData(timeRange))
      } catch (err) {
        console.error('Error fetching analytics:', err)
        setData(getDummyData(timeRange))
      } finally {
        setLoading(false)
      }
    }
    fetchAnalytics()
  }, [timeRange])

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto space-y-6 animate-pulse">
        <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded w-1/4"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {[1, 2, 3].map(i => <div key={i} className="h-32 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>)}
        </div>
        <div className="h-96 bg-gray-200 dark:bg-gray-800 rounded-2xl"></div>
      </div>
    )
  }

  if (!data) return <div className="text-center p-12 text-gray-500">Failed to load analytics</div>

  const statusColors = {
    NEW: '#3B82F6',
    REVIEW: '#8B5CF6',
    SHORTLISTED: '#10B981',
    INTERVIEW: '#F59E0B',
    OFFER: '#EC4899',
    HIRED: '#6366F1',
    REJECTED: '#EF4444'
  }

  const funnelData = Object.entries(data.statusCounts)
    .filter(([key, val]) => val > 0 && key !== 'REJECTED')
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            Analytics Overview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Track your recruitment performance and pipeline health.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="w-full sm:w-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 90 Days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <StatCard 
          title="Total Job Views" 
          value={data.overview.totalViews} 
          icon={Eye} 
          trend="12% vs last period" 
          trendUp={true} 
        />
        <StatCard 
          title="Total Applications" 
          value={data.overview.totalApps} 
          icon={Users} 
          trend="8% vs last period" 
          trendUp={true} 
        />
        <StatCard 
          title="Conversion Rate" 
          value={`${data.overview.conversionRate}%`} 
          icon={TrendingUp} 
          trend="2% vs last period" 
          trendUp={true} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Traffic vs Applications</h3>
          <div className="h-[300px] -ml-4 sm:-ml-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.trendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
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
                />
                <Area type="monotone" dataKey="views" name="Views" stroke="#8B5CF6" strokeWidth={2} fillOpacity={1} fill="url(#colorViews)" />
                <Area type="monotone" dataKey="applications" name="Applications" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#colorApps)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pipeline Distribution */}
        <div className="bg-white dark:bg-[#121826] rounded-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Pipeline Distribution</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={funnelData} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#374151" opacity={0.2} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 10}} width={80} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#1F2937', borderColor: '#374151', borderRadius: '0.5rem', color: '#F9FAFB' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={20}>
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={statusColors[entry.name] || '#3B82F6'} />
                  ))}
                </Bar>
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Job Performance Table */}
      <div className="bg-white dark:bg-[#121826] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Job Performance</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-800">
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Job Title</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Applications</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Conversion Rate</th>
                <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {data.jobPerformance.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3 shrink-0">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-gray-900 dark:text-white truncate max-w-[200px] sm:max-w-xs">{job.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700 dark:text-gray-300">
                    {job.applications}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-700 dark:text-gray-300 mr-2">{job.conversionRate}%</span>
                      <div className="w-16 sm:w-24 h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${job.conversionRate}%` }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="inline-flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Active
                    </span>
                  </td>
                </tr>
              ))}
              {data.jobPerformance.length === 0 && (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center text-gray-500">
                    No active jobs to track performance.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
