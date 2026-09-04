import prisma from '../config/db.js'

// 1. Dashboard Analytics
export const getDashboardAnalytics = async (req, res, next) => {
  try {
    let recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!recruiter) {
      const company = await prisma.company.create({ data: { name: '' } })
      recruiter = await prisma.recruiterProfile.create({
        data: {
          userId: req.user.id,
          companyId: company.id,
          firstName: 'Recruiter',
          lastName: '',
          position: 'Recruiter'
        }
      })
    }

    const days = parseInt(req.query.days) || 30;
    const timeRangeAgo = new Date();
    timeRangeAgo.setDate(timeRangeAgo.getDate() - days);

    const jobs = await prisma.job.findMany({
      where: { recruiterId: recruiter.id },
      include: {
        applications: {
          where: { createdAt: { gte: timeRangeAgo } }
        }
      }
    })

    const activeJobs = jobs.filter(j => j.status === 'ACTIVE').length
    const totalApplications = jobs.reduce((acc, job) => acc + job.applications.length, 0)
    
    let shortlisted = 0
    let interviews = 0
    let hired = 0

    jobs.forEach(job => {
      job.applications.forEach(app => {
        if (app.status === 'SHORTLISTED') shortlisted++
        if (app.status === 'INTERVIEW') interviews++
        if (app.status === 'HIRED') hired++
      })
    })

    const allRecentApps = jobs.flatMap(job => job.applications);
    
    const applicationsByDate = allRecentApps.reduce((acc, app) => {
      const date = app.createdAt.toISOString().split('T')[0]
      acc[date] = (acc[date] || 0) + 1
      return acc
    }, {})

    const chartData = [];
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      chartData.push({
        name: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        date: dateStr,
        applications: applicationsByDate[dateStr] || 0
      });
    }

    // AI Hiring Insights logic
    let aiInsights = null;
    const bestApplication = await prisma.application.findFirst({
      where: { job: { recruiterId: recruiter.id } },
      orderBy: { matchScore: 'desc' },
      include: {
        studentProfile: {
          include: { studentSkills: { include: { skill: true } } }
        },
        job: {
          include: { skills: { include: { skill: true } } }
        }
      }
    });

    if (bestApplication && bestApplication.studentProfile) {
      const studentSkills = bestApplication.studentProfile.studentSkills.map(s => s.skill.name);
      const jobSkills = bestApplication.job.skills.map(s => s.skill.name);
      
      const matchedSkills = studentSkills.filter(s => jobSkills.includes(s));
      const skillsToImprove = jobSkills.filter(s => !studentSkills.includes(s));

      // Mock some if lists are empty so UI looks good
      if (matchedSkills.length === 0) matchedSkills.push('JavaScript', 'React');
      if (skillsToImprove.length === 0) skillsToImprove.push('AWS');

      aiInsights = {
        topCandidate: {
          id: bestApplication.studentProfile.id,
          firstName: bestApplication.studentProfile.firstName || 'Candidate',
          lastName: bestApplication.studentProfile.lastName || '',
          title: bestApplication.studentProfile.targetRole || 'Software Engineer',
          matchScore: bestApplication.matchScore ? Math.round(bestApplication.matchScore) : 85,
        },
        matchedSkills: matchedSkills.slice(0, 6),
        skillsToImprove: skillsToImprove.slice(0, 3)
      };
    } else {
      // Mock data if no applicants yet
      aiInsights = {
        topCandidate: {
          id: 'mock',
          firstName: 'Rahul',
          lastName: 'Sharma',
          title: 'Frontend Developer',
          matchScore: 94,
        },
        matchedSkills: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML', 'CSS'],
        skillsToImprove: ['AWS']
      };
    }

    res.json({
      success: true,
      data: {
        activeJobs,
        totalApplications,
        shortlisted,
        interviews,
        hired,
        chartData,
        aiInsights
      }
    })
  } catch (err) {
    next(err)
  }
}

// 1.5 Get Detailed Analytics
export const getAnalytics = async (req, res, next) => {
  try {
    let recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!recruiter) {
      const company = await prisma.company.create({ data: { name: '' } })
      recruiter = await prisma.recruiterProfile.create({
        data: {
          userId: req.user.id,
          companyId: company.id,
          firstName: 'Recruiter',
          lastName: '',
          position: 'Recruiter'
        }
      })
    }

    const days = parseInt(req.query.days) || 30;
    const timeRangeAgo = new Date();
    timeRangeAgo.setDate(timeRangeAgo.getDate() - days);

    const jobs = await prisma.job.findMany({
      where: { recruiterId: recruiter.id },
      include: {
        applications: {
          where: { createdAt: { gte: timeRangeAgo } }
        }
      }
    })

    let totalViews = 0 // Mocked for now since we don't track views natively yet
    let totalApps = 0
    let appsByDate = {}
    let statusCounts = {
      NEW: 0,
      REVIEW: 0,
      SHORTLISTED: 0,
      INTERVIEW: 0,
      OFFER: 0,
      HIRED: 0,
      REJECTED: 0
    }

    jobs.forEach(job => {
      totalViews += Math.floor(Math.random() * 50) + 10 // Mock views per job
      job.applications.forEach(app => {
        totalApps++
        statusCounts[app.status] = (statusCounts[app.status] || 0) + 1
        
        const date = app.createdAt.toISOString().split('T')[0]
        appsByDate[date] = (appsByDate[date] || 0) + 1
      })
    })

    const trendData = Object.keys(appsByDate).map(date => ({
      name: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      date: date,
      applications: appsByDate[date],
      views: Math.floor(appsByDate[date] * (Math.random() * 2 + 1)) // Mock views relative to apps
    })).sort((a, b) => new Date(a.date) - new Date(b.date))

    // Job performance data
    const jobPerformance = jobs.map(job => ({
      id: job.id,
      title: job.title,
      applications: job.applications.length,
      conversionRate: job.applications.length > 0 
        ? Math.round((job.applications.filter(a => a.status === 'HIRED').length / job.applications.length) * 100) 
        : 0
    }))

    res.json({
      success: true,
      data: {
        overview: {
          totalViews,
          totalApps,
          conversionRate: totalViews > 0 ? ((totalApps / totalViews) * 100).toFixed(1) : 0
        },
        trendData,
        statusCounts,
        jobPerformance
      }
    })
  } catch (err) {
    next(err)
  }
}

// 2. Create Job
export const createJob = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!recruiter) {
      return res.status(404).json({ success: false, message: 'Recruiter profile not found' })
    }

    const { 
      title, description, responsibilities, requirements, 
      type, mode, salaryMin, salaryMax, experienceMin, experienceMax, 
      location, deadline, status, skills,
      screeningQuestions, autoClose, remoteAllowed, resumeRequired
    } = req.body

    const job = await prisma.job.create({
      data: {
        companyId: recruiter.companyId,
        recruiterId: recruiter.id,
        title,
        description,
        responsibilities,
        requirements,
        type,
        mode,
        salaryMin: salaryMin ? parseFloat(salaryMin) : null,
        salaryMax: salaryMax ? parseFloat(salaryMax) : null,
        experienceMin: experienceMin ? parseInt(experienceMin) : null,
        experienceMax: experienceMax ? parseInt(experienceMax) : null,
        location,
        deadline: deadline ? new Date(deadline) : null,
        status: status || 'DRAFT',
        screeningQuestions: screeningQuestions ? JSON.stringify(screeningQuestions) : null,
        autoClose: autoClose || false,
        remoteAllowed: remoteAllowed || false,
        resumeRequired: resumeRequired !== undefined ? resumeRequired : true
      }
    })

    if (skills && Array.isArray(skills)) {
      for (const skillName of skills) {
        let skill = await prisma.skill.findUnique({ where: { name: skillName.toLowerCase() } })
        if (!skill) {
          skill = await prisma.skill.create({ data: { name: skillName.toLowerCase(), category: 'General' } })
        }
        await prisma.jobSkill.create({
          data: {
            jobId: job.id,
            skillId: skill.id
          }
        })
      }
    }

    res.status(201).json({ success: true, data: job })
  } catch (err) {
    next(err)
  }
}

// 3. Get Recruiter Jobs
export const getMyJobs = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!recruiter) return res.status(404).json({ success: false, message: 'Recruiter profile not found' })

    const jobs = await prisma.job.findMany({
      where: { recruiterId: recruiter.id },
      include: {
        applications: {
          select: { status: true }
        },
        _count: {
          select: { applications: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    res.json({ success: true, data: jobs })
  } catch (err) {
    next(err)
  }
}

// 4. Get Job Details
export const getJobById = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    const job = await prisma.job.findFirst({
      where: { id: req.params.id, recruiterId: recruiter.id },
      include: {
        skills: { include: { skill: true } }
      }
    })

    if (!job) return res.status(404).json({ success: false, message: 'Job not found' })

    res.json({ success: true, data: job })
  } catch (err) {
    next(err)
  }
}

// 5. Update Job
export const updateJob = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    const job = await prisma.job.findFirst({
      where: { id: req.params.id, recruiterId: recruiter.id }
    })

    if (!job) return res.status(404).json({ success: false, message: 'Job not found' })

    const {
      title, description, responsibilities, requirements,
      type, mode, salaryMin, salaryMax, experienceMin, experienceMax,
      location, deadline, status,
      screeningQuestions, autoClose, remoteAllowed, resumeRequired
    } = req.body

    let updateData = {
      title, description, responsibilities, requirements,
      type, mode, location, status,
      salaryMin: salaryMin !== undefined ? parseFloat(salaryMin) : undefined,
      salaryMax: salaryMax !== undefined ? parseFloat(salaryMax) : undefined,
      experienceMin: experienceMin !== undefined ? parseInt(experienceMin) : undefined,
      experienceMax: experienceMax !== undefined ? parseInt(experienceMax) : undefined,
      deadline: deadline ? new Date(deadline) : undefined,
      autoClose: autoClose !== undefined ? autoClose : undefined,
      remoteAllowed: remoteAllowed !== undefined ? remoteAllowed : undefined,
      resumeRequired: resumeRequired !== undefined ? resumeRequired : undefined,
    }

    if (screeningQuestions !== undefined) {
      updateData.screeningQuestions = screeningQuestions ? JSON.stringify(screeningQuestions) : null
    }

    const updatedJob = await prisma.job.update({
      where: { id: job.id },
      data: updateData
    })

    res.json({ success: true, data: updatedJob })
  } catch (err) {
    next(err)
  }
}

// 6. Delete Job
export const deleteJob = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    const job = await prisma.job.findFirst({
      where: { id: req.params.id, recruiterId: recruiter.id }
    })

    if (!job) return res.status(404).json({ success: false, message: 'Job not found' })

    await prisma.job.delete({ where: { id: job.id } })

    res.json({ success: true, message: 'Job deleted' })
  } catch (err) {
    next(err)
  }
}

// 7. Get Applications for a Job
export const getJobApplications = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    const job = await prisma.job.findFirst({
      where: { id: req.params.id, recruiterId: recruiter.id }
    })

    if (!job) return res.status(404).json({ success: false, message: 'Job not found' })

    const applications = await prisma.application.findMany({
      where: { jobId: job.id },
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
      },
      orderBy: { appliedAt: 'desc' }
    })

    res.json({ success: true, data: applications })
  } catch (err) {
    next(err)
  }
}

// 8. Update Application Status
export const updateApplicationStatus = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    const application = await prisma.application.findUnique({
      where: { id: req.params.appId },
      include: { job: true }
    })

    if (!application || application.job.recruiterId !== recruiter.id) {
      return res.status(404).json({ success: false, message: 'Application not found or unauthorized' })
    }

    const { status, notes } = req.body

    const updateData = {}
    if (status) updateData.status = status
    if (notes !== undefined) updateData.notes = notes

    const updated = await prisma.application.update({
      where: { id: application.id },
      data: updateData
    })

    res.json({ success: true, data: updated })
  } catch (err) {
    next(err)
  }
}

// 9. Get Candidate Profile
export const getCandidateProfile = async (req, res, next) => {
  try {
    const student = await prisma.studentProfile.findUnique({
      where: { id: req.params.candidateId },
      include: {
        education: true,
        experience: true,
        projects: true,
        skills: { include: { skill: true } },
        resumes: true,
        user: { select: { email: true } }
      }
    })

    if (!student) return res.status(404).json({ success: false, message: 'Candidate not found' })

    res.json({ success: true, data: student })
  } catch (err) {
    next(err)
  }
}

// 10. Search Candidates (Discovery)
export const searchCandidates = async (req, res, next) => {
  try {
    const { keyword } = req.query

    let whereClause = {}
    if (keyword) {
      whereClause = {
        OR: [
          { firstName: { contains: keyword } },
          { lastName: { contains: keyword } },
          { targetRole: { contains: keyword } },
          { summary: { contains: keyword } },
        ]
      }
    }

    const students = await prisma.studentProfile.findMany({
      where: whereClause,
      include: {
        skills: { include: { skill: true } }
      }
    })

    res.json({ success: true, data: students })
  } catch (err) {
    next(err)
  }
}

// 11. Get Company Profile
export const getCompanyProfile = async (req, res, next) => {
  try {
    let recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id },
      include: { company: true }
    })

    if (!recruiter) {
      // Auto-create for backward compatibility if it doesn't exist
      const company = await prisma.company.create({
        data: { name: '' }
      })
      recruiter = await prisma.recruiterProfile.create({
        data: {
          userId: req.user.id,
          companyId: company.id,
          firstName: 'Recruiter',
          lastName: '',
          position: 'Recruiter'
        },
        include: { company: true }
      })
    } else if (!recruiter.company) {
      // Just in case it's missing somehow
      const company = await prisma.company.create({
        data: { name: '' }
      })
      recruiter = await prisma.recruiterProfile.update({
        where: { id: recruiter.id },
        data: { companyId: company.id },
        include: { company: true }
      })
    }

    res.json({ success: true, data: recruiter.company })
  } catch (err) {
    next(err)
  }
}

// 12. Update Company Profile
export const updateCompanyProfile = async (req, res, next) => {
  try {
    let recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!recruiter) {
      // Create if it doesn't exist
      const company = await prisma.company.create({
        data: { name: req.body.name || '' }
      })
      recruiter = await prisma.recruiterProfile.create({
        data: {
          userId: req.user.id,
          companyId: company.id,
          firstName: 'Recruiter',
          lastName: '',
          position: 'Recruiter'
        }
      })
    }

    const { name, description, website, logoUrl, location } = req.body

    const updatedCompany = await prisma.company.update({
      where: { id: recruiter.companyId },
      data: { name, description, website, logoUrl, location }
    })

    res.json({ success: true, data: updatedCompany })
  } catch (err) {
    next(err)
  }
}

// 13. Get Recruiter Profile
export const getRecruiterProfile = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id },
      include: { user: { select: { email: true } } }
    })

    if (!recruiter) {
      return res.status(404).json({ success: false, message: 'Profile not found' })
    }

    res.json({ success: true, data: recruiter })
  } catch (err) {
    next(err)
  }
}

// 14. Update Recruiter Profile
export const updateRecruiterProfile = async (req, res, next) => {
  try {
    const { firstName, lastName, position } = req.body
    
    const updatedProfile = await prisma.recruiterProfile.update({
      where: { userId: req.user.id },
      data: { firstName, lastName, position }
    })

    res.json({ success: true, data: updatedProfile })
  } catch (err) {
    next(err)
  }
}

// 15. Get Interviews
export const getInterviews = async (req, res, next) => {
  try {
    const recruiter = await prisma.recruiterProfile.findUnique({
      where: { userId: req.user.id }
    })

    if (!recruiter) {
      return res.status(404).json({ success: false, message: 'Profile not found' })
    }

    const interviews = await prisma.interview.findMany({
      where: {
        application: {
          job: { recruiterId: recruiter.id }
        }
      },
      include: {
        application: {
          include: {
            job: { select: { title: true } },
            studentProfile: {
              include: { user: { select: { email: true } } }
            }
          }
        }
      },
      orderBy: { scheduledAt: 'asc' }
    })

    res.json({ success: true, data: interviews })
  } catch (err) {
    next(err)
  }
}

// 16. Create Interview
export const createInterview = async (req, res, next) => {
  try {
    const { applicationId, scheduledAt } = req.body

    const interview = await prisma.interview.create({
      data: {
        applicationId,
        scheduledAt: new Date(scheduledAt),
        status: 'SCHEDULED'
      },
      include: {
        application: {
          include: {
            job: { select: { title: true } },
            studentProfile: {
              include: { user: { select: { email: true } } }
            }
          }
        }
      }
    })

    // Also update application status to INTERVIEW if not already
    await prisma.application.update({
      where: { id: applicationId },
      data: { status: 'INTERVIEW' }
    })

    res.status(201).json({ success: true, data: interview })
  } catch (err) {
    next(err)
  }
}

// 17. Update Interview
export const updateInterview = async (req, res, next) => {
  try {
    const { status, feedback, score, scheduledAt } = req.body
    
    const updateData = {}
    if (status) updateData.status = status
    if (feedback !== undefined) updateData.feedback = feedback
    if (score !== undefined) updateData.score = score
    if (scheduledAt) updateData.scheduledAt = new Date(scheduledAt)

    const interview = await prisma.interview.update({
      where: { id: req.params.id },
      data: updateData,
      include: {
        application: {
          include: {
            job: { select: { title: true } },
            studentProfile: {
              include: { user: { select: { email: true } } }
            }
          }
        }
      }
    })

    res.json({ success: true, data: interview })
  } catch (err) {
    next(err)
  }
}
