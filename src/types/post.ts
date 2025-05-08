export type Post = PostMatter & {
  url: string;
  content: string;
  toc?: TocItem[];
};
export type PostMatter = {
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  date: string;
};

export type TocItem = {
  id: string;
  text: string;
  depth: number;
};

interface ProjectDetails {
  purpose: string;
  techs: string[];
  roles: string[];
  highlights: string[];
  features?: string[];
  goals?: string[];
  images?: string[];
}

export interface SideProject {
  title: string;
  period: string;
  description: string;
  type: string;
  demoSite?: string;
  details: ProjectDetails;
}
