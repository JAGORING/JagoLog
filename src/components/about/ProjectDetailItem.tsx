export const ProjectDetailItem = ({ title, content, list }: { title: string; content?: string; list?: string[] }) => {
  if (!content && (!list || list.length === 0)) return null;

  return (
    <section className="mb-4">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      {content && <p className="text-accent-foreground whitespace-pre-line">{content}</p>}
      {list && list.length > 0 && (
        <ul className="list-disc ml-5 text-accent-foreground space-y-1 mt-2">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
