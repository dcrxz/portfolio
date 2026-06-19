import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-brand-background text-brand-text font-body font-normal text-base antialiased selection:bg-brand-primary selection:text-brand-background">
      
      {/* SYSTEM HUD / NAVIGATION PANEL */}
      <nav className="sticky top-0 z-50 bg-brand-background/80 backdrop-blur-md border-b border-neutral-900 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center font-mono text-sm">
          <span className="text-brand-primary font-bold tracking-wider">// CRXZ.SYS // SYSTEM ACTIVE</span>
          <div className="hidden md:flex space-x-8 text-neutral-400">
            <a href="#overview" className="hover:text-brand-primary transition-colors">01. OVERVIEW</a>
            <a href="#pipeline" className="hover:text-brand-primary transition-colors">02. PIPELINES</a>
            <a href="#creative" className="hover:text-brand-primary transition-colors">03. CREATIVE REPO</a>
            <a href="#metrics" className="hover:text-brand-primary transition-colors">04. METRICS</a>
          </div>
          <a href="#contact" className="border border-brand-primary/30 px-3 py-1 rounded text-brand-primary hover:bg-brand-primary/10 transition-all text-xs font-bold font-mono">
            CONNECT
          </a>
        </div>
      </nav>

      {/* MAIN CONTAINER MATRIX */}
      <main className="max-w-5xl mx-auto px-6 space-y-24 py-16">

        {/* SECTION 01: HERO / EXECUTIVE SUMMARY PROFILE */}
        <section id="overview" className="pt-8 space-y-8">
          <header className="space-y-4">
            <div className="text-brand-primary font-mono text-sm tracking-widest uppercase">
              LIVE DEPLOYMENT // SYSTEM: ACTIVE
            </div>
            <h1 className="text-5xl font-heading font-bold tracking-tight text-white md:text-6xl">
              Darwin Ernest Cruz
            </h1>
            <p className="text-xl font-heading font-bold text-neutral-400 tracking-tight max-w-2xl">
              AI Ad Creative Producer Portfolio
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-sm font-mono text-brand-accent uppercase tracking-widest">
                [01 / EXECUTIVE SUMMARY]
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                High-velocity Lead Specialist in Learning Innovation &amp; Technology, merging a technical 
                infrastructure background (BS IT) with behavioral psychology and instructional science to 
                architect scalable digital systems. Instead of treating creative output as an &quot;art project,&quot; 
                my current role focuses on engineering high-volume, automated workflows that map directly to 
                human behavior and engagement metrics.
              </p>
            </div>
            
            <div className="bg-neutral-900/40 p-6 rounded-lg border border-brand-secondary/30 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-sm font-mono text-brand-primary uppercase tracking-widest mb-4">
                  ACTIVE ROUTING
                </h3>
                <p className="text-sm text-neutral-400">Target Output: High-Volume Direct Response</p>
                <p className="text-sm text-neutral-400">Framework: Agile Systems R&D</p>
              </div>
              <a 
                href="#contact" 
                className="mt-6 inline-block text-center text-sm font-mono font-bold bg-brand-secondary hover:bg-brand-primary hover:text-brand-background text-white py-3 px-4 rounded transition-all duration-200"
              >
                INITIALIZE CONNECTION
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 02: TECHNICAL PIPELINES */}
        <section id="pipeline" className="border-t border-neutral-900 pt-16 space-y-12">
          <div className="space-y-2">
            <div className="text-sm font-mono text-brand-accent uppercase tracking-widest">
              [02 / AUTOMATED TECHNICAL PIPELINES]
            </div>
            <h2 className="text-3xl font-heading font-bold text-white">The Production Engine Architecture</h2>
            <p className="text-sm text-neutral-400 max-w-2xl">
              Turn any business website URL into a complete social media ad campaign in 5-10 minutes. This pipeline instantly extracts business metrics and maps creative outputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="space-y-2 border-l-2 border-brand-secondary pl-4 bg-neutral-900/10 p-4 rounded-r">
              <div className="text-sm font-mono text-brand-primary">STEP 01</div>
              <h3 className="font-heading font-bold text-white text-base">The Grabber (Python script)</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">System-level scraping layer configured to automatically scrape targets and clean core structural assets.</p>
            </div>
            <div className="space-y-2 border-l-2 border-brand-secondary pl-4 bg-neutral-900/10 p-4 rounded-r">
              <div className="text-sm font-mono text-brand-primary">STEP 02</div>
              <h3 className="font-heading font-bold text-white text-base">The Brain (AI Briefing)</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Algorithmic ingestion phase handling context generation, strategic angles, and hook profiling models.</p>
            </div>
            <div className="space-y-2 border-l-2 border-brand-secondary pl-4 bg-neutral-900/10 p-4 rounded-r">
              <div className="text-sm font-mono text-brand-primary">STEP 03</div>
              <h3 className="font-heading font-bold text-white text-base">The Factory (Asset Production)</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">High-volume generative processing unit spitting out synchronized ad concepts across platform sizes.</p>
            </div>
          </div>
        </section>

        {/* SECTION 03: VERIFIED CREATIVE REPO */}
        <section id="creative" className="border-t border-neutral-900 pt-16 space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-brand-accent uppercase tracking-widest">
              [03 / VERIFIED CREATIVE OUTPUT]
            </h2>
            <p className="text-sm text-neutral-400">Live background loop rendering arrays directly from local public compilation caches.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-neutral-900/20 border border-neutral-900 rounded-lg p-4 space-y-4">
              <div className="aspect-[9/16] bg-brand-background rounded-lg overflow-hidden border border-brand-secondary/20 relative">
                <video 
                  src="/videos/ugc-video-1.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">UGC Video 1</h4>
                <p className="text-sm text-neutral-400 mt-1">10-second direct-response ad optimized for short-form platforms.</p>
              </div>
            </div>

            <div className="bg-neutral-900/20 border border-neutral-900 rounded-lg p-4 space-y-4">
              <div className="aspect-[9/16] bg-brand-background rounded-lg overflow-hidden border border-brand-secondary/20 relative">
                <video 
                  src="/videos/ugc-video-2.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">UGC Video 2</h4>
                <p className="text-sm text-neutral-400 mt-1">Multiple format user-generated content asset configurations.</p>
              </div>
            </div>

            <div className="bg-neutral-900/20 border border-neutral-900 rounded-lg p-4 space-y-4">
              <div className="aspect-[9/16] bg-brand-background rounded-lg overflow-hidden border border-brand-secondary/20 relative">
                <video 
                  src="/videos/product-focus.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-heading font-bold text-white text-base">10-Second Product Video</h4>
                <p className="text-sm text-neutral-400 mt-1">Hyper-realistic product macro focus blended into native TikTok interface grids.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="text-sm font-mono text-brand-primary mb-4">CHILI CHEWS HOOK MATRIX TESTING</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-neutral-900/40 border border-neutral-900 rounded">
                <span className="text-sm font-mono bg-neutral-800 text-brand-primary px-2 py-0.5 rounded uppercase">Value Prop Hook</span>
                <p className="text-sm mt-3 text-neutral-300 italic">&quot;Sweet. Sour. Heat. 🌶️ Every single Chili Chew is a wild flavor journey packed with real chili, citrus, and chamoy. Build your box today!&quot;</p>
              </div>
              <div className="p-5 bg-neutral-900/40 border border-neutral-900 rounded">
                <span className="text-sm font-mono bg-neutral-800 text-brand-accent px-2 py-0.5 rounded uppercase">Painpoint Hook</span>
                <p className="text-sm mt-3 text-neutral-300 italic">&quot;Bored of basic, one-note candy? Grandma’s snacks are a total snooze fest. Upgrade your stash to the real chili kick of Chili Chews.&quot;</p>
              </div>
              <div className="p-5 bg-neutral-900/40 border border-neutral-900 rounded">
                <span className="text-sm font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded uppercase">Curiosity Hook</span>
                <p className="text-sm mt-3 text-neutral-300 italic">&quot;It starts sweet, turns sour, then hits with a tingly chili kick that lingers. Ready for a gummy candy that hits completely different?&quot;</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: PERFORMANCE SPECTRUM */}
        <section id="metrics" className="border-t border-neutral-900 pt-16 space-y-12">
          <div className="space-y-2">
            <span className="text-sm font-mono text-brand-accent uppercase tracking-widest">[04 / SYSTEM PERFORMANCE METRICS]</span>
            <h2 className="text-3xl font-heading font-bold text-white">Verified Infrastructure Analytics</h2>
          </div>

          <div className="overflow-x-auto border border-neutral-900 rounded-lg bg-neutral-900/10">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-neutral-900 bg-neutral-900/50 font-mono text-neutral-400">
                  <th className="p-4 font-bold text-brand-primary">SYSTEM PARAMETER</th>
                  <th className="p-4 font-bold">BASELINE PROCESS</th>
                  <th className="p-4 font-bold text-brand-accent">AUTOMATED TARGET</th>
                  <th className="p-4 font-bold">NET VARIANCE RESULT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-900 font-mono text-neutral-300">
                <tr className="hover:bg-neutral-900/30 transition-colors">
                  <td className="p-4 font-bold text-white">Ad Content Variation Volume</td>
                  <td className="p-4">Manual Custom Builds</td>
                  <td className="p-4 text-brand-accent">Synchronized Bot Arrays</td>
                  <td className="p-4 text-brand-primary font-bold">+600% Acceleration</td>
                </tr>
                <tr className="hover:bg-neutral-900/30 transition-colors">
                  <td className="p-4 font-bold text-white">Data Ingestion Operational Errors</td>
                  <td className="p-4">Standard Manual Entry</td>
                  <td className="p-4 text-brand-accent">Algorithmic Ingestion Layer</td>
                  <td className="p-4 text-emerald-400 font-bold">-90% Mitigation</td>
                </tr>
                <tr className="hover:bg-neutral-900/30 transition-colors">
                  <td className="p-4 font-bold text-white">Annual Operational ROI</td>
                  <td className="p-4">Segmented Legacy Systems</td>
                  <td className="p-4 text-brand-accent">Unified Automation Matrix</td>
                  <td className="p-4 text-brand-primary font-bold">+$35K Secure Savings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 05: FOOTER */}
        <footer id="contact" className="border-t border-neutral-900 pt-16 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-heading font-bold text-white">Let&apos;s Build the Machine</h2>
            <p className="text-sm text-neutral-400 font-mono">Let&apos;s talk about automating your creative pipeline.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="mailto:dcrxz@pm.me"
              className="font-mono text-sm bg-brand-primary text-brand-background px-6 py-3 rounded font-bold hover:bg-white transition-colors duration-150"
            >
              EXECUTE MAIL_ROUTING
            </a>
            <a 
              href="https://dcrxz.github.io/portfolio/Darwin_Cruz_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-sm bg-neutral-900 border border-neutral-800 text-neutral-300 px-6 py-3 rounded font-bold hover:bg-neutral-800 transition-colors duration-150"
            >
              PULL RESUME_MANIFEST
            </a>
          </div>
          
          <p className="text-sm font-mono text-neutral-700 pt-16">
            © 2026 CRXZ SYSTEMS INC // CORE OVERRIDE ENGAGED
          </p>
        </footer>

      </main>
    </div>
  );
}