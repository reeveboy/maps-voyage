interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  return (
    <div className="mt-8 flex flex-col px-4">
      <img className="h-96 w-full" src={images[0]} alt="" />
      <div className="flex overflow-hidden">
        {images.map((image, index) => (
          <img key={index} className="mr-2 mt-2 h-24 w-24" src={image} alt="" />
        ))}
      </div>
    </div>
  );
}
