import React from 'react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased selection:bg-[#6bebff] selection:text-[#050505] font-sans overflow-hidden m-0 p-0">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* GLOBAL HEADER PANEL                                      */}
      {/* ──────────────────────────────────────────────────────── */}
      {/* THE TOP NAVIGATION BAR CONTAINER */}
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
    }}>

      {/* THE INNER CONTENT ALIGNMENT LAYER: Forces the links to align with the page columns */}
      <div style={{
        width: '100%',
        maxWidth: '1440px',      // Matches layout.tsx exactly
        margin: '0 auto',        // Centers the navigation row block
        paddingLeft: '1.25rem',  // Matches layout.tsx exactly
        paddingRight: '1.25rem', // Matches layout.tsx exactly
        height: '4rem',          // Uniform height layout track
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Splits logo/name to left, nav links to right
        boxSizing: 'border-box'
      }}>

        {/* LOGO / IDENTITY BLOCK */}
        <a href="#overview" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem',
          color: '#F5F5F5', 
          fontWeight: 'bold', 
          textDecoration: 'none', 
          fontSize: '0.875rem' 
        }}>
          {/* THE LOGO ICON WRAPPER: Solid Minimalist Background */}
          <div style={{ 
            width: '1.5rem', 
            height: '1.5rem', 
            borderRadius: '0.375rem',          // Gives it a clean, modern rounded corner
            backgroundColor: '#171717',        // Solid neutral dark grey background
            border: '1px solid rgba(255, 255, 255, 0.08)', // Crisp, subtle structural outline
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            <img 
              src="/images/logo.png" 
              alt="Logo" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',             // Fills the square bounds neatly
                display: 'block'
              }} 
            />
          </div>
          <span>Darwin Ernest Cruz</span>
        </a>

        {/* LINK MODULE DECK */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'monospace', fontSize: '0.75rem' }}>
          <a href="#overview" style={{ color: '#a3a3a3', textDecoration: 'none' }}>Overview</a>
          <span style={{ color: '#262626' }}>|</span>
          <a href="#pipeline" style={{ color: '#a3a3a3', textDecoration: 'none' }}>Pipelines</a>
          <span style={{ color: '#262626' }}>|</span>
          <a href="#creative" style={{ color: '#a3a3a3', textDecoration: 'none' }}>Creative</a>
          <span style={{ color: '#262626' }}>|</span>
          <a href="#contact" style={{ color: '#a3a3a3', textDecoration: 'none' }}>Connect</a>
        </div>

      </div>
    </nav>
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* MAIN CONTAINER LAYOUT                                    */}
      {/* ──────────────────────────────────────────────────────── */}
      <main className="max-w-6xl mx-auto px-6 pt-16 pb-24 space-y-20">

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 01: HERO / OVERVIEW MODULE (CENTERED)            */}
        {/* ──────────────────────────────────────────────────────── */}
        <section id="overview" style={{ 
          paddingTop: '8.5rem',       // Explicit clearance space for the fixed top bar
          paddingBottom: '5rem', 
          display: 'block', 
          width: '100%',
          boxSizing: 'border-box'
        }}>
          
          {/* MAX-WIDTH CENTERING CONTAINER */}
          <div style={{ 
            maxWidth: '1200px',        // Matches the max bounds of your lower grid modules
            margin: '0 auto',          // Auto-centers the bounding box on the screen
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem',
            textAlign: 'center',       // Centers the actual text lines
            alignItems: 'center'       // Centers any block child elements inside the column
          }}>
            
            <span style={{ 
              fontFamily: 'monospace', 
              fontSize: '0.75rem', 
              color: '#6bebff', 
              letterSpacing: '0.15em',
              textTransform: 'uppercase'
            }}>
              LEAD SPECIALIST // LEARNING INNOVATION & TECHNOLOGY
            </span>
            
            <h1 style={{ 
              fontSize: '3rem', 
              fontWeight: 'bold', 
              color: '#F5F5F5', 
              letterSpacing: '-0.03em', 
              lineHeight: '1.1', 
              margin: '0 auto',
              maxWidth: '46rem'        // Keeps the massive headline compact and readable
            }}>
              Engineering high-volume, behavior-mapped creatives.
            </h1>
            
            <p style={{ 
              fontSize: '1rem', 
              color: '#a3a3a3', 
              lineHeight: '1.6', 
              margin: '0 auto',
              maxWidth: '38rem'        // Stops paragraph lines from stretching infinitely
            }}>
              Building highly optimized, multi-source content generation systems leveraging learning science first and artificial intelligence second.
            </p>
            
          </div>

        </section>

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 02: TECHNICAL PROCESS MODULE                     */}
        {/* ──────────────────────────────────────────────────────── */}
        <section id="pipeline" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'block', width: '100%' }}>
          
          <div style={{ marginBottom: '3rem', textAlign: 'left' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#f9cefb', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              System Automation
            </div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#F5F5F5', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
              Automated Campaign Pipelines
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#a3a3a3', maxWidth: '36rem', margin: 0, lineHeight: '1.5' }}>
              Turning target data arrays into complete social media ad configurations in under 10 minutes.
            </p>
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
            
            {/* CARD 01 */}
            <div style={{ 
              flex: '1 1 30%', 
              minWidth: '280px', 
              backgroundColor: 'rgba(245, 245, 245, 0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#6bebff' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#6bebff', letterSpacing: '0.1em' }}>01 / INGESTION</span>
                </div>
                <h3 style={{ fontWeight: 'bold', color: '#F5F5F5', fontSize: '1.125rem', margin: 0 }}>The Grabber Module</h3>
                <p style={{ fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.6', margin: 0 }}>
                  Python scraping system engineered to automatically extract business parameters and sanitize layout metadata.
                </p>
              </div>
            </div>

            {/* CARD 02 */}
            <div style={{ 
              flex: '1 1 30%', 
              minWidth: '280px', 
              backgroundColor: 'rgba(245, 245, 245, 0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#578cd6' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#578cd6', letterSpacing: '0.1em' }}>02 / PROCESSING</span>
                </div>
                <h3 style={{ fontWeight: 'bold', color: '#F5F5F5', fontSize: '1.125rem', margin: 0 }}>The Context Brain</h3>
                <p style={{ fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.6', margin: 0 }}>
                  Algorithmic evaluation layer running targeted demographic validation and direct-response angle mapping.
                </p>
              </div>
            </div>

            {/* CARD 03 */}
            <div style={{ 
              flex: '1 1 30%', 
              minWidth: '280px', 
              backgroundColor: 'rgba(245, 245, 245, 0.03)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '1rem', 
              padding: '1.5rem', 
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f9cefb' }} />
                  <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#f9cefb', letterSpacing: '0.1em' }}>03 / COMPILATION</span>
                </div>
                <h3 style={{ fontWeight: 'bold', color: '#F5F5F5', fontSize: '1.125rem', margin: 0 }}>The Production Factory</h3>
                <p style={{ fontSize: '0.875rem', color: '#a3a3a3', lineHeight: '1.6', margin: 0 }}>
                  High-volume generative array outputting clean, synchronized asset variations across cross-platform dimensions.
                </p>
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
        {/* SECTION 05: SYSTEM FOOTER MODULE (CENTERED 2-COLUMN)     */}
        {/* ──────────────────────────────────────────────────────── */}
        <footer id="contact" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', paddingBottom: '4rem', display: 'block', width: '100%' }}>
          
          {/* MAX-WIDTH WRAPPER: Centers the entire footer layout row block on wide screens */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '3rem',               // Increases breathing space between text and image
            width: '100%', 
            maxWidth: '1200px',        // Limits expansion so it matches your main upper grid profiles
            margin: '0 auto',          // Forces horizontal auto-centering inside the page viewport
            justifyContent: 'center',  // Pulls both columns inward toward the vertical center axis
            alignItems: 'center'
          }}>
            
            {/* LEFT COLUMN: TEXT & ACTIONS */}
            <div style={{ 
              flex: '1 1 55%', 
              minWidth: '300px', 
              maxWidth: '600px',       // Prevents text lines from stretching out too wide
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#F5F5F5', letterSpacing: '-0.02em', margin: 0 }}>
                  Let&apos;s Build the Machine
                </h2>
                <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#a3a3a3', margin: 0 }}>
                  Initialize automated matrix pipelines and strategic creative frameworks.
                </p>
              </div>

              {/* INTERACTION BUTTON MATRIX */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="mailto:dcrxz@pm.me" style={{ 
                  backgroundColor: '#6bebff', 
                  color: '#050505', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '0.5rem', 
                  fontWeight: 'bold', 
                  textDecoration: 'none', 
                  fontSize: '0.75rem', 
                  fontFamily: 'monospace',
                  display: 'inline-block'
                }}>
                  EXECUTE MAIL_ROUTING
                </a>
                
                <a href="https://dcrxz.github.io/portfolio/Darwin_Cruz_Resume.pdf" target="_blank" rel="noopener noreferrer" style={{ 
                  backgroundColor: 'rgba(245, 245, 245, 0.03)', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  color: '#d4d4d4', 
                  padding: '0.75rem 1.5rem', 
                  borderRadius: '0.5rem', 
                  fontWeight: 'bold', 
                  textDecoration: 'none', 
                  fontSize: '0.75rem', 
                  fontFamily: 'monospace',
                  display: 'inline-block'
                }}>
                  PULL RESUME_MANIFEST
                </a>
              </div>

              <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#525252', marginTop: '1.5rem', margin: 0 }}>
                © 2026 Darwin Ernest Cruz | Portfolio v1.0
              </p>
            </div>

            {/* RIGHT COLUMN: PROFILE IMAGE */}
            <div style={{ 
              flex: '1 1 35%', 
              minWidth: '280px', 
              maxWidth: '320px',       // Clean, uniform square framing profile bounds
              aspectRatio: '1/1', 
              backgroundColor: 'rgba(245, 245, 245, 0.02)', 
              border: '1px solid rgba(255,255,255,0.05)', 
              borderRadius: '0.75rem', 
              overflow: 'hidden', 
              position: 'relative',
              boxSizing: 'border-box'
            }}>
              <img 
                src="/images/profile-image.jpg" 
                alt="Darwin Ernest Cruz Portrait" 
                style={{ 
                  position: 'absolute',
                  inset: 0,
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  filter: 'grayscale(100%) brightness(95%)'
                }} 
              />
            </div>

          </div>
        </footer>

      </main>
    </div>
  );
}