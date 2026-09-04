import { getJobs } from './mockData';

export const fetchRecommendedJobs = async () => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, data: getJobs() };
};

export const getJobById = async (id) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  const job = getJobs().find(j => j.id === id);
  return { success: !!job, data: job };
};

export const fetchJobSearch = async (params) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, data: getJobs() };
};

export const toggleSaveJob = async (job) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, message: 'Job saved successfully (mock)' };
};

export const applyForJob = async (job, payload) => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, message: 'Applied successfully (mock)' };
};

export const getSavedJobs = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, data: [] }; // Mock empty
};

export const getAppliedJobs = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return { success: true, data: [] }; // Mock empty
};
