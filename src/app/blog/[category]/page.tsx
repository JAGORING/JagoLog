import PostList from '@/components/post-list/PostList';
import { getCategoryList } from '@/libs/post';
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

export const dynamicParams = false;

export async function generateStaticParams() {
  const categoryList = await getCategoryList();
  const paramList = categoryList.map((category) => ({ category }));
  return paramList;
}

const CategoryPage = ({ params }: Props) => {
  return <PostList category={params.category} />;
};
export default CategoryPage;
