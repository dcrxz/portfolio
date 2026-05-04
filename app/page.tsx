import React from 'react';
import { Cpu, Database, Award, Zap, ShieldCheck, TrendingUp, Layers, MousePointer2 } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      {/* Stealth Navigation */}
      <nav className="max-w-6xl mx-auto p-8 flex justify-between items-center">
        <div className="font-mono text-[10px] tracking-[0.3em] text-slate-500 uppercase">
          Architecture // Innovation // Strategy
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
          <a href="#metrics" className="hover:text-cyan-400 transition-colors">Impact</a>
          <a href="#lab" className="hover:text-cyan-400 transition-colors">Lab</a>
        </div>
      </nav>

      {/* Hero: Authority & Vision */}
      <header className="max-w-6xl mx-auto py-24 px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-800 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-10">
          <Award size={14} /> Brandon Hall Excellence Award Contributor
        </div>
        <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-10 leading-[0.85]">
          Darwin <br /><span className="text-slate-800">Cruz.</span>
        </h1>
        <p className="text-2xl md:text-3xl text-slate-400 max-w-3xl leading-relaxed">
          Architecting AI-driven learning ecosystems where <span className="text-white font-semibold text-glow">Learning Science leads</span> and technology follows.
        </p>
      </header>

      {/* Strategic Impact: The ROI Dashboard */}
      <section id="metrics" className="max-w-6xl mx-auto px-8 mb-40">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-cyan-500 pl-6">Core Performance Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Bot Production', val: '600%+', desc: 'Scale Growth' },
            { label: 'Annual ROI', val: '$35K', desc: 'Efficiency Gains' },
            { label: 'Manual Errors', val: '-90%', desc: 'Via API Design' },
            { label: 'ID Lifecycle', val: '-300%', desc: 'Acceleration' }
          ].map((s, i) => (
            <div key={i} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500"></div>
              <div className="relative p-8 bg-slate-900/40 border border-slate-800 rounded-3xl transition-all h-full">
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{s.val}</div>
                <div className="text-[10px] uppercase tracking-widest text-cyan-500 font-black mb-1">{s.label}</div>
                <div className="text-[10px] text-slate-500 font-medium tracking-tight">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Innovation Lab: Case Studies */}
      <section id="lab" className="max-w-6xl mx-auto px-8 space-y-8 mb-40">
        <h2 className="text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black mb-12 border-l-2 border-purple-500 pl-6">Innovation Lab</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-12 bg-slate-900/60 border border-slate-800 rounded-[3rem] group hover:border-cyan-500/30 transition-all">
            <Cpu className="text-cyan-400 mb-8 group-hover:rotate-12 transition-transform" size={44} />
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">GenAI Leadership</h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              Managed the expansion of a bot framework from 6 to 40+ bots. Developed **Curriculum Wizard 2.0** and 3-tier models for conversational AI to modernize legacy learning workflows.
            </p>
            <div className="flex gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <span>#PromptStrategy</span> <span>#Scale</span> <span>#ConversationalUI</span>
            </div>
          </div>
          
          <div className="p-12 bg-slate-900/60 border border-slate-800 rounded-[3rem] group hover:border-purple-500/30 transition-all">
            <Database className="text-purple-400 mb-8 group-hover:rotate-12 transition-transform" size={44} />
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">System Engineering</h3>
            <p className="text-slate-400 leading-relaxed text-lg mb-8">
              Engineered a 3-step API integration (Auth/Fetch/Assign) resulting in a **111% increase** in coaching frequency. Guided the migration governance from **Bright LXP to Zenarate**.
            </p>
            <div className="flex gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-tighter">
              <span>#APIArchitecture</span> <span>#Governance</span> <span>#Automation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Wildcard Section: Human-Centric Innovation */}
      <section className="max-w-6xl mx-auto px-8 mb-40">
        <div className="p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] text-center">
          <Layers className="mx-auto text-slate-500 mb-6" size={32} />
          <h3 className="text-2xl font-bold text-white mb-4 italic">The Ecosystem Philosophy</h3>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Technology should be invisible. My work focuses on creating frictionless paths between complex data systems and the human learners who use them.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto p-20 text-center border-t border-slate-900/50">
        <p className="text-slate-600 text-xs font-mono tracking-[0.5em] uppercase">
          Mindset {'>'} Skillset {'>'} Toolset // 2026
        </p>
      </footer>
    </div>
  );
}