import type { Tour } from "~/pages/tour/[slug]";
import { TOURS } from "../landing/Tours";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faClock,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function AllTours() {
  return (
    <div className="my-8 flex flex-col px-4">
      <p className="text-3xl font-light capitalize text-dark">
        {TOURS.length} tours found
      </p>
      <div className="mt-4 flex flex-col justify-center">
        {TOURS.map((tour, idx) => (
          <TourCard tour={tour} key={idx} />
        ))}
      </div>
    </div>
  );
}

interface TourCardProps {
  tour: Tour;
}

function TourCard({ tour }: TourCardProps) {
  return (
    <div className="my-2 grid w-full grid-cols-1 bg-white shadow-md md:grid-cols-3">
      <Image
        className="h-64 w-full object-cover"
        src={tour.cardImage}
        alt={tour.tourName}
        width={1000}
        height={1000}
      />
      <div className="flex h-full flex-col justify-center p-6 md:col-span-2">
        <div className="flex items-end justify-between">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faStar} className="h-6 w-6 text-primary" />
            <p className="text-md ml-1 font-light text-slate-500">
              {tour.stars} Superb
            </p>
          </div>
        </div>
        <p className="mt-4 text-3xl leading-[95%] text-slate-700">
          {tour.tourName}
        </p>
        <p className="text-xl font-light text-slate-500">{tour.location}</p>
        {/* <p className="text-md line-clamp-2 hidden font-light leading-[120%] text-slate-500 md:line-clamp-4 md:block">
          {tour.description}
        </p> */}
        <div className="mt-4 ">
          <div className="h-[1px] bg-slate-500"></div>
          <div className="mt-4 flex justify-center md:justify-start">
            <div className="mr-4 flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                className="mr-1 h-5 w-5 text-primary"
              />
              <p className="text-md font-light text-slate-500">
                {tour.days} Days
              </p>
            </div>

            <div className="mr-4 flex items-center">
              <FontAwesomeIcon
                icon={faUser}
                className="mr-1 h-5 w-5 text-primary"
              />
              <p className="text-md font-light text-slate-500">
                {tour.groupSize}
              </p>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBookmark}
                className="mr-1 h-5 w-5 text-primary"
              />
              <p className="text-md font-light capitalize text-slate-500">
                {tour.cartegory}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
