import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'

export const generateToken = (userId, role) => {
  return jwt.sign({ id: userId, role }, JWT_SECRET, {
    expiresIn: '30d',
  })
}

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET)
}
