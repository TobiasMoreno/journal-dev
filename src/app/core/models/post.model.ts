export type PostType =
  | 'learning'
  | 'career'
  | 'project'
  | 'failure'
  | 'thinking'
  | 'linkedin';

export type PostLevel = 'intro' | 'medium' | 'deep';

export interface PostSection {
  heading: string;
  body: string;
  image?: string;
}

export interface Post {
  id: string;
  title: string;
  date: string;
  tags: string[];
  type: PostType;
  level: PostLevel;
  summary: string;
  featured?: boolean;
  linkedin?: string;
  sections?: PostSection[];
}
