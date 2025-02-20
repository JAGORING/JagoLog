import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import CustomCodeBlock from '../CustomCodeBlock';

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
  h1: (props) => <h1 className="text-2xl font-bold my-4" {...props} />,
  h2: (props) => <h2 className="text-xl font-semibold my-4" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold my-4" {...props} />,
  p: (props) => <p className="text-sm text-gray-200 my-2" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 my-2" {...props} />,
  li: (props) => <li className="mb-1" {...props} />,
};
