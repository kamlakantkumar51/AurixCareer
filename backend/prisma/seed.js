import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Add seed logic here (create admin, sample student, sample recruiter, sample jobs)
  console.log('Seeding database...')
  
  const hashedPassword = await bcrypt.hash('password123', 10)

  // 1. Create Admin
  const admin = await prisma.user.upsert({
    where: { email: 'admin@careerai.com' },
    update: {},
    create: {
      email: 'admin@careerai.com',
      passwordHash: hashedPassword,
      role: 'ADMIN',
      isVerified: true,
    },
  })

  // 2. Create Company
  const company = await prisma.company.create({
    data: {
      name: 'TechCorp',
      description: 'A leading tech company',
      website: 'https://techcorp.example.com',
      location: 'San Francisco, CA',
    },
  })

  // 3. Create Recruiter
  const recruiterUser = await prisma.user.create({
    data: {
      email: 'recruiter@techcorp.com',
      passwordHash: hashedPassword,
      role: 'RECRUITER',
      isVerified: true,
      recruiterProfile: {
        create: {
          firstName: 'Alice',
          lastName: 'Smith',
          position: 'Senior Technical Recruiter',
          companyId: company.id,
        },
      },
    },
    include: {
      recruiterProfile: true,
    },
  })

  // 4. Create Student
  const studentUser = await prisma.user.create({
    data: {
      email: 'student@example.com',
      passwordHash: hashedPassword,
      role: 'STUDENT',
      isVerified: true,
      studentProfile: {
        create: {
          firstName: 'John',
          lastName: 'Doe',
          cgpa: 3.8,
          graduationYear: 2024,
        },
      },
    },
    include: {
      studentProfile: true,
    },
  })

  // 5. Create Job
  const job = await prisma.job.create({
    data: {
      companyId: company.id,
      recruiterId: recruiterUser.recruiterProfile.id,
      title: 'Frontend Developer',
      description: 'Looking for a React developer with Vite and Tailwind experience.',
      type: 'FULL_TIME',
      mode: 'REMOTE',
      salaryMin: 80000,
      salaryMax: 120000,
    },
  })

  console.log('Database seeded successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
