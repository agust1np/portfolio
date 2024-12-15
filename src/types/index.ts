export interface IconType {
  id: string;
  label: string;
  iconUrl: string;
}

export interface SkillType {
  name: string;
  category: 'languages' | 'framework' | 'tools';
}

export interface ProjectType {
  name: string;
  description: string;
  technologies: string[];
}