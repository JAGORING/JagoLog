import PostContent from '@/components/mdx/PostContent';
import { PostHeader } from '@/components/mdx/PostHeader';
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
      {post && <PostContent content={post.content} />}
    </section>
  );
};
export default PostDetail;
