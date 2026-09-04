// mockData.js - Static mock data for the frontend

export const mockJobs = [
  {
    id: 'job-1',
    title: 'Senior Frontend Developer',
    company: 'TechFlow Solutions',
    companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&auto=format',
    description: 'Looking for an experienced React developer to lead our frontend team.',
    type: 'FULL_TIME',
    employmentType: 'Full-Time',
    location: 'Remote',
    salaryMin: 120000,
    salaryMax: 150000,
    currency: '$',
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    postedAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    skills: [{ skill: { name: 'React' } }, { skill: { name: 'JavaScript' } }]
  },
  {
    id: 'job-2',
    title: 'Backend Engineer (Node.js)',
    company: 'NexData Inc.',
    companyLogo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&h=100&fit=crop&auto=format',
    description: 'Join our scalable backend team.',
    type: 'FULL_TIME',
    employmentType: 'Full-Time',
    location: 'New York, NY',
    salaryMin: 130000,
    salaryMax: 160000,
    currency: '$',
    status: 'ACTIVE',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    postedAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    skills: [{ skill: { name: 'Node.js' } }, { skill: { name: 'Express' } }]
  }
];

export const mockApplications = [
  {
    id: 'app-1',
    jobId: 'job-1',
    job: mockJobs[0],
    status: 'REVIEW',
    matchScore: 92,
    createdAt: new Date().toISOString(),
    studentProfile: {
      id: 'student-1',
      firstName: 'Rahul',
      lastName: 'Sharma',
      targetRole: 'Frontend Developer',
      studentSkills: [{ skill: { name: 'React' } }, { skill: { name: 'JavaScript' } }]
    }
  },
  {
    id: 'app-2',
    jobId: 'job-2',
    job: mockJobs[1],
    status: 'SHORTLISTED',
    matchScore: 85,
    createdAt: new Date().toISOString(),
    studentProfile: {
      id: 'student-2',
      firstName: 'Anjali',
      lastName: 'Gupta',
      targetRole: 'Backend Engineer',
      studentSkills: [{ skill: { name: 'Node.js' } }]
    }
  }
];

export const mockStudentProfile = {
  id: 'student-me',
  firstName: 'Test',
  lastName: 'Student',
  targetRole: 'Software Engineer',
  phone: '123-456-7890',
  location: 'San Francisco, CA',
  cgpa: 3.8,
  graduationYear: 2024,
  universityName: 'Tech University',
  summary: 'Passionate software engineer looking for exciting opportunities.',
  careerJourney: 'Started coding in high school...',
  placementReadinessScore: 85,
  skills: [{ skill: { name: 'JavaScript' } }, { skill: { name: 'React' } }]
};

export const mockRecruiterProfile = {
  id: 'recruiter-me',
  firstName: 'Jane',
  lastName: 'Doe',
  position: 'Senior Technical Recruiter',
  company: {
    name: 'Acme Corp',
    description: 'Leading tech solutions.',
    website: 'https://acme.com',
    industry: 'Technology'
  }
};

export const mockInterviews = [
  {
    id: 'int-1',
    applicationId: 'app-2',
    application: mockApplications[1],
    scheduledAt: new Date(Date.now() + 86400000).toISOString(),
    status: 'SCHEDULED'
  }
];

// Helper functions for mutable state during the session
let currentJobs = [...mockJobs];
let currentApplications = [...mockApplications];
let currentStudentProfile = { ...mockStudentProfile };
let currentRecruiterProfile = { ...mockRecruiterProfile };
let currentInterviews = [...mockInterviews];
let currentResumes = [
  {
    id: 'res-1',
    fileName: 'resume.pdf',
    title: 'Software Engineer Resume',
    isPrimary: true,
    fileSize: 1024 * 1024 * 2.5
  }
];

export const getJobs = () => currentJobs;
export const addJob = (job) => { currentJobs.push({ ...job, id: `job-${Date.now()}` }); return currentJobs; };
export const deleteJob = (id) => { currentJobs = currentJobs.filter(j => j.id !== id); return currentJobs; };

export const getApplications = () => currentApplications;
export const updateApplicationStatus = (id, status) => {
  const app = currentApplications.find(a => a.id === id);
  if (app) app.status = status;
  return currentApplications;
};

export const getStudentProfile = () => currentStudentProfile;
export const updateStudentProfile = (data) => { currentStudentProfile = { ...currentStudentProfile, ...data }; return currentStudentProfile; };

export const getRecruiterProfile = () => currentRecruiterProfile;
export const updateRecruiterProfile = (data) => { currentRecruiterProfile = { ...currentRecruiterProfile, ...data }; return currentRecruiterProfile; };

export const getInterviews = () => currentInterviews;

export const getResumes = () => currentResumes;
export const addResume = (resume) => { currentResumes.push({ ...resume, id: `res-${Date.now()}` }); return currentResumes; };
export const deleteResume = (id) => { currentResumes = currentResumes.filter(r => r.id !== id); return currentResumes; };
