import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#6bebff] selection:text-[#050505] font-sans overflow-hidden m-0 p-0">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* GLOBAL HEADER PANEL                                      */}
      {/* ──────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#050505] border-b border-white/10 px-6 h-[40px] flex items-center">
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          
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
            <div className="flex items-center text-neutral-400">
              <a href="#overview" className="hover:text-white transition-colors no-underline">&nbsp;&nbsp;Overview&nbsp;&nbsp;</a>
              <span className="text-neutral-700 select-none">|</span>

              <a href="#pipeline" className="hover:text-white transition-colors no-underline">&nbsp;&nbsp;Pipelines&nbsp;&nbsp;</a>
              <span className="text-neutral-700 select-none">|</span>

              <a href="#creative" className="hover:text-white transition-colors no-underline">&nbsp;&nbsp;Creative&nbsp;&nbsp;</a>
              <span className="text-neutral-700 select-none">|</span>

              <a href="#metrics" className="hover:text-white transition-colors no-underline">&nbsp;&nbsp;Metrics&nbsp;&nbsp;</a>
              <span className="text-neutral-700 select-none">|</span>

              <a href="#contact" className="hover:text-white transition-colors mr-2 no-underline">&nbsp;&nbsp;Connect&nbsp;&nbsp;</a>
            </div>
          </div>

        </div>
      </nav>
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* MAIN CONTAINER LAYOUT                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 space-y-20">

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 01: HERO MODULE (CENTERED 1-COLUMN)              */}
        {/* ──────────────────────────────────────────────────────── */}
        <section id="overview" className="max-w-3xl mx-auto text-center space-y-6 py-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Engineering high-volume, behavior-mapped creatives.
          </h1>
          <p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Lead Specialist in Learning Innovation &amp; Technology matching technical infrastructure with learning science to build automated ad asset generation matrices.
          </p>
          <div className="flex items-center justify-center space-x-4 pt-2">
            <a href="#pipeline" className="border border-white/10 px-5 py-2.5 rounded-lg font-semibold hover:bg-white/5 transition-colors">
              View Architecture
            </a>
          </div>
        </section>

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 02: TECHNICAL PROCESS MODULE                     */}
        {/* ──────────────────────────────────────────────────────── */}
        <section id="pipeline" className="border-t border-white/10 pt-16 space-y-12">
          
          <div className="space-y-2 text-center md:text-left">
            <div className="text-xs font-mono text-[#f9cefb] tracking-widest uppercase">System Automation</div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Automated Campaign Pipelines</h2>
            <p className="text-sm text-neutral-400 max-w-xl">Turning target data arrays into complete social media ad configurations in under 10 minutes.</p>
          </div>

          {/* GRID CONTROLLER: Explicitly sets 1 column on mobile, 3 columns on medium screens up */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch w-full">
            
            {/* CARD 01 */}
            <div className="bg-neutral-900/30 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-white/10 transition-colors h-full">
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#6bebff]">01 / INGESTION</div>
                <h3 className="font-bold text-white text-base">The Grabber Module</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">Python scraping system engineered to automatically extract business parameters and sanitize layout metadata.</p>
              </div>
            </div>
            
            {/* CARD 02 */}
            <div className="bg-neutral-900/30 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-white/10 transition-colors h-full">
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#578cd6]">02 / PROCESSING</div>
                <h3 className="font-bold text-white text-base">The Context Brain</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">Algorithmic evaluation layer running targeted demographic validation and direct-response angle mapping.</p>
              </div>
            </div>
            
            {/* CARD 03 */}
            <div className="bg-neutral-900/30 border border-white/5 p-8 rounded-xl flex flex-col justify-between hover:border-white/10 transition-colors h-full">
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#f9cefb]">03 / COMPILATION</div>
                <h3 className="font-bold text-white text-base">The Production Factory</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">High-volume generative array outputting clean, synchronized asset variations across cross-platform dimensions.</p>
              </div>
            </div>

          </div>
        </section>

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 03: CREATIVE STORAGE GRID                        */}
        {/* ──────────────────────────────────────────────────────── */}
        <section id="creative" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'block', width: '100%' }}>
          
          <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#f9cefb', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              VERIFIED DEPLOYMENTS
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#F5F5F5', letterSpacing: '-0.02em' }}>
              High-Volume Creative Vault
            </h2>
          </div>
          
          {/* THE GRID FLEX BOX MATRIX */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            width: '100%', 
            justifyContent: 'space-between' 
          }}>
            
            {/* COLUMN 01 */}
            <div style={{ 
              flex: '1 1 30%', 
              minWidth: '280px', 
              backgroundColor: 'rgba(245, 245, 245, 0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              boxSizing: 'border-box' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6bebff' }} />
                <h4 style={{ fontWeight: 'bold', color: '#F5F5F5', fontSize: '1rem', margin: 0 }}>UGC Creative Asset 1</h4>
              </div>
              {/* LANDSCAPE ASPECT RATIO CONTAINER */}
              <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#050505', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                <video src="/videos/ugc-video-1.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#a3a3a3', marginTop: '1rem', lineHeight: '1.4' }}>
                10-second direct-response landscape video variation loop.
              </p>
            </div>

            {/* COLUMN 02 */}
            <div style={{ 
              flex: '1 1 30%', 
              minWidth: '280px', 
              backgroundColor: 'rgba(245, 245, 245, 0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              boxSizing: 'border-box' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#578cd6' }} />
                <h4 style={{ fontWeight: 'bold', color: '#F5F5F5', fontSize: '1rem', margin: 0 }}>UGC Creative Asset 2</h4>
              </div>
              {/* LANDSCAPE ASPECT RATIO CONTAINER */}
              <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#050505', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                <video src="/videos/ugc-video-2.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#a3a3a3', marginTop: '1rem', lineHeight: '1.4' }}>
                Algorithmic format variation structure tracking audience engagement metrics.
              </p>
            </div>

            {/* COLUMN 03 */}
            <div style={{ 
              flex: '1 1 30%', 
              minWidth: '280px', 
              backgroundColor: 'rgba(245, 245, 245, 0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              boxSizing: 'border-box' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f9cefb' }} />
                <h4 style={{ fontWeight: 'bold', color: '#F5F5F5', fontSize: '1rem', margin: 0 }}>Macro Product Creative</h4>
              </div>
              {/* LANDSCAPE ASPECT RATIO CONTAINER */}
              <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#050505', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                <video src="/videos/product-focus.mp4" autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <p style={{ fontSize: '0.75rem', color: '#a3a3a3', marginTop: '1rem', lineHeight: '1.4' }}>
                Hyper-focused product frame variations mapped straight to user conversion arrays.
              </p>
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
        {/* SECTION 05: SYSTEM FOOTER MODULE (ASYMMETRIC 2-COLUMN)   */}
        {/* ──────────────────────────────────────────────────────── */}
        <footer id="contact" className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12 items-center text-left">
          
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight text-white">Let&apos;s Build the Machine</h2>
              <p className="text-sm text-neutral-400 font-mono">Initialize automated matrix pipelines and strategic creative frameworks.</p>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="mailto:dcrxz@pm.me" className="bg-[#6bebff] text-[#050505] px-6 py-3 rounded-lg font-bold hover:bg-white transition-colors text-sm font-mono">
                EXECUTE MAIL_ROUTING
              </a>
              <a href="https://dcrxz.github.io/portfolio/Darwin_Cruz_Resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-neutral-900 border border-white/10 text-neutral-300 px-6 py-3 rounded-lg font-bold hover:bg-neutral-800 transition-colors text-sm font-mono">
                PULL RESUME_MANIFEST
              </a>
            </div>
            <p className="text-xs font-mono text-neutral-600 pt-6">
              © 2026 Darwin Ernest Cruz | Portfolio v1.0
            </p>
          </div>

          <div className="md:col-span-5 w-full max-w-[340px] mx-auto md:ml-auto aspect-square relative overflow-hidden rounded-xl border border-white/5 bg-neutral-900/10 group">
            <img 
              src="/images/profile-image.jpg" 
              alt="Darwin Ernest Cruz Portrait" 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </footer>

      </main>
    </div>
  );
}