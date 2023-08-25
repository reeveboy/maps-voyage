import {
  faBookmark,
  faClock,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Tour } from "@prisma/client";
import Link from "next/link";

interface TourCardProps {
  tour: Tour;
  place: string;
}

export default function TourCard({ tour, place }: TourCardProps) {
  return (
    <Link
      href={`/tour/${tour.id}`}
      className="group mb-4 grid w-full grid-cols-1 bg-white shadow-md md:grid-cols-3"
    >
      <div className="overflow-hidden">
        {/*  eslint-disable-next-line @next/next/no-img-element */}
        <img
          id={tour.name}
          className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 md:h-[17rem]"
          src={`/destinations${tour.banner}`}
          alt={tour.name}
        />
      </div>
      <div className="flex h-full flex-col px-4 py-8 transition-shadow duration-200 group-hover:shadow-lg md:col-span-2 md:justify-center">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faStar} className="h-6 w-6 text-primary" />
          <p className="text-md ml-1 font-light text-slate-500">
            {tour.rating} Superb
          </p>
        </div>
        <p className="mt-4 text-3xl leading-[95%] text-slate-700">
          {tour.name}
        </p>
        <p className="text-xl font-light text-slate-500">{place}</p>
        <div className="mt-4 h-[1px] bg-slate-200"></div>
        <div className="mt-4 flex justify-center md:justify-start">
          <div className="mr-4 flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="mr-1 h-5 w-5 text-primary"
            />
            <p className="text-sm font-light text-slate-500">
              {tour.duration} Days
            </p>
          </div>

          <div className="mr-4 flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-1 h-5 w-5 text-primary"
            />
            <p className="text-sm font-light text-slate-500">
              {tour.groupSize}
            </p>
          </div>

          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faBookmark}
              className="mr-1 h-5 w-5 text-primary"
            />
            <p className="text-sm font-light capitalize text-slate-500">
              {tour.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
