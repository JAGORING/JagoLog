import Link from 'next/link';

interface Props {
  toc: TocItem[];
}

const TOCTop = ({ toc }: Props) => {
  if (toc.length === 0) return null;

  return (
    <nav className="xl:hidden">
      <h2 className="font-bold text-2xl">Table of contents</h2>
      <ul className="-mt-2 py-5 px-4 list-disc">
        {toc.map((item) => (
          <li key={item.id} style={{ marginLeft: `${item.depth - 1}rem` }} className={`transition-all py-2`}>
            <Link
              href={`#${item.id}`}
              className="block text-ms text-accent-foreground underline underline-offset-[5px] decoration-wavy decoration-subcolor hover:text-pointColor hover:decoration-pointColor transition-colors"
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
