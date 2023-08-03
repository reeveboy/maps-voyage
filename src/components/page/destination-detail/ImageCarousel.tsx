import Image from "next/image";
import Carousel from "react-multi-carousel";

interface ImageCarouselProps {
  images: string[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 120,
  },
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel
      containerClass="mt-4"
      responsive={responsive}
      ssr={true}
      partialVisible={true}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/destinations${image}`}
          alt="destination"
          className="mx-2 h-52 w-52 object-cover"
          width={300}
          height={300}
          priority={true}
        />
      ))}
    </Carousel>
  );
}
