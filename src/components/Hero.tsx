import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, ArrowDown, Activity } from 'lucide-react';

const ROLES = [
  'Software Engineering Student',
  'AI Developer',
  'Entrepreneur',
  'Forex Trader',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriting logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && currentText === fullText) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : fullText.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  // System uptime counter for high-tech aesthetic
  const [uptime, setUptime] = useState('00:00:00');
  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const diff = Date.now() - start;
      const hours = Math.floor(diff / 3600000).toString().padStart(2, '0');
      const minutes = Math.floor((diff % 3600000) / 60000).toString().padStart(2, '0');
      const seconds = Math.floor((diff % 60000) / 1000).toString().padStart(2, '0');
      setUptime(`${hours}:${minutes}:${seconds}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-[#050508] px-4 md:px-8 grid-paper transition-colors duration-300">
      {/* Subtle fade overlay for the grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 dark:from-black/20 via-transparent to-white dark:to-[#050508] pointer-events-none" />
      
      {/* Top Floating Stats HUD (High aesthetic value, keeping it very clean) */}
      <div className="absolute top-28 left-6 right-6 flex justify-between items-center text-xs font-mono text-zinc-400 dark:text-zinc-500 max-w-7xl mx-auto pointer-events-none hidden md:flex border-b border-zinc-100 dark:border-zinc-900/60 pb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-black dark:text-white animate-pulse" />
          <span>ST_VOID_CORE_LOADED // VER 3.5</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-emerald-500 animate-ping" />
            <span>SESSION_UPTIME: {uptime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-zinc-300 dark:text-zinc-700" />
            <span>NGA_SECURE_NODE</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl flex flex-col items-center mt-8">
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-6 tracking-wide shadow-xs"
        >
          <Activity className="w-3.5 h-3.5 text-zinc-900 dark:text-white animate-pulse" />
          <span>BUILDING THE FUTURE // ONE SYSTEM AT A TIME</span>
        </motion.div>

        {/* Brand Main Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-9xl font-display font-extrabold tracking-tight text-black dark:text-white mb-2 leading-none"
        >
          ST VOID
        </motion.h1>

        {/* Real Human Name */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl font-light text-zinc-400 dark:text-zinc-500 tracking-wider font-sans uppercase mb-8"
        >
          Sogolo Donaldson
        </motion.p>

        {/* Animated Typewriter Sub-roles */}
        <div className="min-h-[40px] flex items-center justify-center mb-10">
          <p className="text-lg md:text-3xl font-mono text-zinc-800 dark:text-zinc-200 flex items-center font-medium">
            <span>{currentText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-1.5 h-7 bg-black dark:bg-white ml-1.5 inline-block"
            />
          </p>
        </div>

        {/* Vision Statement Hook */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-zinc-500 dark:text-zinc-400 max-w-xl text-sm md:text-base leading-relaxed mb-12 font-sans font-light"
        >
          "Every project I work on is part of a larger vision: to understand, improve, and build local technology that can solve real problems and outlive me."
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors duration-200 shadow-md flex items-center justify-center gap-2 group cursor-pointer text-sm font-display tracking-wide"
          >
            Explore Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 text-zinc-800 dark:text-white font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm font-display tracking-wide"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, delay: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-1.5 text-zinc-300 dark:text-zinc-700 font-mono text-[10px] uppercase tracking-widest pointer-events-none"
      >
        <span>Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-600" />
      </motion.div>
    </section>
  );
}
