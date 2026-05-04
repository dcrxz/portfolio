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

/**
 * Brand-specific SVG Icons to avoid library export conflicts
 */
const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-cyan-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">
          <div className="font-black tracking-tighter text-xl">DC.</div>
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#what-i-do" className="hover:text-cyan-600 transition-colors">Strategy</a>
            <a href="#case-studies" className="hover:text-cyan-600 transition-colors">Case Studies</a>
            <a href="#expertise" className="hover:text-cyan-600 transition-colors">Expertise</a>
            <a href="#work-with-me" className="hover:text-cyan-600 transition-colors text-cyan-600 font-black">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-24 px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-8">
          <Award size={14} className="text-cyan-600" /> Brandon Hall Excellence Award Contributor[cite: 2]
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-12 max-w-5xl">
          Architecting AI-driven learning ecosystems where <span className="text-slate-900 underline decoration-cyan-400 decoration-4 underline-offset-4">Learning Science leads.</span>[cite: 2]
        </h1>
        
        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-2xl font-semibold text-slate-400 tracking-tight">Darwin Cruz</h2>
          <p className="text-lg text-slate-500 font-medium tracking-tight">Lead Specialist in Learning Innovation & Technology[cite: 2]</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-slate-400">
          <div className="flex items-center gap-2 border-r border-slate-200 pr-6">
            <GraduationCap size={18} className="text-cyan-600" />
            <span className="text-xs font-mono uppercase tracking-tighter font-bold">BS IT | DOST Scholar[cite: 2]</span>
          </div>
          <a href="https://www.linkedin.com/in/cruzde/" className="group flex items-center gap-2 text-cyan-600 hover:text-cyan-800 transition-all text-xs font-black uppercase tracking-widest underline decoration-cyan-500/30 underline-offset-4">
            <LinkedInIcon size={16} />
            linkedin.com/in/cruzde/
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 space-y-48 pb-40">
        
        {/* WHAT I DO */}
        <section id="what-i-do">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 uppercase italic text-slate-100">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <p className="text-3xl font-bold leading-tight tracking-tight">
              I specialize in the digital transformation of enterprise L&D, bridging the gap between emerging AI technology and evidence-based learning science.[cite: 2]
            </p>
            <div className="space-y-8">
              <p className="text-slate-500 text-xl leading-relaxed">
                I architect scalable AI frameworks and manage high-stakes platform migrations to eliminate operational friction and drive measurable ROI.[cite: 2]
              </p>
              <div className="flex gap-12">
                <div>
                  <div className="text-4xl font-black text-slate-900">600%</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Growth in Scale[cite: 2]</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-slate-900">$35K+</div>
                  <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">Annual ROI[cite: 2]</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="case-studies">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 uppercase italic text-slate-100">Case Studies</h2>
          <div className="space-y-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">Enterprise Infrastructure Migration</h3>
                <p className="text-slate-500 text-lg leading-relaxed mb-8">
                  Led the strategic scoping and technical governance for a global platform transition, defining role-based access and ensuring 100% security compliance.[cite: 2]
                </p>
                <div className="flex gap-4 font-mono text-[10px] font-bold text-slate-300 uppercase">
                  <span>#Architecture</span> <span>#Compliance</span>
                </div>
              </div>
              <div className="aspect-video bg-slate-50 rounded-[2rem] border-2 border-slate-100 flex items-center justify-center font-black text-slate-200 text-4xl uppercase italic tracking-tighter">Governance</div>
            </div>
          </div>
        </section>

        {/* SAMPLE PROJECTS */}
        <section id="sample-projects">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 uppercase italic text-slate-100">Sample Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-12 bg-white border-2 border-slate-900 rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(15,23,42,1)]">
              <Workflow className="mb-8 text-cyan-600" size={40} />
              <h3 className="text-2xl font-black mb-4">Automation API Suite</h3>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Engineered 3-step API integrations eliminating 90% of manual entry errors and increasing coaching frequency by 111%.[cite: 2]
              </p>
            </div>
            <div className="p-12 bg-slate-900 text-white rounded-[3rem] shadow-[12px_12px_0px_0px_rgba(34,211,238,0.2)]">
              <MessageSquare className="mb-8 text-cyan-400" size={40} />
              <h3 className="text-2xl font-black mb-4">AI Conversation Design</h3>
              <p className="text-sm text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                Development of AI-driven simulation frameworks for skill evaluation and mastery-aligned feedback design.[cite: 2]
              </p>
            </div>
            <div className="p-12 bg-slate-50 border-2 border-slate-100 rounded-[3rem] flex flex-col justify-center items-center text-center">
              <Layers className="text-slate-200 mb-4" size={40} />
              <p className="text-slate-300 font-black italic uppercase tracking-widest">Future Project Hub</p>
            </div>
          </div>
        </section>

        {/* AREA OF EXPERTISE */}
        <section id="expertise">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 uppercase italic text-slate-100">Area of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'AI Strategy', list: ['GenAI Bot Development', 'Conversation Design', 'Prompt Engineering', 'AI Tutor R&D'] },
              { title: 'Technical Strategy', list: ['API Workflow Design', 'System Automation', 'Platform Governance', 'ROI Modeling'] },
              { title: 'Learning Science', list: ['Instructional Design', 'Skill Simulations', 'LXP Governance', 'Evaluation Models'] },
              { title: 'Management', list: ['Agile R&D', 'Vendor Management', 'Security Compliance', 'Stakeholder Narratives'] }
            ].map((cat, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 border-b-2 border-cyan-500 pb-2 inline-block">{cat.title}</h4>
                <ul className="space-y-4 font-bold text-slate-900 uppercase text-[10px] tracking-[0.2em]">
                  {cat.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" /> {item}[cite: 2]
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* WHY ME */}
        <section id="why-me">
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-16 uppercase italic text-slate-100">Why Me</h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <Award className="text-cyan-600 shrink-0" size={36} />
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-3">Award-Winning Innovation</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">Recognized contributor to Gold and Silver industry awards for AI-driven learning solutions.[cite: 2]</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <Workflow className="text-cyan-600 shrink-0" size={36} />
                <div>
                  <h4 className="text-2xl font-black uppercase tracking-tight mb-3">Systematic Discipline</h4>
                  <p className="text-slate-500 text-lg leading-relaxed">A multi-sport athlete applying the logic of endurance optimization and efficiency to enterprise tech systems.[cite: 2]</p>
                </div>
              </div>
            </div>
            <div className="p-16 bg-slate-50 rounded-[4rem] text-2xl font-medium italic text-slate-600 leading-relaxed border border-slate-100">
              "I translate mastery-aligned design principles into actionable technical guidance, ensuring technology serves the human learner."[cite: 2]
            </div>
          </div>
        </section>

        {/* WORK WITH ME */}
        <section id="work-with-me" className="py-32 bg-slate-900 rounded-[5rem] text-white text-center relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto px-8">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 uppercase">Work With Me.</h2>
            <p className="text-slate-400 text-xl mb-16 font-medium max-w-2xl mx-auto">
              Available for strategic consulting, AI architecture for L&D, and digital transformation initiatives.[cite: 2]
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a href="mailto:zurcdtsenre@gmail.com" className="px-12 py-6 bg-cyan-400 text-slate-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-cyan-300 transition-all">
                Start a Conversation <ArrowRight className="inline ml-2" size={20} />
              </a>
              <a href="/Darwin Cruz_Resume_04282026.pdf" download className="text-white font-black uppercase tracking-widest text-sm underline underline-offset-8 decoration-cyan-400 decoration-2">
                Download Full Dossier[cite: 2]
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="px-8 pb-24 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 border-t border-slate-100 pt-24">
        <div className="font-black text-3xl tracking-tighter uppercase">Darwin Cruz.</div>
        <a href="https://www.linkedin.com/in/cruzde/" className="flex items-center gap-3 text-slate-400 hover:text-cyan-600 font-black text-[10px] uppercase tracking-[0.3em] transition-colors">
          <LinkedInIcon size={20} /> LinkedIn
        </a>
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
          Bacolod City // 2026[cite: 2]
        </div>
      </footer>
    </div>
  );
}