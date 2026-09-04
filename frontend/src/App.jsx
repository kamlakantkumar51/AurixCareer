import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import RecruiterLandingPage from './pages/RecruiterLandingPage'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import ResetPasswordPage from './pages/ResetPasswordPage'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardLayout from './layouts/DashboardLayout'
import StudentDashboard from './pages/student/Dashboard'
import ProfilePage from './pages/student/ProfilePage'
import ResumesPage from './pages/student/ResumesPage'
import JobsDashboard from './pages/student/JobsDashboard'
import JobDetailsPage from './pages/student/JobDetailsPage'
import ApplicationTracker from './pages/student/ApplicationTracker'
import PracticeDashboard from './pages/student/PracticeDashboard'
import NotesDashboard from './pages/student/NotesDashboard'
import SavedPage from './pages/student/SavedPage'
import CareerNavigator from './pages/student/CareerNavigator'
import QuizPlayer from './pages/student/QuizPlayer'
import AssessmentPlayer from './pages/student/AssessmentPlayer'
import StudentNotifications from './pages/student/StudentNotifications'
import useAuthStore from './stores/authStore'
import useThemeStore from './stores/themeStore'

import RecruiterDashboard from './pages/recruiter/RecruiterDashboard'
import RecruiterJobs from './pages/recruiter/RecruiterJobs'
import CreateJob from './pages/recruiter/CreateJob'
import JobApplications from './pages/recruiter/JobApplications'
import GlobalApplications from './pages/recruiter/GlobalApplications'
import RecruiterInterviews from './pages/recruiter/RecruiterInterviews'
import RecruiterSearch from './pages/recruiter/RecruiterSearch'
import CompanyProfile from './pages/recruiter/CompanyProfile'
import RecruiterProfile from './pages/recruiter/RecruiterProfile'
import RecruiterNotifications from './pages/recruiter/RecruiterNotifications'
import RecruiterAnalytics from './pages/recruiter/RecruiterAnalytics'

// Dummy Dashboard Components for routing testing
const AdminDashboard = () => <div className="p-8 text-2xl">Admin Dashboard (Protected)</div>

function App() {
  const { isAuthenticated, user } = useAuthStore()
  const { theme } = useThemeStore()

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          isAuthenticated
            ? <Navigate to={`/${user?.role?.toLowerCase() || 'student'}/dashboard`} />
            : <Navigate to="/login" />
        } />

        <Route path="/login" element={
          isAuthenticated
            ? <Navigate to={`/${user?.role?.toLowerCase() || 'student'}/dashboard`} />
            : <LoginPage />
        } />

        <Route path="/register" element={
          isAuthenticated
            ? <Navigate to={`/${user?.role?.toLowerCase() || 'student'}/dashboard`} />
            : <RegisterPage />
        } />

        <Route path="/recruiter-landing" element={
          isAuthenticated
            ? <Navigate to={`/${user?.role?.toLowerCase() || 'student'}/dashboard`} />
            : <RecruiterLandingPage />
        } />

        <Route path="/forgot-password" element={
          isAuthenticated
            ? <Navigate to={`/${user?.role?.toLowerCase() || 'student'}/dashboard`} />
            : <ForgotPasswordPage />
        } />

        <Route path="/reset-password/:token" element={
          isAuthenticated
            ? <Navigate to={`/${user?.role?.toLowerCase() || 'student'}/dashboard`} />
            : <ResetPasswordPage />
        } />

        {/* Protected Student Routes */}
        <Route element={<ProtectedRoute allowedRoles={['STUDENT']} />}>
          <Route path="/student/assessment/:subjectId/:partId" element={<AssessmentPlayer />} />
          <Route element={<DashboardLayout />}>
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/profile" element={<ProfilePage />} />
            <Route path="/student/resumes" element={<ResumesPage />} />
            <Route path="/student/jobs" element={<JobsDashboard />} />
            <Route path="/student/jobs/:id" element={<JobDetailsPage />} />
            <Route path="/student/applications" element={<ApplicationTracker />} />
            <Route path="/student/practice" element={<PracticeDashboard />} />
            <Route path="/student/practice/quiz/:subjectId/:partId" element={<QuizPlayer />} />
            <Route path="/student/notes" element={<NotesDashboard />} />
            <Route path="/student/saved" element={<SavedPage />} />
            <Route path="/student/navigator" element={<CareerNavigator />} />
            <Route path="/student/notifications" element={<StudentNotifications />} />
            {/* Additional student routes will go here */}
          </Route>
        </Route>

        {/* Protected Recruiter Routes */}
        <Route element={<ProtectedRoute allowedRoles={['RECRUITER']} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/recruiter/dashboard" element={<RecruiterDashboard />} />
            <Route path="/recruiter/jobs" element={<RecruiterJobs />} />
            <Route path="/recruiter/jobs/create" element={<CreateJob />} />
            <Route path="/recruiter/jobs/:id/edit" element={<CreateJob />} />
            <Route path="/recruiter/jobs/:id/applications" element={<JobApplications />} />
            <Route path="/recruiter/applications" element={<GlobalApplications />} />
            <Route path="/recruiter/interviews" element={<RecruiterInterviews />} />
            <Route path="/recruiter/candidates" element={<RecruiterSearch />} />
            <Route path="/recruiter/search" element={<RecruiterSearch />} />
            <Route path="/recruiter/analytics" element={<RecruiterAnalytics />} />
            <Route path="/recruiter/company" element={<CompanyProfile />} />
            <Route path="/recruiter/company-profile" element={<CompanyProfile />} />
            <Route path="/recruiter/profile" element={<RecruiterProfile />} />
            <Route path="/recruiter/notifications" element={<RecruiterNotifications />} />
          </Route>
        </Route>

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['ADMIN']} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Route>

      </Routes>
    </Router>
  )
}

export default App
