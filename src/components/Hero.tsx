import { useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, ArrowUpRight, Camera, Cpu, Wifi } from 'lucide-react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      
      {/* Ambient Halo Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-zinc-200/40 dark:bg-zinc-800/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Concise & High-Impact Summary (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 text-xs font-mono text-zinc-600 dark:text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white animate-pulse" />
              <span className="tracking-wide">OPERATOR // AVAILABLE FOR ENGINEERING ROLES</span>
            </div>

            {/* Typography */}
            <div>
              <p className="text-xs font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase mb-2">
                Software Engineer • AI & Autonomous Systems
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.08]">
                Sogolo O. Donaldson
              </h1>
              <p className="text-base sm:text-lg font-mono text-zinc-500 dark:text-zinc-400 mt-2">
                ST VOID <span className="text-zinc-400 dark:text-zinc-600">/ Full-Stack & Telemetry Architect</span>
              </p>
            </div>

            {/* Concise One-Liner Summary */}
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal max-w-xl">
              Software Engineering student building high-performance backend APIs, private on-premise business chatbots (<strong className="text-zinc-900 dark:text-white font-semibold">Vella AI</strong>), and autonomous drone flight software (<strong className="text-zinc-900 dark:text-white font-semibold">Vyra SITL</strong>).
            </p>

            {/* Futuristic High-Impact Stat Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-mono">
              <div className="p-3 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/60">
                <span className="text-[10px] text-zinc-400 block mb-0.5">01 // PLATFORM</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Vella AI Chatbot</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/60">
                <span className="text-[10px] text-zinc-400 block mb-0.5">02 // AUTONOMOUS</span>
                <span className="font-semibold text-zinc-900 dark:text-white">Vyra MAVLink SITL</span>
              </div>
              <div className="p-3 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/60">
                <span className="text-[10px] text-zinc-400 block mb-0.5">03 // CORE STACK</span>
                <span className="font-semibold text-zinc-900 dark:text-white">FastAPI • Node • DBs</span>
              </div>
            </div>

            {/* Action Buttons & Quick Channels */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 text-xs font-mono font-medium tracking-wider hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:scale-[1.02]"
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>GET IN TOUCH</span>
              </a>

              {/* Minimal Social Links */}
              <div className="flex items-center gap-2 ml-auto sm:ml-2">
                <a
                  href="https://github.com/Saint-void"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/donaldsogolo/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:sogolodonald11@gmail.com"
                  className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors"
                  title="Email Donaldson"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Futuristic Designer Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Decorative Floating Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-zinc-200/50 via-zinc-100/20 to-transparent dark:from-zinc-800/40 dark:via-zinc-800/10 dark:to-transparent rounded-3xl blur-xl -z-10" />

              {/* Main Futuristic Card Frame */}
              <div className="rounded-3xl bg-white dark:bg-zinc-900/70 p-5 shadow-xl backdrop-blur-md relative overflow-hidden">
                
                {/* Top High-Tech HUD Header */}
                <div className="flex items-center justify-between pb-3 mb-3 text-[10px] font-mono text-zinc-400 dark:text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-950 dark:bg-white animate-ping" />
                    <span className="text-zinc-800 dark:text-zinc-200 font-semibold tracking-wider">SYS_ID // ST_VOID</span>
                  </div>
                  <span>NODE: ABUJA.NG</span>
                </div>

                {/* Portrait Viewport */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950 dark:bg-black flex flex-col items-center justify-center p-6 text-center group">
                  
                  {!imageError ? (
                    <img
                      src="/profile.jpg"
                      alt="Sogolo O. Donaldson"
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    /* Futuristic Holographic Cyber Placeholder */
                    <div className="relative flex flex-col items-center justify-center space-y-4 w-full h-full">
                      {/* Orbital Concentric Wireframe Rings */}
                      <div className="relative w-28 h-28 rounded-full flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-zinc-800/40 animate-pulse" />
                        <div className="absolute w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center">
                          <Cpu className="w-8 h-8 text-zinc-300 dark:text-zinc-100" />
                        </div>
                      </div>

                      <div>
                        <div className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                          Sogolo Donaldson
                        </div>
                        <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                          SYSTEMS & AI ENGINEER
                        </div>
                      </div>

                      {/* Drop Photo Instruction Pill */}
                      <div className="px-3 py-1.5 rounded-full bg-zinc-900/90 text-[10px] font-mono text-zinc-400 flex items-center gap-1.5">
                        <Camera className="w-3 h-3 text-zinc-200" />
                        <span>Place <strong className="text-white">profile.jpg</strong> in /public</span>
                      </div>
                    </div>
                  )}

                  {/* High-Tech HUD Viewfinder Corner Accents */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-white/60 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-white/60 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-white/60 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-white/60 pointer-events-none" />

                  {/* Lower Floating Overlay Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-2 rounded-xl bg-black/80 backdrop-blur-md flex items-center justify-between text-[10px] font-mono text-zinc-300">
                    <span className="font-semibold text-white">OPERATOR // S. DONALDSON</span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <Wifi className="w-2.5 h-2.5" /> LIVE
                    </span>
                  </div>

                </div>

                {/* Sub-card metadata */}
                <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 px-1">
                  <span>SPECIALIZATION: FULL-STACK / AI</span>
                  <span className="text-zinc-900 dark:text-white font-semibold">2026 EDITION</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
