import { mdxComponents } from '@/components/mdx/MdxComponent';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { MDXRemote } from 'next-mdx-remote/rsc';

const PostContent = ({ content }: { content: string }) => {
  return (
    <MDXRemote
      source={content}
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm, // Github Flavored Markdown(GFM) 사용 플러그인
          ],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: { dark: 'github-dark-dimmed', light: 'github-light' },
              },
            ],
          ],
        },
      }}
    />
  );
};

export default PostContent;
