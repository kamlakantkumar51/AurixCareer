import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'
import studentRoutes from './routes/studentRoutes.js'
import resumeRoutes from './routes/resumeRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
import assessmentRoutes from './routes/assessmentRoutes.js'
import recruiterRoutes from './routes/recruiterRoutes.js'

dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(helmet({ 
  crossOriginResourcePolicy: false,
  crossOriginEmbedderPolicy: false,
  frameguard: false,
  contentSecurityPolicy: false
})) // Allow serving static images/files and iframes
app.use(morgan('dev'))

// Serve static files from uploads folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/students', studentRoutes)
app.use('/api/resumes', resumeRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/assessment', assessmentRoutes)
app.use('/api/recruiter', recruiterRoutes)

// Default Route
app.get('/', (req, res) => {
  res.json({ message: 'CareerAI API is running' })
})

// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is successfully running on port ${PORT}`)
})
