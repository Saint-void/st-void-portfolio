import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-white dark:bg-[#09090b] transition-colors">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="text-left">
          <span className="font-semibold text-xs tracking-tight text-zinc-950 dark:text-white">
            SOGOLO O. DONALDSON
          </span>
          <span className="text-zinc-400 dark:text-zinc-600 font-mono text-xs ml-2">
            // ST VOID
          </span>
        </div>

        <div className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
          © {new Date().getFullYear()} ABUJA, NIGERIA • ALL RIGHTS RESERVED
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer text-xs font-mono inline-flex items-center gap-1.5"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
