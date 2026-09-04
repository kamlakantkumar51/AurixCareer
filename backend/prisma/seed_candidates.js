import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

const candidates = [
  "Bhavna Sharma",
  "Chetan Bhagat",
  "Deepak Chahar",
  "Divya Prakash",
  "Esha Deol",
  "Farhan Akhtar",
  "Gaurav Kapoor",
  "Harsh Vardhan",
  "Isha Koppikar",
  "Jatin Das",
  "Karan Johar",
  "Kavita Krishnamurthy",
  "Lakshya Sen",
  "Manish Malhotra",
  "Neha Dhupia",
  "Om Prakash",
  "Pooja Hegde",
  "Qasim Ali",
  "Rahul Dravid",
  "Riya Sen",
  "Sachin Tendulkar",
  "Sneha Ullal",
  "Tarun Tahiliani",
  "Uday Chopra",
  "Varun Dhawan",
  "Vidya Balan",
  "Yash Chopra",
  "Zoya Akhtar",
  "Aakash Chopra",
  "Bhumika Chawla",
  "Chiranjeevi",
  "Dinesh Karthik",
  "Ekta Kapoor",
  "Falguni Pathak",
  "Gautam Gambhir",
  "Hema Malini",
  "Irrfan Khan",
  "Juhi Chawla",
  "Kajol Devgan",
  "Lata Mangeshkar",
  "Madhuri Dixit",
  "Nagarjuna Akkineni",
  "Prabhas",
  "R. Madhavan",
  "Rajinikanth",
  "Samantha Ruth Prabhu",
  "Suriya Sivakumar",
  "Tamannaah Bhatia",
  "Vijay Thalapathy",
  "Vikram"
]

const skillsPool = ['React', 'Node.js', 'Python', 'Java', 'Machine Learning', 'C++', 'JavaScript', 'SQL', 'AWS', 'Docker']

async function main() {
  console.log('Seeding dummy candidates...')
  const passwordHash = await bcrypt.hash('password123', 10)

  // Ensure skills exist
  for (const s of skillsPool) {
    await prisma.skill.upsert({
      where: { name: s.toLowerCase() },
      update: {},
      create: { name: s.toLowerCase(), category: 'General' }
    })
  }
  const allSkills = await prisma.skill.findMany()

  for (const fullName of candidates) {
    const nameParts = fullName.split(' ')
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || 'Student'
    
    // Generate an email
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase().replace(/[^a-z0-9]/g, '')}@example.com`

    // Create User
    const user = await prisma.user.upsert({
      where: { email },
      update: {},
      create: {
        email,
        passwordHash,
        role: 'STUDENT',
        isVerified: true
      }
    })

    // Randomize 3 skills for each candidate
    const shuffledSkills = allSkills.sort(() => 0.5 - Math.random()).slice(0, 3)

    // Create StudentProfile
    const profile = await prisma.studentProfile.upsert({
      where: { userId: user.id },
      update: {},
      create: {
        userId: user.id,
        firstName,
        lastName,
        targetRole: 'Software Engineer',
        summary: `I am ${fullName}, a passionate software engineering student.`,
        placementReadinessScore: Math.floor(Math.random() * 40) + 60, // 60 to 100
        location: 'India',
        education: {
          create: [
            {
              college: 'Dummy University',
              degree: 'B.Tech in Computer Science',
              branch: 'Computer Science',
              graduationYear: 2027
            }
          ]
        },
        skills: {
          create: shuffledSkills.map(skill => ({
            skillId: skill.id
          }))
        }
      }
    })

    console.log(`Created candidate: ${email}`)
  }
  console.log('Finished seeding candidates.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
