import { BASE_PATH, POSTS_PATH } from '@/constants/config';

import fs from 'fs';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import { sync } from 'glob';
import path from 'path';
import { Post, PostMatter, TocItem } from '@/types/post';

const parsePost = (postPath: string): Post | undefined => {
  try {
    const file = fs.readFileSync(postPath, { encoding: 'utf8' });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    const _path = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}`, '').replace('.mdx', '');

    const parts = _path.split(/[/\\]/).filter(Boolean);
    if (parts.length < 2) {
      console.error('Unexpected path format:', _path);
      return undefined;
    }
    const [category, slug] = parts;

    console.log('Parsed values:', { category, slug });

    if (!category || !slug) {
      console.error('Missing category or slug:', { category, slug });
      return undefined;
    }
    const thumbnailPath1 = path.join(process.cwd(), 'public', 'posts', category, slug, 'thumbnail.png');

    const thumbnail = fs.existsSync(thumbnailPath1)
      ? `/posts/${category}/${slug}/thumbnail.png`
      : `/posts/${category}/thumbnail.png`;

    return {
      ...grayMatter,
      url: `/blog/${category}/${slug}`,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
      thumbnail,
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
