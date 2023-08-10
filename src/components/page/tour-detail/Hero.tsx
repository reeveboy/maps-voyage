import {
  faBookmark,
  faClock,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { TourWithDestination } from "~/types";

interface HeroProps {
  tour: TourWithDestination;
}

export default function Hero({ tour }: HeroProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h2 className="text-4xl text-dark">{tour.name}</h2>
        <div className="mt-2 flex items-center">
          <FontAwesomeIcon className="h-6 w-6 text-primary" icon={faStar} />
          <p className="ml-2 text-lg   font-light text-slate-600">
            {tour.rating} Superb
          </p>
        </div>
        <div className="my-4 h-[2px] w-full bg-slate-600"></div>
        <div className="mx-auto flex gap-4 md:mx-0 md:gap-8">
          <div className="mx-2 flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon className="h-5 w-5 text-primary" icon={faClock} />
            <p className="text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.duration} days
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon className="h-5 w-5 text-primary" icon={faUser} />
            <p className="text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.groupSize}
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon
              className="h-5 w-5 text-primary"
              icon={faBookmark}
            />
            <p className="text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.category}
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center gap-2 md:flex-row">
            <FontAwesomeIcon
              className="h-5 w-5 text-primary"
              icon={faLocationDot}
            />
            <p className="text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.destination.place}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
