import { Navigate, Outlet } from 'react-router-dom'
import useAuthStore from '../stores/authStore'

const ProtectedRoute = ({ allowedRoles = [] }) => {
  const { isAuthenticated, user } = useAuthStore()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    // If user role is not authorized, redirect to their respective dashboard
    const redirectPath = user?.role === 'RECRUITER' 
      ? '/recruiter/dashboard' 
      : user?.role === 'ADMIN' 
        ? '/admin/dashboard' 
        : '/student/dashboard'
        
    return <Navigate to={redirectPath} replace />
  }

  return <Outlet />
}

export default ProtectedRoute
