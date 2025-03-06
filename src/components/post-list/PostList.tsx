import CategoryFilter from './CategoryFilter';
import PostCard from './PostCard';
import { getAllPosts, getCategoryList } from '@/libs/post';

interface PostListProps {
  category?: string;
}

const PostList = async ({ category = 'All' }: PostListProps) => {
  console.log('currentCategory category ', category);

  const postList: Post[] = await getAllPosts(category);
  const categoryList = await getCategoryList();

  return (
    <section className="mx-auto w-full max-w-[950px] lg:px-4">
      <CategoryFilter categoryList={categoryList} currentCategory={category} />

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {postList.length > 0 ? (
          postList.map((post) => <PostCard key={post.url + post.date} {...post} />)
        ) : (
          <p className="col-span-full text-center text-gray-400">해당 카테고리의 게시글이 없습니다.</p>
        )}
      </ul>
    </section>
  );
};

export default PostList;
