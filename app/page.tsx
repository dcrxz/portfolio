import React from 'react';

export default function Portfolio() {
  return (
    // BRAND WRAPPER: Exact midnight canvas canvas background (#050505), crisp white typography, and Montserrat system fonts
    <div className="min-h-screen bg-brand-background text-brand-text font-body font-normal text-base antialiased selection:bg-brand-primary selection:text-brand-background">
      
      {/* ──────────────────────────────────────────────────────── */}
      {/* SYSTEM HUD / NAVIGATION PANEL                            */}
      {/* ──────────────────────────────────────────────────────── */}
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

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 01: HERO / EXECUTIVE SUMMARY PROFILE             */}
        {/* ──────────────────────────────────────────────────────── */}
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

          {/* TWO COLUMN SUMMARY LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-sm font-mono text-brand-accent uppercase tracking-widest">
                [01 / EXECUTIVE SUMMARY]
              </h2>
              <p className="text-xl text-neutral-300 leading-relaxed">
                High-velocity Lead Specialist in Learning Innovation & Technology, merging a technical 
                infrastructure background (BS IT) with behavioral psychology and instructional science to 
                architect scalable digital systems. Instead of treating creative output as an &quot;art project,&quot; 
                my current role focuses on engineering high-volume, automated workflows that map directly to 
                human behavior and engagement metrics.
              </p>
            </div>
            
            {/* LOGISTICS CALLOUT CARD */}
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

        {/* ──────────────────────────────────────────────────────── */}
        {/* SECTION 02: TECHNICAL PIPELINES (3-COLUMN BLUEPRINT)     */}
        {/* ──────────────────────────────────────────────────────── */}
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
            <div className="space-y-2 border-l