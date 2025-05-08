'use client';

import { TocItem } from '@/types/post';
import Link from 'next/link';

interface Props {
  toc: TocItem[];
}

const TOCSide = ({ toc }: Props) => {
  if (toc.length === 0) return null;
  return (
    <aside className="absolute left-full hidden h-[calc(100%+150px)] xl:block ">
      <div className="sticky top-[180px] z-10 ml-[4rem] w-[250px]">
        <div className="mb-4 border-l border-foreground px-4 py-2">
          <div className="mb-1 font-bold">Table of contents</div>
          <ul>
            {toc.map((item) => (
              <li key={item.id} style={{ marginLeft: `${item.depth - 1}rem` }} className={`transition-all py-1`}>
                <Link
                  href={`#${item.id}`}
                  className="block text-sm text-accent-foreground hover:text-pointColor transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default TOCSide;
