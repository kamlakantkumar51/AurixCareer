export const mockAIParsing = async (fileName) => {
  // Simulate AI processing delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  return {
    atsScore: Math.floor(Math.random() * 41) + 60, // Random score between 60-100
    structuredData: JSON.stringify({
      skills: ["JavaScript", "React", "Node.js", "Python", "SQL"],
      experienceYears: Math.floor(Math.random() * 5),
      educationLevel: "Bachelor's Degree",
    }),
    suggestions: JSON.stringify([
      "Quantify your achievements using specific metrics (e.g., 'Improved performance by 20%').",
      "Include more industry-specific keywords to pass ATS filters.",
      "Ensure action verbs start every bullet point in your experience section."
    ])
  }
}
