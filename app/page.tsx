import React from 'react';
import { 
  Cpu, 
  Database, 
  Award, 
  Layers, 
  Timer, 
  Bike, 
  GraduationCap, 
  ExternalLink, 
  ShieldCheck, 
  Users, 
  Zap, 
  ArrowRight, 
  Workflow, 
  MessageSquare 
} from 'lucide-react';

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-cyan-100 font-sans">
      <nav className="fixed top-0 w-full z-50 glass-panel h-20 flex items-center border-b border-slate-100">
        <div className="content-container w-full flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <div className="font-black tracking-tighter text-xl text-slate-900 uppercase">DC.</div>
          <div className="hidden md:flex gap-10">
            <a href="#what-i-do" className="hover:text-cyan-600 transition-colors">Strategy</a>
            <a href="#case-studies" className="hover:text-cyan-600 transition-colors">Cases</a>
            <a href="#expertise" className="hover:text-cyan-600 transition-colors">Expertise</a>
            <a href="#work-with-me" className="text-cyan-600 font-black tracking-[0.3em]">Work with me</a>
          </div>
        </div>
      </nav>

      <header className="pt-48 pb-24 content-container">
        <div className="badge mb-8 inline-block">Brandon Hall Excellence Award Contributor</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-12 max-w-5xl text-slate-900">
          Architecting AI-driven learning ecosystems where <span className="text-gradient-cyan">Learning Science leads.</span>
        </h1>
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800">Darwin Cruz</h2>
          <p className="text-xl text-slate-500 font-medium tracking-tight">Lead Specialist in Learning Innovation & Technology</p>
        </div>
        <div className="flex flex-wrap gap-8 items-center text-slate-400">
          <div className="flex items-center gap-2 border-r border-slate-200 pr-8 font-bold text-xs uppercase tracking-tighter">
            <GraduationCap size={20} className="text-cyan-600" /> BS IT | DOST Scholar
          </div>
          <a href="https://www.linkedin.com/in/cruzde/" className="flex items-center gap-2 text-cyan-600 font-bold text-xs uppercase tracking-widest hover:text-cyan-800 transition-colors">
            <LinkedInIcon /> linkedin.com/in/cruzde/
          </a>
        </div>
      </header>

      <main className="content-container space-y-40 pb-40 text-nowrap">
        <section id="what-i-do">
          <h2 className="section-header uppercase italic !text-slate-100">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-16 text-wrap">
            <p className="text-3xl font-bold leading-tight text-slate-800">Specializing in the digital transformation of enterprise L&D.</p>
            <div className="space-y-8 text-lg text-slate-500 leading-relaxed">
              <p>I architect AI-driven ecosystems and manage migrations to eliminate operational friction and drive measurable ROI.</p>
              <div className="flex gap-12 text-5xl font-bold text-slate-900">
                <div>600% <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-2">Scale Growth</span></div>
                <div>$35K+ <span className="block text-[10px] text-slate-400 uppercase tracking-widest mt-2">Annual ROI</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies">
          <h2 className="section-header uppercase italic !text-slate-100">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-wrap">
            <div className="card-white h-full flex flex-col justify-center">
              <h3 className="h3-bold">Ecosystem Infrastructure Transition</h3>
              <p className="text-slate-600 leading-relaxed mb-8">Led technical governance for a global platform migration, defining role-based access and ensuring security compliance.</p>
              <div className="flex gap-4 font-bold text-[10px] uppercase text-cyan-600 tracking-widest"><span>#Strategy</span> <span>#Governance</span></div>
            </div>
            <div className="aspect-video bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center font-bold text-slate-300 text-3xl uppercase tracking-tighter">Platform Migration</div>
          </div>
        </section>

        <section id="sample-projects">
          <h2 className="section-header uppercase italic !text-slate-100">Sample Projects</h2>
          <div className="grid md:grid-cols-3 gap-8 text-wrap">
            <div className="card-white">
              <Workflow className="mb-8 text-cyan-600" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase">Automation API Suite</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Engineered API integrations eliminating 90% of manual entry errors and increasing coaching frequency by 111%.</p>
            </div>
            <div className="card-dark">
              <MessageSquare className="mb-8 text-cyan-400" size={40} />
              <h3 className="text-xl font-bold mb-4 uppercase text-white">GenAI Simulation Hub</h3>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">Architected scalable AI-driven simulation bots focused on skills evaluation and mastery-aligned feedback.</p>
            </div>
            <div className="card-flat flex flex-col justify-center items-center text-center">
              <Layers className="text-slate-200 mb-4" size={40} />
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Future Project Hub</p>
            </div>
          </div>
        </section>

        <section id="expertise">
          <h2 className="section-header uppercase italic !text-slate-100">Area of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-wrap">
            {[
              { title: 'AI Strategy', list: ['GenAI Bot Development', 'Conversation Design', 'Prompt Engineering', 'AI Tutor R&D'] },
              { title: 'Technical Strategy', list: ['API Workflow Design', 'System Automation', 'Platform Governance', 'ROI Modeling'] },
              { title: 'Learning Science', list: ['Instructional Design', 'Skill Simulations', 'LXP Governance', 'Evaluation Models'] },
              { title: 'Project Leadership', list: ['Lean Business Cases', 'Agile R&D', 'Vendor Management', 'Security Compliance'] }
            ].map((cat, i) => (
              <div key={i} className="space-y-6">
                <h4 className="badge inline-block">{cat.title}</h4>
                <ul className="space-y-3 font-medium text-slate-600 text-sm">
                  {cat.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="why-me">
          <h2 className="section-header uppercase italic !text-slate-100">Why Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-wrap">
            <div className="space-y-12">
              <div className="flex gap-6 items-start text-wrap">
                <Award className="text-cyan-600 shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Multimodal Proficiency</h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium uppercase tracking-tight">I translate mastery-aligned design principles into technical guidance, ensuring technology serves the science.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start text-wrap">
                <Workflow className="text-cyan-600 shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold mb-2">Performance Discipline</h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium uppercase tracking-tight">Applying the logic of endurance optimization and metabolic efficiency to enterprise tech systems.</p>
                </div>
              </div>
            </div>
            <div className="card-flat p-12 italic text-lg text-slate-500 border-l-4 border-l-cyan-400 uppercase font-black tracking-tighter">
              "Strategy without execution is hallucination. I focus on measurable ROI and friction-less architecture."
            </div>
          </div>
        </section>

        <section id="work-with-me" className="py-32 bg-slate-900 rounded-[3rem] text-white text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto px-8 text-wrap">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase italic opacity-10 absolute -top-10 left-0 w-full select-none">Contact</h2>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase">Work With Me.</h2>
            <p className="text-slate-400 text-xl mb-12 font-medium max-w-2xl mx-auto leading-relaxed">Available for strategic consulting, AI architecture for L&D, and digital transformation initiatives.</p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a href="mailto:zurcdtsenre@gmail.com" className="btn-primary">Start a Conversation <ArrowRight size={20} /></a>
              <a href="/Darwin Cruz_Resume_04282026.pdf" download className="font-bold uppercase tracking-widest text-xs underline underline-offset-8 decoration-cyan-400 decoration-2 hover:text-cyan-400 transition-all">Download Full Dossier</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="content-container pb-24 flex flex-col md:flex-row justify-between items-center gap-12 border-t border-slate-100 pt-24 text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400">
        <div className="text-2xl tracking-tighter text-slate-900 font-black">Darwin Cruz.</div>
        <a href="https://www.linkedin.com/in/cruzde/" className="hover:text-cyan-600 flex items-center gap-3 transition-colors underline decoration-slate-200"><LinkedInIcon /> LinkedIn</a>
        <div>Bacolod City // 2026</div>
      </footer>
    </div>
  );
}