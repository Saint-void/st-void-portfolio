import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { Mic, Headphones, GraduationCap, Server, Settings2, Cpu, CheckCircle } from 'lucide-react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'vella',
    title: 'Vella',
    description: 'An AI-powered voice assistant designed to operate as a highly practical, intelligent, and low-latency digital companion.',
    icon: 'Mic',
    status: 'In Development',
    areas: [
      'Speech-to-Text Processing',
      'Intent Recognition',
      'Local AI Execution',
      'Natural Conversations',
      'Task Automation',
      'Voice Interaction Systems'
    ],
    tech: ['Python', 'Local Whisper Model', 'Edge Llama-3', 'Flask API', 'Raspberry Pi'],
    details: 'Vella represents my vision of creating intelligent voice assistants that remain efficient, low-latency, and accessible even without continuous cloud connectivity.'
  },
  {
    id: 'volco',
    title: 'Volco',
    description: 'A custom, wearable AI-powered smart headphone system built on localized embedded computing core nodes.',
    icon: 'Headphones',
    status: 'Prototype',
    areas: [
      'Voice Processing',
      'Embedded Computing',
      'Audio Engineering',
      'Hardware Prototyping',
      'On-device AI Models'
    ],
    tech: ['Raspberry Pi Zero 2W', 'C++', 'Python Audio Core', 'I2S Audio DAC', 'Fused CAD Design'],
    details: 'Volco explores the future relationship between wearable consumer hardware and custom localized artificial intelligence, bringing voice AI directly to your ears.'
  },
  {
    id: 'void-education',
    title: 'Void Education',
    description: 'An AI-driven educational ecosystem designed to scale high-quality learning channels and skills training across Nigeria.',
    icon: 'GraduationCap',
    status: 'Visions & Planning',
    areas: [
      'AI Personal Tutors',
      'Online Learning Platforms',
      'Physical Learning Hubs',
      'Technical Training Programs',
      'Career Development Systems'
    ],
    tech: ['Next.js Framework', 'PostgreSQL Schema', 'Llama Tutor Node', 'Tailwind CSS', 'Vercel Edge'],
    details: 'Void Education aims to empower Nigerian students with advanced modern skills relevant to the future global economy, bridging critical technical infrastructure gaps.'
  }
];

const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  Mic,
  Headphones,
  GraduationCap,
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#050508] border-t border-zinc-200 dark:border-zinc-900/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">// PORTFOLIO SELECTIONS</span>
          <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-black dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base">
            These active and visionary projects represent the foundational technology stack of Void Enterprises.
          </p>
        </div>

        {/* Scroll Moving Projects Layout */}
        <div className="space-y-20">
          {PROJECTS.map((project, idx) => {
            const IconComponent = iconMap[project.icon] || Mic;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center rounded-2xl bg-zinc-50 dark:bg-zinc-950/20 border border-zinc-200 dark:border-zinc-900/80 p-8 md:p-12 relative overflow-hidden shadow-xs hover:border-black/30 dark:hover:border-white/30 transition-all duration-300"
              >
                {/* Tech Blueprint background overlay to look ultra-pro */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.005)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.005)_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

                {/* Left side content panel */}
                <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Status chip */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                      <span className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
                      <span className="text-zinc-700 dark:text-zinc-300">{project.status.toUpperCase()}</span>
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500 font-mono text-[11px]">PROJECT_0{idx + 1}</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-display font-semibold text-black dark:text-white mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 font-sans text-sm md:text-base mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Core areas block */}
                  <div className="mb-6">
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-500 tracking-wider uppercase block mb-3">// KEY DEVELOPMENT MODULES</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.areas.map((area, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
                          <CheckCircle className="w-3.5 h-3.5 text-black dark:text-white shrink-0" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-zinc-500 dark:text-zinc-400 italic font-sans leading-relaxed border-t border-zinc-200 dark:border-zinc-900 pt-5">
                    {project.details}
                  </p>
                </div>

                {/* Right side custom high-tech blueprint (Interactive representation) */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-full max-w-xs aspect-square rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/80 shadow-sm p-6 relative flex flex-col justify-between transition-all duration-300"
                  >
                    {/* Top Blueprint details */}
                    <div className="flex justify-between items-start">
                      <div className="p-3 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                        <IconComponent className="w-6 h-6 text-black dark:text-white" />
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[9px] text-zinc-400 dark:text-zinc-600 block uppercase">SYSTEM_NODE</span>
                        <span className="font-mono text-[11px] text-black dark:text-white font-semibold">{project.id.toUpperCase()}_ENG</span>
                      </div>
                    </div>

                    {/* Core Visual representation in center */}
                    <div className="my-6 py-2 border-y border-dashed border-zinc-200 dark:border-zinc-900 flex justify-center items-center">
                      <div className="relative flex justify-center items-center">
                        <div className="absolute w-24 h-24 rounded-full border border-black/5 dark:border-white/5 animate-ping pointer-events-none" />
                        <div className="absolute w-16 h-16 rounded-full border border-black/10 dark:border-white/10 animate-pulse pointer-events-none" />
                        <div className="w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                          <Server className="w-5 h-5 text-black dark:text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Technology tags */}
                    <div>
                      <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400 dark:text-zinc-600 mb-2">
                        <span>SYSTEM_DEPENDENCIES</span>
                        <span>COMPILED</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-600 dark:text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
