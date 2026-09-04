import jwt from 'jsonwebtoken'
import prisma from '../config/db.js'

export const protect = async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret')

      req.user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: { id: true, email: true, role: true, isVerified: true },
      })

      next()
    } catch (error) {
      console.error(error)
      res.status(401).json({ success: false, message: 'Not authorized, token failed' })
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: 'Not authorized, no token' })
  }
}

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'User role not authorized to access this route',
      })
    }
    next()
  }
}
