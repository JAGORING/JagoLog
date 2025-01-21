import type { MDXComponents } from 'mdx/types';
// import Image, { ImageProps } from 'next/image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => <h1 style={{ color: '#fff', }}>{children}</h1>,
    // img: (props: ImageProps) => <Image sizes="100vw"} {...props} />,
    ...components,
  };
}
