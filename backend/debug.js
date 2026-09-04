import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const users = await prisma.user.findMany({ include: { recruiterProfile: true, studentProfile: true } })
  console.log('--- USERS ---')
  console.log(JSON.stringify(users, null, 2))

  const jobs = await prisma.job.findMany()
  console.log('\n--- JOBS ---')
  console.log(JSON.stringify(jobs, null, 2))
  
  const apps = await prisma.application.findMany()
  console.log('\n--- APPLICATIONS ---')
  console.log(JSON.stringify(apps, null, 2))
}

main().catch(console.error).finally(() => prisma.$disconnect())
