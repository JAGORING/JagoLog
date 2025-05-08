import PostContent from '@/components/mdx/PostContent';
import { PostHeader } from '@/components/mdx/PostHeader';
import TOCSide from '@/components/post-detail/TOCSide';
import TOCTop from '@/components/post-detail/TOCTop';
import { getAllPosts, getPostDetail } from '@/libs/post';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { category: string; slug: string };
};

export async function generateMetadata({ params: { category, slug } }: Props): Promise<Metadata> {
  const post = await getPostDetail(category, slug);
  if (!post) notFound();
  const title = `JAGORING | ${post.title}`;

  return {
    title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts('All');

  return posts.map((post) => {
    const parts = post.url.split('/').filter(Boolean);
    return {
      category: parts[1],
      slug: parts[2],
    };
  });
}

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);
  console.log(post);

  return (
    <section>
      {post && <PostHeader post={post} />}
      <TOCTop toc={post?.toc || []} />
      <article className="relative">
        <TOCSide toc={post?.toc || []} />
        {post && <PostContent content={post.content} />}
      </article>
    </section>
  );
};
export default PostDetail;
