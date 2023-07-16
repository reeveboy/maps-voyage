import {
  faClock,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { Tour } from "~/pages/tour/[slug]";

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="my-2 flex min-w-[220px] max-w-[300px] flex-col bg-white shadow-md">
      <Image
        className="h-36 w-full object-cover"
        src={tour.cardImage}
        alt={tour.tourName}
        width={1000}
        height={1000}
      />
      <div className="flex h-full flex-col p-2 md:p-4">
        <div className="flex items-end">
          <FontAwesomeIcon
            icon={faStar}
            className="h-4 w-4 text-primary md:h-5 md:w-5"
          />
          <p className="ml-1 text-xs font-light text-slate-500">
            {tour.stars} Superb
          </p>
        </div>
        <p className="mt-3 text-xl font-light leading-[95%] text-dark md:mt-4">
          {tour.tourName}
        </p>
        <p className="text-md mt-1 line-clamp-3 font-light leading-[120%] text-slate-500 md:mt-4 md:line-clamp-4">
          {tour.description}
        </p>
        <div className="mt-auto">
          <div className="mt-3 h-[1px] bg-slate-500 md:mt-4"></div>
          <div className="mt-2 flex justify-center md:mt-4">
            <div className="mr-2 flex items-center text-slate-500 md:mr-3">
              <FontAwesomeIcon icon={faClock} className="mr-1 h-3 w-3" />

              <p className="text-xs font-light">{tour.days} Days</p>
            </div>

            <div className="mr-2 flex items-center text-slate-500 md:mr-3">
              <FontAwesomeIcon icon={faUser} className="mr-1 h-3 w-3" />

              <p className="text-xs font-light">{tour.groupSize}</p>
            </div>

            <div className="flex items-center text-slate-500">
              <FontAwesomeIcon icon={faLocationDot} className="mr-1 h-3 w-3" />

              <p className="text-xs font-light">{tour.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
