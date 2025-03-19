import Link from 'next/link';

interface Props {
  toc: TocItem[];
}

const TOCTop = ({ toc }: Props) => {
  if (toc.length === 0) return null;

  return (
    <nav className="xl:hidden">
      <h2 id="table-of-contents-top">Table of contents</h2>
      <ul>
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${(item.depth - 1) * 16}px` }} className={`transition-all py-1`}>
            <Link
              href={`#${item.id}`}
              className="block text-sm text-accent-foreground hover:underline hover:text-pointColor transition-colors"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
    </nav>
  );
};

export default TOCTop;
