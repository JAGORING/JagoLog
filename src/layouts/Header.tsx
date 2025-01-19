import Link from 'next/link';
export const Header = () => {
  return (
    <header className="h-[60px] flex items-center">
      <div className="w-full max-w-[1000px] flex justify-between px-4">
        <div>
          <Link href="/blog">blog</Link>
          <Link href="/about">About</Link>
        </div>
        <div>Hello!</div>
      </div>
    </header>
  );
};
