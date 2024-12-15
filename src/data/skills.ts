export interface Skill {
  name: string;
  category: 'languages' | 'frameworks & libraries' | 'tools';
}

export const skills: Skill[] = [
  { name: 'Python', category: 'languages' },
  { name: 'C#', category: 'languages' },
  { name: 'JavaScript', category: 'languages' },
  { name: 'Bootstrap', category: 'frameworks & libraries' },
  { name: 'PostgreSQL', category: 'tools' },
  { name: 'React', category: 'frameworks & libraries' },
  { name: 'Django', category: 'frameworks & libraries' },
  { name: '.NET', category: 'frameworks & libraries' },
  { name: 'Git', category: 'tools' },
  { name: 'Linux', category: 'tools' }
];
