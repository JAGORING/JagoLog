import Image from 'next/image';
import Link from 'next/link';

export default function PostCard(props: Post) {
  return (
    <Link href={props.url} className="block">
      <div className="relative p-4 rounded-2xl border border-white/10 bg-white/5 shadow-md transition-all duration-300 hover:border-white/50 hover:shadow-lg">
        {props.thumbnail && (
          <div className="w-full h-48 rounded-xl overflow-hidden">
            <Image
              src={props.thumbnail}
              alt={`thumbnail for ${props.title}`}
              width={300}
              height={200}
              className="w-full h-full"
            />
          </div>
        )}
        <div className="mt-3 text-gray-300 text-sm">{props.date}</div>
        <p className="text-lg font-semibold text-white">{props.title}</p>
        <p className="text-xs text-gray-200 mt-1">{props.description}</p>
      </div>
    </Link>
  );
}
