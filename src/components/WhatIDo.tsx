import { useState } from 'react';
import { Terminal, Cpu, Navigation, Database, CheckCircle2 } from 'lucide-react';

const SPECIALIZATIONS = [
  {
    id: 'backend',
    number: '01',
    title: 'Full-Stack & Backend APIs',
    summary: 'High-throughput asynchronous services, JSON schemas, and modular microservices.',
    points: [
      'FastAPI async endpoints with Pydantic validation',
      'Node.js & Express.js REST microservices and Spring Boot architectures',
      'Secure authentication, session handling, and CORS configuration',
      'Clean frontend-backend integration with React and EJS'
    ],
    tech: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'Spring Boot', 'REST APIs', 'JSON']
  },
  {
    id: 'ai',
    number: '02',
    title: 'AI, Local LLMs & Chatbots',
    summary: 'On-premise language models and document retrieval systems with zero cloud lock-in.',
    points: [
      'Local model deployment via Ollama (Qwen 2.5, Llama) for zero-cloud dependency',
      'Knowledge-base vectorization over PDFs, URLs, and documentation (RAG)',
      'Prompt engineering, context caching, and hallucination reduction',
      'Local text-to-speech (TTS) voice generation experiments'
    ],
    tech: ['Ollama', 'Qwen 2.5', 'FastAPI', 'Embeddings', 'Vector RAG', 'MySQL']
  },
  {
    id: 'autonomous',
    number: '03',
    title: 'Autonomous Flight & Telemetry',
    summary: 'Flight software, telemetry pipelines, and SITL simulations for unmanned systems.',
    points: [
      'ArduPilot Software-in-the-Loop (SITL) autonomous flight testing',
      'Bidirectional MAVLink telemetry packet parsing and 10Hz streaming',
      'FastAPI telemetry gateways connecting flight controllers to web consoles',
      'GPS waypoint mission planning and automated return-to-launch (RTL) fail-safes'
    ],
    tech: ['ArduPilot', 'MAVLink', 'Pixhawk', 'SITL Simulation', 'Python', 'Telemetry']
  },
  {
    id: 'data',
    number: '04',
    title: 'Databases & Cloud DevOps',
    summary: 'Relational data modeling, document storage, containerization, and hosting.',
    points: [
      'Relational schema design and indexing in MySQL and PostgreSQL',
      'NoSQL document structuring in MongoDB and managed Supabase backends',
      'Docker containerization for reproducible microservice deployment',
      'Automated deployment pipelines across Render, Vercel, and Netlify'
    ],
    stack: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Docker', 'Render', 'Vercel']
  }
];

export default function WhatIDo() {
  const [selectedId, setSelectedId] = useState('backend');
  const activeSpec = SPECIALIZATIONS.find((s) => s.id === selectedId) || SPECIALIZATIONS[0];

  return (
    <section id="specializations" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
            // 02. CORE SPECIALIZATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            What I Build & Engineer
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl">
            Clean architectural capabilities across full-stack applications, on-premise AI models, and real-time aerial telemetry.
          </p>
        </div>

        {/* 4-Pill Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {SPECIALIZATIONS.map((spec) => (
            <button
              key={spec.id}
              onClick={() => setSelectedId(spec.id)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer ${
                selectedId === spec.id
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 shadow-xs'
                  : 'bg-zinc-100/70 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/70 dark:hover:bg-zinc-800/60'
              }`}
            >
              <div className="text-[10px] font-mono tracking-wider opacity-75 mb-1">
                {spec.number} // DOMAIN
              </div>
              <div className="text-xs sm:text-sm font-semibold tracking-tight line-clamp-1">
                {spec.title}
              </div>
            </button>
          ))}
        </div>

        {/* Detail Showcase Panel */}
        <div className="p-8 sm:p-10 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40">
          <div className="max-w-3xl space-y-6">
            
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold">
                DOMAIN {activeSpec.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 dark:text-white">
                {activeSpec.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 font-medium leading-relaxed">
              {activeSpec.summary}
            </p>

            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-3">
                Key Technical Deliverables
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activeSpec.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-2">
              {(activeSpec.tech || activeSpec.stack || []).map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                >
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
