import Image from 'next/image';
import Link from 'next/link';

export default function PostCard(props: Post) {
  return (
    <Link href={props.url} className="block h-full">
      <div className="relative h-full flex flex-col rounded-2xl border border-white/10 bg-white/5 shadow-md transition-all duration-300 hover:border-white/50 hover:shadow-lg">
        {props.thumbnail && (
          <div className="w-full h-48 rounded-t-xl overflow-hidden">
            <Image
              src={props.thumbnail}
              alt={`thumbnail for ${props.title}`}
              width={300}
              height={200}
              className="w-full h-full"
            />
          </div>
        )}
        <div className="p-3 flex flex-col flex-grow">
          <div className="text-gray-300 text-sm">{props.date}</div>
          <p className="text-lg font-semibold text-white mt-1 line-clamp-1">{props.title}</p>
          <p className="text-xs text-gray-200 mt-1 line-clamp-2 flex-grow">{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
