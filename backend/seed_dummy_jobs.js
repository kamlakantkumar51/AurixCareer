import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const jobsData = [
  {
    title: 'Software Developer / Engineer',
    type: 'FULL_TIME',
    mode: 'REMOTE',
    location: 'Remote, India',
    salaryMin: 6.0,
    salaryMax: 12.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'We are looking for a Software Developer with experience in Java and Spring Boot. You will be responsible for building scalable web applications and optimizing database queries.',
    requirements: JSON.stringify(['1-3 years of experience in Java development.', 'Strong understanding of SQL.', 'Experience with Git.', 'Skills: Java, Spring Boot, SQL, Git']),
    status: 'ACTIVE'
  },
  {
    title: 'Python Developer',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Bangalore, India',
    salaryMin: 6.0,
    salaryMax: 14.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'Join our backend team as a Python Developer. You will build RESTful APIs using Django and manage PostgreSQL databases.',
    requirements: JSON.stringify(['1-3 years of Python experience.', 'Familiarity with Django and REST APIs.', 'Knowledge of PostgreSQL.', 'Skills: Python, Django, REST API, PostgreSQL']),
    status: 'ACTIVE'
  },
  {
    title: 'React Developer',
    type: 'FULL_TIME',
    mode: 'REMOTE',
    location: 'Remote, India',
    salaryMin: 6.0,
    salaryMax: 12.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'We are seeking a React Developer to build dynamic user interfaces. You will work closely with designers and backend engineers to deliver high-quality frontend experiences.',
    requirements: JSON.stringify(['1-3 years of React experience.', 'Strong proficiency in JavaScript and Tailwind CSS.', 'Experience with state management tools like Redux.', 'Skills: React, JavaScript, Redux, Tailwind CSS']),
    status: 'ACTIVE'
  },
  {
    title: 'Frontend Developer / Engineer',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Pune, India',
    salaryMin: 5.0,
    salaryMax: 10.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'Looking for a Frontend Developer skilled in core web technologies. You will be responsible for translating design wireframes to actual code.',
    requirements: JSON.stringify(['1-3 years of experience.', 'Strong knowledge of HTML, CSS, JavaScript, and Bootstrap.', 'Skills: HTML, CSS, JavaScript, Bootstrap']),
    status: 'ACTIVE'
  },
  {
    title: 'Software Engineer',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Hyderabad, India',
    salaryMin: 7.0,
    salaryMax: 15.0,
    experienceMin: 2,
    experienceMax: 4,
    description: 'We need a mid-level Software Engineer with strong fundamentals in data structures and system design to architect robust applications.',
    requirements: JSON.stringify(['2-4 years of experience.', 'Strong CS fundamentals.', 'Experience with system design.', 'Skills: Java, Data Structures, System Design, Git']),
    status: 'ACTIVE'
  },
  {
    title: 'Full Stack Developer',
    type: 'FULL_TIME',
    mode: 'REMOTE',
    location: 'Remote, India',
    salaryMin: 7.0,
    salaryMax: 16.0,
    experienceMin: 2,
    experienceMax: 4,
    description: 'Join our team as a Full Stack Developer using the MERN stack. You will be responsible for full-lifecycle application development.',
    requirements: JSON.stringify(['2-4 years of experience in MERN stack.', 'Strong understanding of Node.js and MongoDB.', 'Proficient in React.', 'Skills: MERN Stack, Node.js, React, MongoDB']),
    status: 'ACTIVE'
  },
  {
    title: 'Backend Developer',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Bangalore, India',
    salaryMin: 6.0,
    salaryMax: 13.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'Looking for a Backend Developer to maintain and scale our core APIs using Node.js and Express.',
    requirements: JSON.stringify(['1-3 years of backend experience.', 'Strong Node.js and SQL skills.', 'Experience building scalable REST APIs.', 'Skills: Node.js, Express.js, SQL, REST API']),
    status: 'ACTIVE'
  },
  {
    title: 'UI/UX Designer',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Remote, India',
    salaryMin: 5.0,
    salaryMax: 10.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'We are seeking a UI/UX Designer to create intuitive user experiences. You will conduct user research and design wireframes and prototypes in Figma.',
    requirements: JSON.stringify(['1-3 years of design experience.', 'Proficiency in Figma.', 'Strong portfolio demonstrating UI/UX skills.', 'Skills: Figma, UI Design, UX Research, Prototyping']),
    status: 'ACTIVE'
  },
  {
    title: 'DevOps Engineer',
    type: 'FULL_TIME',
    mode: 'REMOTE',
    location: 'Remote, India',
    salaryMin: 8.0,
    salaryMax: 16.0,
    experienceMin: 2,
    experienceMax: 5,
    description: 'Join us as a DevOps Engineer to streamline our CI/CD pipelines and manage cloud infrastructure on AWS.',
    requirements: JSON.stringify(['2-5 years of DevOps experience.', 'Hands-on experience with Docker and Kubernetes.', 'Proficiency in AWS.', 'Skills: AWS, Docker, Kubernetes, Jenkins']),
    status: 'ACTIVE'
  },
  {
    title: 'Data Analyst',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Delhi, India',
    salaryMin: 5.0,
    salaryMax: 10.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'Looking for a Data Analyst to interpret data and turn it into actionable insights using Power BI and SQL.',
    requirements: JSON.stringify(['1-3 years of experience as a Data Analyst.', 'Strong SQL and Power BI skills.', 'Basic knowledge of Python for data manipulation.', 'Skills: SQL, Excel, Power BI, Python']),
    status: 'ACTIVE'
  },
  {
    title: 'QA Engineer',
    type: 'FULL_TIME',
    mode: 'HYBRID',
    location: 'Pune, India',
    salaryMin: 4.5,
    salaryMax: 9.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'We need a QA Engineer for both manual and automated testing of our web applications using Selenium and Java.',
    requirements: JSON.stringify(['1-3 years of QA experience.', 'Experience with Manual Testing and Selenium.', 'Familiarity with JIRA.', 'Skills: Manual Testing, Selenium, Java, JIRA']),
    status: 'ACTIVE'
  },
  {
    title: 'Mobile App Developer (Flutter)',
    type: 'FULL_TIME',
    mode: 'REMOTE',
    location: 'Remote, India',
    salaryMin: 6.0,
    salaryMax: 12.0,
    experienceMin: 1,
    experienceMax: 3,
    description: 'We are looking for a Mobile App Developer with expertise in Flutter and Dart to build beautiful cross-platform applications.',
    requirements: JSON.stringify(['1-3 years of mobile development experience.', 'Proficiency in Flutter and Dart.', 'Experience integrating REST APIs and Firebase.', 'Skills: Flutter, Dart, REST API, Firebase']),
    status: 'ACTIVE'
  }
]

async function main() {
  try {
    const recruiter = await prisma.recruiterProfile.findFirst({
      where: { user: { email: 'ck380807@gmail.com' } },
      include: { user: true }
    })

    if (!recruiter) {
      console.log('No recruiter found. Please register a recruiter first.')
      return
    }

    console.log(`Found recruiter: ${recruiter.user.email} (ID: ${recruiter.id}) (CompanyID: ${recruiter.companyId})`)

    let createdCount = 0
    for (const job of jobsData) {
      await prisma.job.create({
        data: {
          ...job,
          recruiterId: recruiter.id,
          companyId: recruiter.companyId
        }
      })
      createdCount++
    }

    console.log(`Successfully created ${createdCount} dummy jobs for the recruiter!`)
  } catch (error) {
    console.error('Error seeding jobs:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
