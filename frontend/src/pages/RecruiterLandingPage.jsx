import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, Trophy, BarChart3, ChevronRight, Menu, X } from 'lucide-react';
import Logo from '../components/Logo';

export default function RecruiterLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0b0a15] text-white font-sans selection:bg-[#7b32d9]/30 overflow-x-hidden relative">

      {/* Absolute Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#7b32d9] rounded-full blur-[150px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4f46e5] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full bg-[#0b0a15]/80 backdrop-blur-md border-b border-white/5">
        <nav className="flex items-center justify-between px-6 py-4 md:py-6 md:px-12 max-w-[1400px] mx-auto">
          <Logo className="h-8" forceWhite={true} />

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#startups" className="flex items-center space-x-1 cursor-pointer hover:text-[#c49bfa] transition-all transform hover:-translate-y-0.5 hover:scale-105 group">
              <span>For startups</span>
              <ChevronRight className="w-3.5 h-3.5 rotate-90 opacity-70 group-hover:translate-y-0.5 group-hover:opacity-100 transition-all" />
            </a>
            <a href="#enterprise" className="hover:text-white hover:text-[#c49bfa] transition-all transform hover:-translate-y-0.5 hover:scale-105 inline-block">For Enterprise</a>
            <a href="#pricing" className="hover:text-white hover:text-[#c49bfa] transition-all transform hover:-translate-y-0.5 hover:scale-105 inline-block">Pricing</a>
            <a href="#our-story" className="hover:text-white hover:text-[#c49bfa] transition-all transform hover:-translate-y-0.5 hover:scale-105 inline-block">Our Story</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="text-sm font-bold text-slate-300 hover:text-white transition-colors">Log in</Link>
            <Link to="/register?role=recruiter" className="text-sm font-bold bg-[#7b32d9] hover:bg-[#8b42e9] px-6 py-2.5 rounded-full transition-all shadow-[0_0_20px_rgba(123,50,217,0.3)] hover:shadow-[0_0_30px_rgba(123,50,217,0.5)]">
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0b0a15]/95 backdrop-blur-xl border-b border-white/10 md:hidden shadow-2xl">
            <div className="flex flex-col px-6 py-8 space-y-6">
              <a href="#startups" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition-colors">For startups</a>
              <a href="#enterprise" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition-colors">For Enterprise</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#our-story" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white transition-colors">Our Story</a>
              <div className="h-px bg-white/10 w-full my-4"></div>
              <Link to="/login" className="text-lg font-bold text-slate-300 hover:text-white transition-colors">Log in</Link>
              <Link to="/register?role=recruiter" className="text-center text-lg font-bold bg-[#7b32d9] hover:bg-[#8b42e9] px-6 py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(123,50,217,0.3)] mt-2">
                Sign up for free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div id="startups" className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 pt-20 md:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24">

        {/* Left: Copy */}
        <div className="max-w-xl">
          <a href="#enterprise" className="inline-flex items-center space-x-2 border border-[#7b32d9]/30 bg-[#7b32d9]/10 rounded-full px-4 py-1.5 mb-8 text-sm font-medium text-[#c49bfa] cursor-pointer hover:bg-[#7b32d9]/20 hover:border-[#7b32d9]/50 transition-all transform hover:-translate-y-0.5 group">
            <span>Struggling to find verified tech talent? Start here</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black leading-[1.1] tracking-tight mb-6 text-slate-100">
            The smarter way <br className="hidden md:block" />
            <span className="text-slate-400">to hire top tier talent with AI</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg">
            First, let's find your baseline. Get exclusive access to thousands of pre-assessed candidates in 5 minutes to see their true strengths, close skill gaps, and unlock your personalized hiring pipeline.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Link to="/register?role=recruiter" className="bg-[#7b32d9] hover:bg-[#8b42e9] text-white px-8 py-4 rounded-xl font-bold shadow-[0_0_30px_rgba(123,50,217,0.4)] hover:shadow-[0_0_40px_rgba(123,50,217,0.6)] transition-all flex items-center space-x-2">
              <span>Get Your Free Recruiter Account</span>
            </Link>
            <a href="#what-we-do" className="text-sm font-bold text-slate-300 underline underline-offset-4 decoration-slate-600 hover:text-white hover:decoration-[#7b32d9] transition-all">
              What does this platform measure?
            </a>
          </div>
        </div>

        {/* Right: 3D Rotated Image with massive glow */}
        <div className="relative mt-12 lg:mt-0 perspective-1000">
          <div className="absolute inset-0 bg-[#a855f7] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div
            className="relative z-10 bg-[#161426] border border-white/10 rounded-2xl shadow-2xl p-2 w-full max-w-[600px] ml-auto"
            style={{
              transform: 'rotateY(-15deg) rotateX(5deg) translateZ(50px)',
              transformStyle: 'preserve-3d',
              boxShadow: '-20px 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(123,50,217,0.4)'
            }}
          >
            <div className="bg-[#0b0a15] rounded-xl overflow-hidden border border-white/5 relative flex flex-col h-[400px]">
              {/* Fake Dashboard Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                <div className="ml-4 h-6 w-48 bg-white/5 rounded-md"></div>
              </div>
              {/* Fake Dashboard Content */}
              <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                <div className="col-span-1 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-[#7b32d9] blur-[20px] opacity-20"></div>
                  <div className="w-16 h-16 rounded-full border-4 border-[#7b32d9] flex items-center justify-center mb-4 text-xl font-bold">85%</div>
                  <div className="h-2 w-full bg-white/10 rounded-full mb-2"></div>
                  <div className="h-2 w-3/4 bg-white/10 rounded-full"></div>
                </div>
                <div className="col-span-2 border border-white/10 rounded-xl p-4 relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7b32d9]/20 to-transparent"></div>
                  <div className="w-full flex items-end space-x-2 h-32 px-4">
                    {[40, 60, 45, 80, 55, 90, 65, 75].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/20 rounded-t-sm" style={{ height: `${h}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="col-span-3 h-24 border border-white/10 rounded-xl flex items-center px-6">
                  <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="h-4 w-48 bg-white/20 rounded-full mb-2"></div>
                    <div className="h-3 w-32 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Features Bar */}
      <div id="enterprise" className="relative z-20 border-t border-white/10 bg-[#0b0a15]/80 backdrop-blur-md scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

          <div className="p-8 md:p-12 relative group cursor-pointer bg-transparent hover:bg-white/[0.02] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(123,50,217,0.1)] rounded-2xl z-10 hover:z-20">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7b32d9]/20 group-hover:border-[#7b32d9]/50 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#c49bfa] transition-colors" />
              </div>
            </div>
            <div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <BookOpen className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Assess</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
              Discover how prepared candidates are with a quick AI-powered assessment.
            </p>
          </div>

          <div className="p-8 md:p-12 relative group cursor-pointer bg-transparent hover:bg-white/[0.02] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] rounded-2xl z-10 hover:z-20">
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#7b32d9]/20 group-hover:border-[#7b32d9]/50 transition-colors">
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-[#c49bfa] transition-colors" />
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Build skills</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
              Get tailored growth recommendations and stay consistent with streaks.
            </p>
          </div>

          <div className="p-8 md:p-12 relative group cursor-pointer bg-transparent hover:bg-white/[0.02] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] rounded-2xl z-10 hover:z-20">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Trophy className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Show the world</h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
              Share your badge, optimize your pipeline, and hire for roles that fit your growth.
            </p>
          </div>

        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 scroll-mt-24 border-t border-white/10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Simple, transparent <span className="text-[#c49bfa]">Pricing</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Start hiring top-tier technical talent today with a plan that scales with your company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Startup Plan */}
          <div className="bg-[#161426]/50 border border-white/10 p-8 rounded-2xl flex flex-col hover:border-[#7b32d9]/50 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_30px_60px_rgba(123,50,217,0.2)]">
            <h3 className="text-2xl font-bold text-white mb-2">Startup</h3>
            <p className="text-slate-400 mb-6">Perfect for growing teams</p>
            <div className="text-4xl font-black text-white mb-6">$49<span className="text-xl text-slate-500 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Up to 5 active jobs</li>
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Basic AI Candidate Matching</li>
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Standard Support</li>
            </ul>
            <Link to="/register?role=recruiter" className="w-full text-center font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl transition-all">
              Start Free Trial
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-b from-[#7b32d9]/20 to-[#161426]/50 border border-[#7b32d9]/50 p-8 rounded-2xl flex flex-col relative shadow-[0_20px_40px_rgba(123,50,217,0.2)] transform md:-translate-y-4 hover:-translate-y-6 hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(123,50,217,0.4)]">
            <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#7b32d9] text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-slate-400 mb-6">For scale-ups and enterprises</p>
            <div className="text-4xl font-black text-white mb-6">$199<span className="text-xl text-slate-500 font-medium">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Unlimited active jobs</li>
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Advanced AI Analytics & Insights</li>
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Priority 24/7 Support</li>
              <li className="flex items-center text-slate-300"><Sparkles className="w-5 h-5 text-[#c49bfa] mr-3" /> Custom Integrations</li>
            </ul>
            <Link to="/register?role=recruiter" className="w-full text-center font-bold bg-[#7b32d9] hover:bg-[#8b42e9] text-white px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(123,50,217,0.3)]">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Our Story & About Section */}
      <div id="our-story" className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 scroll-mt-24 border-t border-white/10">

        {/* WHO WE ARE */}
        <div className="text-center mb-24">
          <div className="text-[#c49bfa] font-bold tracking-widest uppercase text-sm mb-4">Who we are?</div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white">Built for Students. <br /><span className="text-[#c49bfa]">Designed for Careers.</span></h2>
          <div className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed space-y-6 text-left md:text-center">
            <p><strong>AuriXCareer</strong> is a modern career development and technical preparation platform built with one clear mission — to help students transform their academic knowledge into real-world skills and become genuinely placement-ready.</p>
            <p>We believe that preparing for a technical career should not be confusing, scattered, or limited to a few last-minute placement sessions. Students often learn programming from one platform, practice coding somewhere else, study Computer Science fundamentals from different resources, search for internships and jobs on multiple websites, and still struggle to understand whether they are actually ready for the industry.</p>
            <p className="text-xl font-bold text-white pt-4">AuriXCareer brings this entire journey together in one structured ecosystem.</p>
            <p>Our platform combines coding practice, Computer Science fundamentals, technical assessments, aptitude preparation, interview preparation, progress tracking, career resources, internship and job opportunities, and AI-powered career assistance — helping students build their skills step by step and measure their improvement along the way.</p>
          </div>
        </div>

        {/* Founder */}
        <div className="flex justify-center mb-32 relative">
          <div className="absolute inset-0 bg-[#7b32d9] rounded-full blur-[120px] opacity-20 max-w-md mx-auto"></div>
          <div className="relative w-64 md:w-80 aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-10 transform hover:scale-105 transition-transform duration-500">
            <img src="./src/assets/profile.png" alt="Kamlakant Kumar - CEO & Founder" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#0b0a15] via-[#0b0a15]/80 to-transparent p-6 pt-16 text-center">
              <h4 className="font-bold text-xl text-white">Kamlakant Kumar</h4>
              <p className="text-sm text-[#c49bfa] mt-1 font-medium tracking-wide uppercase">CEO & Founder</p>
            </div>
          </div>
        </div>

        {/* WHAT WE DO */}
        <div id="what-we-do" className="mb-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">What We Do</h3>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              AuriXCareer is designed around the complete technical career journey of a student. From learning the fundamentals to solving coding problems, and from taking technical assessments to preparing for interviews, we provide a structured environment to continuously learn, practice, evaluate, and improve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Coding & DSA', desc: 'Practice data structures, algorithms, problem-solving, and programming concepts through carefully structured challenges.' },
              { title: 'Core CS', desc: 'Strengthen essential subjects such as DBMS, Operating Systems, Computer Networks, OOP, and Software Engineering.' },
              { title: 'Technical Assessments', desc: 'Simulate real placement and recruitment assessments with timed tests, performance evaluation, and detailed results.' },
              { title: 'Interview Prep', desc: 'Prepare for technical and HR interviews with curated questions, mock resources, and role-specific practice.' },
              { title: 'Aptitude & Reasoning', desc: 'Improve quantitative aptitude, logical reasoning, verbal ability, and problem-solving skills.' },
              { title: 'Career Opportunities', desc: 'Discover relevant internships, jobs, hiring opportunities, and career resources from one centralized platform.' },
              { title: 'AI-Powered Assistance', desc: 'Use intelligent career tools to identify skill gaps, improve strategies, and receive personalized guidance.' },
              { title: 'Progress Tracking', desc: 'Track coding activity, assessment performance, strengths, weaknesses, and overall preparation journey.' }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-[#161426] transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(123,50,217,0.15)] cursor-pointer group">
                <h4 className="text-white font-bold mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="bg-gradient-to-br from-[#7b32d9]/20 to-transparent border border-[#7b32d9]/30 p-10 rounded-3xl relative overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(123,50,217,0.25)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7b32d9] blur-[50px] opacity-30"></div>
            <h3 className="text-3xl font-black text-white mb-6 relative z-10">Our Vision</h3>
            <div className="text-slate-300 space-y-4 relative z-10 leading-relaxed">
              <p>To build a reliable digital career ecosystem where every student can access the right resources, understand their current skill level, identify what they need to improve, and confidently prepare for the opportunities they want.</p>
              <p>We want to reduce the gap between what students learn academically and what companies expect from job-ready candidates.</p>
              <p>Instead of simply helping students "prepare for placements," AuriXCareer aims to help them build the technical confidence, problem-solving ability, communication skills, and practical understanding required to grow throughout their careers.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-transparent border border-indigo-500/30 p-10 rounded-3xl relative overflow-hidden transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(99,102,241,0.25)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 blur-[50px] opacity-30"></div>
            <h3 className="text-3xl font-black text-white mb-6 relative z-10">Our Mission</h3>
            <p className="text-xl font-medium text-white mb-8 relative z-10 italic">
              "Make technical career preparation more structured, measurable, and accessible for every student."
            </p>
            <p className="text-slate-300 mb-6 relative z-10">We are building AuriXCareer around three fundamental principles:</p>
            <ul className="space-y-6 relative z-10">
              <li>
                <strong className="text-indigo-400 block mb-1">LEARN.</strong>
                <span className="text-slate-400 text-sm">Understand the concepts that form the foundation of a successful technical career.</span>
              </li>
              <li>
                <strong className="text-indigo-400 block mb-1">PRACTICE.</strong>
                <span className="text-slate-400 text-sm">Apply those concepts through coding problems, assessments, projects, and real-world challenges.</span>
              </li>
              <li>
                <strong className="text-indigo-400 block mb-1">IMPROVE.</strong>
                <span className="text-slate-400 text-sm">Use performance insights and personalized guidance to identify weaknesses, strengthen skills, and continuously move closer to career goals.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* WHY AURIXCAREER & WHO IS IT FOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          <div>
            <h3 className="text-3xl font-black text-white mb-6">Why AuriXCareer?</h3>
            <div className="text-slate-300 space-y-6 leading-relaxed">
              <p className="text-xl text-[#c49bfa] font-medium">Because preparation should be a journey, not a collection of random resources.</p>
              <p>AuriXCareer is designed to give students a clear direction throughout their preparation. Instead of asking "What should I learn next?", students can follow a structured path based on their goals, current skills, and performance.</p>
              <p>Our platform focuses on practical preparation rather than simply collecting certificates or completing courses.</p>
              <p>We believe that real progress comes from consistently solving problems, understanding concepts, testing knowledge, analyzing mistakes, and improving over time.</p>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20">
            <h3 className="text-2xl font-black text-white mb-6">Who is AuriXCareer for?</h3>
            <p className="text-slate-400 mb-8">AuriXCareer is built primarily for students and early-career professionals who want to build strong technical foundations and prepare for opportunities in the technology industry.</p>
            <ul className="space-y-4">
              {[
                'A beginner starting your programming journey',
                'A student preparing for campus placements',
                'A developer strengthening DSA and problem-solving skills',
                'A student preparing for technical assessments',
                'A candidate preparing for interviews',
                'Someone looking for internships or entry-level opportunities',
                'A learner trying to identify and improve technical skill gaps'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 mr-3 w-1.5 h-1.5 rounded-full bg-[#7b32d9] flex-shrink-0"></div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* APPROACH, FUTURE & PROMISE */}
        <div className="space-y-24">

          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-3xl font-black text-white mb-6">Our Approach</h3>
            <p className="text-lg text-slate-300 mb-8">We believe career preparation becomes more effective when learning is measurable. That's why AuriXCareer focuses on continuous improvement through:</p>
            <div className="inline-block bg-[#7b32d9]/10 border border-[#7b32d9]/30 text-[#c49bfa] font-black tracking-wide px-6 md:px-12 py-4 rounded-2xl shadow-[0_0_30px_rgba(123,50,217,0.15)] mb-8 text-sm md:text-base">
              Learn → Practice → Assess → Analyze → Improve → Repeat
            </div>
            <p className="text-slate-400 text-lg">Every assessment, coding problem, practice session, and learning activity contributes to a broader understanding of a student's preparation level.</p>
            <p className="text-white font-medium text-xl mt-6 italic">The goal is not to compete with other students.<br />The goal is to become better than your previous version.</p>
          </div>

          <div className="text-center max-w-4xl mx-auto bg-[#161426]/40 border border-white/10 p-10 md:p-16 rounded-[40px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-500 transform hover:-translate-y-3 hover:shadow-[0_30px_60px_rgba(123,50,217,0.2)] hover:border-[#7b32d9]/30">
            <h3 className="text-3xl font-black text-white mb-6">Our Future</h3>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              AuriXCareer is being built with a long-term vision of becoming a complete career ecosystem for students. As the platform evolves, we aim to introduce smarter AI-based recommendations, personalized learning paths, advanced assessment analytics, interview simulations, skill-based opportunity matching, project-based learning, recruiter-focused profiles, and other tools that can make the transition from student to professional more efficient.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              We believe technology can make career preparation more personalized, transparent, and accessible. And we are building AuriXCareer to make that vision a reality.
            </p>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-[#c49bfa] font-bold tracking-widest uppercase text-sm mb-4">Our Promise</h3>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">We don't promise instant success.<br />We promise a better way to prepare for it.</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-12">
              AuriXCareer is committed to creating a platform where students can learn with purpose, practice with consistency, measure their progress, understand their weaknesses, and move forward with confidence.<br /><br />
              Because every successful career starts with preparation. And every great preparation starts with the right direction.
            </p>
            <div className="pt-12 border-t border-white/10">
              <Logo className="h-10 items-start mb-3" forceWhite={true} />
              <p className="text-[#c49bfa] font-bold tracking-wider uppercase">
                Learn. Practice. Assess. Improve. Get Career Ready.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

