import { ComponentType } from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, Code, Layers, GraduationCap, Zap, 
  HeartPulse, Navigation, Radio, FlaskConical, Target, Award, Compass 
} from 'lucide-react';
import { Sector } from '../types';

const SECTORS: Sector[] = [
  {
    name: 'Artificial Intelligence',
    description: 'Conversational AI models, intent processors, speech synthesis, and local edge computing architectures designed for Nigeria\'s high reliability.',
    icon: 'Cpu',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Software Engineering',
    description: 'Scalable cloud backends, clean system architecture patterns, robust microservices, and robust automation software.',
    icon: 'Code',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Hardware Development',
    description: 'Wearable AI devices, Raspberry Pi integrations, embedded hardware modules, and customized computer systems.',
    icon: 'Layers',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Education',
    description: 'Void Education — empowering Nigerian youth with cutting edge technical modules, interactive learning hubs, and AI tutors.',
    icon: 'GraduationCap',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Energy',
    description: 'Clean energy generation technologies, micro-grid management systems, and smart electricity automation to power industries.',
    icon: 'Zap',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Healthcare',
    description: 'Smart diagnostics, medical data management, local clinic inventory software, and AI-assisted health monitors.',
    icon: 'HeartPulse',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Transportation',
    description: 'Efficient local shipping automation, smart transit coordination, and tracking networks optimized for Nigerian streets.',
    icon: 'Navigation',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Media & Communications',
    description: 'Digital tools for educational content, community forums, broadcasting local innovations, and connecting business leaders.',
    icon: 'Radio',
    color: 'border-zinc-200 text-black hover:border-black'
  },
  {
    name: 'Research & Development',
    description: 'A dedicated facility pushing local technical bounds in robotics, local manufacturing materials, and agricultural tech.',
    icon: 'FlaskConical',
    color: 'border-zinc-200 text-black hover:border-black'
  }
];

const iconMap: { [key: string]: ComponentType<{ className?: string }> } = {
  Cpu,
  Code,
  Layers,
  GraduationCap,
  Zap,
  HeartPulse,
  Navigation,
  Radio,
  FlaskConical,
};

export default function AboutVision() {
  return (
    <section id="about" className="py-24 bg-zinc-50 dark:bg-[#08080c] border-t border-zinc-200 dark:border-zinc-900/60 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* About Me Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
          <div className="lg:col-span-5">
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">// IDENTITY & PHILOSOPHY</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-black dark:text-white mb-6">
              Sogolo Donaldson
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm uppercase mb-6 flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 bg-black dark:bg-white rounded-sm animate-pulse"></span>
              St Void • Nigeria
            </p>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed text-sm md:text-base">
              <p>
                I am a Software Engineering student, AI developer, entrepreneur, and aspiring business leader. My journey is guided by a commitment to solving local challenges through custom engineering.
              </p>
              <p>
                I believe that modern technology should not simply be imported. Instead, it must be understood, improved, and built locally to drive genuine independence and sustainable development.
              </p>
              <p className="border-l-2 border-black dark:border-white pl-4 py-2 text-zinc-800 dark:text-zinc-200 italic font-mono text-sm bg-white/50 dark:bg-zinc-950/40 pr-4">
                "The goal is not merely to create successful businesses. The goal is to build an ecosystem where innovation, knowledge, and opportunities remain within Nigeria while competing globally."
              </p>
            </div>
          </div>

          {/* Pillars Card Bento */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/80 shadow-xs flex flex-col justify-between hover:border-black/40 dark:hover:border-white/40 transition-all duration-300">
              <div>
                <Target className="w-8 h-8 text-black dark:text-white mb-4" />
                <h3 className="text-lg font-display font-medium text-black dark:text-white mb-2">Core Mission</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  To design and build high-performance systems that outlive me, offering robust utility and creating local engineering frameworks.
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-6">// PERSISTENCE & VISION</div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/80 shadow-xs flex flex-col justify-between hover:border-black/40 dark:hover:border-white/40 transition-all duration-300">
              <div>
                <Award className="w-8 h-8 text-black dark:text-white mb-4" />
                <h3 className="text-lg font-display font-medium text-black dark:text-white mb-2">My Approach</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Every product I build is approached as an organization rather than an experiment, prioritizing scalability, impact, and economic sustainability.
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-6">// ORGANIZATIONAL MODEL</div>
            </div>

            <div className="p-6 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900/80 shadow-xs flex flex-col justify-between md:col-span-2 hover:border-black/40 dark:hover:border-white/40 transition-all duration-300">
              <div>
                <Compass className="w-8 h-8 text-black dark:text-white mb-4" />
                <h3 className="text-lg font-display font-medium text-black dark:text-white mb-2">The Long-Term Dream</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Founding <strong className="text-black dark:text-white">Void Enterprises</strong>, a diversified holding company pushing structural boundaries in tech, energy, logistics, and education to boost Africa's self-reliance.
                </p>
              </div>
              <div className="text-xs font-mono text-zinc-400 dark:text-zinc-600 mt-6">// VOID ENTERPRISES HOLDING CONTEXT</div>
            </div>
          </div>
        </div>

        {/* Void Enterprises Future Sectors */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest block mb-3">// FUTURE CONTEXT</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold tracking-tight text-black dark:text-white mb-4">
              Void Enterprises
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
              Void Enterprises represents a strategic vision for a Nigerian-built industrial ecosystem, focusing on essential sectors to foster domestic capability and long-term technological independence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sector, index) => {
              const IconComp = iconMap[sector.icon] || Cpu;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                  className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-900/60 bg-white dark:bg-zinc-950/40 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                      <IconComp className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <h3 className="text-base font-display font-medium text-black dark:text-white">{sector.name}</h3>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow">
                    {sector.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
