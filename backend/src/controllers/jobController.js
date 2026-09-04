import prisma from '../config/db.js';
import { searchJobs } from '../services/jobProvider.js';
import { calculateMatchScore } from '../services/jobMatcher.js';

export const getRecommendedJobs = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await prisma.studentProfile.findUnique({
      where: { userId },
      include: { skills: { include: { skill: true } } }
    });

    if (!profile) {
      return res.status(404).json({ success: false, message: 'Profile not found' });
    }

    const targetRole = profile.targetRole || 'Software Engineer';
    const location = profile.location || 'Remote';

    // Fetch from provider
    const { data: jobs, source } = await searchJobs(targetRole, location, 1);

    // Calculate match scores
    const scoredJobs = jobs.map(job => {
      const match = calculateMatchScore(job, profile);
      return {
        ...job,
        matchScore: match.score,
        matchReason: match.reason,
        missingSkills: match.missingSkills
      };
    });

    // Sort by match score descending
    scoredJobs.sort((a, b) => b.matchScore - a.matchScore);

    res.status(200).json({ success: true, count: scoredJobs.length, source, data: scoredJobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getJobsSearch = async (req, res) => {
  try {
    const { q, location, page } = req.query;
    const { data: jobs, source } = await searchJobs(q || 'Developer', location || 'Remote', page || 1);
    
    // We can also calculate match scores here if req.user exists, but for plain search we might just return the jobs
    res.status(200).json({ success: true, count: jobs.length, source, data: jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const saveJob = async (req, res) => {
  try {
    const userId = req.user.id;
    const jobId = req.params.id;
    const { title, company, location, type, mode } = req.body; // Passed from frontend if external
    
    const profile = await prisma.studentProfile.findUnique({ where: { userId } });
    
    // Check if job exists in our DB (might be external)
    let job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job && title && company) {
      // Find or create external recruiter/company
      const admin = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
      if (admin) {
        let extCompany = await prisma.company.findFirst({ where: { name: company } });
        if (!extCompany) extCompany = await prisma.company.create({ data: { name: company, description: 'External', website: '' } });
        
        let extRec = await prisma.recruiterProfile.findFirst({ where: { companyId: extCompany.id } });
        if (!extRec) extRec = await prisma.recruiterProfile.create({ data: { userId: admin.id, companyId: extCompany.id, position: 'External' } });
        
        job = await prisma.job.create({
          data: {
            id: jobId,
            title,
            description: 'External Job',
            location: location || 'Remote',
            type: type || 'FULL_TIME',
            mode: mode || 'REMOTE',
            companyId: extCompany.id,
            recruiterId: extRec.id,
            status: 'OPEN'
          }
        });
      }
    }

    const existing = await prisma.savedJob.findUnique({
      where: { jobId_studentProfileId: { jobId, studentProfileId: profile.id } }
    });

    if (existing) {
      await prisma.savedJob.delete({ where: { id: existing.id } });
      return res.status(200).json({ success: true, message: 'Job unsaved' });
    }

    if (job) {
      const saved = await prisma.savedJob.create({
        data: { jobId, studentProfileId: profile.id }
      });
      return res.status(201).json({ success: true, data: saved });
    }
    
    return res.status(400).json({ success: false, message: 'Job not found in system.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const applyJob = async (req, res) => {
  try {
    const userId = req.user.id;
    const jobId = req.params.id;
    const { matchScore, title, company, location, type, mode } = req.body;
    
    const profile = await prisma.studentProfile.findUnique({ where: { userId } });
    
    let job = await prisma.job.findUnique({ where: { id: jobId } });
    if (!job && title && company) {
      // External job handling
      const admin = await prisma.user.findFirst({ where: { role: 'ADMIN' } });
      if (admin) {
        let extCompany = await prisma.company.findFirst({ where: { name: company } });
        if (!extCompany) extCompany = await prisma.company.create({ data: { name: company, description: 'External', website: '' } });
        
        let extRec = await prisma.recruiterProfile.findFirst({ where: { companyId: extCompany.id } });
        if (!extRec) extRec = await prisma.recruiterProfile.create({ data: { userId: admin.id, companyId: extCompany.id, position: 'External' } });
        
        job = await prisma.job.create({
          data: {
            id: jobId,
            title,
            description: 'External Job',
            location: location || 'Remote',
            type: type || 'FULL_TIME',
            mode: mode || 'REMOTE',
            companyId: extCompany.id,
            recruiterId: extRec.id,
            status: 'OPEN'
          }
        });
      }
    }

    if (job) {
      const application = await prisma.application.upsert({
        where: { jobId_studentProfileId: { jobId, studentProfileId: profile.id } },
        update: { status: 'APPLIED', matchScore },
        create: {
          jobId,
          studentProfileId: profile.id,
          status: 'APPLIED',
          matchScore
        }
      });
      return res.status(201).json({ success: true, data: application });
    }

    return res.status(400).json({ success: false, message: 'Job not found in system.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getSavedJobs = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await prisma.studentProfile.findUnique({ where: { userId } });
    
    const savedJobs = await prisma.savedJob.findMany({
      where: { studentProfileId: profile.id }
    });
    
    res.status(200).json({ success: true, data: savedJobs.map(sj => sj.jobId) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.user.id;
    const profile = await prisma.studentProfile.findUnique({ where: { userId } });
    
    const appliedJobs = await prisma.application.findMany({
      where: { studentProfileId: profile.id }
    });
    
    res.status(200).json({ success: true, data: appliedJobs.map(aj => aj.jobId) });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
