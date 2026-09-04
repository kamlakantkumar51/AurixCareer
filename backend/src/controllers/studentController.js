import prisma from '../config/db.js'

// @desc    Get current student profile
// @route   GET /api/students/profile
// @access  Private (Student)
export const getProfile = async (req, res) => {
  try {
    const profile = await prisma.studentProfile.findUnique({
      where: { userId: req.user.id },
      include: {
        skills: {
          include: { skill: true }
        }
      }
    })

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' })
    }

    res.json({ success: true, data: profile })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}

// @desc    Update student profile
// @route   PATCH /api/students/profile
// @access  Private (Student)
export const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, phone, location, cgpa, graduationYear, targetRole, skills, linkedinUrl, profilePicture, universityName, summary, careerJourney } = req.body

    const existingProfile = await prisma.studentProfile.findUnique({
      where: { userId: req.user.id }
    })

    let profile;

    if (!existingProfile) {
      profile = await prisma.studentProfile.create({
        data: {
          userId: req.user.id,
          firstName,
          lastName,
          phone,
          location,
          targetRole,
          linkedinUrl,
          profilePicture,
          universityName,
          summary,
          careerJourney,
          cgpa: cgpa ? parseFloat(cgpa) : null,
          graduationYear: graduationYear ? parseInt(graduationYear) : null
        }
      })
    } else {
      profile = await prisma.studentProfile.update({
        where: { userId: req.user.id },
        data: {
          firstName,
          lastName,
          phone,
          location,
          targetRole,
          linkedinUrl,
          profilePicture,
          universityName,
          summary,
          careerJourney,
          cgpa: cgpa ? parseFloat(cgpa) : existingProfile.cgpa,
          graduationYear: graduationYear ? parseInt(graduationYear) : existingProfile.graduationYear
        }
      })
    }

    // Process skills if provided
    if (skills && Array.isArray(skills)) {
      // Clear existing skills for simplicity
      await prisma.studentSkill.deleteMany({
        where: { studentProfileId: profile.id }
      })

      for (const skillName of skills) {
        // Find or create the skill in the dictionary
        let skill = await prisma.skill.findUnique({ where: { name: skillName.toUpperCase() } })
        if (!skill) {
          skill = await prisma.skill.create({
            data: { name: skillName.toUpperCase(), category: 'GENERAL' }
          })
        }

        // Map it to the student
        await prisma.studentSkill.create({
          data: {
            studentProfileId: profile.id,
            skillId: skill.id,
            proficiency: 3 // Default
          }
        })
      }
    }

    const updatedProfile = await prisma.studentProfile.findUnique({
      where: { id: profile.id },
      include: {
        skills: {
          include: { skill: true }
        }
      }
    })

    res.json({ success: true, data: updatedProfile })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, message: 'Server Error' })
  }
}
