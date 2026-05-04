'use client'; // Required for ScrollSidebar and interactive elements

import React from 'react';
import Image from 'next/image';
import ScrollSidebar from '@/components/ScrollSidebar';
import { 
  Award, 
  Layers, 
  GraduationCap, 
  ArrowRight, 
  Workflow, 
  MessageSquare,
  Mail,
  Briefcase,
  Zap
} from 'lucide-react';

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30 bg-[#111827]">
      {/* 
         The Sidebar is a fixed element. 
         Ensure the 'id' attributes in ScrollSidebar.tsx match the ones below.
      */}
      <ScrollSidebar />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel h-20 flex items-center">
        <div className="content-container w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 px-6 lg:px-24">
          <div className="font-black tracking-tighter text-xl text-white uppercase">Darwin Ernest Cruz.</div>
          <div className="hidden md:flex gap-10 items-center">
            <a href="#hero" className="hover:text-cyan-600 transition-colors">Start</a>
            <a href="#about" className="hover:text-cyan-600 transition-colors">Strategy</a>
            <a href="#case-studies" className="hover:text-cyan-600 transition-colors">Cases</a>
            <a href="#expertise" className="hover:text-cyan-600 transition-colors">Expertise</a>
            <a href="#work-with-me" className="text-cyan-600 font-black tracking-[0.3em]">Work with me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="pt-48 pb-24 content-container px-6 lg:px-24">
        <div className="badge mb-8 inline-block bg-cyan-600/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          Brandon Hall Excellence Award Contributor
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12 max-w-5xl text-white">
          Architecting AI-driven learning ecosystems where <span className="text-cyan-400">Learning Science leads.</span>
        </h1>
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100">Darwin Cruz</h2>
          <p className="text-xl text-slate-500 font-medium tracking-tight">Lead Specialist in Learning Innovation & Technology</p>
        </div>
        <div className="flex flex-wrap gap-8 items-center text-slate-400">
          <div className="flex items-center gap-2 border-r border-slate-700 pr-8 font-bold text-xs uppercase tracking-tighter">
            <GraduationCap size={20} className="text-cyan-600" /> BS IT | DOST Scholar
          </div>
          <a href="https://www.linkedin.com/in/cruzde/" className="flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-widest hover:text-cyan-400 transition-colors">
            <LinkedInIcon /> linkedin.com/in/cruzde/
          </a>
        </div>
      </header>

      <main className="content-container space-y-40 pb-40 px-6 lg:px-24">
        
        {/* About & Innovation Section */}
        <section id="about" className="flex items-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
            <div className="flex justify-center order-2 md:order-1">
              <div className="relative p-2 rounded-2xl bg-gradient-to-br from-[#00b4d8] to-[#111827] shadow-2xl shadow-[#00b4d8]/20">
                <Image
                  src="/bring humanity to business.jpg"
                  alt="Portrait showing innovation mindset"
                  width={600}
                  height={600}
                  unoptimized={true} 
                  className="rounded-xl border-2 border-white/10 max-w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-8 order-1 md:order-2">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  Leading <span className="text-cyan-400">Learning Innovation</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Lead Specialist at Teletech Inc., merging DOST scholarship background in IT with a strategic mindset to pilot <span className="font-semibold text-white">agentic AI systems</span>. Driven by the mission of bringing human insight to automated business solutions.
                </p>
              </div>

              {/* Metrics Component */}
              <div id="metrics" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                  <div className="p-3 bg-cyan-400/10 rounded-full text-cyan-400">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">$35K+</p>
                    <p className="text-sm text-gray-400">Annual ROI from Pilot</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                  <div className="p-3 bg-cyan-400/10 rounded-full text-cyan-400">
                    <Zap className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">600%</p>
                    <p className="text-sm text-gray-400">Growth in Bot Production</p>
                  </div>
                </div>
              </div>

              <a href="mailto:zurcdtsenre@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-[#111827] font-bold rounded-lg hover:bg-white transition-all text-lg">
                <Mail className="w-5 h-5" />
                Connect & Iterate
              </a>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-600 mb-12">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-900/50 p-10 rounded-3xl border border-gray-800 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-6">Ecosystem Infrastructure Transition</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Led strategic scoping and technical governance for a global platform migration. Defined role-based access and ensured 100% security compliance.
              </p>
              <div className="flex gap-4 font-bold text-[10px] uppercase text-cyan-400 tracking-widest">
                <span>#Strategy</span> <span>#Governance</span>
              </div>
            </div>
            <div className="aspect-video bg-gray-800 rounded-3xl flex items-center justify-center font-bold text-gray-600 text-3xl uppercase tracking-tighter">
              Platform Migration
            </div>
          </div>
        </section>

        {/* Sample Projects */}
        <section id="demos">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-600 mb-12">Sample Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-8 rounded-3xl border border-gray-800 hover:border-cyan-400/50 transition-colors">
              <Workflow className="mb-8 text-cyan-400" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">Automation API Suite</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Engineered 3-step API integrations eliminating 90% of manual entry errors and increasing coaching frequency by 111%.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
              <MessageSquare className="mb-8 text-cyan-400" size={40} />
              <h3 className="text-xl font-bold text-white mb-4">GenAI Simulation Hub</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Architected scalable AI-driven simulation bots focused on skills evaluation and mastery-aligned feedback.
              </p>
            </div>
            <div className="border-2 border-dashed border-gray-800 rounded-3xl flex flex-col justify-center items-center text-center p-8">
              <Layers className="text-gray-700 mb-4" size={40} />
              <p className="text-gray-600 font-bold uppercase text-[10px] tracking-widest">Future Project Hub</p>
            </div>
          </div>
        </section>

        {/* Expertise Grid */}
        <section id="expertise">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-600 mb-12">Area of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'AI Strategy', list: ['GenAI Bot Development', 'Conversation Design', 'Prompt Engineering', 'AI Tutor R&D'] },
              { title: 'Technical Strategy', list: ['API Workflow Design', 'System Automation', 'Platform Governance', 'ROI Modeling'] },
              { title: 'Learning Science', list: ['Instructional Design', 'Skill Simulations', 'LXP Governance', 'Evidence-based Models'] },
              { title: 'Project Leadership', list: ['Lean Business Cases', 'Agile R&D', 'Vendor Management', 'Security Compliance'] }
            ].map((cat, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-cyan-400 font-bold text-sm uppercase tracking-widest">{cat.title}</h4>
                <ul className="space-y-3 font-medium text-slate-400 text-sm">
                  {cat.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-600 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section id="work-with-me" className="py-32 bg-gray-900 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">Work With Me.</h2>
            <p className="text-slate-400 text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Available for strategic consulting, AI architecture for L&D, and digital transformation initiatives.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:zurcdtsenre@gmail.com" className="bg-cyan-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-white transition-all">
                Start a Conversation <ArrowRight size={20} />
              </a>
              <a href="/Darwin Cruz_Resume_04282026.pdf" download className="font-bold uppercase tracking-widest text-xs underline underline-offset-8 decoration-cyan-400 decoration-2 hover:text-cyan-400 transition-all">
                Download Full Dossier
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="content-container pb-24 px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-gray-800 pt-24 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-500">
        <div className="text-2xl tracking-tighter text-white font-black">Darwin Cruz.</div>
        <div className="flex gap-10">
          <a href="https://www.linkedin.com/in/cruzde/" className="hover:text-cyan-400 flex items-center gap-3 transition-colors">
            <LinkedInIcon /> LinkedIn
          </a>
        </div>
        <div>Bacolod City // 2026</div>
      </footer>
    </div>
  );
}