import { Code, Server, Database, Bot, Cpu, Layers } from 'lucide-react';

const SKILL_SECTIONS = [
  {
    category: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', detail: 'FastAPI, local LLMs, AI integrations, ArduPilot SITL' },
      { name: 'JavaScript', detail: 'ES6+, Node.js runtime, asynchronous interfaces' },
      { name: 'Java', detail: 'OOP, Spring Boot patterns, data structures' },
      { name: 'SQL', detail: 'Relational schema design, normalization, joins' },
      { name: 'HTML5 & CSS3', detail: 'Responsive web layouts, semantic markup, Tailwind' }
    ]
  },
  {
    category: 'Backend Architecture',
    icon: Server,
    skills: [
      { name: 'FastAPI (Python)', detail: 'High-throughput async APIs, Pydantic validation' },
      { name: 'Node.js & Express.js', detail: 'REST microservices, middleware, service routing' },
      { name: 'Spring Boot', detail: 'Enterprise backend structure, MVC architecture' },
      { name: 'REST API Design', detail: 'JSON data communication schemas, error handling' }
    ]
  },
  {
    category: 'AI & Local LLMs',
    icon: Bot,
    skills: [
      { name: 'Local Model Deployment', detail: 'Ollama runtime, Qwen 2.5, Llama models' },
      { name: 'Embeddings & RAG', detail: 'Document & URL knowledge-base vectorization' },
      { name: 'Business Chatbots', detail: 'Vella AI private customer query platform' },
      { name: 'AI API Integrations', detail: 'External AI endpoints, webhook bridges' }
    ]
  },
  {
    category: 'Databases & Storage',
    icon: Database,
    skills: [
      { name: 'MySQL', detail: 'Relational persistence, user auth, and chat history' },
      { name: 'PostgreSQL', detail: 'Relational schemas, constraints, transactions' },
      { name: 'MongoDB', detail: 'Document-based NoSQL storage, flexible collections' },
      { name: 'Supabase', detail: 'Managed PostgreSQL, authentication, real-time data' }
    ]
  },
  {
    category: 'Autonomous Systems',
    icon: Cpu,
    skills: [
      { name: 'ArduPilot Simulation', detail: 'Software-in-the-Loop (SITL) autonomous test runs' },
      { name: 'MAVLink Telemetry', detail: 'Bidirectional vehicle telemetry communication' },
      { name: 'Pixhawk Flight Controllers', detail: 'Hardware telemetry, GPS integration, fail-safes' },
      { name: 'Hardware-Software Links', detail: 'Ground control dashboards, telemetry visualization' }
    ]
  },
  {
    category: 'DevOps & Tooling',
    icon: Layers,
    skills: [
      { name: 'Git & GitHub', detail: 'Version control, branch management, CI/CD workflows' },
      { name: 'Docker', detail: 'Containerization of backend APIs and microservices' },
      { name: 'Render', detail: 'Backend service and API deployment and hosting' },
      { name: 'Vercel & Netlify', detail: 'Frontend application hosting and continuous integration' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500 block mb-2">
            // 04. CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-white">
            Technical Stack
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 max-w-xl">
            Core competence spanning backend frameworks, local machine intelligence, and flight software.
          </p>
        </div>

        {/* 6-Grid Technical Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_SECTIONS.map((sec, idx) => {
            const IconComp = sec.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-zinc-50 dark:bg-zinc-900/40 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 pb-3 mb-3">
                    <IconComp className="w-4 h-4 text-zinc-900 dark:text-zinc-100" />
                    <h3 className="text-xs font-bold tracking-tight text-zinc-950 dark:text-white uppercase font-mono">
                      {sec.category}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {sec.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="text-xs">
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 block">
                          {skill.name}
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400 font-mono text-[11px] leading-tight block">
                          {skill.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
