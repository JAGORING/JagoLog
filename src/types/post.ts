type Post = PostMatter & {
  url: string;
  content: string;
};
type PostMatter = {
  title: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  date: string;
};
