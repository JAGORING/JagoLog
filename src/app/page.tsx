import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/libs/post';

const getAllPostList = async () => getAllPosts();

export default async function Home() {
  const postList: Post[] = await getAllPostList();

  return (
    <section>
      Main Page
      <ul>
        {postList.map((post) => (
          <li key={post.url + post.date}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
