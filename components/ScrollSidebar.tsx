'use client';
// THESE ARE THE MISSING IMPORTS YOU WERE LOOKING FOR
import { motion, useScroll, useSpring } from 'framer-motion'; 
import { useEffect, useState } from 'react';
import { 
  Home, 
  User, 
  BarChart3, 
  Code2, 
  Mail 
} from 'lucide-react';

const sections = [
  { id: 'hero', icon: Home },
  { id: 'about', icon: User },
  { id: 'case-studies', icon: BarChart3 },
  { id: 'demos', icon: Code2 },
  { id: 'work-with-me', icon: Mail }
];

export default function ScrollSidebar() {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  
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
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-50">
      <div className="relative w-[2px] h-32 bg-gray-800 rounded-full overflow-hidden mb-2">
        <motion.div 
          className="absolute top-0 w-full bg-cyan-400 origin-top"
          style={{ scaleY }}
        />
      </div>

      <div className="flex flex-col gap-6">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center justify-center"
            >
              <Icon 
                size={22} 
                className={`transition-all duration-500 ${
                  isActive ? 'text-cyan-400 scale-110' : 'text-gray-500'
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}