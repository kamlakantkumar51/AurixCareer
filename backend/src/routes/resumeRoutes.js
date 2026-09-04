import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { 
  uploadResume, 
  getMyResumes, 
  deleteResume,
  getResume,
  updateResumeMetadata,
  replaceResumeFile,
  downloadResume,
  setPrimaryResume
} from '../controllers/resumeController.js'
import { protect, authorize } from '../middleware/auth.js'

const router = express.Router()

// Ensure uploads directory exists
const uploadDir = 'uploads'
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir)
}

// Setup multer storage
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(null, `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit as per requirement
  fileFilter: (req, file, cb) => {
    const filetypes = /pdf|doc|docx/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)

    if (extname && mimetype) {
      return cb(null, true)
    } else {
      cb(new Error('Only PDF or Word documents are allowed!'))
    }
  }
})

router.use(protect, authorize('STUDENT'))

router.route('/')
  .post(upload.single('resume'), uploadResume)
  .get(getMyResumes)

router.route('/:id')
  .get(getResume)
  .put(updateResumeMetadata)
  .delete(deleteResume)

router.route('/:id/file')
  .put(upload.single('resume'), replaceResumeFile)

router.route('/:id/download')
  .get(downloadResume)

router.route('/:id/primary')
  .patch(setPrimaryResume)

export default router
