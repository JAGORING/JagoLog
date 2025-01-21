type Post = PostMatter & {
  url: string;
  content: string;
};
type PostMatter = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  date: string;
};
