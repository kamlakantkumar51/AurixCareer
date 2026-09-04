import express from 'express'
import { startAssessment, submitAssessment } from '../controllers/assessmentController.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

router.post('/start', protect, startAssessment)
router.post('/submit', protect, submitAssessment)

export default router
