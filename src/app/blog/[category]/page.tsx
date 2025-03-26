import PostList from '@/components/post-list/PostList';
import { Metadata } from 'next';

type Props = {
  params: { category?: string };
};

export async function generateMetadata({ params: { category } }: Props): Promise<Metadata> {
  const title = `JAGORING | ${category}`;

  return {
    title,
  };
}

const CategoryPage = ({ params }: Props) => {
  return <PostList category={params.category} />;
};
export default CategoryPage;
