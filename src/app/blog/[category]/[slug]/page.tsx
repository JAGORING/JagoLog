import PostContent from '@/components/mdx/PostContent';
import { PostHeader } from '@/components/mdx/PostHeader';
import TOCSide from '@/components/post-detail/TOCSide';
import TOCTop from '@/components/post-detail/TOCTop';
import { getPostDetail } from '@/libs/post';

type Props = {
  params: { category: string; slug: string };
};

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
