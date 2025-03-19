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
      url: `/blog/${category}/${slug}`,
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
  const categoryPath = !category || category !== 'All' ? category : '**';
  const postPaths: string[] = sync(`${POSTS_PATH}/${categoryPath}/*.mdx`);
  return postPaths.reduce<Post[]>((ac, postPath) => {
    const post = parsePost(postPath);
    if (!post) return ac;
    return sortPostListByDate([...ac, post]);
  }, []);
};

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const detail = await parsePost(filePath);
  if (detail) {
    detail.toc = await getHeadingForToc(detail.content);
  }

  return detail;
};

export const getCategoryList = () => {
  const categoryPaths: string[] = sync(`${POSTS_PATH}/*`);
  const categoryList = categoryPaths.map((cp) => cp.split(path.sep).slice(-1)?.[0]);
  return ['All', ...categoryList];
};

export const getHeadingForToc = async (content: string): Promise<TocItem[]> => {
  const toc: TocItem[] = [];
  const headingRegex = /^(#{1,6})\s+(.*)$/gm;
  let match;
  const idCount: Record<string, number> = {};

  while ((match = headingRegex.exec(content)) !== null) {
    const hashes = match[1];
    const text = match[2].trim();
    let id = text
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .trim()
      .replace(/\s+/g, '-');

    if (!id) {
      id = 'heading';
    }

    if (idCount[id] !== undefined) {
      idCount[id] += 1;
      id = `${id}-${idCount[id]}`;
    } else {
      idCount[id] = 0;
    }

    toc.push({ id, text: text, depth: hashes.length });
  }

  return toc;
};

const sortPostListByDate = (postList: Post[]) => {
  return postList.sort((post1, post2) => new Date(post2.date).getTime() - new Date(post1.date).getTime());
};
