import { BASE_PATH, POSTS_PATH } from '@/constants/config';

import fs from 'fs';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import { sync } from 'glob';

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: 'utf8' });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    return {
      ...grayMatter,
      slug: postPath.slice(postPath.indexOf(BASE_PATH)).replace('.mdx', ''),
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
      content,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllPosts = () => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;
    return [...ac, post];
  }, []);
};
