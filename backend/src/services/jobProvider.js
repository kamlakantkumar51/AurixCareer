import axios from 'axios';

// Using Arbeitnow API - A free, open API for jobs that doesn't require an API key
const ARBEITNOW_API_URL = 'https://www.arbeitnow.com/api/job-board-api';

export const searchJobs = async (query = 'Developer', location = '', page = 1) => {
  try {
    const response = await axios.get(`${ARBEITNOW_API_URL}?page=${page}`);
    
    // Filter locally if a query was provided, as the API only supports basic pagination
    let rawJobs = response.data.data || [];
    
    if (query && query.toLowerCase() !== 'developer') {
      const q = query.toLowerCase();
      rawJobs = rawJobs.filter(job => 
        (job.title && job.title.toLowerCase().includes(q)) || 
        (job.company_name && job.company_name.toLowerCase().includes(q))
      );
    }
    
    const formattedJobs = rawJobs.map(job => ({
      id: job.slug,
      title: job.title,
      company: job.company_name,
      location: job.location,
      employmentType: job.job_types && job.job_types.length > 0 ? job.job_types[0] : 'FULL_TIME',
      workMode: job.remote ? 'REMOTE' : 'ONSITE',
      description: job.description.replace(/<[^>]+>/g, '').substring(0, 300) + '...',
      sourceUrl: job.url,
      skills: job.tags || [],
      postedAt: new Date(job.created_at * 1000).toISOString(),
    }));

    return { data: formattedJobs, source: 'Arbeitnow (Real Jobs)' };
  } catch (error) {
    console.error('Error fetching jobs from Arbeitnow:', error.message);
    
    // Fallback if API fails
    return { data: getMockJobs(), source: 'Mock Data Fallback' };
  }
};

const getMockJobs = () => {
  return [
    {
      id: Math.random().toString(36).substring(7),
      title: 'Senior React Developer',
      company: 'TechNova',
      location: 'San Francisco, CA',
      employmentType: 'FULL_TIME',
      workMode: 'REMOTE',
      description: 'We are looking for a Senior React Developer to join our core product team.',
      sourceUrl: '#',
      skills: ['React', 'JavaScript', 'TypeScript', 'Redux', 'Tailwind'],
      postedAt: new Date().toISOString(),
    }
  ];
};
