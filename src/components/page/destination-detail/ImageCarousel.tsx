import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="flex overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt="destination"
          className="mx-2 h-52 w-52 object-cover"
          width={300}
          height={300}
        />
      ))}
    </div>
  );
}
