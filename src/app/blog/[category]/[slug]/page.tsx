import { mdxComponents } from '@/components/mdx/MdxComponent';
import { getPostDetail } from '@/libs/post';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';

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
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [
                  remarkGfm, // Github Flavored Markdown(GFM) 사용 플러그인
                ],
                rehypePlugins: [[rehypePrettyCode, { theme: { dark: 'github-dark-dimmed', light: 'github-light' } }]],
              },
            }}
          />
        </div>
      )}
    </section>
  );
};
export default PostDetail;
