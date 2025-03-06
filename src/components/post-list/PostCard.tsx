import Image from 'next/image';
import Link from 'next/link';

export default function PostCard(props: Post) {
  return (
    <Link href={props.url} className="block h-full">
      <div className="relative h-full flex flex-col rounded-lg border border-white/10 bg-white/5 shadow-md transition-all duration-300 hover:border-white/50 hover:shadow-lg">
        {props.thumbnail && (
          <div className="relative aspect-video w-full rounded-lg">
            <Image
              src={props.thumbnail}
              alt={`thumbnail for ${props.title}`}
              sizes="(max-width: 1000px) 50vw, 400px"
              fill
              priority
              className="rounded-t-lg"
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
        )}
        <div className="p-3 flex flex-col flex-grow">
          <div className="text-accent-foreground text-xs">{props.date}</div>
          <p className="text-lg font-semibold text-foreground line-clamp-1">{props.title}</p>
          <p className="text-xs text-accent-foreground mt-1 line-clamp-1 flex-grow lg:line-clamp-2">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
