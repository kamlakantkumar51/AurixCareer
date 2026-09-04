import prisma from '../config/db.js';

// Since questions and correct answers are stored on the frontend, we will trust the 
// score calculations sent by the frontend for this implementation, but we will store 
// the results in the database and log proctoring violations.
// In a fully robust system, the backend would contain the answer key.

export const startAssessment = async (req, res) => {
  try {
    const { assessmentId } = req.body;
    
    // Check if profile exists
    const profile = await prisma.studentProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!profile) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    res.json({
      message: 'Assessment session started',
      startedAt: new Date().toISOString()
    });

  } catch (error) {
    console.error('Start Assessment Error:', error);
    res.status(500).json({ error: 'Failed to start assessment' });
  }
};

export const submitAssessment = async (req, res) => {
  try {
    const {
      assessmentId,
      score,
      totalQuestions,
      correctAnswers,
      incorrectAnswers,
      unanswered,
      percentage,
      timeTaken,
      startedAt,
      proctoringViolations,
      violationTypes,
      completionStatus
    } = req.body;

    // Get student profile ID
    const profile = await prisma.studentProfile.findUnique({
      where: { userId: req.user.id }
    });

    if (!profile) {
      return res.status(404).json({ error: 'Student profile not found' });
    }

    // Save the result using raw SQL to bypass prisma client cache if it wasn't regenerated
    await prisma.$executeRaw`
      INSERT INTO AssessmentResult (
        id, studentProfileId, assessmentId, score, totalQuestions,
        correctAnswers, incorrectAnswers, unanswered, percentage,
        timeTaken, startedAt, completedAt, proctoringViolations,
        violationTypes, completionStatus
      ) VALUES (
        lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))),2) || '-' || substr('89ab',abs(random()) % 4 + 1, 1) || substr(lower(hex(randomblob(2))),2) || '-' || lower(hex(randomblob(6))),
        ${profile.id}, ${assessmentId}, ${score}, ${totalQuestions},
        ${correctAnswers}, ${incorrectAnswers}, ${unanswered}, ${percentage},
        ${timeTaken}, ${new Date(startedAt).toISOString()}, ${new Date().toISOString()}, ${proctoringViolations},
        ${JSON.stringify(violationTypes || [])}, ${completionStatus}
      )
    `;

    res.json({
      message: 'Assessment submitted successfully'
    });

  } catch (error) {
    console.error('Submit Assessment Error:', error);
    res.status(500).json({ error: 'Failed to submit assessment' });
  }
};
