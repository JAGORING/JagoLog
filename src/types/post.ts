type Post = PostMatter & {
  content: string;
  slug: string;
};
type PostMatter = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  date: string;
};
