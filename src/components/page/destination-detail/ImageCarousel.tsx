interface ImageCarouselProps {
  images: string[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="flex overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="destination"
          className="mx-2 h-52 w-52 object-cover"
        />
      ))}
    </div>
  );
}
