type Post = PostMatter & {
  url: string;
  content: string;
  toc?: TocItem[];
};
type PostMatter = {
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  date: string;
};

type TocItem = {
  id: string;
  text: string;
  depth: number;
};

interface ProjectDetails {
  purpose: string;
  techs: string[];
  features: string[];
  images?: string[];
}

interface SideProject {
  title: string;
  period: string;
  demoSite?: string;
  description: string;
  details: ProjectDetails;
}
