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
  ChevronRight,
  ShieldCheck,
  Users,
  Zap
} from 'lucide-react';

// Custom SVG components to bypass library export errors
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
      {/* Stealth Navigation */}
      <nav className="max-w-6xl mx-auto p-8 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
        <div className="font-mono tracking-[0.3em] text-slate-500">Architecture // Innovation // Strategy</div>
        <div className="flex gap-8 items-center">
          <a href="#impact" className="hover:text-cyan-400 transition-colors">Impact</a>
          <a href="#governance" className="hover:text-cyan-400 transition-colors">Strategy</a>
          <a href="https://www.linkedin.com/in/cruzde/" className="text-cyan-500 border border-cyan-500/30 px-3 py-1 rounded-full">linkedin.com/in/cruzde/</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto py-20 px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
          <Award size={14} /> Brandon Hall Gold & Silver Contributor
        </div>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.85]">
          Darwin <br /><span className="text-slate-800">Cruz.</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-500 font-bold uppercase tracking-widest mb-6">
          Lead Specialist // Learning Innovation @ TTEC Inc.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-10">
          <div className="flex items-center gap-2 border-r border-slate-800 pr-6">
            <GraduationCap size={18} className="text-cyan-500" />
            <span className="text-sm font-mono uppercase">BS IT | DOST Scholar</span>
          </div>
          <a href="https://www.linkedin.com/in/cruzde/" className="group flex items-center gap-2 text-cyan-400 underline decoration-cyan-500/30 underline-offset-4">
            <LinkedInIcon size={18} />
            <span className="text-xs font-black uppercase tracking-widest">https://www.linkedin.com/in/cruzde/</span>
          </a>
        </div>
        <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
          Architecting AI-driven learning ecosystems where <span className="text-white font-semibold">Learning Science</span> leads.[cite: 1]
        </p>
      </header>

      {/* Impact Dashboard */}
      <section id="impact" className="max-w-6xl mx-auto px-8 mb-32">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-cyan-500 pl-6">Core Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Bot Production', val: '600%+', desc: 'Architecture Scale' },
            { label: 'Annual ROI', val: '$35K+', desc: 'LBC Modeled' },
            { label: 'Manual Errors', val: '-90%', desc: 'API Automation' },
            { label: 'ID Lifecycle', val: '-300%', desc: 'Wizard 2.0 Impact' }
          ].map((s, i) => (
            <div key={i} className="p-8 bg-slate-900/40 border border-slate-800 rounded-3xl">
              <div className="text-4xl font-bold text-white mb-2">{s.val}</div>
              <div className="text-[10px] uppercase tracking-widest text-cyan-500 font-black mb-1">{s.label}</div>
              <div className="text-[10px] text-slate-500 font-medium">{s.desc}[cite: 1]</div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section id="governance" className="max-w-6xl mx-auto px-8 mb-40">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-blue-500 pl-6">Organizational Strategy</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl group">
            <ShieldCheck className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-bold mb-2 uppercase text-sm">Governance & Compliance</h3>
            <p className="text-[11px] text-slate-500 tracking-tighter">Managed migration (Bright to Zenarate) with 100% security compliance.[cite: 1]</p>
          </div>
          <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl group">
            <Users className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-bold mb-2 uppercase text-sm">Leadership & Upskilling</h3>
            <p className="text-[11px] text-slate-500 tracking-tighter">Architected LXD programs for GenAI conversation design.[cite: 1]</p>
          </div>
          <div className="p-8 bg-slate-900/20 border border-slate-900 rounded-2xl group">
            <Zap className="text-purple-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="text-white font-bold mb-2 uppercase text-sm">Executive Narratives</h3>
            <p className="text-[11px] text-slate-500 tracking-tighter">Authored Lean Business Cases to secure stakeholder buy-in.[cite: 1]</p>
          </div>
        </div>
      </section>

      {/* Technical Lab */}
      <section id="lab" className="max-w-6xl mx-auto px-8 mb-40">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-10">
            <Cpu className="text-cyan-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">API Engineering</h3>
            <p className="text-slate-400 text-sm leading-relaxed">3-step API integrations eliminating 90% of manual entry errors.[cite: 1]</p>
          </div>
          <div className="bg-slate-900/60 border border-slate-800 rounded-[3rem] p-10">
            <Database className="text-purple-400 mb-6" size={32} />
            <h3 className="text-2xl font-bold text-white mb-4">GenAI Wizard</h3>
            <p className="text-slate-400 text-sm leading-relaxed">Scalable bot frameworks reducing discovery phases by 300%.[cite: 1]</p>
          </div>
        </div>
      </section>

      {/* Human Performance */}
      <section className="max-w-6xl mx-auto px-8 mb-40">
        <div className="p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-2 italic">The Ecosystem Philosophy</h3>
            <p className="text-slate-500 max-w-lg text-sm">Optimization is a lifestyle—from enterprise L&D to a sub-20 minute 5K.[cite: 1]</p>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="flex flex-col items-center p-6 bg-slate-950 border border-slate-800 rounded-2xl w-36">
              <Timer className="text-orange-500 mb-3" size={24} />
              <span className="text-[10px] font-black uppercase text-slate-500 text-center">Sub-20 5K Quest[cite: 1]</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-950 border border-slate-800 rounded-2xl w-36">
              <Bike className="text-blue-500 mb-3" size={24} />
              <span className="text-[10px] font-black uppercase text-slate-500 text-center">Tabuelan Tri[cite: 1]</span>
            </div>
          </div>
          <Layers className="absolute -bottom-10 -right-10 text-slate-800/10" size={240} />
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto p-20 text-center border-t border-slate-900/50">
        <div className="flex justify-center gap-12 mb-10">
          <a href="https://www.linkedin.com/in/cruzde/" className="text-slate-500 hover:text-cyan-500 flex flex-col items-center gap-2">
            <LinkedInIcon size={24}/>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">LinkedIn</span>
          </a>
          <a href="https://github.com/your-username" className="text-slate-500 hover:text-white flex flex-col items-center gap-2">
            <GithubIcon size={24}/>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">GitHub</span>
          </a>
          <a href="Darwin Cruz_Resume_04282026.pdf" className="text-slate-500 hover:text-blue-500 flex flex-col items-center gap-2">
            <ExternalLink size={24}/>
            <span className="text-[10px] font-black uppercase tracking-widest text-white/50">Full CV[cite: 1]</span>
          </a>
        </div>
        <p className="text-slate-600 text-[9px] font-mono tracking-[0.6em] uppercase">Mindset {'>'} Skillset {'>'} Toolset // Darwin Cruz // 2026</p>
      </footer>
    </div>
  );
}