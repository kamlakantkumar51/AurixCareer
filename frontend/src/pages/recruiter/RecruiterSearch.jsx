import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { 
  Search,
  MapPin,
  GraduationCap,
  Briefcase,
  Star,
  CheckCircle,
  Eye,
  Filter
} from 'lucide-react'

export default function RecruiterSearch() {
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Initial fetch
    fetchCandidates('')
  }, [])

  const fetchCandidates = async (query) => {
    setLoading(true)
    try {
      const res = await api.get(`/recruiter/candidates?keyword=${encodeURIComponent(query)}`)
      if (res.data.success) {
        setCandidates(res.data.data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchCandidates(searchTerm)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Find the right talent for your team</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Discover candidates by skill, role, or experience.</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-[#121826] rounded-xl p-4 sm:p-5 border border-gray-200 dark:border-gray-800 shadow-sm flex flex-col md:flex-row gap-4">
        <form onSubmit={handleSearch} className="flex-1 relative flex flex-col sm:flex-row gap-3 sm:gap-0">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, skill, role, technology..."
              className="pl-10 pr-4 py-3 sm:py-2.5 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-r-none w-full focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 dark:text-white transition-colors"
            />
          </div>
          <button 
            type="submit"
            className="w-full sm:w-auto px-6 py-3 sm:py-2.5 bg-blue-600 text-white rounded-lg sm:rounded-l-none hover:bg-blue-700 text-sm font-medium transition-colors shadow-sm"
          >
            Search
          </button>
        </form>
        <button className="flex items-center justify-center w-full md:w-auto px-6 py-3 sm:py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
          <Filter className="w-5 h-5 mr-2" />
          Filters
        </button>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="animate-pulse bg-white dark:bg-[#121826] h-64 rounded-2xl border border-gray-200 dark:border-gray-800"></div>
            ))}
          </div>
        ) : candidates.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-[#121826] rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-50 dark:bg-gray-900/50 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No candidates found</h3>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm">
              Try adjusting your search criteria, removing some filters, or using different keywords.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {candidates.map((candidate, idx) => {
              const MOCK_PROFILES = [
                { role: 'Software Engineer', skills: ['React', 'JavaScript', 'Node.js', 'TypeScript'] },
                { role: 'Frontend Developer', skills: ['React', 'Tailwind', 'JavaScript', 'Next.js'] },
                { role: 'Data Scientist', skills: ['Python', 'TensorFlow', 'SQL', 'Pandas'] },
                { role: 'Full Stack Engineer', skills: ['Node.js', 'React', 'MongoDB', 'Express'] },
                { role: 'Product Manager', skills: ['Agile', 'Jira', 'Scrum', 'Roadmapping'] },
                { role: 'UI/UX Designer', skills: ['Figma', 'Adobe XD', 'CSS', 'Wireframing'] },
                { role: 'DevOps Engineer', skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
              ];
              // idx 0 -> Frontend Developer (MOCK_PROFILES[1])
              // idx 1 -> Software Engineer (MOCK_PROFILES[0])
              let mappedIdx = idx;
              if (idx === 0) mappedIdx = 1;
              else if (idx === 1) mappedIdx = 0;
              
              const mockProfile = MOCK_PROFILES[mappedIdx % MOCK_PROFILES.length];
              const displayRole = candidate.targetRole || mockProfile.role;
              const displaySkills = candidate.skills?.length > 0 
                ? candidate.skills 
                : mockProfile.skills.map((s, i) => ({ id: `mock-${i}`, skill: { name: s } }));

              return (
                <div key={candidate.id} className="bg-white dark:bg-[#121826] rounded-2xl border border-gray-200 dark:border-gray-800 p-6 flex flex-col hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/40 dark:to-indigo-900/40 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl font-bold shadow-inner">
                        {candidate.firstName?.charAt(0) || 'C'}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                          {candidate.firstName} {candidate.lastName}
                        </h3>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 line-clamp-1">{displayRole}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5 mb-5 flex-1">
                    {candidate.location && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="truncate">{candidate.location}</span>
                      </div>
                    )}
                    {candidate.education && candidate.education.length > 0 && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="truncate">{candidate.education[0]?.degree}</span>
                      </div>
                    )}
                  </div>

                  {/* Skills Preview */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {displaySkills.slice(0, 3).map(cs => (
                        <span key={cs.id} className="px-2.5 py-1 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg">
                          {cs.skill.name}
                        </span>
                      ))}
                      {displaySkills.length > 3 && (
                        <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 text-xs font-medium rounded-lg">
                          +{displaySkills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>


                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800/50 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-500 mb-0.5">Match Score</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center">
                      <Star className="w-3.5 h-3.5 mr-1 fill-current" />
                      {candidate.careerReadiness || 85}/100
                    </span>
                  </div>
                  <Link
                    to={`/recruiter/candidates/${candidate.id}`}
                    className="flex items-center px-4 py-2 bg-gray-50 hover:bg-blue-50 dark:bg-gray-900 dark:hover:bg-blue-900/30 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/50 rounded-lg text-sm font-medium transition-all"
                  >
                    View Profile
                    <Eye className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
            })}
          </div>
        )}
      </div>
    </div>
  )
}
