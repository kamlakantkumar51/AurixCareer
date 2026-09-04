import express from 'express'
import { getProfile, updateProfile } from '../controllers/studentController.js'
import { protect, authorize } from '../middleware/auth.js'

const router = express.Router()

// All routes require authentication and STUDENT role
router.use(protect, authorize('STUDENT'))

router.route('/profile')
  .get(getProfile)
  .patch(updateProfile)

export default router
