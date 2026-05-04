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
  Zap
} from 'lucide-react';

/**
 * Brand-specific SVG Icons to avoid library export conflicts
 */
const LinkedInIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto p-8 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
        <div>Innovation // Strategy // Performance</div>
        <div className="flex gap-8 items-center">
          <a href="#impact" className="hover:text-cyan-400 transition-colors tracking-widest">Impact</a>
          <a href="#governance" className="hover:text-cyan-400 transition-colors tracking-widest">Strategy</a>
          <a href="#hobbies" className="hover:text-cyan-400 transition-colors tracking-widest">Interests</a>
        </div>
      </nav>

      {/* Hero Section: Philosophy First */}
      <header className="max-w-6xl mx-auto py-24 px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
          <Award size={14} /> Brandon Hall Excellence Award Contributor[cite: 1]
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-10 leading-[1.1] max-w-5xl">
          Architecting AI-driven learning ecosystems where <span className="text-cyan-400 text-glow-cyan">Learning Science leads.</span>[cite: 1]
        </h1>

        <div className="flex flex-col gap-2 mb-12">
          <h2 className="text-2xl font-semibold text-slate-100 tracking-tight">Darwin Cruz</h2>
          <p className="text-lg text-slate-400 font-medium">Lead Specialist in Learning Innovation & Technology[cite: 1]</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-slate-400">
          <div className="flex items-center gap-2 border-r border-slate-800 pr-6">
            <GraduationCap size={18} className="text-cyan-500" />
            <span className="text-xs font-mono uppercase tracking-tighter">BS IT | DOST Scholar[cite: 1]</span>
          </div>
          <a href="https://www.linkedin.com/in/cruzde/" className="group flex items-center gap-2 text-cyan-500 hover:text-white transition-all text-xs font-black uppercase tracking-widest underline decoration-cyan-500/30 underline-offset-4">
            <LinkedInIcon size={16} />
            linkedin.com/in/cruzde/
          </a>
        </div>
      </header>

      {/* Impact Dashboard */}
      <section id="impact" className="max-w-6xl mx-auto px-8 mb-32">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-cyan-500 pl-6">Business Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Bot Production', val: '600%+', desc: 'Architecture Scale' },
            { label: 'Annual ROI', val: '$35K+', desc: 'LBC Modeled' },
            { label: 'Manual Errors', val: '-90%', desc: 'API Automation' },
            { label: 'ID Lifecycle', val: '-300%', desc: 'Acceleration' }
          ].map((s, i) => (
            <div key={i} className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl hover:bg-slate-900/60 transition-colors">
              <div className="text-4xl font-bold text-white mb-2">{s.val}[cite: 1]</div>
              <div className="text-[10px] uppercase tracking-widest text-cyan-500 font-black mb-1">{s.label}</div>
              <div className="text-[10px] text-slate-500 font-medium">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy & Governance */}
      <section id="governance" className="max-w-6xl mx-auto px-8 mb-40">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-blue-500 pl-6">Organizational Strategy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl group hover:border-blue-500/30 transition-all">
            <ShieldCheck className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Governance & Compliance</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-tighter">Managed enterprise platform migration with 100% security compliance and role-based provisioning.[cite: 1]</p>
          </div>
          <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl group hover:border-cyan-500/30 transition-all">
            <Users className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Leadership & Upskilling</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-tighter">Launched LXD upskill programs for GenAI conversation design, scaling innovation readiness.[cite: 1]</p>
          </div>
          <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl group hover:border-purple-500/30 transition-all">
            <Zap className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Executive Narratives</h3>
            <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-tighter">Developed Lean Business Cases (LBC) to secure stakeholder buy-in and ROI validation.[cite: 1]</p>
          </div>
        </div>
      </section>

      {/* Technical Lab */}
      <section className="max-w-6xl mx-auto px-8 mb-40">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-10 hover:border-cyan-500/20 transition-all">
            <Cpu className="text-cyan-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">API Workflow Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">Engineered custom 3-step API integrations eliminating 90% of manual entry errors and increasing coaching frequency by 111%.[cite: 1]</p>
            <div className="flex gap-4 text-[9px] font-black uppercase text-slate-600 tracking-widest">
               <span>#API_ARCH</span> <span>#AUTOMATION</span>
            </div>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-[2.5rem] p-10 hover:border-purple-500/20 transition-all">
            <Database className="text-purple-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">GenAI Learning Systems</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">Architected scalable bot frameworks and 3-tier difficulty models, reducing the instructional design lifecycle by 300%.[cite: 1]</p>
            <div className="flex gap-4 text-[9px] font-black uppercase text-slate-600 tracking-widest">
               <span>#GENAI</span> <span>#LX_DESIGN</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section id="hobbies" className="max-w-6xl mx-auto px-8 mb-40">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-orange-500 pl-6">Human Performance & Interests</h2>
        <div className="p-12 bg-slate-900/40 border border-slate-800 rounded-[3rem] relative overflow-hidden group">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight italic">Performance Outside the Lab</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                I apply the same optimization logic to my physical pursuits. Outside of architecting learning systems, I focus on metabolic efficiency and peak endurance.[cite: 1]
              </p>
              <div className="flex gap-4">
                <div className="flex flex-col p-4 bg-slate-950 border border-slate-800 rounded-2xl w-36 hover:border-orange-500/30 transition-colors">
                  <Timer className="text-orange-500 mb-2" size={20} />
                  <span className="text-[10px] font-black uppercase text-slate-500">Sub-20 5K Quest[cite: 1]</span>
                </div>
                <div className="flex flex-col p-4 bg-slate-950 border border-slate-800 rounded-2xl w-36 hover:border-blue-500/30 transition-colors">
                  <Bike className="text-blue-500 mb-2" size={20} />
                  <span className="text-[10px] font-black uppercase text-slate-500">Tabuelan Tri[cite: 1]</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex justify-center opacity-20 group-hover:opacity-40 transition-opacity">
              <Layers size={220} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Connect */}
      <footer className="max-w-6xl mx-auto p-20 text-center border-t border-slate-900/50">
        <div className="flex justify-center gap-12 mb-10">
          <a href="https://www.linkedin.com/in/cruzde/" className="text-slate-500 hover:text-cyan-500 flex flex-col items-center gap-2 group transition-colors">
            <LinkedInIcon size={24}/>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">LinkedIn</span>
          </a>
          <a href="https://github.com/dcrxz" className="text-slate-500 hover:text-white flex flex-col items-center gap-2 group transition-colors">
            <GithubIcon size={24}/>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100">GitHub</span>
          </a>
          <a 
            href="/Darwin Cruz_Resume_04282026.pdf" 
            download
            className="text-slate-500 hover:text-blue-500 flex flex-col items-center gap-2 group transition-colors"
          >
            <ExternalLink size={24}/>
            <span className="text-[10px] font-black uppercase tracking-widest opacity-50 group-hover:opacity-100 underline decoration-blue-500/30 underline-offset-4">Download CV</span>
          </a>
        </div>
        <p className="text-slate-600 text-[9px] font-mono tracking-[0.6em] uppercase">Mindset {'>'} Skillset {'>'} Toolset // Darwin Cruz // 2026</p>
      </footer>
    </div>
  );
}