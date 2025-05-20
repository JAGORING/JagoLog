import { POSTS_PATH } from '@/constants/config';
import fs from 'fs/promises';
import { access } from 'fs/promises';
import path from 'path';
import dayjs from 'dayjs';
import matter from 'gray-matter';
import { Post, PostMatter, TocItem } from '@/types/post';
import { glob } from 'glob';

const parsePost = async (postPath: string): Promise<Post | undefined> => {
  try {
    const file = await fs.readFile(postPath, { encoding: 'utf8' });
    const { content, data } = matter(file);
    const grayMatter = data as PostMatter;

    const rel = path.relative(POSTS_PATH, postPath).replace(/\.mdx$/, '');
    const [category, slug] = rel.split(path.sep);
    if (!slug) return;

    const thumbnail = await getThumbnailRelPath(category, slug);
    return {
      ...grayMatter,
      url: `/blog/${category}/${slug}`,
      tags: grayMatter.tags.filter(Boolean),
      date: dayjs(grayMatter.date).format('YYYY-MM-DD'),
      thumbnail,
      content,
    };
  } catch (e) {
    console.error(`[parsePost error] ${postPath}:`, e);
    return undefined;
  }
};

const getThumbnailRelPath = async (category: string, slug: string): Promise<string> => {
  const base = `/images/posts/${category}`;
  const specific = `${base}/${slug}/thumbnail.png`;
  const fallback = `${base}/thumbnail.png`;

  const fullPath = path.join(process.cwd(), 'public', specific);
  const exists = await access(fullPath)
    .then(() => true)
    .catch(() => false);

  return exists ? specific : fallback;
};

const sortPostListByDate = (postList: Post[]) =>
  postList.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getAllPosts = async (category?: string): Promise<Post[]> => {
  const raw = category && category !== 'All' ? `${POSTS_PATH}/${category}/*.mdx` : `${POSTS_PATH}/**/*.mdx`;

  const pattern = raw.replace(/\\/g, '/');
  const postPaths = await glob(pattern, {});

  const posts = await Promise.all(postPaths.map(parsePost));
  return sortPostListByDate(posts.filter((p): p is Post => !!p));
};

export const getPostDetail = async (category: string, slug: string): Promise<Post | undefined> => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const detail = await parsePost(filePath);
  if (detail) {
    detail.toc = await getHeadingForToc(detail.content);
  }
  return detail;
};

export const getCategoryList = async (): Promise<string[]> => {
  const categoryPaths = await glob(`${POSTS_PATH}/*`, {});
  const categoryList = categoryPaths.map((cp) => cp.split(path.sep).pop()!).filter(Boolean);
  return categoryList;
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

    if (!id) id = 'heading';

    if (idCount[id] !== undefined) {
      idCount[id] += 1;
      id = `${id}-${idCount[id]}`;
    } else {
      idCount[id] = 0;
    }

    toc.push({ id, text, depth: hashes.length });
  }

  return toc;
};
