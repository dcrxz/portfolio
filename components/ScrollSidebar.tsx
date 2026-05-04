'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'metrics', label: 'Impact' },
  { id: 'demos', label: 'Demos' },
  { id: 'contact', label: 'Connect' }
];

export default function ScrollSidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
  // Creates a smooth "spring" animation for the filling bar
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-50">
      {/* The Track (Background Bar) */}
      <div className="relative w-[2px] h-64 bg-gray-800 rounded-full overflow-hidden">
        {/* The Fill (Animated Progress) */}
        <motion.div 
          className="absolute top-0 w-full bg-[#00b4d8] origin-top"
          style={{ scaleY }}
        />
      </div>

      {/* Section Labels */}
      <div className="flex flex-col gap-8 absolute left-6 py-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
            className={`text-xs font-bold tracking-widest uppercase transition-all ${
              activeSection === section.id ? 'text-[#00b4d8] translate-x-2' : 'text-gray-500 hover:text-white'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}