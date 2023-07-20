import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

type Section = {
  img: string;
  title: string;
  btn: string;
  href: string;
};

const sections: Section[] = [
  {
    img: "/images/hero-1.jpg",
    title: "Explore the World with Our Tours",
    btn: "Check out Destinations!",
    href: "/destinations",
  },
  {
    img: "/images/hero-2.jpg",
    title: "Creating Unforgettable Travel Experiences",
    btn: "Explore our Tours!",
    href: "/tours",
  },
  {
    img: "/images/hero-3.jpg",
    title: "Travel with Peace of Mind",
    btn: "Read about us!",
    href: "/about",
  },
];

export default function Hero() {
  return (
    <Carousel
      responsive={responsive}
      ssr
      autoPlay
      autoPlaySpeed={5000}
      draggable={false}
      infinite
    >
      {sections.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
}

interface ItmeProps {
  item: Section;
}

const Item = ({ item }: ItmeProps) => {
  return (
    <div className="relative h-screen w-full bg-black/40">
      <Image
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src={item.img}
        alt="Hero Image"
        width={1920}
        height={1080}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <p className="max-w-md px-1 text-center text-6xl font-black leading-[85%] text-light drop-shadow-lg">
          {item.title}
        </p>
        <Link
          href={item.href}
          className="mt-4 bg-primary px-8 py-3 text-light transition-colors hover:bg-primaryDark focus:bg-primaryDark"
        >
          {item.btn}
        </Link>
      </div>
    </div>
  );
};
