import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#6bebff] selection:text-[#050505] font-sans">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* GLOBAL HEADER PANEL: SOLID & FIXED CEILING BOUNDARY      */}
      {/* ──────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#050505] border-b border-white/10 px-6 h-[40px] flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          
          {/* BRAND AXIS: IMAGE LOGO INTEGRATION */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <img 
              src="/images/4x4-logo.png" 
              alt="DCRXZ"
              width={20}
              height={20}
              className="w-5 h-5 max-w-[20px] max-h-[20px] rounded object-cover border border-white/10"
            />
            <span className="text-white font-bold tracking-tight text-sm">
              Darwin Ernest Cruz
            </span>
          </div>

          {/* STATIC NAVIGATION SECTION MAP */}
          <div className="flex items-center text-xs font-medium tracking-wide">
            <div className="flex items-center space-x-4 text-neutral-400">
              
              <a href="#overview" className="hover:text-white transition-colors">Overview</a>
              <span className="px-3 text-neutral-700">|</span>

              <a href="#pipeline" className="hover:text-white transition-colors">Pipelines</a>
              <span className="px-3 text-neutral-700">|</span>

              <a href="#creative" className="hover:text-white transition-colors">Creative</a>
              <span className="px-3 text-neutral-700">|</span>

              <a href="#metrics" className="hover:text-white transition-colors">Metrics</a>
              <span className="px-3 text-neutral-700">|</span>

              <a href="#contact" className="hover:text-white transition-colors mr-4">Connect</a>
            </div>
          </div>

        </div>
      </nav>
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* MAIN CONTAINER LAYOUT: SITE FRAME MATRIX                 */}
      {/* ──────────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24 space-y-20">

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 01: HERO MODULE (1-COLUMN STRUCTURE)             */}
        {/* ──────────────────────────────────────────────────────── */}
        <section className="max-w-3xl mx-auto text-center space-y-6 py-16">
          <h2 className="text-4xl font-bold text-white">Engineering high-volume, behavior-mapped creatives.</h2>
          <p className="text-neutral-400 max-w-xl mx-auto">Lead Specialist in Learning Innovation &amp; Technology matching technical infrastructure with learning science to build automated ad asset generation matrices.</p>
        </section>

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 02: TECHNICAL PROCESS MODULE                     */}
        {/* ──────────────────────────────────────────────────────── */}
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

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 03: CREATIVE STORAGE GRID (3-COLUMN STRUCTURE)   */}
        {/* ──────────────────────────────────────────────────────── */}
        <section id="creative" className="border-t border-white/10 pt-16 space-y-12">
          
          <div className="space-y-2">
            <div className="text-xs font-mono text-[#f9cefb] tracking-widest uppercase">Verified Deployments</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">High-Volume Creative Vault</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* VIDEO COLUMN 01 */}
            <div className="bg-neutral-900/10 border border-white/10 rounded-xl p-4 space-y-4">
              <div className="aspect-[9/16] bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative">
                <video src="/videos/ugc-video-1.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-sm">UGC Creative Asset 1</h4>
                <p className="text-xs text-neutral-400 mt-1">10-second direct-response vertical video variation loop.</p>
              </div>
            </div>

            {/* VIDEO COLUMN 02 */}
            <div className="bg-neutral-900/10 border border-white/10 rounded-xl p-4 space-y-4">
              <div className="aspect-[9/16] bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative">
                <video src="/videos/ugc-video-2.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
              </div>
              <div className="px-1">
                <h4 className="font-bold text-white text-sm">UGC Creative Asset 2</h4>
                <p className="text-xs text-neutral-400 mt-1">Algorithmic format variation structure tracking audience engagement metrics.</p>
              </div>
            </div>

            {/* VIDEO COLUMN 03 */}
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

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 04: METRICS SPECTROMETER DATA GRID               */}
        {/* ──────────────────────────────────────────────────────── */}
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

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 05: SYSTEM FOOTER MODULE (2-COLUMN STRUCTURE)    */}
        {/* ──────────────────────────────────────────────────────── */}
        <footer id="contact" className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left">
          
          {/* COLUMN A: CONNECT INTERFACES */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white">Let&apos;s Build the Machine</h2>
              <p className="text-sm text-neutral-400 font-mono">Initialize automated matrix pipelines and strategic creative frameworks.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="mailto:dcrxz@pm.me" className="bg-[#6bebff] text-[#050505] px-6 py-3 rounded font-bold hover:bg-white transition-colors text-sm font-mono">
                EXECUTE MAIL_ROUTING
              </a>
              <a href="https://dcrxz.github.io/portfolio/Darwin_Cruz_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-neutral-900 border border-white/10 text-neutral-300 px-6 py-3 rounded font-bold hover:bg-neutral-800 transition-colors text-sm font-mono">
                PULL RESUME_MANIFEST
              </a>
            </div>
            <p className="text-xs font-mono text-neutral-600 pt-6">
              © 2026 Darwin Ernest Cruz | Portfolio v1.0
            </p>
          </div>

          {/* COLUMN B: PROFILE IMAGE BLOCK */}
          <div className="w-full max-w-[380px] mx-auto md:ml-auto aspect-square relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/10">
            <img 
              src="/images/profile-image.jpg" 
              alt="Darwin Ernest Cruz Portrait" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-95"
            />
          </div>

        </footer>

      </main>
    </div>
  );
}