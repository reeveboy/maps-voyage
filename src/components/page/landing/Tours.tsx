import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import type { Prisma } from "@prisma/client";

type TourWithDestination = Prisma.TourGetPayload<{
  include: { destination: true };
}>;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface TourProps {
  tours: TourWithDestination[];
}

export default function Tours({ tours }: TourProps) {
  return (
    <div className="my-12 flex flex-col px-4 md:mx-auto md:max-w-6xl">
      <H3 title="FEATURED TOURS" />
      <H2>Most Popular Tours</H2>
      <Carousel
        containerClass="mt-4"
        responsive={responsive}
        ssr
        partialVisbile
        infinite
      >
        {tours.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </Carousel>
    </div>
  );
}

function TourCard({ tour }: { tour: TourWithDestination }) {
  return (
    <Link
      href={`/tour/${tour.id}`}
      className="my-2 flex min-w-[300px] flex-col bg-white shadow-md md:w-80"
    >
      <Image
        className="w-full object-cover"
        src={tour.images}
        alt={tour.name}
        width={1000}
        height={1000}
      />
      <div className="flex h-full flex-col p-4">
        <div className="flex items-end">
          <FontAwesomeIcon
            icon={faStar}
            className="h-4 w-4 text-primary md:h-5 md:w-5"
          />
          <p className="ml-1 text-xs font-light text-slate-500">
            {tour.rating} Superb
          </p>
        </div>
        <p className="mt-4 text-xl leading-[95%] text-dark">{tour.name}</p>
        <p className="text-md font-light text-slate-500">
          {tour.destination.place}
        </p>
        {/* <p className="text-md mt-1 line-clamp-3 font-light leading-[120%] text-slate-500 md:mt-4 md:line-clamp-4">
          {tour.description}
        </p> */}
        <div className="mt-auto">
          <div className="mt-4 h-[1px] bg-slate-500"></div>
          <div className="mt-4 flex justify-center">
            <div className="mr-2 flex items-center text-slate-500 md:mr-3">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-1 h-4 w-4 text-primary"
              />
              <p className="text-xs font-light">{tour.duration} Days</p>
            </div>

            <div className="mr-2 flex items-center text-slate-500 md:mr-3">
              <FontAwesomeIcon
                icon={faUser}
                className="mr-1 h-4 w-4 text-primary"
              />
              <p className="text-xs font-light">{tour.groupSize}</p>
            </div>

            <div className="mr-2 flex items-center capitalize text-slate-500 md:mr-3">
              <FontAwesomeIcon
                icon={faBookmark}
                className="mr-1 h-4 w-4 text-primary"
              />
              <p className="text-xs font-light">{tour.category}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
