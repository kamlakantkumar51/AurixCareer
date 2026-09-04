import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

prisma.application.findMany({
  include: {
    studentProfile: {
      include: {
        user: { select: { email: true } },
        skills: { include: { skill: true } },
        education: true,
        experience: true,
        projects: true,
        resumes: true
      }
    }
  }
}).then(apps => console.log('Apps:', apps.length)).catch(console.error).finally(() => prisma.$disconnect())
