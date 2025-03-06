interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img src={src} alt={alt} className="mx-auto mb-0 mt-6 rounded-md" />
      {alt !== '' && <span className="mb-6 mt-3 block text-center text-sm text-accent-foreground">{alt}</span>}
    </>
  );
};
