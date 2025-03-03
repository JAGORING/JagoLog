import PostList from '@/components/post-list/PostList';

type Props = {
  params: { category?: string };
};

const CategoryPage = ({ params }: Props) => {
  return <PostList category={params.category} />;
};
export default CategoryPage;
