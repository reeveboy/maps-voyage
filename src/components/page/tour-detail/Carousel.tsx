import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <div className="mt-4 flex flex-col">
      <Image
        className="h-96 w-full"
        src={images[0] ?? ""}
        alt=""
        width={1500}
        height={1000}
      />
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <Image
            key={index}
            className="mr-2 mt-2 h-24 w-24"
            src={image}
            alt=""
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
