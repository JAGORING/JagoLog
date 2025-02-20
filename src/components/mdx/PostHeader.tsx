interface Props {
  post: Post;
}
export const PostHeader = ({ post }: Props) => {
  return (
    <header className="mb-4 border-b border-gray-300 py-3 dark:border-gray-700">
      <h1 className="text-3xl font-bold text-gray-50 dark:text-gray-900">
        {post.title} <span className="text-xs text-gray-200 dark:text-gray-400">{post.date}</span>
      </h1>
      <div className="text-sm text-gray-100 mt-1 dark:text-gray-400 mt-1">{post.description}</div>
    </header>
  );
};
