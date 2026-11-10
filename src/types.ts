export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  icon: string;
  status: 'In Development' | 'Prototype' | 'Active Production';
  category: 'AI & Chatbots' | 'Autonomous Systems' | 'Full-Stack Systems';
  highlights: string[];
  tech: string[];
  metrics?: { label: string; value: string }[];
  details: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface Competency {
  title: string;
  description: string;
  icon: string;
  badge: string;
}
