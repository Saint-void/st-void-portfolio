import { useState, useEffect } from 'react';
import { Menu, X, Clock, Globe, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import AboutVision from './components/AboutVision';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CelestialBackground from './components/CelestialBackground';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  const [timeState, setTimeState] = useState({
    local: '',
    utc: '',
  });

  // Apply dark class to root document element
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Simple active section highlights on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ['home', 'about', 'what-i-do', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update trading clock times
  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      
      // Local time formatting
      const localStr = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      // UTC time formatting
      const utcStr = now.toLocaleTimeString([], {
        timeZone: 'UTC',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });

      setTimeState({ local: localStr, utc: utcStr });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT & VISION', href: '#about', id: 'about' },
    { label: 'WHAT I DO', href: '#what-i-do', id: 'what-i-do' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-transparent text-zinc-900 dark:text-zinc-200 flex flex-col font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-white transition-colors duration-300">
      <CelestialBackground />
      
      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-[#050508]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-900/60 h-20 transition-all">
        {/* Scroll Progress Indicator */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-black dark:bg-white transition-all duration-75 z-50"
          style={{ width: `${scrollProgress}%` }}
        />
        <div className="max-w-7xl mx-auto h-full px-6 md:px-8 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            className="flex flex-col items-start hover:opacity-80 transition-opacity cursor-pointer group"
          >
            <span className="text-lg font-display font-extrabold tracking-wider text-black dark:text-white">
              ST <span className="text-zinc-500 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">VOID</span>
            </span>
            <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 tracking-widest leading-none">
              ENTERPRISES
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-mono tracking-widest transition-colors relative py-1 ${
                  activeSection === link.id
                    ? 'text-black dark:text-white font-semibold border-b-2 border-black dark:border-white'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme Switcher and Session Clocks (Desktop/Tablet) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0a0a0f] hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all cursor-pointer"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Session Clocks widget (Forex Trading / High tech visual cue) */}
            <div className="flex items-center gap-4 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 border-l border-zinc-200 dark:border-zinc-900 pl-6 h-8">
              <div className="flex items-center gap-1.5" title="Your Local Time">
                <Clock className="w-3.5 h-3.5 text-black dark:text-white" />
                <span>LCL: <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{timeState.local || '--:--:--'}</span></span>
              </div>
              <div className="flex items-center gap-1.5" title="UTC/GMT Global Session Time">
                <Globe className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
                <span>UTC: <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{timeState.utc || '--:--:--'}</span></span>
              </div>
            </div>
          </div>

          {/* Mobile hamburger navigation trigger container */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Clock for small screens */}
            <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
              <Clock className="w-3 h-3 text-black dark:text-white" />
              <span>{timeState.local ? timeState.local.substring(0, 5) : '--:--'}</span>
            </div>
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-white/98 dark:bg-black/98 backdrop-blur-lg flex flex-col justify-center items-center p-8 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-mono tracking-widest ${
                  activeSection === link.id
                    ? 'text-black dark:text-white font-bold border-b border-black dark:border-white'
                    : 'text-zinc-400 dark:text-zinc-500 hover:text-black dark:hover:text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Session clocks */}
          <div className="flex flex-col gap-2 mt-12 font-mono text-xs text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-900 pt-6 w-full max-w-xs text-center">
            <div className="flex justify-between">
              <span>LOCAL TIME:</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{timeState.local || '--:--:--'}</span>
            </div>
            <div className="flex justify-between">
              <span>UTC TRADING SEC:</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-semibold">{timeState.utc || '--:--:--'}</span>
            </div>
          </div>
        </div>
      )}

      {/* Primary Page Layout Sections */}
      <main className="flex-grow pt-20">
        <Hero />
        <AboutVision />
        <WhatIDo />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />

    </div>
  );
}
