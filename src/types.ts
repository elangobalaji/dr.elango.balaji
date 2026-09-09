export interface StatItem {
  label: string;
  value: string;
  description?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  googleScholar?: string;
  phone?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
  link?: string;
  badge?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location: string;
  timezone: string;
  status: string;
  phone: string;
  socials: SocialLinks;
  stats: StatItem[];
  aboutParagraphs: string[];
  principles: { title: string; desc: string }[];
}

export type ProjectCategory = 'all' | 'operando' | 'materials' | 'ml' | 'visualization';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: 'operando' | 'materials' | 'ml' | 'visualization';
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  stars?: number;
  featured: boolean;
  metrics?: string;
  highlights: string[];
}

export type SkillCategory = 'diagnostics' | 'characterization' | 'synthesis' | 'computation' | 'domains';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: 'Expert' | 'Advanced' | 'Proficient';
  years?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  type: 'Doctoral Research' | 'Research Assistant' | 'Academic' | 'Full-time';
  description: string;
  achievements: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  details?: string;
  dissertation?: string;
  advisors?: string;
  gpa?: string;
}

export interface PublicationItem {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  status?: string;
  citations?: string | number;
  doi?: string;
  link?: string;
  highlight?: string;
  tags?: string[];
  bibtex?: string;
  leadAuthor?: boolean;
  abstract?: string;
}

export interface GrantItem {
  id: string;
  title: string;
  amount: string;
  agency: string;
  role: string;
  description: string;
  details: string;
}

export interface PresentationItem {
  id: string;
  title: string;
  event: string;
  year: string;
  details: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link?: string;
}

