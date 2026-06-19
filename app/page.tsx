import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-lime-500 selection:text-black">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* HERO SECTION                                             */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-16 border-b border-neutral-900">
        <header className="space-y-4">
          <p className="text-lime-400 font-mono text-sm tracking-widest uppercase">
            LIVE DEPLOYMENT // SYSTEM: ACTIVE
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white">
            Darwin Ernest Cruz
          </h1>
          <p className="text-xl md:text-2xl font-bold text-neutral-400 tracking-tight max-w-2xl">
            AI Ad Creative Producer Portfolio
          </p>
        </header>

        {/* OVERVIEW MODULE */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500">
              [01 / EXECUTIVE SUMMARY]
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              High-velocity Lead Specialist in Learning Innovation & Technology, merging a technical 
              infrastructure background (BS IT) with behavioral psychology and instructional science to 
              architect scalable digital systems. Instead of treating creative output as an &quot;art project,&quot; 
              my current role focuses on engineering high-volume, automated workflows that map directly to 
              human behavior and engagement metrics.
            </p>
          </div>
          
          {/* LOGISTICS CALLOUT */}
          <div className="bg-neutral-900/50 p-6 rounded-lg border border-neutral-900 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-mono text-neutral-500 mb-4">
                ACTIVE ROUTING
              </h3>
              <p className="text-sm text-neutral-400">Target Output: High-Volume Direct Response</p>
              <p className="text-sm text-neutral-400">Framework: Agile Systems R&D</p>
            </div>
            <a 
              href="#contact" 
              className="mt-6 inline-block text-center text-xs font-mono font-bold bg-neutral-800 hover:bg-lime-500 hover:text-black text-white py-3 px-4 rounded transition-all duration-200"
            >
              INITIALIZE CONNECTION
            </a>
          </div>
        </div>

        {/* RELEVANT ACHIEVEMENTS GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* METRIC CARD 1 */}
          <div className="p-6 bg-neutral-900/30 rounded-lg border border-neutral-900 space-y-3">
            <div className="text-3xl font-black text-lime-400 font-mono">+600%</div>
            <h3 className="font-bold text-white text-sm">Volume Acceleration</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Built automated bot production pipelines achieving 600% growth in content variation output, proving capacity for daily high-volume generation.
            </p>
          </div>

          {/* METRIC CARD 2 */}
          <div className="p-6 bg-neutral-900/30 rounded-lg border border-neutral-900 space-y-3">
            <div className="text-3xl font-black text-lime-400 font-mono">-90%</div>
            <h3 className="font-bold text-white text-sm">Error Mitigation & ROI</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Reduced manual operational entry errors by 90% while securing $35K+ annualized savings from a single pilot workflow implementation.
            </p>
          </div>

          {/* METRIC CARD 3 */}
          <div className="p-6 bg-neutral-900/30 rounded-lg border border-neutral-900 space-y-3">
            <div className="text-3xl font-black text-white font-mono">ELITE</div>
            <h3 className="font-bold text-lime-400 text-sm">Strategic Range</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Contributed directly to a Brandon Hall Excellence Award-winning project while maintaining scrappy, rapid agile R&D system testing.
            </p>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* PHILOSOPHY SECTION                                       */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-neutral-900 bg-neutral-950">
        <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500 mb-12">
          [02 / THE ARCHITECTURE MACHINE]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="text-xs font-mono text-lime-400">SUB-SYSTEM 01</div>
            <h3 className="text-2xl font-bold text-white">Human Behavior Engineering</h3>
            <p className="text-neutral-400 leading-relaxed">
              Direct-response advertising isn&apos;t an art project—it&apos;s human behavior engineering. I combine a technical background in IT with behavioral science to build rigorous creative testing loops.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-xs font-mono text-lime-400">SUB-SYSTEM 02</div>
            <h3 className="text-2xl font-bold text-white">The Production Engine</h3>
            <p className="text-neutral-400 leading-relaxed">
              Applying agile software sprint structures to asset generation, utilizing a synchronized AI matrix to build, test, and kill creative variations before the budget burns.
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* CREATIVE SAMPLES GRID                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-neutral-900">
        <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500 mb-12">
          [03 / VERIFIED CREATIVE OUTPUT]
        </h2>
        
        {/* VIDEO ASSETS SUB-GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* ASSET CONTAINER 1 */}
          <div className="bg-neutral-900/20 border border-neutral-900 rounded-lg p-4 space-y-4">
            <div className="aspect-[9/16] bg-neutral-900 rounded flex items-center justify-center border border-neutral-800">
              <span className="text-xs font-mono text-neutral-600">[ VIDEO SLOT: UGC VIDEO 1 ]</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">UGC Video 1</h4>
              <p className="text-xs text-neutral-400 mt-1">10-second direct-response ad optimized for short-form platforms.</p>
            </div>
          </div>

          {/* ASSET CONTAINER 2 */}
          <div className="bg-neutral-900/20 border border-neutral-900 rounded-lg p-4 space-y-4">
            <div className="aspect-[9/16] bg-neutral-900 rounded flex items-center justify-center border border-neutral-800">
              <span className="text-xs font-mono text-neutral-600">[ VIDEO SLOT: UGC VIDEO 2 ]</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">UGC Video 2</h4>
              <p className="text-xs text-neutral-400 mt-1">Multiple format user-generated content asset configurations.</p>
            </div>
          </div>

          {/* ASSET CONTAINER 3 */}
          <div className="bg-neutral-900/20 border border-neutral-900 rounded-lg p-4 space-y-4">
            <div className="aspect-[9/16] bg-neutral-900 rounded flex items-center justify-center border border-neutral-800">
              <span className="text-xs font-mono text-neutral-600">[ VIDEO SLOT: PRODUCT VIDEO ]</span>
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">10-Second Product Video</h4>
              <p className="text-xs text-neutral-400 mt-1">Hyper-realistic product macro focus blended into native TikTok interface grids.</p>
            </div>
          </div>
        </div>

        {/* STATIC AD HOOKS MATRIX */}
        <div className="mt-12 space-y-4">
          <h3 className="text-sm font-mono text-neutral-400 mb-4">CHILI CHEWS HOOK MATRIX TESTING</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* HOOK VARIATION 1 */}
            <div className="p-5 bg-neutral-900/40 border border-neutral-900 rounded">
              <span className="text-[10px] font-mono bg-lime-950 text-lime-400 px-2 py-0.5 rounded uppercase">Value Prop Hook</span>
              <p className="text-sm mt-3 text-neutral-300 italic font-serif">&quot;Sweet. Sour. Heat. 🌶️ Every single Chili Chew is a wild flavor journey packed with real chili, citrus, and chamoy. Build your box today!&quot;</p>
            </div>
            {/* HOOK VARIATION 2 */}
            <div className="p-5 bg-neutral-900/40 border border-neutral-900 rounded">
              <span className="text-[10px] font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded uppercase">Painpoint Hook</span>
              <p className="text-sm mt-3 text-neutral-300 italic font-serif">&quot;Bored of basic, one-note candy? Grandma’s snacks are a total snooze fest. Upgrade your stash to the real chili kick of Chili Chews.&quot;</p>
            </div>
            {/* HOOK VARIATION 3 */}
            <div className="p-5 bg-neutral-900/40 border border-neutral-900 rounded">
              <span className="text-[10px] font-mono bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded uppercase">Curiosity Hook</span>
              <p className="text-sm mt-3 text-neutral-300 italic font-serif">&quot;It starts sweet, turns sour, then hits with a tingly chili kick that lingers. Ready for a gummy candy that hits completely different?&quot;</p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* PIPELINE ARCHITECTURE                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-neutral-900 bg-neutral-950/40">
        <h2 className="text-xs uppercase tracking-widest font-mono text-neutral-500 mb-4">
          [04 / AUTOMATED TECHNICAL PIPELINES]
        </h2>
        <p className="text-sm text-neutral-400 max-w-2xl mb-12">
          Turn any business website URL into a complete social media ad campaign in 5-10 minutes. This pipeline instantly extracts business metrics and maps creative outputs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="space-y-2 border-l-2 border-neutral-800 pl-4">
            <div className="text-xs font-mono text-lime-400">STEP 01</div>
            <h3 className="font-bold text-white text-base">The Grabber (Python script)</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">System-level scraping layer configured to automatically scrape targets and clean core structural assets.</p>
          </div>
          <div className="space-y-2 border-l-2 border-neutral-800 pl-4">
            <div className="text-xs font-mono text-lime-400">STEP 02</div>
            <h3 className="font-bold text-white text-base">The Brain (AI Briefing)</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">Algorithmic ingestion phase handling context generation, strategic angles, and hook profiling models.</p>
          </div>
          <div className="space-y-2 border-l-2 border-neutral-800 pl-4">
            <div className="text-xs font-mono text-lime-400">STEP 03</div>
            <h3 className="font-bold text-white text-base">The Factory (Asset Production)</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">High-volume generative processing unit spitting out synchronized ad concepts across platform sizes.</p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────── */}
      {/* FOOTER & TERMINAL ACTION NODE                            */}
      {/* ──────────────────────────────────────────────────────── */}
      <footer id="contact" className="max-w-5xl mx-auto px-6 py-24 text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-white">Let&apos;s Build the Machine</h2>
          <p className="text-sm text-neutral-400 font-mono">Let&apos;s talk about automating your creative pipeline.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a 
            href="mailto:dcrxz@pm.me"
            className="font-mono text-xs bg-lime-500 text-black px-6 py-3 rounded font-bold hover:bg-white transition-colors duration-150"
          >
            EXECUTE MAIL_ROUTING
          </a>
          <a 
            href="https://dcrxz.github.io/portfolio/Darwin_Cruz_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-mono text-xs bg-neutral-900 border border-neutral-800 text-neutral-300 px-6 py-3 rounded font-bold hover:bg-neutral-800 transition-colors duration-150"
          >
            PULL RESUME_MANIFEST
          </a>
        </div>
        
        <p className="text-[10px] font-mono text-neutral-700 pt-16">
          © 2026 CRXZ SYSTEMS INC // CORE OVERRIDE ENGAGED
        </p>
      </footer>

    </div>
  );
}