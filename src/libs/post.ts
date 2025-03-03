import { BASE_PATH, POSTS_PATH } from '@/constants/config';

import fs from 'fs';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import { sync } from 'glob';
import path from 'path';

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: 'utf8' });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    const path = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}`, '').replace('.mdx', '');
    const [category, slug] = path.split('\\');

    return {
      ...grayMatter,
      url: `blog/${category}/${slug}`.replace(' ', '_'),
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
      thumbnail: `/posts/${category}/${slug}/thumbnail.png`,
      content,
    };
  } catch (e) {
    console.error(e);
  }
};

export const getAllPosts = (category?: string) => {
  const categoryPath = category ? category : '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${categoryPath}/*.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;
    return [...ac, post];
  }, []);
};

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};

export const getCategoryList = () => {
  const categoryPaths: string[] = sync(`${POSTS_PATH}/*`);
  const categoryList = categoryPaths.map((cp) => cp.split(path.sep).slice(-1)?.[0]);
  return categoryList;
};
