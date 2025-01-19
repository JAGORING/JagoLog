import { getAllPosts } from '@/libs/post';

const getAllPostList = async () => getAllPosts();

export default async function Home() {
  const posts = await getAllPostList();
  console.log('postsposts  ::  ', posts);

  return <section>Main Page</section>;
}
