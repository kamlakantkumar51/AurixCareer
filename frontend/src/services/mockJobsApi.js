const mockJobs = [
  {
    id: 'j1',
    title: 'Frontend Developer',
    company: 'Stripe',
    logo: 'S',
    location: 'Remote',
    workMode: 'Remote',
    salary: '$110k - $140k',
    experience: '2-4 years',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind'],
    preferredSkills: ['GraphQL', 'Node.js'],
    postedDate: '2 days ago',
    matchScore: 92,
    matchReason: 'Strong match for React, TypeScript, and Remote preference.',
    description: 'We are looking for an experienced Frontend Developer to build scalable payment experiences.',
    responsibilities: [
      'Develop user-facing features using React.js',
      'Build reusable components and front-end libraries',
      'Translate designs and wireframes into high quality code'
    ],
    status: 'Applied' // Active application status, if any
  },
  {
    id: 'j2',
    title: 'Software Engineer',
    company: 'Google',
    logo: 'G',
    location: 'Mountain View, CA',
    workMode: 'Hybrid',
    salary: '$130k - $180k',
    experience: 'Fresher',
    skills: ['Java', 'Python', 'C++'],
    preferredSkills: ['Distributed Systems'],
    postedDate: '5 days ago',
    matchScore: 78,
    matchReason: 'Matches your experience level, but missing preferred distributed systems experience.',
    description: 'Join our search team to organize the world\'s information.',
    responsibilities: [
      'Write server-side code for web-based applications',
      'Create robust high-volume production applications'
    ],
    status: 'Saved'
  },
  {
    id: 'j3',
    title: 'Full Stack Intern',
    company: 'Microsoft',
    logo: 'M',
    location: 'Seattle, WA',
    workMode: 'On-site',
    salary: '$8k/month',
    experience: 'Internship',
    skills: ['C#', '.NET', 'React'],
    preferredSkills: ['Azure'],
    postedDate: '1 week ago',
    matchScore: 85,
    matchReason: 'Good match for your Full Stack intern goal and React skills.',
    description: 'Help us build the next generation of cloud productivity tools.',
    responsibilities: [
      'Develop full stack features across the Azure platform',
      'Collaborate with PMs and Designers'
    ],
    status: 'Interview'
  },
  {
    id: 'j4',
    title: 'React Developer',
    company: 'Netflix',
    logo: 'N',
    location: 'Remote',
    workMode: 'Remote',
    salary: '$150k - $200k',
    experience: '3+ years',
    skills: ['React', 'Redux', 'JavaScript', 'CSS'],
    preferredSkills: ['Performance Optimization'],
    postedDate: '1 day ago',
    matchScore: 95,
    matchReason: 'Exceptional match for your advanced React and JavaScript proficiency.',
    description: 'Help shape the UI for millions of viewers globally.',
    responsibilities: [
      'Optimize application for maximum speed and scalability',
      'Collaborate with streaming engineers'
    ],
    status: 'None'
  }
];

export const fetchJobs = async () => {
  return new Promise(resolve => setTimeout(() => resolve(mockJobs), 800));
};

export const fetchJobById = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = mockJobs.find(j => j.id === id);
      if (job) resolve(job);
      else reject(new Error('Job not found'));
    }, 500);
  });
};

export const fetchApplications = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockJobs.filter(j => ['Applied', 'Screening', 'Interview', 'Offer', 'Rejected'].includes(j.status)));
    }, 500);
  });
};

export const fetchSavedJobs = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(mockJobs.filter(j => j.status === 'Saved')), 500);
  });
};

export const simulateResumeMatch = async (jobId) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        overallScore: Math.floor(Math.random() * 30) + 70, // 70-99
        matchingSkills: ['React', 'JavaScript', 'Node.js'],
        missingSkills: ['AWS', 'Docker'],
        relevantExperience: '2 years Frontend Experience',
        missingKeywords: ['CI/CD', 'Kubernetes'],
        atsSuggestions: 'Add relevant AWS/Docker experience if genuinely applicable.',
        recommendation: 'Good potential fit. Consider highlighting backend integration work.'
      });
    }, 1500);
  });
};
