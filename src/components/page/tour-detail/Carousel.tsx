import Image from "next/image";
import Carousel from "react-multi-carousel";

interface CarouselProps {
  images: string[];
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function CarouselContainer({ images }: CarouselProps) {
  return (
    <Carousel responsive={responsive} ssr className="mt-4">
      {images.map((image, index) => (
        <Image
          key={index}
          className="h-96 w-full object-cover"
          src={image}
          alt=""
          width={1920}
          height={1080}
        />
      ))}
      {/* <div className="flex overflow-hidden">
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
      </div> */}
    </Carousel>
  );
}
