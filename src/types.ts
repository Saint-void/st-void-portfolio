export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'In Development' | 'Prototype' | 'Visions & Planning';
  areas: string[];
  tech: string[];
  details: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface Sector {
  name: string;
  description: string;
  icon: string;
  color: string;
}
