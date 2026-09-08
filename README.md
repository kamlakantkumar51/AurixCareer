# 🚀 Next-Gen Recruitment & Student Prep Platform

> **A full-stack AI-powered recruitment and student preparation platform that connects students with recruiters while helping candidates build skills, improve career readiness, discover opportunities, and track their placement journey.**

![Project Banner](./assets/screenshots/dashboard.png)

---

## 📌 Table of Contents

* [Overview](#-project-overview)
* [Problem Statement](#-problem-statement)
* [Solution](#-solution)
* [Key Highlights](#-key-highlights)
* [Features](#-features)

  * [Student Features](#-student-features)
  * [Recruiter Features](#-recruiter-features)
* [Application Workflow](#-application-workflow)
* [Student Journey](#-student-journey)
* [Recruiter Journey](#-recruiter-journey)
* [AI Career Navigator](#-ai-career-navigator)
* [AI Candidate Matching](#-ai-candidate-matching)
* [Skill Assessment & Practice](#-skill-assessment--practice)
* [Job Discovery](#-job-discovery)
* [Application Tracking](#-application-tracking)
* [Notifications](#-notifications)
* [Authentication & Authorization](#-authentication--authorization)
* [Technical Architecture](#-technical-architecture)
* [Technology Stack](#-technology-stack)
* [Frontend Architecture](#-frontend-architecture)
* [Backend Architecture](#-backend-architecture)
* [API Architecture](#-api-architecture)
* [Database Architecture](#-database-architecture)
* [Project Structure](#-project-structure)
* [Frontend Folder Structure](#-frontend-folder-structure)
* [Backend Folder Structure](#-backend-folder-structure)
* [State Management](#-state-management)
* [Data Fetching](#-data-fetching)
* [Form Validation](#-form-validation)
* [Security](#-security)
* [Real-Time Communication](#-real-time-communication)
* [Dashboard Analytics](#-dashboard-analytics)
* [UI/UX](#-uiux)
* [Screenshots](#-screenshots)
* [Installation](#-installation)
* [Environment Variables](#-environment-variables)
* [Running the Project](#-running-the-project)
* [Prisma Database](#-prisma-database)
* [API Communication](#-api-communication)
* [Error Handling](#-error-handling)
* [Performance](#-performance)
* [Testing](#-testing)
* [Troubleshooting](#-troubleshooting)
* [Future Enhancements](#-future-enhancements)
* [Scalability](#-scalability)
* [Contribution](#-contributing)
* [License](#-license)

---

# 📖 Project Overview

The **Next-Gen Recruitment & Student Prep Platform** is a modern full-stack web application designed to solve two major problems:

1. Students struggle to understand their current placement readiness and find relevant opportunities.
2. Recruiters spend significant time filtering large numbers of applications to identify suitable candidates.

The platform brings both sides of the recruitment ecosystem into one unified system.

### 👨‍🎓 For Students

Students can:

* Create professional profiles
* Add education details
* Add technical skills
* Showcase projects
* Build career profiles
* Upload and manage resumes
* Receive AI-powered career insights
* Get a career readiness score
* Practice technical questions
* Complete skill assessments
* Track learning progress
* Maintain notes
* Discover relevant jobs
* Save interesting jobs
* Apply for jobs
* Track application status
* Receive notifications
* Monitor their overall placement journey

### 🧑‍💼 For Recruiters

Recruiters can:

* Create recruiter profiles
* Create job postings
* Define job requirements
* Add required skills
* Add screening questions
* View applicants
* Filter candidates
* View candidate profiles
* Get AI-assisted candidate matching
* View match scores
* Shortlist candidates
* Move candidates through hiring stages
* Track recruitment analytics
* Receive application notifications
* Manage active and closed job postings

---

# 🎯 Problem Statement

Traditional student placement systems often separate preparation and recruitment.

Students usually need different platforms for:

* Learning
* DSA practice
* Core CS preparation
* Resume building
* Job searching
* Application tracking
* Career guidance

Recruiters, meanwhile, often need to manually inspect:

* Resumes
* Skills
* Projects
* Education
* Experience
* Applications

This creates unnecessary friction for both students and recruiters.

---

# 💡 Our Solution

This platform combines:

```text
Student Profile
       ↓
Skill Development
       ↓
Practice & Assessments
       ↓
Career Readiness
       ↓
AI Career Guidance
       ↓
Job Discovery
       ↓
Application
       ↓
Recruiter Evaluation
       ↓
AI Candidate Matching
       ↓
Shortlisting
       ↓
Interview
       ↓
Hiring
```

The objective is to create a complete **student-to-recruiter ecosystem** rather than just another job portal.

---

# ✨ Key Highlights

* 🎓 Student-focused placement preparation
* 🤖 AI-powered career navigation
* 📊 Career readiness scoring
* 🧠 Skill assessment system
* 💼 Job discovery
* ⭐ Saved jobs
* 📄 Resume management
* 🧑‍💼 Recruiter dashboard
* 🤖 AI-assisted candidate matching
* 📈 Recruitment analytics
* 🔔 Real-time notifications
* 🔐 JWT authentication
* 🔒 Password hashing with bcrypt
* 🛡️ Helmet security middleware
* 🌐 CORS configuration
* ⚡ React Query caching
* 🗃️ Prisma ORM
* 🧩 Zustand state management
* 📝 React Hook Form
* ✅ Zod validation
* 📡 Socket.io real-time communication
* 📊 Recharts analytics
* 🎨 Tailwind CSS
* ⚛️ React 19
* 🚀 Vite development environment

---

# 🚀 Features

# 👨‍🎓 Student Features

## 1. Smart Profile Building

Students can create a detailed professional profile containing:

* Full name
* Education
* College/university
* Skills
* Projects
* Certifications
* Career interests
* Resume
* Professional information

The profile acts as the student's central identity across the platform.

---

## 2. AI Career Navigator

The AI Career Navigator analyzes student information and provides personalized career insights.

It can be used to understand:

* Current skill level
* Career readiness
* Resume quality
* Skill gaps
* Improvement areas
* Suggested career direction

### Career Readiness

The platform provides a readiness-oriented view of the student's current profile.

![AI Navigator Readiness](./assets/screenshots/ai_navigator_readiness.png)

---

## 3. AI Resume Analysis

Students can receive AI-powered feedback on their resume.

The system can help identify:

* Missing skills
* Weak sections
* Improvement opportunities
* Profile completeness
* Career alignment

![AI Navigator Resume](./assets/screenshots/ai_navigator_resume.png)

---

## 4. Skill Assessments

Students can test their knowledge through technical assessments.

Possible areas include:

* DSA
* Programming
* OOP
* DBMS
* SQL
* Computer Networks
* Operating Systems
* Aptitude
* Technical fundamentals

Assessment results can contribute toward understanding overall skill readiness.

---

## 5. Practice Section

The practice section provides students with a dedicated environment for improving technical skills.

Students can:

* Select practice topics
* Solve questions
* Track progress
* Review performance
* Continue previous sessions
* Improve weak areas

![Practice Section](./assets/screenshots/practice.png)

---

## 6. Notes Section

Students can maintain notes alongside their preparation.

This can be useful for:

* Interview preparation
* SQL concepts
* DSA patterns
* DBMS revision
* Computer Networks
* OOP concepts
* Aptitude formulas
* Important interview questions

![Notes Section](./assets/screenshots/notes.png)

---

# 💼 Job Discovery

Students can browse available opportunities from recruiters.

The job discovery system can display:

* Job title
* Company
* Required skills
* Job description
* Eligibility
* Location
* Employment type
* Requirements
* Screening information

![Jobs List](./assets/screenshots/jobs.png)

Students can apply directly to suitable positions.

---

# ⭐ Saved Opportunities

Students can bookmark jobs they are interested in.

Saved jobs provide a convenient way to:

* Review opportunities later
* Compare positions
* Track interesting roles
* Avoid losing important job listings

![Saved Jobs](./assets/screenshots/saved_jobs.png)

---

# 🧑‍💼 Recruiter Features

## 1. Recruiter Dashboard

Recruiters get a centralized dashboard containing recruitment insights.

The dashboard can provide information such as:

* Total jobs
* Active jobs
* Applications
* Shortlisted candidates
* Interviews
* Hiring progress
* Candidate engagement

![Recruiter Dashboard](./assets/screenshots/recruiter_dashboard.png)

---

# 🤖 AI Hiring Insights

The platform provides AI-assisted candidate matching.

Instead of manually checking every applicant, recruiters can get candidate insights based on:

* Required skills
* Candidate skills
* Job requirements
* Profile information
* Projects
* Experience
* Assessment performance

![Recruiter Candidates](./assets/screenshots/recruiter_candidates.png)

---

# 📊 Candidate Matching

A conceptual candidate matching workflow:

```text
Job Requirements
       ↓
Required Skills
       ↓
Candidate Profile
       ↓
Candidate Skills
       ↓
Projects / Experience
       ↓
Assessment Performance
       ↓
Matching Logic
       ↓
Candidate Match Score
```

This helps recruiters prioritize candidates who appear more aligned with the job requirements.

---

# 📝 Job Management

Recruiters can create and manage job postings.

A job posting can contain:

* Job title
* Description
* Required skills
* Eligibility criteria
* Experience requirements
* Location
* Employment type
* Screening questions
* Application settings

![Recruiter Job Postings](./assets/screenshots/recruiter_postings.png)

---

# 📋 Candidate Tracking

Recruiters can manage candidates through different recruitment stages.

```text
Applied
   ↓
Review
   ↓
Shortlisted
   ↓
Interview
   ↓
Hired
```

This creates a simplified Applicant Tracking System (ATS)-style workflow.

Recruiters can move candidates between stages according to their hiring process.

---

# 🔔 Notifications & Updates

The platform includes notification functionality for important events.

Notifications can be generated for:

* New applications
* Application status updates
* Shortlisting
* Interview updates
* Hiring decisions
* Job-related events
* Recruiter actions

![Notifications](./assets/screenshots/notifications.png)

Real-time communication can be handled using **Socket.io**.

---

# 🔄 Application Workflow

The complete application lifecycle can be represented as:

```text
Student
   │
   ├── Creates Profile
   │
   ├── Adds Skills
   │
   ├── Uploads Resume
   │
   ├── Completes Practice
   │
   ├── Takes Assessments
   │
   ├── Checks Career Readiness
   │
   ├── Discovers Jobs
   │
   ├── Saves Jobs
   │
   └── Applies
          │
          ▼
       Recruiter
          │
          ├── Reviews Application
          │
          ├── Checks Candidate Profile
          │
          ├── Reviews Match Score
          │
          ├── Shortlists
          │
          ├── Interviews
          │
          └── Hires
```

---

# 👨‍🎓 Student Journey

A student can follow the complete placement journey:

### Step 1 — Registration

Student creates an account.

### Step 2 — Profile Creation

Student completes:

* Personal profile
* Education
* Skills
* Projects
* Resume

### Step 3 — Preparation

Student practices:

* DSA
* Core CS
* SQL
* OOP
* Aptitude
* Other technical topics

### Step 4 — Assessment

Student tests their knowledge.

### Step 5 — AI Analysis

AI Career Navigator provides career-oriented insights.

### Step 6 — Job Discovery

Student explores suitable opportunities.

### Step 7 — Application

Student applies to relevant jobs.

### Step 8 — Tracking

Student can monitor application progress.

---

# 🧑‍💼 Recruiter Journey

Recruiters can follow:

```text
Recruiter Registration
        ↓
Recruiter Profile
        ↓
Create Job
        ↓
Define Requirements
        ↓
Receive Applications
        ↓
AI Candidate Matching
        ↓
Review Candidates
        ↓
Shortlist
        ↓
Interview
        ↓
Hire
```

---

# 🤖 AI Career Navigator

The AI Career Navigator is one of the core intelligent features of the platform.

Its purpose is to reduce uncertainty around career preparation.

The system can evaluate information such as:

```text
Student Profile
+
Skills
+
Projects
+
Resume
+
Assessment Results
+
Practice Progress
```

and generate career-oriented insights.

### Possible Outputs

* Career readiness score
* Resume feedback
* Skill gap identification
* Recommended improvement areas
* Suggested preparation priorities
* Career direction insights

---

# 🧠 Skill Gap Analysis

The platform can compare:

```text
Current Student Skills
          VS
Target Job Skills
```

Example:

```text
Required:
✓ Java
✓ SQL
✓ React
✓ Node.js
✓ DSA

Student:
✓ Java
✓ SQL
✓ React
✗ Node.js
✗ DSA

Result:
Primary Skill Gaps:
1. Node.js
2. DSA
```

This allows students to focus their preparation where it matters most.

---

# 🎯 AI Candidate Matching

Recruiters often receive a large number of applications.

The candidate matching feature helps reduce manual filtering.

A simplified matching model can consider:

```text
Skill Match
+
Project Relevance
+
Experience
+
Education
+
Assessment Performance
+
Job Requirements
```

Example conceptual score:

```text
Candidate Match Score =
    Skill Match
  + Project Relevance
  + Experience Relevance
  + Assessment Performance
```

The resulting score can help recruiters prioritize candidates.

> The AI score is intended as a decision-support mechanism and should not replace human evaluation.

---

# 📝 Skill Assessment & Practice

The preparation system is designed around placement-oriented learning.

Possible practice categories:

```text
DSA
├── Arrays
├── Strings
├── Linked List
├── Stack
├── Queue
├── Trees
├── Graphs
├── Recursion
└── Dynamic Programming

Core CS
├── OOP
├── DBMS
├── SQL
├── Operating Systems
└── Computer Networks

Aptitude
├── Quantitative Aptitude
├── Logical Reasoning
└── Verbal Ability
```

---

# 📈 Progress Tracking

Practice performance can be represented using:

* Questions attempted
* Questions solved
* Accuracy
* Topic-wise progress
* Assessment scores
* Weak topics
* Completed sections

This allows students to understand their preparation level rather than simply solving random questions.

---

# 🔐 Authentication & Authorization

The backend uses JWT-based authentication.

### Authentication Flow

```text
User
 ↓
Login/Register
 ↓
Backend validates credentials
 ↓
Password verified using bcrypt
 ↓
JWT generated
 ↓
Token returned
 ↓
Frontend stores authentication state
 ↓
Protected API requests include token
```

---

# 🔑 Password Security

Passwords are not stored directly in plain text.

The backend uses:

**bcrypt**

for password hashing.

Conceptually:

```text
Plain Password
      ↓
bcrypt hashing
      ↓
Hashed Password
      ↓
Database
```

During login:

```text
Entered Password
      ↓
bcrypt comparison
      ↓
Stored Hash
      ↓
Valid / Invalid
```

---

# 🛡️ Security

The backend uses several security-oriented technologies and practices.

### Helmet

Used to configure secure HTTP headers.

### CORS

Controls cross-origin communication between frontend and backend.

### JWT

Used for stateless authentication.

### bcrypt

Used for secure password hashing.

### Middleware

Used for:

* Authentication
* Authorization
* Error handling
* Request processing

---

# 🏗️ Technical Architecture

High-level architecture:

```text
                    ┌─────────────────────┐
                    │       CLIENT        │
                    │   React + Vite      │
                    └──────────┬──────────┘
                               │
                         HTTP / REST
                               │
                               ▼
                    ┌─────────────────────┐
                    │      EXPRESS        │
                    │      SERVER         │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       Controllers         Middleware          Routes
             │                 │
             └─────────────────┼─────────────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       PRISMA        │
                    │        ORM          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │       SQLite        │
                    │      Database       │
                    └─────────────────────┘
```

Real-time events can additionally flow through:

```text
Frontend
   ↕
Socket.io
   ↕
Backend
```

---

# 💻 Technology Stack

## Frontend

| Category         | Technology           |
| ---------------- | -------------------- |
| Framework        | React 19             |
| Build Tool       | Vite                 |
| Styling          | Tailwind CSS v4      |
| State Management | Zustand              |
| Server State     | TanStack React Query |
| HTTP Client      | Axios                |
| Forms            | React Hook Form      |
| Validation       | Zod                  |
| Charts           | Recharts             |
| Icons            | Lucide React         |

---

# ⚙️ Backend

| Category          | Technology |
| ----------------- | ---------- |
| Runtime           | Node.js    |
| Framework         | Express.js |
| ORM               | Prisma     |
| Database          | SQLite     |
| Authentication    | JWT        |
| Password Security | bcrypt     |
| Real-Time         | Socket.io  |
| Security Headers  | Helmet     |
| Cross-Origin      | CORS       |

---

# 🎨 Frontend Architecture

The frontend follows a component-based architecture.

```text
React Application
       │
       ├── Pages
       │
       ├── Components
       │
       ├── Stores
       │
       ├── Services
       │
       └── App
```

### Components

Reusable UI elements are placed inside:

```text
components/
```

Examples include:

* Cards
* Modals
* Navigation
* Buttons
* Forms
* Tables
* Dashboard components
* Job cards
* Profile components

---

# 📄 Pages

Application-level screens are maintained inside:

```text
pages/
```

Possible pages include:

```text
Login
Register
Student Dashboard
Profile
Practice
Notes
Jobs
Saved Jobs
Applications
AI Navigator
Recruiter Dashboard
Recruiter Candidates
Recruiter Postings
Notifications
```

---

# 🔌 API Services

API communication is separated into the services layer.

```text
frontend/src/services/
```

This prevents API logic from being tightly coupled with UI components.

Conceptually:

```text
React Component
      ↓
Service Function
      ↓
Axios
      ↓
Express API
```

---

# 🗄️ Backend Architecture

The backend follows a modular Express architecture.

```text
Request
  ↓
Route
  ↓
Middleware
  ↓
Controller
  ↓
Prisma
  ↓
Database
  ↓
Response
```

---

# 🛣️ Routes

Routes define API endpoints and connect incoming requests with controllers.

Conceptually:

```text
/auth
/student
/recruiter
/jobs
/applications
/notifications
```

The exact routes depend on the implementation.

---

# 🎮 Controllers

Controllers contain request-handling logic.

Examples:

```text
Auth Controller
Student Controller
Recruiter Controller
Job Controller
Application Controller
Notification Controller
```

Controllers are responsible for:

* Reading request data
* Validating input
* Calling database operations
* Applying business logic
* Sending responses

---

# 🧩 Middleware

Middleware executes between the request and controller.

Typical middleware responsibilities include:

### Authentication Middleware

```text
Request
 ↓
Read JWT
 ↓
Verify Token
 ↓
Identify User
 ↓
Continue
```

### Error Middleware

Centralizes API error handling.

### Security Middleware

Handles security-related request processing.

---

# 🗃️ Database Architecture

The application uses:

**Prisma ORM + SQLite**

Prisma provides a type-safe and structured interface for interacting with the database.

Conceptually:

```text
Express
   ↓
Prisma Client
   ↓
SQLite
```

---

# 📊 Database Entities

The platform logically revolves around entities such as:

```text
User
Student Profile
Recruiter Profile
Job
Application
Skills
Projects
Assessments
Practice Progress
Saved Jobs
Notifications
```

Relationships between these entities enable the complete recruitment workflow.

---

# 🔄 Example Relationship

```text
User
 │
 ├── Student Profile
 │       ├── Skills
 │       ├── Projects
 │       ├── Resume
 │       └── Applications
 │
 └── Recruiter Profile
         └── Job Postings
                 └── Applications
                         └── Candidate
```

---

# 📂 Project Structure

```text
project-root/
│
├── backend/
│   │
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── dev.db
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   └── environment / database configuration
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController
│   │   │   ├── studentController
│   │   │   ├── recruiterController
│   │   │   └── other controllers
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth
│   │   │   └── error handling
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes
│   │   │   ├── studentRoutes
│   │   │   ├── recruiterRoutes
│   │   │   └── other routes
│   │   │
│   │   └── index.js
│   │
│   └── package.json
│
├── frontend/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── stores/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── assets/
│   └── screenshots/
│       ├── dashboard.png
│       ├── ai_navigator_readiness.png
│       ├── ai_navigator_resume.png
│       ├── practice.png
│       ├── notes.png
│       ├── jobs.png
│       ├── saved_jobs.png
│       ├── recruiter_dashboard.png
│       ├── recruiter_candidates.png
│       ├── recruiter_postings.png
│       └── notifications.png
│
└── README.md
```

---

# 🧠 State Management

The application uses **Zustand** for client-side global state.

Zustand can manage information such as:

* Logged-in user
* Authentication state
* User role
* Profile information
* UI state
* Application-specific global state

A simplified architecture:

```text
React Components
       ↓
Zustand Store
       ↓
Global Application State
```

---

# ⚡ Data Fetching & Caching

The platform uses **TanStack React Query** for server-state management.

Benefits include:

* API caching
* Automatic refetching
* Loading states
* Error states
* Query invalidation
* Reduced duplicate API requests
* Better synchronization with backend data

Example flow:

```text
Component
   ↓
React Query
   ↓
Axios
   ↓
Express API
   ↓
Database
```

---

# 📋 Form Handling

Forms are handled using:

**React Hook Form**

Advantages:

* Efficient form state management
* Reduced unnecessary rendering
* Easy validation integration
* Cleaner form logic

---

# ✅ Validation

**Zod** is used for schema-based validation.

Conceptually:

```text
User Input
    ↓
Zod Schema
    ↓
Valid?
 ┌──┴──┐
Yes    No
 ↓      ↓
API    Error
```

This helps prevent invalid data from being submitted.

---

# 📡 Real-Time Communication

The application uses **Socket.io** for real-time communication.

This can support:

* Notifications
* Application updates
* Interview updates
* Recruiter actions
* Candidate status changes

Example:

```text
Recruiter changes status
          ↓
Backend
          ↓
Socket.io Event
          ↓
Student
          ↓
Notification
```

---

# 📊 Dashboard Analytics

Recruiter analytics can provide visual information about recruitment activity.

Possible metrics include:

* Total applications
* Active jobs
* Shortlisted candidates
* Interview candidates
* Hired candidates
* Application trends
* Candidate engagement

Charts are implemented using:

**Recharts**

---

# 🎨 UI/UX

The application focuses on a modern dashboard-based experience.

### Design Principles

* Clean navigation
* Responsive layouts
* Card-based information
* Visual analytics
* Clear call-to-action buttons
* Role-based dashboards
* Consistent spacing
* Modern typography
* Interactive components
* Responsive design

The student and recruiter experiences are intentionally separated so each user sees functionality relevant to their role.

---

# 🖼️ Screenshots

## 🎓 Student Dashboard

![Student Dashboard](./assets/screenshots/dashboard.png)

---

## 🤖 AI Career Navigator — Readiness

![AI Navigator Readiness](./assets/screenshots/ai_navigator_readiness.png)

---

## 📄 AI Career Navigator — Resume Analysis

![AI Navigator Resume](./assets/screenshots/ai_navigator_resume.png)

---

## 🧠 Practice Section

![Practice Section](./assets/screenshots/practice.png)

---

## 📝 Notes Section

![Notes Section](./assets/screenshots/notes.png)

---

## 💼 Job Discovery

![Jobs](./assets/screenshots/jobs.png)

---

## ⭐ Saved Jobs

![Saved Jobs](./assets/screenshots/saved_jobs.png)

---

## 📊 Recruiter Dashboard

![Recruiter Dashboard](./assets/screenshots/recruiter_dashboard.png)

---

## 🤖 Recruiter Candidate Matching

![Recruiter Candidates](./assets/screenshots/recruiter_candidates.png)

---

## 📋 Recruiter Job Postings

![Recruiter Postings](./assets/screenshots/recruiter_postings.png)

---

## 🔔 Notifications

![Notifications](./assets/screenshots/notifications.png)

---

# 🛠️ Getting Started

## Prerequisites

Before running the application, install:

* Node.js
* npm
* Git

Recommended:

```text
Node.js 18+
npm
Git
```

Verify installation:

```bash
node -v
npm -v
git --version
```

---

# 📥 Installation

## 1. Clone Repository

```bash
git clone <repository-url>
cd pp
```

---

# ⚙️ Backend Setup

Navigate to backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

---

# 🔐 Configure Environment Variables

Create:

```text
backend/.env
```

Add:

```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
```

Additional environment variables can be added when integrating external AI services or migrating to a production database.

---

# 🗄️ Setup Prisma

Generate Prisma Client:

```bash
npx prisma generate
```

Push schema:

```bash
npx prisma db push
```

This creates or updates the SQLite database according to the Prisma schema.

---

# ▶️ Start Backend

```bash
npm run dev
```

Backend:

```text
http://localhost:5000
```

---

# 🎨 Frontend Setup

Open another terminal.

Navigate to:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔍 Verify Installation

Open:

```text
http://localhost:5173
```

Verify:

* Landing page loads
* Login works
* Registration works
* Backend is reachable
* Student dashboard loads
* Recruiter dashboard loads
* API requests work
* Database operations work

---

# 🗄️ Prisma Studio

Prisma provides a visual interface for inspecting database records.

Run:

```bash
npx prisma studio
```

This allows developers to inspect and manage database data during development.

---

# 🔌 API Communication

The frontend communicates with the backend through HTTP APIs.

Typical architecture:

```text
React
  ↓
Axios
  ↓
Express API
  ↓
Controller
  ↓
Prisma
  ↓
SQLite
```

---

# 🔐 Protected API Flow

Protected requests follow:

```text
Frontend
   ↓
JWT Token
   ↓
Axios Request
   ↓
Authentication Middleware
   ↓
JWT Verification
   ↓
Controller
   ↓
Database
   ↓
Response
```

If authentication fails:

```text
401 Unauthorized
```

can be returned.

---

# ❌ Error Handling

The backend uses centralized error-handling middleware.

Instead of handling every error independently, errors can be passed to a common handler.

Conceptually:

```text
Controller
    ↓
Error
    ↓
next(error)
    ↓
Error Middleware
    ↓
HTTP Response
```

This improves consistency across the API.

---

# ⚡ Performance Considerations

The application includes several mechanisms that help improve performance.

### React + Vite

Provides a fast development experience.

### React Query

Reduces unnecessary API calls through caching.

### Zustand

Provides lightweight global state management.

### Component Reusability

Reusable components reduce duplicated UI logic.

### Prisma

Provides structured database access.

---

# 🧪 Testing Strategy

The platform can be tested at multiple levels.

## Frontend Testing

Test:

* Forms
* Navigation
* Authentication UI
* Dashboard rendering
* Job cards
* Application actions
* Practice interactions

## Backend Testing

Test:

* Authentication APIs
* Job APIs
* Application APIs
* Student APIs
* Recruiter APIs
* Authorization
* Validation
* Error handling

## Integration Testing

Test the complete workflow:

```text
Register
 ↓
Login
 ↓
Create Profile
 ↓
Create Job
 ↓
Apply
 ↓
Review Application
 ↓
Shortlist
 ↓
Interview
 ↓
Hire
```

---

# 🐛 Troubleshooting

## Backend Cannot Connect

Check:

```text
Backend PORT
Frontend API URL
CORS configuration
```

Make sure the backend is running.

---

## Database Error

Run:

```bash
npx prisma generate
npx prisma db push
```

---

## Prisma Client Error

Try:

```bash
npx prisma generate
```

and restart the backend.

---

## CORS Error

Verify:

* Backend is running
* Frontend URL is allowed
* Correct API URL is configured
* CORS middleware is configured correctly

---

## JWT Authentication Issues

Check:

```env
JWT_SECRET=your_super_secret_jwt_key
```

Make sure the backend has access to the `.env` file.

---

# 🌍 Production Architecture

For production deployment, the architecture can evolve into:

```text
                    ┌───────────────┐
                    │    Browser    │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ CDN / Hosting │
                    │    Frontend   │
                    └───────┬───────┘
                            │
                            ▼
                    ┌───────────────┐
                    │ Load Balancer │
                    └───────┬───────┘
                            │
               ┌────────────┼────────────┐
               ▼            ▼            ▼
          Node Server   Node Server   Node Server
               │            │            │
               └────────────┼────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │  PostgreSQL   │
                    └───────────────┘
```

---

# 🐘 Future Database Migration

The current development environment uses SQLite.

For a production deployment, the database can be migrated to:

* PostgreSQL
* MySQL
* Managed cloud database

PostgreSQL would be a strong option for production workloads involving a large number of students, recruiters, jobs, and applications.

---

# 🚀 Scalability

The system can be extended to support large-scale usage.

Potential improvements:

* PostgreSQL
* Redis caching
* Background job processing
* Object storage for resumes
* CDN
* Load balancing
* Microservices
* Search engine integration
* Queue-based notifications
* AI inference services
* Analytics pipeline

---

# 🔮 Future Enhancements

## 1. Advanced AI Career Coach

Introduce a conversational AI career coach that can answer questions related to:

* Career paths
* DSA preparation
* Interview preparation
* Resume improvement
* Skill gaps
* Job preparation

---

## 2. Advanced Resume Builder

Allow students to:

* Select templates
* Generate resumes
* Customize sections
* Export PDF
* Improve ATS compatibility

---

## 3. ATS Resume Score

The system could analyze resumes based on:

```text
Keywords
Skills
Formatting
Experience
Projects
Job Description Matching
```

and provide an ATS-oriented score.

---

## 4. Interview Preparation

Add:

* Mock interviews
* Technical interviews
* HR interviews
* AI interviewer
* Interview feedback
* Question recommendations

---

## 5. Advanced Job Matching

Improve matching using:

```text
Student Skills
+
Career Goal
+
Practice Performance
+
Assessment Score
+
Resume
+
Job Requirements
```

---

## 6. Recruiter Search

Recruiters could search candidates by:

* Skills
* Experience
* Education
* Assessment score
* Location
* Projects
* Career interests

---

## 7. Interview Scheduling

Future versions can integrate interview scheduling.

Workflow:

```text
Shortlisted
   ↓
Interview Invitation
   ↓
Select Time Slot
   ↓
Interview
   ↓
Feedback
```

---

## 8. Email Notifications

Add automated email notifications for:

* Application confirmation
* Shortlisting
* Interview scheduling
* Rejection
* Hiring
* Job alerts

---

## 9. Resume Storage

Production deployments can use cloud storage for:

* Resumes
* Certificates
* Profile documents

---

## 10. Advanced Analytics

Students:

```text
Preparation Progress
        ↓
Skill Growth
        ↓
Assessment Performance
        ↓
Career Readiness
```

Recruiters:

```text
Applications
        ↓
Candidate Quality
        ↓
Shortlisting
        ↓
Interviews
        ↓
Hiring
```

---

# 🧩 Possible Module Expansion

The platform can eventually contain:

```text
CareerForge
│
├── Student
│   ├── Profile
│   ├── Resume
│   ├── AI Career Navigator
│   ├── Practice
│   ├── Assessments
│   ├── Notes
│   ├── Jobs
│   ├── Saved Jobs
│   └── Applications
│
├── Recruiter
│   ├── Dashboard
│   ├── Job Posting
│   ├── Candidates
│   ├── AI Matching
│   ├── Applications
│   ├── Interviews
│   └── Analytics
│
└── Platform
    ├── Authentication
    ├── Notifications
    ├── AI Services
    ├── Analytics
    └── Administration
```

---

# 🏆 Why This Project?

The project combines multiple real-world software engineering concepts into a single application.

### Frontend Development

* React
* Component architecture
* Routing
* State management
* API integration
* Form handling
* Validation
* Responsive UI

### Backend Development

* Node.js
* Express
* REST APIs
* Controllers
* Middleware
* Authentication
* Authorization
* Error handling

### Database

* Prisma ORM
* Relational data modeling
* CRUD operations
* Entity relationships

### Security

* JWT
* bcrypt
* Helmet
* CORS

### Real-Time Systems

* Socket.io
* Notifications
* Live application updates

### AI

* Career insights
* Resume analysis
* Candidate matching
* Skill gap analysis

### Analytics

* Recruiter dashboards
* Candidate metrics
* Application statistics
* Recharts visualizations

---

# 🧑‍💻 Development Philosophy

The platform follows a modular architecture so individual features can be developed and maintained independently.

The major principles include:

* Separation of concerns
* Component reusability
* API abstraction
* Centralized state where required
* Server-state caching
* Input validation
* Authentication middleware
* Centralized error handling
* Scalable database architecture

---

# 📌 Important Design Principle

The platform is not designed to completely automate recruitment.

Instead, AI features are intended to provide:

> **Decision support + personalization + intelligent recommendations**

Human judgment remains important for final recruitment decisions.

---

# 📈 End-to-End System Flow

```text
                         PLATFORM
                             │
              ┌──────────────┴──────────────┐
              │                             │
          STUDENT                       RECRUITER
              │                             │
       Create Profile                 Create Profile
              │                             │
       Add Skills/Projects            Create Job
              │                             │
       Upload Resume                  Requirements
              │                             │
       Practice & Assessments          Applications
              │                             │
       AI Career Analysis             AI Matching
              │                             │
       Discover Jobs                  Candidate Review
              │                             │
       Apply                          Shortlist
              │                             │
       Track Application             Interview
              │                             │
              └──────────────┬──────────────┘
                             │
                           HIRING
```

---

# 🔥 Core Value Proposition

### For Students

> **Prepare → Improve → Discover → Apply → Track → Get Hired**

### For Recruiters

> **Post → Discover → Match → Shortlist → Interview → Hire**

---

# 📦 Deployment

The application can be deployed as separate frontend and backend services.

### Frontend

Can be deployed to modern frontend hosting platforms.

### Backend

Can be deployed to Node.js-compatible cloud hosting.

### Database

For production:

```text
SQLite → PostgreSQL
```

### Storage

For resumes and documents:

```text
Local Storage → Cloud Object Storage
```

---

# 🔧 Environment Variables

Example backend configuration:

```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
```

For future integrations:

```env
DATABASE_URL=
AI_API_KEY=
CLIENT_URL=
SOCKET_URL=
STORAGE_URL=
```

Never commit real secrets to GitHub.

---

# 🔒 Environment Security

Do not commit:

```text
.env
```

to source control.

Add:

```text
.env
```

to `.gitignore`.

---

# 🤝 Contributing

Contributions, issues, suggestions, and feature requests are welcome.

### Contribution Process

```bash
git clone <repository-url>
```

Create a feature branch:

```bash
git checkout -b feature/new-feature
```

Make your changes.

Commit:

```bash
git add .
git commit -m "Add new feature"
```

Push:

```bash
git push origin feature/new-feature
```

Then create a Pull Request.

---

# 📝 License

This project is licensed under the **ISC License**.

---

# 👨‍💻 Project Summary

The **Next-Gen Recruitment & Student Prep Platform** is a full-stack recruitment ecosystem that combines:

```text
🎓 Student Preparation
        +
🤖 Artificial Intelligence
        +
📄 Resume Intelligence
        +
🧠 Skill Assessment
        +
💼 Job Discovery
        +
🧑‍💼 Recruiter Management
        +
📊 Analytics
        +
🔔 Real-Time Notifications
        +
🔐 Secure Authentication
```

The ultimate goal is to create a single platform where students can understand their current career readiness, continuously improve their technical skills, discover suitable opportunities, and apply for jobs while recruiters can efficiently identify and manage relevant candidates.

---

# ⭐ Final Vision

> **Build skills. Measure readiness. Discover opportunities. Connect with recruiters. Get hired.**

**A unified platform for the complete student-to-career journey.**

---

## 📊 Project Capability Overview

| Module             | Student | Recruiter |  AI | Analytics | Real-Time |
| ------------------ | :-----: | :-------: | :-: | :-------: | :-------: |
| Profile            |    ✅    |     ✅     |  —  |     —     |     —     |
| Resume             |    ✅    |    👁️    |  ✅  |     —     |     —     |
| Career Navigator   |    ✅    |     —     |  ✅  |     ✅     |     —     |
| Practice           |    ✅    |     —     |  —  |     ✅     |     —     |
| Assessments        |    ✅    |     —     |  —  |     ✅     |     —     |
| Notes              |    ✅    |     —     |  —  |     —     |     —     |
| Jobs               |    ✅    |     ✅     |  ✅  |     ✅     |     —     |
| Saved Jobs         |    ✅    |     —     |  —  |     —     |     —     |
| Applications       |    ✅    |     ✅     |  —  |     ✅     |     ✅     |
| Candidate Matching |    —    |     ✅     |  ✅  |     ✅     |     —     |
| Job Management     |    —    |     ✅     |  —  |     ✅     |     —     |
| Candidate Tracking |    —    |     ✅     |  —  |     ✅     |     ✅     |
| Notifications      |    ✅    |     ✅     |  —  |     —     |     ✅     |
| Authentication     |    ✅    |     ✅     |  —  |     —     |     —     |

---

# 🚀 Built With

```text
React 19
Vite
Tailwind CSS
Zustand
TanStack React Query
Axios
React Hook Form
Zod
Recharts
Lucide React
Node.js
Express.js
Prisma
SQLite
JWT
bcrypt
Socket.io
Helmet
CORS
```

---
# # 🛠️ Getting Started

Follow the steps below to clone, install, configure, and run the complete application locally.

The project contains two main applications:

```text
Next-Gen Recruitment & Student Prep Platform
│
├── backend   → Node.js + Express + Prisma
│
└── frontend  → React + Vite
```

---

# 📋 Prerequisites

Before starting the project, make sure the following software is installed on your system.

### Required

* **Node.js** — v18 or higher
* **npm** — Comes with Node.js
* **Git**
* A modern web browser such as Chrome, Edge, or Firefox

### Recommended

```text
Node.js 18+
npm 9+
Git 2+
VS Code
```

---

# 🔍 Check Installed Versions

Open your terminal or command prompt and run:

```bash
node -v
```

```bash
npm -v
```

```bash
git --version
```

Example:

```text
node v20.x.x
npm 10.x.x
git version 2.x.x
```

If these commands return valid versions, your development environment is ready.

---

# 📥 Clone the Repository

First, clone the project from GitHub.

```bash
git clone <repository-url>
```

Replace `<repository-url>` with the actual GitHub repository URL.

For example:

```bash
git clone https://github.com/your-username/your-repository.git
```

After cloning, move into the project directory:

```bash
cd your-repository
```

Check the project files:

```bash
dir
```

For Linux/macOS:

```bash
ls
```

You should see something similar to:

```text
backend/
frontend/
assets/
README.md
```

---

# 📂 Project Setup

The project contains separate frontend and backend applications.

```text
project-root/
│
├── backend/
├── frontend/
├── assets/
└── README.md
```

Both applications need to be installed and started separately.

---

# ⚙️ Step 1 — Backend Setup

Open the terminal inside the project root.

Navigate to the backend:

```bash
cd backend
```

Install all backend dependencies:

```bash
npm install
```

This will install packages defined inside:

```text
backend/package.json
```

---

# 🔐 Step 2 — Configure Environment Variables

Inside the `backend` folder, create a new file named:

```text
.env
```

The structure should be:

```text
backend/
│
├── .env
├── package.json
├── prisma/
└── src/
```

Add the following environment variables:

```env
PORT=5000
JWT_SECRET=your_super_secret_jwt_key
```

### Example

```env
PORT=5000
JWT_SECRET=my_super_secret_key_123
```

> ⚠️ Never upload your real `.env` file or secret keys to GitHub.

---

# 🗄️ Step 3 — Setup Prisma

The backend uses **Prisma ORM** with SQLite.

After installing dependencies, generate the Prisma Client:

```bash
npx prisma generate
```

Then synchronize the Prisma schema with the database:

```bash
npx prisma db push
```

This will create/update the SQLite database based on:

```text
prisma/schema.prisma
```

---

# 🔎 Step 4 — Open Prisma Studio

If you want to visually inspect the database, run:

```bash
npx prisma studio
```

Prisma Studio provides a browser-based interface where you can inspect database records during development.

You can use it to check entities such as:

```text
Users
Students
Recruiters
Jobs
Applications
Notifications
Skills
Profiles
```

---

# ▶️ Step 5 — Start the Backend

After completing the database setup, start the backend development server:

```bash
npm run dev
```

The backend should start on:

```text
http://localhost:5000
```

You should see a message similar to:

```text
Server running on port 5000
```

> The exact console message may differ depending on the implementation.

---

# 🎨 Step 6 — Frontend Setup

Do not stop the backend server.

Open a **new terminal window/tab**.

Navigate to the project root first if necessary:

```bash
cd ..
```

Then enter the frontend directory:

```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

This installs all packages defined inside:

```text
frontend/package.json
```

---

# ▶️ Step 7 — Start the Frontend

Run:

```bash
npm run dev
```

Vite will start the development server.

The frontend should be available at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🚀 Complete Setup Commands

If you already have Node.js and Git installed, the complete process looks like this:

### Clone

```bash
git clone <repository-url>
cd <repository-folder>
```

### Backend

```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```

### Frontend

Open a **new terminal**:

```bash
cd frontend
npm install
npm run dev
```

---

# 🖥️ Terminal Setup

You should ideally have two terminals running simultaneously.

### Terminal 1 — Backend

```bash
cd backend
npm run dev
```

Backend:

```text
http://localhost:5000
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Frontend:

```text
http://localhost:5173
```

Architecture:

```text
┌───────────────────────────┐
│        Browser            │
│                           │
│  React + Vite Frontend    │
│  localhost:5173           │
└─────────────┬─────────────┘
              │
              │ HTTP / API
              ▼
┌───────────────────────────┐
│     Express Backend       │
│     localhost:5000        │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│      Prisma ORM           │
└─────────────┬─────────────┘
              │
              ▼
┌───────────────────────────┐
│       SQLite DB           │
└───────────────────────────┘
```

---

# 🔗 Frontend & Backend Connection

The frontend communicates with the backend through API requests.

Example:

```text
React Application
       ↓
Axios
       ↓
Express API
       ↓
Controller
       ↓
Prisma
       ↓
SQLite
```

Make sure both servers are running.

```text
Frontend → http://localhost:5173
Backend  → http://localhost:5000
```

---

# 🌐 Verify the Application

Once both servers are running:

### 1. Open the frontend

```text
http://localhost:5173
```

### 2. Check the landing/login page

You should see the application interface.

### 3. Test registration

Create a new student/recruiter account.

### 4. Test login

Login using the registered credentials.

### 5. Test student functionality

Verify:

* Dashboard
* Profile
* Skills
* Practice
* Notes
* AI Career Navigator
* Jobs
* Saved Jobs
* Applications
* Notifications

### 6. Test recruiter functionality

Verify:

* Recruiter Dashboard
* Job Posting
* Candidates
* Candidate Matching
* Application Tracking
* Notifications
* Analytics

---

# 🔄 Fresh Installation

If you want to completely reinstall dependencies, delete the existing `node_modules` folders.

### Windows

```bash
rmdir /s /q node_modules
```

### macOS/Linux

```bash
rm -rf node_modules
```

Then reinstall:

```bash
npm install
```

Do this separately inside both:

```text
backend/
frontend/
```

---

# 🧹 Reset Prisma Database

During development, if you want to recreate the database from the Prisma schema, you can use:

```bash
npx prisma db push
```

For a complete development reset, use the appropriate Prisma reset command only if you are comfortable deleting existing local database data.

> ⚠️ Database reset operations can delete existing development records.

---

# 🔧 Useful Development Commands

## Backend

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Generate Prisma Client:

```bash
npx prisma generate
```

Push database schema:

```bash
npx prisma db push
```

Open Prisma Studio:

```bash
npx prisma studio
```

---

## Frontend

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 📦 Install Dependencies Again

If `node_modules` is missing or dependencies are corrupted:

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd frontend
npm install
```

---

# 🚨 Common Problems & Solutions

## ❌ `npm is not recognized`

Install Node.js and restart your terminal.

Verify:

```bash
node -v
npm -v
```

---

## ❌ `git is not recognized`

Install Git and restart your terminal.

Verify:

```bash
git --version
```

---

## ❌ Prisma Client Error

Run:

```bash
npx prisma generate
```

Then restart the backend:

```bash
npm run dev
```

---

## ❌ Database Does Not Exist

Run:

```bash
npx prisma db push
```

Then:

```bash
npx prisma generate
```

---

## ❌ CORS Error

Check:

```text
Frontend URL
Backend URL
CORS configuration
```

Make sure the backend is running on:

```text
http://localhost:5000
```

and frontend on:

```text
http://localhost:5173
```

---

## ❌ Frontend Cannot Reach Backend

First verify the backend is running:

```bash
cd backend
npm run dev
```

Then verify the frontend API configuration points to the correct backend URL.

---

## ❌ Port Already in Use

If port `5000` or `5173` is already being used, either stop the existing process or configure another port.

Backend:

```env
PORT=5001
```

Then restart the backend.

---

## ❌ Dependencies Are Not Installing

Try:

```bash
npm cache clean --force
```

Then:

```bash
npm install
```

---

# 🔒 Important Security Notes

Never commit the following to GitHub:

```text
.env
node_modules/
*.db
database files containing sensitive data
private API keys
JWT secrets
```

Recommended `.gitignore` entries:

```gitignore
node_modules/
.env
.env.*
!.env.example

*.db
*.sqlite
*.sqlite3

dist/
build/

.DS_Store
```

---

# 🧪 Recommended First Run Checklist

After cloning the repository:

```text
☐ Node.js installed
☐ npm working
☐ Git working
☐ Repository cloned
☐ Backend dependencies installed
☐ .env created
☐ JWT_SECRET configured
☐ Prisma Client generated
☐ Database created
☐ Backend started
☐ Frontend dependencies installed
☐ Frontend started
☐ Browser opened
☐ Registration tested
☐ Login tested
☐ Student dashboard tested
☐ Recruiter dashboard tested
```

---

# ⚡ Quick Start

For developers who already have Node.js and Git installed:

```bash
git clone <repository-url>
cd <repository-folder>
```

Backend:

```bash
cd backend
npm install
npx prisma generate
npx prisma db push
npm run dev
```

Open a new terminal:

```bash
cd <repository-folder>/frontend
npm install
npm run dev
```

Then open:

```text
http://localhost:5173
```

---

# 🏁 You're Ready!

If everything has been configured correctly, you should now have:

```text
Frontend
http://localhost:5173
       │
       ▼
Backend
http://localhost:5000
       │
       ▼
Prisma
       │
       ▼
SQLite
```

The complete **Next-Gen Recruitment & Student Prep Platform** is now ready for local development.


## 💙 Final Note

This project was designed with a practical goal:

> **To reduce the gap between student preparation and actual recruitment.**

Instead of using separate platforms for preparation, career guidance, resumes, jobs, applications, and recruitment, this system brings these workflows together into one integrated ecosystem.
