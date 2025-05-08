import Image from 'next/image';
interface ImageProps {
  src: string;
  alt: string;
}

export const ImageCom = ({ src, alt }: ImageProps) => {
  return (
    <>
      <div className="relative mx-auto mt-6 mb-0 h-60 w-full max-w-md overflow-hidden rounded-md">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
      </div>
      {alt !== '' && <span className="mb-6 mt-3 block text-center text-sm text-accent-foreground">{alt}</span>}
    </>
  );
};
