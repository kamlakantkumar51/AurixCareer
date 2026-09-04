import prisma from '../config/db.js'
import { mockAIParsing } from '../utils/aiMock.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// @desc    Upload a resume and get AI analysis
// @route   POST /api/resumes
// @access  Private (Student)
export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload a file' })
    }

    const studentProfile = await prisma.studentProfile.findUnique({
      where: { userId: req.user.id },
      include: { resumes: true }
    })

    if (!studentProfile) {
      return res.status(404).json({ success: false, message: 'Student profile not found. Please complete your profile first.' })
    }

    // 13. Maximum 5 Resume Enforcement
    if (studentProfile.resumes.length >= 5) {
      // Clean up the uploaded file since we reject the upload
      fs.unlinkSync(req.file.path)
      return res.status(400).json({ success: false, message: 'Maximum limit of 5 resumes reached. Delete an existing resume to upload a new one.' })
    }

    const isFirstResume = studentProfile.resumes.length === 0

    // Save Resume Record
    const resume = await prisma.resume.create({
      data: {
        studentProfileId: studentProfile.id,
        fileUrl: `/uploads/${req.file.filename}`,
        fileName: req.file.originalname,
        fileSize: req.file.size,
        title: req.body.title || req.file.originalname,
        isPrimary: isFirstResume
      }
    })

    // Perform Mock AI Analysis
    const analysisResult = await mockAIParsing(req.file.originalname)

    // Save Analysis Record
    const analysis = await prisma.resumeAnalysis.create({
      data: {
        resumeId: resume.id,
        studentProfileId: studentProfile.id,
        atsScore: analysisResult.atsScore,
        structuredData: analysisResult.structuredData,
        suggestions: analysisResult.suggestions
      }
    })

    res.status(201).json({
      success: true,
      data: {
        ...resume,
        analyses: [analysis]
      }
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Get all resumes for student
// @route   GET /api/resumes
// @access  Private (Student)
export const getMyResumes = async (req, res) => {
  try {
    const studentProfile = await prisma.studentProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!studentProfile) {
      return res.status(404).json({ success: false, message: 'Student profile not found.' })
    }

    const resumes = await prisma.resume.findMany({
      where: { studentProfileId: studentProfile.id },
      include: { analyses: true },
      orderBy: { createdAt: 'desc' }
    })

    res.json({ success: true, data: resumes })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Get single resume
// @route   GET /api/resumes/:id
// @access  Private (Student)
export const getResume = async (req, res) => {
  try {
    const resume = await prisma.resume.findUnique({
      where: { id: req.params.id },
      include: { studentProfile: true, analyses: true }
    })

    if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' })

    if (resume.studentProfile.userId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' })
    }

    res.json({ success: true, data: resume })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Update metadata
// @route   PUT /api/resumes/:id
// @access  Private (Student)
export const updateResumeMetadata = async (req, res) => {
  try {
    const { title, targetRole, description } = req.body

    const resume = await prisma.resume.findUnique({
      where: { id: req.params.id },
      include: { studentProfile: true }
    })

    if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' })
    
    if (resume.studentProfile.userId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' })
    }

    const updated = await prisma.resume.update({
      where: { id: req.params.id },
      data: { title, targetRole, description }
    })

    res.json({ success: true, data: updated })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Replace resume file
// @route   PUT /api/resumes/:id/file
// @access  Private (Student)
export const replaceResumeFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload a new file' })
    }

    const resume = await prisma.resume.findUnique({
      where: { id: req.params.id },
      include: { studentProfile: true }
    })

    if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' })

    if (resume.studentProfile.userId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' })
    }

    // Delete old file
    const oldFilePath = path.join(__dirname, '../../', resume.fileUrl)
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath)
    }

    const updated = await prisma.resume.update({
      where: { id: req.params.id },
      data: {
        fileUrl: `/uploads/${req.file.filename}`,
        fileName: req.file.originalname,
        fileSize: req.file.size
      }
    })

    // Optionally trigger AI re-analysis here

    res.json({ success: true, data: updated })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Download
// @route   GET /api/resumes/:id/download
// @access  Private (Student)
export const downloadResume = async (req, res) => {
  try {
    const resume = await prisma.resume.findUnique({
      where: { id: req.params.id },
      include: { studentProfile: true }
    })

    if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' })

    if (resume.studentProfile.userId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' })
    }

    const filePath = path.join(__dirname, '../../', resume.fileUrl)
    res.download(filePath, resume.fileName)
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Set primary
// @route   PATCH /api/resumes/:id/primary
// @access  Private (Student)
export const setPrimaryResume = async (req, res) => {
  try {
    const resume = await prisma.resume.findUnique({
      where: { id: req.params.id },
      include: { studentProfile: true }
    })

    if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' })

    if (resume.studentProfile.userId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' })
    }

    // Unset current primary
    await prisma.resume.updateMany({
      where: { studentProfileId: resume.studentProfileId, isPrimary: true },
      data: { isPrimary: false }
    })

    // Set new primary
    const updated = await prisma.resume.update({
      where: { id: req.params.id },
      data: { isPrimary: true }
    })

    res.json({ success: true, data: updated })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Delete a resume
// @route   DELETE /api/resumes/:id
// @access  Private (Student)
export const deleteResume = async (req, res) => {
  try {
    const resume = await prisma.resume.findUnique({
      where: { id: req.params.id },
      include: { studentProfile: true }
    })

    if (!resume) return res.status(404).json({ success: false, message: 'Resume not found' })

    if (resume.studentProfile.userId !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Unauthorized' })
    }

    // Delete file
    const filePath = path.join(__dirname, '../../', resume.fileUrl)
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }

    await prisma.resume.delete({
      where: { id: req.params.id }
    })

    // If it was primary, randomly assign a new primary if others exist
    if (resume.isPrimary) {
      const remaining = await prisma.resume.findFirst({
        where: { studentProfileId: resume.studentProfileId }
      })
      if (remaining) {
        await prisma.resume.update({
          where: { id: remaining.id },
          data: { isPrimary: true }
        })
      }
    }

    res.json({ success: true, message: 'Resume deleted successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}
