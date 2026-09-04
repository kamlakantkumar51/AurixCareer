import express from 'express'
import { protect, authorize } from '../middleware/auth.js'
import {
  getDashboardAnalytics,
  createJob,
  getMyJobs,
  getJobById,
  updateJob,
  deleteJob,
  getJobApplications,
  updateApplicationStatus,
  getCandidateProfile,
  searchCandidates,
  getCompanyProfile,
  updateCompanyProfile,
  getRecruiterProfile,
  updateRecruiterProfile,
  getInterviews,
  createInterview,
  updateInterview,
  getAnalytics
} from '../controllers/recruiterController.js'

const router = express.Router()

// All recruiter routes are protected and restricted to RECRUITER role
router.use(protect)
router.use(authorize('RECRUITER'))

router.get('/dashboard', getDashboardAnalytics)
router.get('/analytics', getAnalytics)

// Jobs
router.route('/jobs')
  .get(getMyJobs)
  .post(createJob)

router.route('/jobs/:id')
  .get(getJobById)
  .put(updateJob)
  .delete(deleteJob)

// Applications
router.get('/jobs/:id/applications', getJobApplications)
router.patch('/applications/:appId/status', updateApplicationStatus)

// Interviews
router.route('/interviews')
  .get(getInterviews)
  .post(createInterview)

router.route('/interviews/:id')
  .put(updateInterview)

// Candidates
router.get('/candidates', searchCandidates)
router.get('/candidates/:candidateId', getCandidateProfile)

// Profiles
router.route('/company')
  .get(getCompanyProfile)
  .put(updateCompanyProfile)

router.route('/profile')
  .get(getRecruiterProfile)
  .put(updateRecruiterProfile)

export default router
