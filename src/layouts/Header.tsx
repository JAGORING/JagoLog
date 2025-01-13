import Link from 'next/link';
export const Header = () => {
  return (
    <header className="flex justify-center">
      <div className="flex justify-between px-4">
        <div>
          <Link href="/blog">blog</Link>
          <Link href="/about">About</Link>
        </div>
        <div>Hello!</div>
      </div>
    </header>
  );
};
