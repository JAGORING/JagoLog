export default function PostCard(props: { image?: string; title: string; date: string }) {
  return (
    <div>
      <div className="p-3">
        <div className="mb-1 text-sm">{props.date}</div>
        <p className="text-lg font-bold md:text-md">{props.title}</p>
      </div>
    </div>
  );
}
