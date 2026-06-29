import { useState } from 'react';
import { motion } from 'motion/react';
import { Code, Brain, Settings, Briefcase, Info } from 'lucide-react';
import { SkillCategory } from '../types';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript / TypeScript', level: 85 },
      { name: 'Web Technologies (HTML5/CSS3/React)', level: 85 },
      { name: 'Backend Development (Express/Node.js)', level: 80 },
    ],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Large Language Models (Llama, Gemini)', level: 90 },
      { name: 'Speech Recognition / Voice Processing', level: 85 },
      { name: 'AI Intelligent Agents', level: 85 },
      { name: 'Local AI Deployment / Edge Models', level: 80 },
      { name: 'Advanced Prompt Engineering', level: 95 },
    ],
  },
  {
    title: 'Systems & Infrastructure',
    skills: [
      { name: 'Linux OS & Shell Scripting', level: 85 },
      { name: 'Docker Containers', level: 75 },
      { name: 'Raspberry Pi / Single-Board Computers', level: 85 },
      { name: 'Cloud Infrastructure (AWS/GCP)', level: 75 },
      { name: 'System Architecture', level: 80 },
    ],
  },
  {
    title: 'Business & Leadership',
    skills: [
      { name: 'Strategic Planning', level: 85 },
      { name: 'Entrepreneurship / Venture Scaling', level: 90 },
      { name: 'Product Development', level: 85 },
      { name: 'Market Analysis & Forex Hedging', level: 80 },
    ],
  },
];

const categoryIcons = [
  <Code className="w-5 h-5 text-black dark:text-white" />,
  <Brain className="w-5 h-5 text-black dark:text-white" />,
  <Settings className="w-5 h-5 text-black dark:text-white" />,
  <Briefcase className="w-5 h-5 text-black dark:text-white" />,
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <section id="skills" className="py-24 bg-zinc-50 dark:bg-[#08080c] border-t border-zinc-200 dark:border-zinc-900/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">// CAPABILITIES MATRIX</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-black dark:text-white">
              Core Skills
            </h2>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm md:text-base max-w-md">
            A comprehensive matrix of my developer competence, engineering capabilities, and systems business intelligence.
          </p>
        </div>

        {/* Dynamic Skill Categorization layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Navigation Controls (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={`w-full flex items-center justify-between p-5 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                  activeCategory === idx
                    ? 'bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-800 text-black dark:text-white shadow-sm font-semibold'
                    : 'bg-zinc-100/50 dark:bg-zinc-900/40 border-zinc-200 dark:border-zinc-900 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-900/80'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                    {categoryIcons[idx]}
                  </div>
                  <span className="font-display font-medium text-sm md:text-base tracking-wide text-black dark:text-white">
                    {cat.title}
                  </span>
                </div>
                <div className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                  // {cat.skills.length} MODULES
                </div>
              </button>
            ))}

            {/* Strategic Note */}
            <div className="p-5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400 mt-8 flex gap-3 text-xs leading-relaxed font-sans shadow-xs">
              <Info className="w-5 h-5 text-black dark:text-white shrink-0 mt-0.5" />
              <div>
                <strong className="text-black dark:text-white">Continuous Integration Note:</strong> Skills are active fields, updated continuously as research progresses on local LLM integrations and Forex automated scalping metrics.
              </div>
            </div>
          </div>

          {/* Meter representation (Right 8 cols) */}
          <div className="lg:col-span-8 p-8 md:p-10 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/80 shadow-xs">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-900 pb-4 mb-8">
              <h3 className="font-display text-lg font-medium text-black dark:text-white">
                {SKILL_CATEGORIES[activeCategory].title} Proficiency
              </h3>
              <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                LOCKED_EDGE_COMPETENCE
              </span>
            </div>

            <div className="space-y-8">
              {SKILL_CATEGORIES[activeCategory].skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-700 dark:text-zinc-300 font-sans font-medium">{skill.name}</span>
                    <span className="font-mono text-xs text-black dark:text-white font-semibold">{skill.level}%</span>
                  </div>
                  
                  {/* Outer Bar */}
                  <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-850">
                    {/* Inner progress bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-black dark:bg-white rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Sub footer stats within card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-6 border-t border-zinc-100 dark:border-zinc-900 text-center">
              <div>
                <span className="block text-2xl font-bold font-display text-black dark:text-white">4+</span>
                <span className="block font-mono text-[9px] text-zinc-400 dark:text-zinc-600 uppercase">YEARS ENGINEERING</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-display text-black dark:text-white">100%</span>
                <span className="block font-mono text-[9px] text-zinc-400 dark:text-zinc-600 uppercase">LOCAL FIRST VISION</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-display text-black dark:text-white">2+</span>
                <span className="block font-mono text-[9px] text-zinc-400 dark:text-zinc-600 uppercase">HARDWARE PROJECTS</span>
              </div>
              <div>
                <span className="block text-2xl font-bold font-display text-black dark:text-white">70%</span>
                <span className="block font-mono text-[9px] text-zinc-400 dark:text-zinc-600 uppercase">FX BACKTEST EDGE</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
