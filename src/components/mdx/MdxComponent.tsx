import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import CustomCodeBlock from './CustomCodeBlock';
import { Image } from './Image';

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link {...props} href={props.href || ''}>
        {children}
      </Link>
    );
  },
  code: ({ ...props }) => {
    return <CustomCodeBlock {...props} />;
  },
  img: Image as any,
  h1: (props) => <h1 className="text-2xl font-bold my-6" {...props} />,
  h2: (props) => <h2 className="text-xl font-semibold my-5" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold my-5" {...props} />,
  p: (props) => <p className="text-sm my-3" {...props} />,
  ul: (props) => <ul className="text-sm list-disc pl-5 my-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
};
