import { Post } from '@/types/post';

interface Props {
  post: Post;
}
export const PostHeader = ({ post }: Props) => {
  return (
    <header className="mb-4 border-b border-foreground py-3">
      <h1 className="text-3xl font-bold">
        {post.title} <span className="text-xs text-accent-foreground">{post.date}</span>
      </h1>
      <div className="text-sm text-accent-foreground mt-2">{post.description}</div>
    </header>
  );
};
