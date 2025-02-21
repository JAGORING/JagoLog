import PostCard from './PostCard';
import { getAllPosts } from '@/libs/post';

const getAllPostList = async () => getAllPosts();

const PostList = async () => {
  const postList: Post[] = await getAllPostList();

  return (
    <section className="mx-auto mt-12 w-full max-w-[950px] px-4">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        {postList.map((post) => (
          <PostCard key={post.url + post.date} {...post} />
        ))}
      </ul>
    </section>
  );
};

export default PostList;
