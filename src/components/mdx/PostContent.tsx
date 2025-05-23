import { mdxComponents } from '@/components/mdx/MdxComponent';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkBreaks from 'remark-breaks';
import remarkToc from 'remark-toc';
import { MDXRemote } from 'next-mdx-remote/rsc';

const PostContent = ({ content }: { content: string }) => {
  return (
    <div className="px-2 prose prose-lg dark:prose-invert max-w-none">
      <MDXRemote
        source={content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            remarkPlugins: [
              remarkGfm, // Github Flavored Markdown(GFM) 사용 플러그인
              remarkBreaks, // mdx > 1줄 개행
              remarkToc,
            ],
            rehypePlugins: [
              rehypeSlug,
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
    </div>
  );
};

export default PostContent;
