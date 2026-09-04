/**
 * Normalizes different API provider job formats into a consistent CareerAI internal structure.
 * 
 * Internal Schema Requirement:
 * {
 *   id, title, company, companyLogo, location, workMode, employmentType, 
 *   experienceLevel, salaryMin, salaryMax, currency, description, skills, 
 *   tags, postedAt, sourceUrl, isInternship
 * }
 */

export const normalizeJSearchJob = (job) => {
  const isInternship = 
    job.job_employment_type?.toLowerCase() === 'intern' || 
    job.job_title?.toLowerCase().includes('intern') ||
    job.job_is_remote === false && job.job_title?.toLowerCase().includes('co-op');

  let workMode = 'On-site';
  if (job.job_is_remote) workMode = 'Remote';
  else if (job.job_title?.toLowerCase().includes('hybrid') || job.job_description?.toLowerCase().includes('hybrid')) workMode = 'Hybrid';

  const tags = [];
  if (isInternship) tags.push('Internship');
  if (workMode !== 'On-site') tags.push(workMode);
  if (job.job_employment_type) tags.push(job.job_employment_type.replace('_', ' ').toUpperCase());
  
  return {
    id: job.job_id || Math.random().toString(36).substring(7),
    title: job.job_title || 'Unknown Title',
    company: job.employer_name || 'Unknown Company',
    companyLogo: job.employer_logo || null,
    location: `${job.job_city || ''} ${job.job_state || ''} ${job.job_country || ''}`.trim() || 'Location unspecified',
    workMode,
    employmentType: job.job_employment_type || 'FULLTIME',
    experienceLevel: isInternship ? 'Internship' : (job.job_required_experience?.required_experience_in_months <= 12 ? 'Fresher' : 'Experienced'),
    salaryMin: job.job_min_salary || null,
    salaryMax: job.job_max_salary || null,
    currency: job.job_salary_currency || 'USD',
    description: job.job_description || '',
    skills: extractSkillsFromDescription(job.job_description || ''),
    tags,
    postedAt: job.job_posted_at_datetime_utc || new Date().toISOString(),
    sourceUrl: job.job_apply_link || '#',
    isInternship
  };
};

/**
 * Basic heuristic skill extractor if provider doesn't give discrete skills.
 */
function extractSkillsFromDescription(desc) {
  const commonSkills = [
    'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Java', 'C++', 
    'SQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Next.js', 'Tailwind',
    'GraphQL', 'Ruby', 'PHP', 'Swift', 'Kotlin', 'Rust', 'Go'
  ];
  
  const found = [];
  const text = desc.toLowerCase();
  
  for (const skill of commonSkills) {
    if (text.includes(skill.toLowerCase())) {
      found.push(skill);
    }
  }
  
  return found;
}
