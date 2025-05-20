import Image from 'next/image';
interface ImageProps {
  src: string;
  alt: string;
}

export const ImageCom = ({ src, alt }: ImageProps) => {
  return (
    <>
      <div className="mx-auto mb-6 w-full max-w-3xl">
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image src={src} alt={alt} fill className="object-contain" sizes="(max-width: 768px) 100vw, 500px" />
        </div>
        {alt && <span className="block text-center text-sm text-accent-foreground">{alt}</span>}
      </div>
    </>
  );
};
