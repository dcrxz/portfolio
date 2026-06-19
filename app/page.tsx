import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#6bebff] selection:text-[#050505] font-sans">
      
      {/* FIXED REALTIME-STYLE HEADER HUD */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#050505] border-b border-white/10 px-6 h-[40px] flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          
          {/* BRAND AXIS: IMAGE LOGO INTEGRATION */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/portfolio/images/4x4-logo.png"
              alt="CRXZ System Logo" 
              className="w-5 h-5 rounded object-cover border border-white/10"
            />
            <span className="text-white font-bold tracking-tight text-sm">
              Darwin Ernest Cruz
            </span>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="flex items-center space-x-8 text-xs font-medium tracking-wide">
            <div className="hidden md:flex space-x-6 text-neutral-400">
              <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              <a href="#pipeline" className="hover:text-white transition-colors">Pipelines</a>
              <a href="#creative" className="hover:text-white transition-colors">Creative</a>
              <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
            </div>
            
            {/* CALL TO ACTION BUTTON */}
            <a 
              href="#contact" 
              className="bg-[#6bebff] text-[#050505] px-3 py-1 rounded text-xs font-bold hover:bg-white transition-colors"
            >
              Connect
            </a>
          </div>

        </div>
      </nav>

      {/* MAIN MODULAR CANVAS GRID */}
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 space-y-20">

        {/* SECTION 01: HERO MODULE */}
        <section id="overview" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* LEFT PANEL */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Engineering high-volume, behavior-mapped creatives.
            </h1>
            <p className="text-lg text-neutral-400 max-w-xl leading-relaxed">
              Lead Specialist in Learning Innovation &amp; Technology matching technical infrastructure with learning science to build automated ad asset generation matrices.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#pipeline" className="border border-white/10 px-5 py-2.5 rounded text-sm font-semibold hover:bg-white/5 transition-colors">
                View Architecture
              </a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-5 bg-neutral-900/20 border border-white/10 p-8 rounded-xl flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-mono text-[#6bebff] tracking-widest uppercase">// DEPLOYMENT_CONFIG</div>
              <div className="space-y-2 text-sm text-neutral-300">
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Target:</span> <span className="text-white font-medium">Direct Response Output</span></p>
                <p className="flex justify-between border-b border-white/5 pb-2"><span>Framework:</span> <span className="text-white font-medium">Agile Systems R&amp;D</span></p>
                <p className="flex justify-between pb-2"><span>Core Stack:</span> <span className="text-white font-medium">Next.js / Python / Vercel</span></p>
              </div>
            </div>
            <a href="#contact" className="w-full text-center bg-neutral-800 hover:bg-neutral-700 text-white font-semibold py-3 px-4 rounded text-sm transition-colors">
              Initialize System Connection
            </a>
          </div>

        </section>

        {/* SECTION 02: TECHNICAL PROCESS MODULE */}
        <section id="pipeline" className="border-t border-white/10 pt-16 space-y-12">
          
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#f9cefb] tracking-widest uppercase">System Automation</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Automated Campaign Pipelines</h2>
            <p className="text-sm text-neutral-400 max-w-xl">Turning target data arrays into complete social media ad configurations in under 10 minutes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* CARD 01 */}
            <div className="p-6 bg-neutral-900/10 border border-white/10 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono text-[#6bebff]">01 / INGESTION</div>
              <h3 className="font-bold text-white text-base">The Grabber Module</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Python scraping system engineered to automatically extract business parameters and sanitize layout metadata.</p>
            </div>
            {/* CARD 02 */}
            <div className="p-6 bg-neutral-900/10 border border-white/10 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono text-[#578cd6]">02 / PROCESSING</div>
              <h3 className="font-bold text-white text-base">The Context Brain</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Algorithmic evaluation layer running targeted demographic validation and direct-response angle mapping.</p>
            </div>
            {/* CARD 03 */}
            <div className="p-6 bg-neutral-900/10 border border-white/10 rounded-xl space-y-3 hover:border-white/20 transition-colors">
              <div className="text-xs font-mono text-[#f9cefb]">03 / COMPILATION</div>
              <h3 className="font-bold text-white text-base">The Production Factory</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">High-volume generative array outputting clean, synchronized asset variations across cross-platform dimensions.</p>
            </div>
          </div>

        </section>

        {/* SECTION 03: CREATIVE STORAGE GRID */}
        <section id="creative" className="border-t border-white/10 pt-16 space-y-12">
          
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#f9cefb] tracking-widest uppercase">Verified Deployments</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">High-Volume Creative Vault</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* UGC 1 CARD */}
            <div className="bg-neutral-900/10 border border-white/10 rounded-xl p-4 space-y-4">
              <div className="aspect-[9/16] bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative">
                <video src="/videos/ugc-video-1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-sm">UGC Creative Asset 1</h4>
                <p className="text-xs text-neutral-400 mt-1">10-second direct-response vertical video variation loop.</p>
              </div>
            </div>

            {/* UGC 2 CARD */}
            <div className="bg-neutral-900/10 border border-white/10 rounded-xl p-4 space-y-4">
              <div className="aspect-[9/16] bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative">
                <video src="/videos/ugc-video-2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-sm">UGC Creative Asset 2</h4>
                <p className="text-xs text-neutral-400 mt-1">Algorithmic format variation structure tracking audience engagement metrics.</p>
              </div>
            </div>

            {/* MACRO VIDEO CARD */}
            <div className="bg-neutral-900/10 border border-white/10 rounded-xl p-4 space-y-4">
              <div className="aspect-[9/16] bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative">
                <video src="/videos/product-focus.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-sm">Macro Product Creative</h4>
                <p className="text-xs text-neutral-400 mt-1">Hyper-focused product frame variations mapped straight to user conversion arrays.</p>
              </div>
            </div>
          </div>

        </section>

        {/* SECTION 04: METRICS SPECTROMETER DATA GRID */}
        <section id="metrics" className="border-t border-white/10 pt-16 space-y-12">
          
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#f9cefb] tracking-widest uppercase">Infrastructure Analytics</span>
            <h2 className="text-3xl font-bold tracking-tight text-white">Verified Performance Matrices</h2>
          </div>

          <div className="overflow-x-auto border border-white/10 rounded-xl bg-neutral-900/10">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-neutral-900/50 text-neutral-400 font-mono">
                  <th className="p-4 font-bold text-[#6bebff]">System Parameter</th>
                  <th className="p-4 font-bold">Baseline Process</th>
                  <th className="p-4 font-bold text-[#f9cefb]">Automated Target</th>
                  <th className="p-4 font-bold">Net Variance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-neutral-300 font-mono">
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">Ad Content Variation Volume</td>
                  <td className="p-4">Manual Custom Builds</td>
                  <td className="p-4 text-[#f9cefb]">Synchronized Bot Arrays</td>
                  <td className="p-4 text-[#6bebff] font-bold">+600% Acceleration</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">Data Ingestion Operational Errors</td>
                  <td className="p-4">Standard Manual Entry</td>
                  <td className="p-4 text-[#f9cefb]">Algorithmic Ingestion Layer</td>
                  <td className="p-4 text-emerald-400 font-bold">-90% Mitigation</td>
                </tr>
                <tr className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-4 font-bold text-white">Annual Operational ROI</td>
                  <td className="p-4">Segmented Legacy Systems</td>
                  <td className="p-4 text-[#f9cefb]">Unified Automation Matrix</td>
                  <td className="p-4 text-[#6bebff] font-bold">+$35K Secure Savings</td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>

        {/* SECTION 05: SYSTEM FOOTER */}
        <footer id="contact" className="border-t border-white/10 pt-16 text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white">Let&apos;s Build the Machine</h2>
          <p className="text-sm text-neutral-400 font-mono max-w-sm mx-auto">Initialize automated matrix pipelines and strategic creative frameworks.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="mailto:dcrxz@pm.me" className="bg-[#6bebff] text-[#050505] px-6 py-3 rounded font-bold hover:bg-white transition-colors text-sm font-mono">
              EXECUTE MAIL_ROUTING
            </a>
            <a href="https://dcrxz.github.io/portfolio/Darwin_Cruz_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-neutral-900 border border-white/10 text-neutral-300 px-6 py-3 rounded font-bold hover:bg-neutral-800 transition-colors text-sm font-mono">
              PULL RESUME_MANIFEST
            </a>
          </div>
          <p className="text-xs font-mono text-neutral-600 pt-12">
            © 2026 CRXZ SYSTEMS INC // ENGINE ONLINE
          </p>
        </footer>

      </main>
    </div>
  );
}