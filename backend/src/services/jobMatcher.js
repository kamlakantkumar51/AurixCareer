/**
 * Calculates a dynamic Match Score based on the user's profile and the job's requirements.
 */

export const calculateMatchScore = (job, profile) => {
  if (!profile) return { score: 0, reason: 'Profile not found.', missingSkills: [] };

  // Weights (Total 100%)
  const WEIGHTS = {
    skill: 40,
    role: 20,
    experience: 15,
    location: 10,
    workMode: 5,
    education: 10
  };

  let score = 0;
  let reasonPoints = [];
  
  // 1. Skill Match (40%)
  // Convert profile skills to a flat array of lowercase strings
  const profileSkills = profile.skills?.map(s => s.skill?.name?.toLowerCase()) || [];
  const jobSkills = job.skills.map(s => s.toLowerCase());
  
  let skillMatchPct = 0;
  let matchedSkills = [];
  let missingSkills = [];

  if (jobSkills.length > 0) {
    matchedSkills = jobSkills.filter(js => profileSkills.includes(js));
    missingSkills = jobSkills.filter(js => !profileSkills.includes(js));
    skillMatchPct = matchedSkills.length / jobSkills.length;
    score += skillMatchPct * WEIGHTS.skill;
  } else {
    // If job specifies no skills, give full credit for this section to not penalize
    score += WEIGHTS.skill;
  }

  // 2. Role Match (20%)
  if (profile.targetRole && job.title) {
    if (job.title.toLowerCase().includes(profile.targetRole.toLowerCase()) || 
        profile.targetRole.toLowerCase().includes(job.title.toLowerCase())) {
      score += WEIGHTS.role;
      reasonPoints.push('Matches your target role');
    } else {
      // Partial match if there's a common word (e.g. "Developer" in both)
      const targetWords = profile.targetRole.toLowerCase().split(' ');
      const titleWords = job.title.toLowerCase().split(' ');
      const intersection = targetWords.filter(w => titleWords.includes(w) && w.length > 3);
      if (intersection.length > 0) {
        score += WEIGHTS.role * 0.5;
        reasonPoints.push('Partially matches your target role');
      }
    }
  }

  // 3. Experience Match (15%)
  // Fresher constraint requested by user
  if (profile.graduationYear) {
    const currentYear = new Date().getFullYear();
    const yearsOfExp = currentYear - profile.graduationYear;
    
    if (yearsOfExp <= 1) { // Fresher / Student
      if (job.isInternship || job.experienceLevel === 'Fresher') {
        score += WEIGHTS.experience;
        reasonPoints.push('Entry-level/Internship matches your experience');
      } else {
        // Penalize senior roles for freshers
        score += 0; // 0 points
      }
    } else {
      // Experienced
      if (!job.isInternship) {
        score += WEIGHTS.experience;
      }
    }
  } else {
    // Default fallback
    score += WEIGHTS.experience * 0.5;
  }

  // 4. Location Match (10%)
  if (profile.location && job.location) {
    if (job.location.toLowerCase().includes(profile.location.toLowerCase())) {
      score += WEIGHTS.location;
      reasonPoints.push('Location match');
    } else if (job.workMode === 'Remote') {
      score += WEIGHTS.location; // Remote counts as location match
    }
  }

  // 5. Work Mode Match (5%)
  // Assuming profile has a preferredWorkMode (if not, we skip or give partial)
  // We'll give it by default since we don't have it in prisma schema explicitly, maybe it's in a JSON field
  if (job.workMode === 'Remote') {
    score += WEIGHTS.workMode;
    reasonPoints.push('Remote preference');
  }

  // 6. Education (10%)
  // We'll just give flat 10 for now as most jobs require a degree which the student profile implies.
  score += WEIGHTS.education;

  // Final compilation
  const finalScore = Math.min(Math.round(score), 100);

  // Generate a human-readable reason
  let finalReason = '';
  if (finalScore >= 80) {
    finalReason = `Strong match for ${matchedSkills.slice(0, 3).join(', ')} ${reasonPoints.length > 0 ? 'and ' + reasonPoints[0].toLowerCase() : ''}.`;
  } else if (finalScore >= 60) {
    finalReason = `Good match based on your skills, but you are missing ${missingSkills.slice(0, 2).join(' and ')}.`;
  } else {
    finalReason = `Low match. Requirements might be outside your current focus area.`;
  }

  return {
    score: finalScore,
    reason: finalReason,
    missingSkills
  };
};
