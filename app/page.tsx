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
  Code2,
  Workflow,
  Lightbulb,
  MessageSquare
} from 'lucide-react';

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
            <a href="#work-with-me" className="hover:text-cyan-600 transition-colors text-cyan-600">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-40 pb-24 px-8 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-8">
          <Award size={14} className="text-cyan-600" /> Brandon Hall Excellence Award Contributor[cite: 2]
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8">
          Darwin Cruz.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl font-medium leading-relaxed">
          Architecting AI-driven learning ecosystems where <span className="text-slate-900 underline decoration-cyan-400 decoration-4 underline-offset-4">Learning Science leads.</span>[cite: 2]
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-8 space-y-40 pb-40">
        
        {/* 1. What I Do */}
        <section id="what-i-do">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic text-slate-200/80">What I Do</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-2xl font-bold leading-tight">
                I specialize in the digital transformation of enterprise L&D, bridging the gap between emerging AI technology and evidence-based learning science.[cite: 2]
              </p>
              <p className="text-slate-500 text-lg leading-relaxed">
                My work involves architecting scalable AI bot frameworks, managing high-stakes platform migrations, and designing API workflows that eliminate operational friction.[cite: 2]
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-cyan-600 mb-2">600%</div>
                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest leading-tight">Bot Framework Growth[cite: 2]</div>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-3xl font-black text-cyan-600 mb-2">$35K+</div>
                <div className="text-[10px] font-bold uppercase text-slate-400 tracking-widest leading-tight">Annual ROI Automation[cite: 2]</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Case Studies */}
        <section id="case-studies">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic text-slate-200/80">Case Studies</h2>
          <div className="space-y-12">
            <div className="group grid md:grid-cols-2 gap-12 py-12 border-t border-slate-100 items-center hover:bg-slate-50/50 transition-colors">
              <div>
                <h3 className="text-3xl font-black mb-4 group-hover:text-cyan-600 transition-colors">Enterprise LXP Migration</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Led the strategic scoping and technical governance for a global platform transition, defining provisioning workflows and role-based access for external users while maintaining 100% security compliance.[cite: 2]
                </p>
                <div className="flex gap-4 font-mono text-[10px] font-bold text-slate-400 uppercase">
                  <span>#Governance</span> <span>#Infrastructure</span>
                </div>
              </div>
              <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                <div className="absolute inset-0 flex items-center justify-center font-black text-slate-200 text-4xl">GOVERNANCE</div>
              </div>
            </div>

            <div className="group grid md:grid-cols-2 gap-12 py-12 border-t border-slate-100 items-center hover:bg-slate-50/50 transition-colors">
              <div className="order-2 md:order-1 aspect-video bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
                 <div className="absolute inset-0 flex items-center justify-center font-black text-slate-200 text-4xl">SCALABILITY</div>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-3xl font-black mb-4 group-hover:text-cyan-600 transition-colors">Generative AI Scale-up</h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Architected a scalable bot development framework that increased output by 600%, introducing 3-tier difficulty models and a "Curriculum Wizard" that reduced the ID lifecycle by 300%.[cite: 2]
                </p>
                <div className="flex gap-4 font-mono text-[10px] font-bold text-slate-400 uppercase">
                  <span>#GenAI</span> <span>#ProductDesign</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Sample Projects */}
        <section id="sample-projects">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic text-slate-200/80">Sample Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white border-2 border-slate-900 rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
              <Workflow className="mb-6 text-cyan-600" size={32} />
              <h3 className="text-xl font-black mb-4">Auth/Fetch API Suite</h3>
              <p className="text-sm text-slate-500 leading-relaxed uppercase tracking-tighter font-bold">
                Engineered custom 3-step API integrations that eliminated 90% of manual entry errors and increased coaching frequency by 111%.[cite: 2]
              </p>
            </div>
            <div className="p-10 bg-slate-900 text-white rounded-[2rem] shadow-[8px_8px_0px_0px_rgba(206,242,255,1)]">
              <MessageSquare className="mb-6 text-cyan-400" size={32} />
              <h3 className="text-xl font-black mb-4">GenAI Conversation Coach</h3>
              <p className="text-sm text-slate-400 leading-relaxed uppercase tracking-tighter font-bold">
                Development of AI-driven simulation bots for skill evaluation, focused on conversation design and mastery-aligned design principles.[cite: 2]
              </p>
            </div>
            <div className="p-10 bg-white border-2 border-slate-100 rounded-[2rem]">
              <Cpu className="mb-6 text-slate-300" size={32} />
              <h3 className="text-xl font-black mb-4 text-slate-300 italic uppercase tracking-tighter">Project Delta</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Area of Expertise */}
        <section id="expertise">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic text-slate-200/80">Area of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: 'AI Strategy', list: ['GenAI Bot Dev', 'Conversation Design', 'Prompt Engineering', 'AI Tutor R&D'] },
              { title: 'System Architecture', list: ['API Workflow Design', 'Platform Governance', 'User Provisioning', 'ROI Modeling'] },
              { title: 'Learning Science', list: ['Evidence-based Design', 'Instructional Tech', 'Skill Simulations', 'LXP Governance'] },
              { title: 'Technical Leadership', list: ['Lean Business Cases', 'Agile R&D', 'Vendor Management', 'Security Compliance'] }
            ].map((cat, i) => (
              <div key={i} className="space-y-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-cyan-600 border-b-2 border-cyan-100 pb-2 inline-block">{cat.title}</h4>
                <ul className="space-y-3 font-bold text-slate-900 uppercase text-[10px] tracking-widest">
                  {cat.list.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-slate-300 rounded-full" /> {item}[cite: 2]
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Why Me */}
        <section id="why-me">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 uppercase italic text-slate-200/80">Why Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <Award className="text-cyan-600 shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Award Winning Innovation</h4>
                  <p className="text-slate-500 leading-relaxed">Contributor to Gold & Silver Brandon Hall awards for Best Advance in Generative AI and Innovative L&D Programs.[cite: 2]</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Workflow className="text-cyan-600 shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold uppercase tracking-tight mb-2">Systematic Disciplined Growth</h4>
                  <p className="text-slate-500 leading-relaxed">A multi-sport athlete applying the same logic of metabolic efficiency and endurance optimization to enterprise systems.[cite: 2]</p>
                </div>
              </div>
            </div>
            <div className="p-12 bg-slate-50 rounded-[3rem] border border-slate-100">
               <p className="text-xl italic font-medium text-slate-600 leading-relaxed">
                 "I create frictionless paths between complex data systems and the human learners who use them, ensuring technology serves the science, not the other way around."[cite: 2]
               </p>
            </div>
          </div>
        </section>

        {/* 6. Work With Me */}
        <section id="work-with-me" className="py-24 bg-slate-900 rounded-[4rem] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Layers size={400} />
          </div>
          <div className="relative z-10 px-12 text-center max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">Let's Build.</h2>
            <p className="text-slate-400 text-lg mb-12 font-medium">
              Available for strategic consulting, enterprise AI architecture, and digital transformation initiatives.[cite: 2]
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="mailto:zurcdtsenre@gmail.com" 
                className="inline-flex items-center justify-center px-10 py-5 bg-cyan-400 text-slate-900 font-black uppercase text-sm tracking-widest rounded-full hover:bg-cyan-300 transition-colors"
              >
                Start a Conversation <ArrowRight className="ml-2" size={18} />
              </a>
              <a 
                href="/Darwin Cruz_Resume_04282026.pdf" 
                download
                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 text-white font-black uppercase text-sm tracking-widest rounded-full hover:bg-white/20 transition-colors"
              >
                Download Dossier[cite: 2]
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="px-8 pb-20 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-t border-slate-100 pt-20">
        <div className="font-black text-2xl tracking-tighter uppercase">Darwin Cruz.</div>
        <div className="flex gap-10">
           <a href="https://www.linkedin.com/in/cruzde/" className="text-slate-400 hover:text-cyan-600 flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest transition-colors">
             <LinkedInIcon size={18} /> LinkedIn
           </a>
        </div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
           Bacolod City // PH // 2026[cite: 2]
        </p>
      </footer>
    </div>
  );
}