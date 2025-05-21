import { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import CustomCodeBlock from './CustomCodeBlock';
import { ImageCom } from './Image';
import { ComponentType } from 'react';

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link
        {...props}
        href={props.href || ''}
        className="underline underline-offset-4 text-pointColor whitespace-normal break-words "
      >
        {children}
      </Link>
    );
  },
  code: ({ ...props }) => {
    return <CustomCodeBlock {...props} />;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  img: ImageCom as ComponentType<any>,
  h1: (props) => <h1 className="text-2xl font-bold my-6" {...props} />,
  h2: (props) => <h2 className="text-xl font-semibold my-5" {...props} />,
  h3: (props) => <h3 className="text-lg font-semibold my-5" {...props} />,
  p: (props) => <p className="text-md my-4" {...props} />,
  ul: (props) => <ul className="text-md list-disc pl-5 my-4" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  table: (props) => <table className="w-full border-collapse border text-sm my-6" {...props} />,
  thead: (props) => <thead className="bg-foreground text-background text-left font-semibold" {...props} />,
  tr: (props) => <tr className="border-b " {...props} />,
  th: (props) => <th className="px-4 py-2 text-left" {...props} />,
  td: (props) => <td className="px-4 py-2" {...props} />,
};
