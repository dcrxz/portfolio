export default function Portfolio() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30 bg-[#111827]">
      <ScrollSidebar />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel h-20 flex items-center border-b border-gray-800 bg-[#111827]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center px-6 lg:px-24">
          <div className="font-black tracking-tighter text-xl text-white uppercase">Darwin Ernest Cruz.</div>
          <div className="hidden md:flex gap-10 items-center text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            <a href="#hero" className="hover:text-cyan-400 transition-colors">Start</a>
            <a href="#case-studies" className="hover:text-cyan-400 transition-colors">Cases</a>
            <a href="#expertise" className="hover:text-cyan-400 transition-colors">Expertise</a>
            <a href="#work-with-me" className="text-cyan-400 font-black">Work with me</a>
          </div>
        </div>
      </nav>

      {/* RESTRUCTURED HERO SECTION: Two Columns */}
      <header id="hero" className="pt-40 pb-24 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Column 1: Text Content */}
          <div className="space-y-8">
            <div className="badge inline-block bg-cyan-600/10 text-cyan-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Brandon Hall Excellence Award Contributor
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-white">
              Architecting AI-driven learning ecosystems where <span className="text-cyan-400">Learning Science leads.</span>
            </h1>
            <div>
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
          </div>

          {/* Column 2: Image Content (Aligned to Hero) */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative p-1 rounded-2xl bg-gradient-to-br from-cyan-400 to-transparent shadow-2xl shadow-cyan-400/20">
              <Image
                // RENAMED FILE: Please rename "bring humanity to business.jpg" to "humanity-business.jpg"
                src="/humanity-business.jpg" 
                alt="Bringing Humanity to Business"
                width={400}
                height={400}
                unoptimized={true} 
                className="rounded-xl object-cover border-2 border-white/5"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto space-y-40 pb-40 px-6 lg:px-24">
        {/* About Section - Brief Intro */}
        <section id="about" className="py-20 border-t border-gray-800">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-extrabold tracking-tight text-white mb-6">
              Leading <span className="text-cyan-400">Learning Innovation</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Lead Specialist at Teletech Inc., merging DOST scholarship background in IT with a strategic mindset to pilot <span className="font-semibold text-white">agentic AI systems</span>. Driven by the mission of bringing human insight to automated business solutions.
            </p>
          </div>
          
          {/* Metrics Moved Here for Layout Balance */}
          <div id="metrics" className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
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
        </section>

        {/* ... (Keep the rest of your sections like Case Studies, Demos, etc.) ... */}

      </main>
    </div>
  );
}