export const analyzeResume = async (file) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        overallCareerReadiness: 78,
        resumeAnalysis: {
          skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Express', 'MongoDB', 'Git'],
          languages: ['JavaScript', 'HTML', 'CSS'],
          frameworks: ['React', 'Express'],
          databases: ['MongoDB'],
          tools: ['Git'],
          projects: ['E-commerce Application', 'Portfolio Website', 'Task Manager API'],
          experience: ['Frontend Intern at TechCorp'],
          certifications: ['AWS Cloud Practitioner']
        },
        recommendedRoles: [
          {
            role: "React Developer",
            matchScore: 94,
            confidence: "High",
            reasons: "Strong React, JavaScript, HTML, CSS and frontend project experience.",
            matchingSkills: ["JavaScript", "React", "HTML", "CSS", "Git"],
            missingSkills: ["TypeScript", "Next.js", "Redux", "Testing"],
            recommendedActions: [
              "Improve React performance",
              "Learn frontend testing",
              "Practice advanced JavaScript",
              "Build one production-level project"
            ]
          },
          {
            role: "Frontend Developer",
            matchScore: 91,
            confidence: "High",
            reasons: "Strong frontend foundation combined with excellent project portfolio.",
            matchingSkills: ["JavaScript", "React", "HTML", "CSS"],
            missingSkills: ["Testing", "Advanced performance optimization"],
            recommendedActions: [
              "Learn Webpack/Vite in depth",
              "Master CSS animations",
              "Improve accessibility (a11y) knowledge"
            ]
          },
          {
            role: "Full Stack Developer",
            matchScore: 84,
            confidence: "High",
            reasons: "Strong frontend foundation combined with Node.js, Express and database experience.",
            matchingSkills: ["React", "JavaScript", "Node.js", "Express", "MongoDB"],
            missingSkills: ["System Design", "Authentication architecture", "Scalable backend architecture"],
            recommendedActions: [
              "Learn advanced System Design",
              "Implement robust authentication",
              "Study backend scaling strategies"
            ]
          },
          {
            role: "Software Engineer",
            matchScore: 81,
            confidence: "Strong",
            reasons: "Solid programming fundamentals and project experience, but lacking in core CS concepts.",
            matchingSkills: ["JavaScript", "React", "Node.js"],
            missingSkills: ["DSA", "System Design", "Cloud Basics"],
            recommendedActions: [
              "Practice DSA daily",
              "Learn core OS and Networking concepts"
            ]
          },
          {
            role: "Backend Developer",
            matchScore: 73,
            confidence: "Moderate",
            reasons: "Some Node.js and MongoDB experience, but lacking deep database and API design skills.",
            matchingSkills: ["Node.js", "Express", "MongoDB"],
            missingSkills: ["SQL", "PostgreSQL", "Caching (Redis)", "Message Queues"],
            recommendedActions: [
              "Learn a relational database (SQL)",
              "Study API performance optimization",
              "Learn Redis"
            ]
          }
        ],
        careerRoadmaps: {
          "React Developer": [
            "Fundamentals",
            "JavaScript",
            "React Basics",
            "Advanced Hooks",
            "State Management",
            "Next.js",
            "React Developer"
          ],
          "Frontend Developer": [
            "Fundamentals",
            "HTML/CSS",
            "JavaScript",
            "Framework (React)",
            "Testing",
            "Performance",
            "Frontend Developer"
          ],
          "Full Stack Developer": [
            "Programming Fundamentals",
            "JavaScript",
            "React",
            "Node.js",
            "Databases",
            "Authentication",
            "Backend Architecture",
            "System Design",
            "Full Stack Developer"
          ],
          "Software Engineer": [
            "DSA",
            "Core CS Subjects",
            "Programming Languages",
            "Development Tools",
            "System Design",
            "Software Engineer"
          ],
          "Backend Developer": [
            "Programming Fundamentals",
            "Node.js",
            "SQL & NoSQL",
            "API Design",
            "Authentication",
            "Caching",
            "System Design",
            "Backend Developer"
          ]
        },
        skillGaps: {
          "React Developer": [
            { skill: "React", score: 82, priority: "Good" },
            { skill: "JavaScript", score: 86, priority: "Good" },
            { skill: "Testing", score: 52, priority: "Needs Improvement" },
            { skill: "TypeScript", score: 20, priority: "High Priority" }
          ],
          "Frontend Developer": [
            { skill: "React", score: 82, priority: "Good" },
            { skill: "JavaScript", score: 86, priority: "Good" },
            { skill: "Performance Optimization", score: 41, priority: "High Priority" },
            { skill: "Testing", score: 52, priority: "Needs Improvement" }
          ],
          "Full Stack Developer": [
            { skill: "Frontend (React)", score: 82, priority: "Good" },
            { skill: "Backend (Node.js)", score: 65, priority: "Moderate" },
            { skill: "System Design", score: 30, priority: "High Priority" },
            { skill: "Databases (MongoDB)", score: 60, priority: "Moderate" }
          ],
          "Software Engineer": [
            { skill: "JavaScript", score: 86, priority: "Good" },
            { skill: "DSA", score: 45, priority: "High Priority" },
            { skill: "System Design", score: 30, priority: "High Priority" }
          ],
          "Backend Developer": [
            { skill: "Node.js", score: 65, priority: "Moderate" },
            { skill: "MongoDB", score: 60, priority: "Moderate" },
            { skill: "SQL", score: 10, priority: "High Priority" },
            { skill: "System Design", score: 30, priority: "High Priority" }
          ]
        },
        jobMatches: {
          "React Developer": [
            { role: "React Developer", company: "TechCorp", location: "Remote", match: "95%", required: "React, Redux, TS", missing: "TS, Redux", why: "Strong React skills align with core requirements." },
            { role: "Frontend Developer (React)", company: "Webify", location: "New York, NY", match: "91%", required: "React, JS, CSS", missing: "Testing", why: "Matches 3 out of 4 core technologies." }
          ],
          "Frontend Developer": [
            { role: "Frontend Developer", company: "Stripe", location: "Remote", match: "88%", required: "JS, React, HTML, CSS", missing: "Advanced Perf", why: "Strong JS/React foundation." },
            { role: "UI Engineer", company: "Adobe", location: "San Francisco, CA", match: "85%", required: "HTML, CSS, JS", missing: "a11y", why: "Excellent UI/UX project experience." }
          ],
          "Full Stack Developer": [
            { role: "Full Stack Developer", company: "StartupX", location: "Remote", match: "86%", required: "MERN Stack", missing: "System Design", why: "MERN stack projects highly relevant." },
            { role: "Software Engineer", company: "Microsoft", location: "Seattle, WA", match: "81%", required: "Node.js, React, SQL", missing: "SQL", why: "Node.js and React experience fits perfectly." }
          ],
          "Software Engineer": [
            { role: "Software Engineer I", company: "Google", location: "San Francisco, CA", match: "78%", required: "DSA, System Design", missing: "Advanced DSA", why: "Strong foundation, needs more DSA." }
          ],
          "Backend Developer": [
            { role: "Backend Developer", company: "DataCo", location: "Remote", match: "75%", required: "Node.js, SQL", missing: "SQL", why: "Good Node.js experience, missing relational DB." }
          ]
        },
        aiInsights: {
          "React Developer": "Your resume shows a strong frontend foundation with React and JavaScript. You currently have the strongest alignment with React Developer roles.\n\nYour biggest opportunity is strengthening testing and learning TypeScript.",
          "Frontend Developer": "Your resume shows a strong frontend foundation with React and JavaScript. You currently have the strongest alignment with Frontend Developer roles.\n\nFocus on performance optimization and testing to reach senior levels.",
          "Full Stack Developer": "You have a solid MERN stack foundation.\n\nTo excel as a Full Stack Developer, you need to broaden your backend skills, particularly in System Design and robust authentication strategies.",
          "Software Engineer": "You have good practical coding skills.\n\nTo land a general Software Engineer role at a top tech company, heavily prioritize Data Structures & Algorithms and core CS concepts.",
          "Backend Developer": "Your Node.js experience is a good start.\n\nTo become a dedicated Backend Developer, you must learn SQL databases, caching mechanisms, and system architecture."
        },
        resumeHealth: {
          overall: 82,
          metrics: {
            "ATS Compatibility": 82,
            "Technical Relevance": 88,
            "Project Strength": 76,
            "Experience Presentation": 71,
            "Keyword Coverage": 84
          },
          suggestions: {
            "React Developer": [
              "Add 'TypeScript' and 'Redux' as skills and build small projects using them.",
              "Highlight specific performance improvements in your React projects (e.g., 'reduced render time by 20%').",
              "Add a dedicated section for Testing (Jest, React Testing Library)."
            ],
            "Frontend Developer": [
              "Include metrics in your portfolio project descriptions (e.g., 'increased user engagement by 15%').",
              "Mention accessibility (a11y) standards if you used them.",
              "Explicitly list responsive design techniques."
            ],
            "Full Stack Developer": [
              "Detail the database schema and API routes in your Task Manager API project.",
              "Mention deployment platforms used (e.g., Vercel, Heroku, AWS).",
              "Highlight any authentication mechanisms (JWT, OAuth) you implemented."
            ],
            "Software Engineer": [
              "Reframe projects to emphasize problem-solving and algorithmic complexity.",
              "Highlight your AWS Cloud Practitioner certification more prominently.",
              "If applicable, add a 'Relevant Coursework' section detailing CS fundamentals."
            ],
            "Backend Developer": [
              "Emphasize the 'Task Manager API' project; add details about scaling or database queries.",
              "Learn and add SQL to your skills list.",
              "Mention any experience with RESTful design principles."
            ]
          }
        }
      });
    }, 2500);
  });
};
