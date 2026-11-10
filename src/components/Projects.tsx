import { useState } from 'react';
import { Bot, Plane, Layers, CheckCircle2, Github, ExternalLink, Code2, ArrowUpRight } from 'lucide-react';

interface GitHubRepo {
  name: string;
  repoName: string;
  description: string;
  language: string;
  url: string;
  tag: string;
}

const FEATURED_PROJECTS = [
  {
    id: 'vella-ai',
    number: '01',
    title: 'Vella AI',
    subtitle: 'AI-Powered Business Chatbot Platform',
    summary: 'An on-premise business chatbot platform that answers customer inquiries accurately using companies\' own documentation, PDFs, and URLs with zero recurring cloud API fees.',
    highlights: [
      'Document and URL vector indexing pipeline for grounded RAG answers',
      'Python & FastAPI backend processing client requests via JSON REST APIs',
      'Local model execution via Ollama (Qwen 2.5) ensuring total data sovereignty',
      'MySQL database for secure session storage, authentication, and chat history'
    ],
    tech: ['Python', 'FastAPI', 'Qwen 2.5', 'Ollama', 'MySQL', 'Vector RAG', 'REST APIs'],
    metric: '100% ON-PREMISE AI // ZERO CLOUD FEES',
    githubUrl: 'https://github.com/Saint-void/backend-vellachat'
  },
  {
    id: 'vyra-drone',
    number: '02',
    title: 'Vyra',
    subtitle: 'Autonomous Drone Delivery & Fleet Monitoring',
    summary: 'A software platform for autonomous drone delivery and fleet management, integrating ArduPilot SITL simulation with real-time MAVLink telemetry streaming to web monitoring consoles.',
    highlights: [
      'ArduPilot Software-in-the-Loop (SITL) simulation for autonomous flight testing',
      'Bidirectional MAVLink telemetry parsing and 10Hz parameter streaming',
      'FastAPI communication layer streaming telemetry to web monitoring dashboards',
      'GPS waypoint mission planning and automated return-to-launch (RTL) fail-safes'
    ],
    tech: ['Python', 'FastAPI', 'ArduPilot SITL', 'MAVLink', 'Pixhawk', 'Telemetry', 'GPS'],
    metric: 'MAVLink 2.0 PROTOCOL // 10Hz TELEMETRY',
    githubUrl: 'https://github.com/Saint-void/vella-server-drone'
  },
  {
    id: 'fullstack-web',
    number: '03',
    title: 'Full-Stack Web & Backend Systems',
    summary: 'A production suite of full-stack web applications, microservices, and database architectures deployed with modern CI/CD pipelines.',
    highlights: [
      'Modular REST APIs built with Python FastAPI and Node.js/Express.js',
      'Relational and NoSQL database management across MySQL, PostgreSQL, and MongoDB',
      'Responsive, accessible frontends developed with HTML5, CSS3, JavaScript, and React',
      'Docker containerization and automated deployments via Render, Vercel, and Netlify'
    ],
    tech: ['FastAPI', 'Node.js', 'Express', 'PostgreSQL', 'MySQL', 'MongoDB', 'Docker', 'Vercel'],
    metric: 'MULTI-DATABASE // DOCKER & VERCEL DEPLOY',
    githubUrl: 'https://github.com/Saint-void?tab=repositories'
  }
];

// Curated live list of your actual GitHub repositories
const GITHUB_REPOSITORIES: GitHubRepo[] = [
  {
    name: 'backend-vellachat',
    repoName: 'Saint-void/backend-vellachat',
    description: 'FastAPI backend engine for Vella AI chatbot, handling vector knowledge-bases, Ollama local model inference, and JSON communication.',
    language: 'Python',
    url: 'https://github.com/Saint-void/backend-vellachat',
    tag: 'AI & BACKEND'
  },
  {
    name: 'vella-server-drone',
    repoName: 'Saint-void/vella-server-drone',
    description: 'Autonomous drone fleet server integrating ArduPilot SITL simulation, MAVLink telemetry parsing, and vehicle status streams.',
    language: 'Python',
    url: 'https://github.com/Saint-void/vella-server-drone',
    tag: 'AUTONOMOUS / SITL'
  },
  {
    name: 'cinevault',
    repoName: 'Saint-void/cinevault',
    description: 'Interactive media vault and web application showcasing frontend state management, dynamic routing, and API integration.',
    language: 'JavaScript',
    url: 'https://github.com/Saint-void/cinevault',
    tag: 'FULL-STACK WEB'
  },
  {
    name: 'dreamcrest-books',
    repoName: 'Saint-void/dreamcrest-books',
    description: 'TypeScript web platform with typed models, database schema operations, and modern component architecture.',
    language: 'TypeScript',
    url: 'https://github.com/Saint-void/dreamcrest-books',
    tag: 'TYPESCRIPT'
  },
  {
    name: 'student_portal_mms4',
    repoName: 'Saint-void/student_portal_mms4',
    description: 'Java enterprise management system demonstrating object-oriented patterns, student record databases, and service architecture.',
    language: 'Java',
    url: 'https://github.com/Saint-void/student_portal_mms4',
    tag: 'JAVA OOP'
  },
  {
    name: 'Volco',
    repoName: 'Saint-void/Volco',
    description: 'Wearable voice computing integration exploring embedded hardware, audio processing, and local AI model binding.',
    language: 'Python',
    url: 'https://github.com/Saint-void/Volco',
    tag: 'EMBEDDED AI'
  }
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'featured' | 'repositories'>('featured');

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header & Sub-Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
              // 03. ENGINEERING REPOSITORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
              Projects & Source Code
            </h2>
          </div>

          {/* Toggle between Featured Architecture & All GitHub Repos */}
          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeTab === 'featured'
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              FEATURED ARCHITECTURE
            </button>
            <button
              onClick={() => setActiveTab('repositories')}
              className={`px-4 py-2 rounded-lg text-xs font-mono tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'repositories'
                  ? 'bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GITHUB REPOSITORIES</span>
            </button>
          </div>
        </div>

        {/* TAB 1: FEATURED PROJECTS */}
        {activeTab === 'featured' && (
          <div className="space-y-8">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="p-8 sm:p-10 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 shadow-xs"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                        PROJECT // {project.number}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 font-semibold">
                        IN DEVELOPMENT
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="self-start sm:self-auto flex items-center gap-2">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-200/80 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                      {project.metric}
                    </span>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-zinc-200/60 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-colors inline-flex items-center"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2 pb-4">
                  {project.summary}
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pb-6">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="w-4 h-4 text-zinc-900 dark:text-zinc-100 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Bar & Direct Source Link */}
                <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-zinc-200/60 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-900 dark:text-white hover:underline"
                  >
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* TAB 2: GITHUB REPOSITORIES GRID */}
        {activeTab === 'repositories' && (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-zinc-900/40 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex items-center justify-between">
              <span>LIVE GITHUB WORKSPACES (@Saint-void)</span>
              <a
                href="https://github.com/Saint-void?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="text-zinc-900 dark:text-white font-semibold hover:underline inline-flex items-center gap-1"
              >
                <span>View all 40+ repos on GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {GITHUB_REPOSITORIES.map((repo, idx) => (
                <a
                  key={idx}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 hover:bg-zinc-100/80 dark:hover:bg-zinc-850/60 transition-all flex flex-col justify-between group shadow-xs cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-zinc-400">
                      <span className="px-2 py-0.5 rounded bg-zinc-200/70 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                        {repo.tag}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors" />
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <Github className="w-4 h-4 text-zinc-900 dark:text-white shrink-0" />
                      <h4 className="text-sm font-bold text-zinc-950 dark:text-white font-mono group-hover:underline truncate">
                        {repo.name}
                      </h4>
                    </div>

                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                      {repo.description}
                    </p>
                  </div>

                  <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-900 dark:bg-zinc-100" />
                      {repo.language}
                    </span>
                    <span className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                      Inspect code →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
