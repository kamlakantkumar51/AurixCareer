import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  const job = await prisma.job.findFirst()
  if (!job) {
    console.log("No job found!")
    return
  }
  
  const students = await prisma.studentProfile.findMany({ take: 3 })
  if (students.length === 0) {
    console.log("No students found!")
    return
  }

  for (let i = 0; i < students.length; i++) {
    const student = students[i]
    
    // Create dummy experience and education if not exist
    const exps = await prisma.experience.findMany({ where: { studentProfileId: student.id } })
    if (exps.length === 0) {
      await prisma.experience.create({
        data: {
          studentProfileId: student.id,
          company: "Tech Corp",
          role: "Software Engineering Intern",
          duration: "Summer 2025",
          description: "Worked on React and Node.js backend. Improved performance by 20%."
        }
      })
    }

    const edus = await prisma.education.findMany({ where: { studentProfileId: student.id } })
    if (edus.length === 0) {
      await prisma.education.create({
        data: {
          studentProfileId: student.id,
          college: "Parul University",
          degree: "B.Tech",
          branch: "Computer Science",
          graduationYear: 2026,
          cgpa: 8.5
        }
      })
    }

    // Check if application already exists
    const existing = await prisma.application.findUnique({
      where: {
        jobId_studentProfileId: {
          jobId: job.id,
          studentProfileId: student.id
        }
      }
    })

    if (!existing) {
      await prisma.application.create({
        data: {
          jobId: job.id,
          studentProfileId: student.id,
          status: i === 0 ? "APPLIED" : i === 1 ? "UNDER_REVIEW" : "SHORTLISTED",
          matchScore: 85 + i,
          notes: i === 1 ? "Looks like a solid candidate." : null
        }
      })
      console.log(`Created application for ${student.firstName}`)
    } else {
      console.log(`Application already exists for ${student.firstName}`)
    }
  }
  
  console.log("Done seeding applications!")
}

seed().catch(console.error).finally(() => prisma.$disconnect())
