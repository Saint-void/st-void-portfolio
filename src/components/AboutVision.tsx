import { GraduationCap, Target, Compass, CheckCircle2, Award } from 'lucide-react';

const EDUCATION = [
  {
    institution: 'BYU-Pathway Worldwide',
    program: 'Software Development Studies',
    period: '2025 – Present',
    focus: 'Software engineering principles, algorithmic problem solving, modern web frameworks, and clean code practices.'
  },
  {
    institution: 'NIIT Nigeria',
    program: 'Full-Stack Software Engineering Training',
    period: '2025 – Present',
    focus: 'Full-stack engineering: FastAPI, Node.js, Express, Spring Boot, relational databases (MySQL, PostgreSQL), and NoSQL (MongoDB).'
  }
];

const COMPETENCIES = [
  { label: 'Full-Stack Development', detail: 'FastAPI, Node.js, Express, React, HTML/CSS' },
  { label: 'AI & Local LLMs', detail: 'Ollama, Qwen 2.5, Embeddings, RAG, Chatbots' },
  { label: 'Autonomous Flight', detail: 'ArduPilot SITL, MAVLink, Pixhawk controllers' },
  { label: 'Database Systems', detail: 'MySQL, PostgreSQL, MongoDB, Supabase' },
  { label: 'DevOps & Tooling', detail: 'Docker, Git/GitHub, Render, Vercel, Netlify' },
  { label: 'System Integration', detail: 'Hardware-software bridges, telemetry pipelines' },
];

export default function AboutVision() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
            // 01. PROFILE & EDUCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Background & Objectives
          </h2>
        </div>

        {/* 3-Column Executive Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Pillar 1: Philosophy */}
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                01 // PHILOSOPHY
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-3">
                Sovereign Technology
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Belief in understanding and engineering domestic technology locally. Building systems—from private on-premise AI models to autonomous flight telemetry—that solve grounded African challenges and outlive the builder.
              </p>
            </div>
            <div className="mt-6 pt-4 text-[11px] font-mono text-zinc-400">
              ST VOID ENTERPRISES
            </div>
          </div>

          {/* Pillar 2: Career Objective */}
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                02 // CAREER FOCUS
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-3">
                Target Roles
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Aiming to contribute to forward-thinking engineering teams where I can apply my backend API design, full-stack architecture, local AI model integration, and telemetry experience to build reliable, practical software products.
              </p>
            </div>
            <div className="mt-6 pt-4 text-[11px] font-mono text-zinc-400">
              BACKEND • FULL-STACK • AI
            </div>
          </div>

          {/* Pillar 3: Long-Term Horizon */}
          <div className="p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
                03 // LONG-TERM
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-3">
                Void Enterprises
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                A long-term strategic vision for a domestic industrial ecosystem in Nigeria, advancing scalable capabilities across business conversational AI, autonomous aerial logistics, and specialized technical training.
              </p>
            </div>
            <div className="mt-6 pt-4 text-[11px] font-mono text-zinc-400">
              FUTURE INDUSTRIAL ECOSYSTEM
            </div>
          </div>

        </div>

        {/* Education Pathway Section - Summarized */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-5 h-5 text-zinc-900 dark:text-white" />
            <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
              Academic & Professional Education
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-base font-bold text-zinc-950 dark:text-white">
                      {edu.institution}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 shrink-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-3 font-mono">
                    {edu.program}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {edu.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact Core Competency Matrix */}
        <div>
          <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {COMPETENCIES.map((comp, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40"
              >
                <span className="block font-semibold text-xs text-zinc-950 dark:text-white mb-1">
                  {comp.label}
                </span>
                <span className="block text-[11px] font-mono text-zinc-500 dark:text-zinc-400 leading-tight">
                  {comp.detail}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
