import express from 'express';
import { protect } from '../middleware/auth.js';
import { 
  getRecommendedJobs, 
  getJobsSearch,
  saveJob,
  applyJob,
  getSavedJobs,
  getAppliedJobs
} from '../controllers/jobController.js';

const router = express.Router();

router.get('/recommended', protect, getRecommendedJobs);
router.get('/search', protect, getJobsSearch);
router.get('/saved', protect, getSavedJobs);
router.get('/applied', protect, getAppliedJobs);

router.post('/:id/save', protect, saveJob);
router.post('/:id/apply', protect, applyJob);

export default router;
