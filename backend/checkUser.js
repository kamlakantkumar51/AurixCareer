import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: 'kumarkamlakant46@gmail.com' }
  })
  
  if (!user) {
    console.log("User not found!")
    return
  }
  
  console.log("User found:", user)
  const isMatch = await bcrypt.compare('Kamlakant@9584', user.passwordHash)
  console.log("Password match:", isMatch)
}

main().catch(console.error).finally(() => prisma.$disconnect())
