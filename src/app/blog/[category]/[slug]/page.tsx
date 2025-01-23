import { getPostDetail } from '@/libs/post';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Props = {
  params: { category: string; slug: string };
};

const PostDetail = async ({ params }: Props) => {
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);
  console.log(post);

  return (
    <section>
      <div>
        <div>Post Detail</div>
        <div>category : {category}</div>
        <div>slug : {slug}</div>
      </div>
      {post && (
        <div>
          <MDXRemote source={post.content} />
        </div>
      )}
    </section>
  );
};
export default PostDetail;
