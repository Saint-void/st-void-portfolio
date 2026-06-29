import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#050508] border-t border-zinc-200 dark:border-zinc-900/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-sm font-display font-semibold tracking-wider text-black dark:text-white">
            ST VOID
          </div>
          <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1 uppercase">
            Building systems that outlive me.
          </p>
        </div>

        {/* Copyright notice */}
        <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-600 text-center uppercase">
          © {new Date().getFullYear()} SOGOLO DONALDSON. ALL RIGHTS RESERVED.
        </div>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs font-mono"
          title="Scroll to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
