import axios from 'axios'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function testApi() {
  try {
    const job = await prisma.job.findFirst({ include: { recruiter: { include: { user: true } } } })
    if (!job) {
      console.log("No job found!")
      return
    }
    const recruiterUser = job.recruiter.user
    console.log("Found recruiter:", recruiterUser.email)

    // Login to get token
    const loginRes = await axios.post('http://localhost:5000/api/auth/login', {
      email: recruiterUser.email,
      password: "password123" // assuming default password from seed
    })
    
    const token = loginRes.data.token
    console.log("Got token:", token.substring(0, 10) + "...")

    // Fetch applications
    console.log(`Fetching applications for job ${job.id}`)
    const appRes = await axios.get(`http://localhost:5000/api/recruiter/jobs/${job.id}/applications`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    
    console.log("Success! Received applications:")
    console.log(JSON.stringify(appRes.data, null, 2).substring(0, 500))
  } catch (err) {
    if (err.response) {
      console.error("API Error Response:", err.response.data)
    } else {
      console.error("Error:", err.message)
    }
  } finally {
    await prisma.$disconnect()
  }
}

testApi()
