import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import AboutVision from './components/AboutVision';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark') return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Apply dark mode class
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Active section tracking on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'specializations', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { label: 'Overview', href: '#home', id: 'home' },
    { label: 'Background', href: '#about', id: 'about' },
    { label: 'Specializations', href: '#specializations', id: 'specializations' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-black dark:selection:text-white transition-colors duration-200">
      
      {/* Clean, Frameless Borderless Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="font-semibold text-sm tracking-tight text-zinc-950 dark:text-white">
              SOGOLO DONALDSON
            </span>
            <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
              / ST VOID
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs font-medium tracking-wide transition-colors ${
                  activeSection === link.id
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Toggle & Availability */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 pl-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 dark:bg-zinc-100" />
              <span>Abuja, NG</span>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 transition-colors cursor-pointer"
              title="Toggle theme"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-white/98 dark:bg-[#09090b]/98 backdrop-blur-lg flex flex-col justify-center px-8"
          onClick={() => setMobileMenuOpen(false)}
        >
          <nav className="flex flex-col gap-6 text-left max-w-sm mx-auto w-full">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest pb-3">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium tracking-tight ${
                  activeSection === link.id
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-6 text-xs font-mono text-zinc-500">
              Sogolo O. Donaldson • Software Engineering
            </div>
          </nav>
        </div>
      )}

      {/* Main Sections */}
      <main className="flex-grow">
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
