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
};
