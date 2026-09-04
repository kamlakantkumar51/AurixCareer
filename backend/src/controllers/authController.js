import bcrypt from 'bcrypt'
import prisma from '../config/db.js'
import { generateToken } from '../utils/jwt.js'

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    const { email, password, role, firstName, lastName } = req.body

    const userExists = await prisma.user.findUnique({
      where: { email },
    })

    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists' })
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    const userRole = role || 'STUDENT';

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        role: userRole,
      }
    });

    if (userRole === 'STUDENT') {
      await prisma.studentProfile.create({
        data: {
          userId: user.id,
          firstName,
          lastName,
        }
      });
    } else if (userRole === 'RECRUITER') {
      const company = await prisma.company.create({
        data: { name: '' }
      });
      await prisma.recruiterProfile.create({
        data: {
          userId: user.id,
          companyId: company.id,
          firstName,
          lastName,
          position: 'Recruiter'
        }
      });
    }

    // Refetch user with profile to match original response shape if needed, or just return token since profiles are created.
    const userWithProfile = await prisma.user.findUnique({
      where: { id: user.id },
      include: {
        studentProfile: true,
        recruiterProfile: true
      }
    });

    if (user) {
      res.status(201).json({
        success: true,
        data: {
          id: user.id,
          email: user.email,
          role: user.role,
          token: generateToken(user.id, user.role),
        },
      })
    } else {
      res.status(400).json({ success: false, message: 'Invalid user data' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (user && (await bcrypt.compare(password, user.passwordHash))) {
      res.json({
        success: true,
        data: {
          id: user.id,
          email: user.email,
          role: user.role,
          token: generateToken(user.id, user.role),
        },
      })
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Get user profile
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
      include: {
        studentProfile: true,
        recruiterProfile: true,
      },
    })

    if (user) {
      // Don't send password hash
      const { passwordHash, ...userWithoutPassword } = user
      res.json({ success: true, data: userWithoutPassword })
    } else {
      res.status(404).json({ success: false, message: 'User not found' })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Mock Google Auth
// @route   POST /api/auth/google
// @access  Public
export const googleAuth = async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body

    if (!email) {
      return res.status(400).json({ success: false, message: 'Email is required for Google Auth' })
    }

    let user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      // Register via Google (Mock)
      // We provide a random passwordHash here just in case the old Prisma client is still active
      // and hasn't been updated to treat passwordHash as optional yet.
      const dummySalt = await bcrypt.genSalt(10);
      const dummyPasswordHash = await bcrypt.hash(Math.random().toString(36), dummySalt);

      user = await prisma.user.create({
        data: {
          email,
          passwordHash: dummyPasswordHash,
          role: 'STUDENT',
          studentProfile: {
            create: {
              firstName: firstName || 'Google',
              lastName: lastName || 'User',
            },
          },
        },
      })
    }

    res.json({
      success: true,
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
        token: generateToken(user.id, user.role),
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error during Google Auth' })
  }
}

// @desc    Forgot Password (Mock Email)
// @route   POST /api/auth/forgot-password
// @access  Public
export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body

    const user = await prisma.user.findUnique({ where: { email } })
    
    if (!user) {
      // Don't reveal if user exists or not for security
      return res.json({ success: true, message: 'If that email exists, we sent a password reset link.' })
    }

    // Generate token (simple random string for demo)
    const resetToken = Math.random().toString(36).substring(2, 15)
    
    // Valid for 1 hour
    const resetPasswordExpires = new Date(Date.now() + 3600000)

    await prisma.user.update({
      where: { id: user.id },
      data: {
        resetPasswordToken: resetToken,
        resetPasswordExpires
      }
    })

    // Mock sending email by logging to console
    console.log(`\n==========================================`)
    console.log(`MOCK EMAIL SENT TO: ${email}`)
    console.log(`SUBJECT: Password Reset`)
    console.log(`LINK: http://localhost:5174/reset-password/${resetToken}`)
    console.log(`==========================================\n`)

    res.json({ success: true, message: 'If that email exists, we sent a password reset link.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error during password reset request' })
  }
}

// @desc    Reset Password
// @route   POST /api/auth/reset-password/:token
// @access  Public
export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params
    const { password } = req.body

    const user = await prisma.user.findFirst({
      where: {
        resetPasswordToken: token,
        resetPasswordExpires: { gt: new Date() } // Not expired
      }
    })

    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid or expired password reset token' })
    }

    const salt = await bcrypt.genSalt(10)
    const passwordHash = await bcrypt.hash(password, salt)

    await prisma.user.update({
      where: { id: user.id },
      data: {
        passwordHash,
        resetPasswordToken: null,
        resetPasswordExpires: null
      }
    })

    res.json({ success: true, message: 'Password has been successfully reset' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error during password reset' })
  }
}
