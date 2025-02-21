import Link from 'next/link';

export default function PostCard(props: { image?: string; url: string; title: string; date: string }) {
  return (
    <Link href={props.url}>
      <div className="p-3">
        <div className="mb-1 text-sm">{props.date}</div>
        <p className="text-lg font-bold md:text-md">{props.title}</p>
      </div>
    </Link>
  );
}
