import {
  faBookmark,
  faClock,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { Tour } from "@prisma/client";
import Link from "next/link";
import type { DestinationWithTours } from "~/types";

interface DestinationToursProps {
  destinationWithTours: DestinationWithTours;
}

export default function DestinationTours({
  destinationWithTours,
}: DestinationToursProps) {
  return (
    <div>
      <div className="mt-4 flex flex-col justify-center">
        {destinationWithTours.tours.map((tour, idx) => (
          <TourCard tour={tour} place={destinationWithTours.place} key={idx} />
        ))}
      </div>
    </div>
  );
}

interface TourCardProps {
  tour: Tour;
  place: string;
}

function TourCard({ tour, place }: TourCardProps) {
  return (
    <Link
      href={`/tour/${tour.id}`}
      className="my-2 grid w-full grid-cols-1 bg-white shadow-md md:grid-cols-3"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        id={tour.name}
        className="h-64 w-full object-cover"
        src={`/destinations${tour.banner}`}
        alt={tour.name}
        width={1000}
        height={1000}
      />
      <div className="flex h-full flex-col p-6 md:col-span-2 md:justify-center">
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
        <div className="mt-4 h-[1px] bg-slate-500"></div>
        <div className="mt-4 flex justify-center md:justify-start">
          <div className="mr-4 flex items-center">
            <FontAwesomeIcon
              icon={faClock}
              className="mr-1 h-5 w-5 text-primary"
            />
            <p className="text-md font-light text-slate-500">
              {tour.duration} Days
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
              {tour.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
