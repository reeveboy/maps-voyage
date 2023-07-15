import {
  faBookmark,
  faClock,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tour } from "~/pages/tour/[slug]";
import Carousel from "./Carousel";

interface HeroProps {
  tour: Tour;
}

export default function Hero({ tour }: HeroProps) {
  return (
    <div className="mt-4 flex flex-col px-4">
      <div className="flex flex-col">
        <h2 className="text-5xl text-dark">{tour.tourName}</h2>
        <div className="mt-2 flex items-center">
          <FontAwesomeIcon className="h-8 w-8 text-primary" icon={faStar} />
          <p className="ml-2 text-2xl font-light text-slate-600">
            {tour.stars}
          </p>
        </div>
        <div className="my-4 h-[2px] w-full bg-slate-600"></div>
        <div className="grid grid-cols-4">
          <div className="mx-2 flex flex-col items-center">
            <FontAwesomeIcon className="h-6 w-6 text-primary" icon={faClock} />
            <p className="mt-1 text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.days} days
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center">
            <FontAwesomeIcon className="h-6 w-6 text-primary" icon={faUser} />
            <p className="mt-1 text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.groupSize}
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center">
            <FontAwesomeIcon
              className="h-6 w-6 text-primary"
              icon={faBookmark}
            />
            <p className="mt-1 text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.cartegory}
            </p>
          </div>
          <div className="mx-2 flex flex-col items-center">
            <FontAwesomeIcon
              className="h-6 w-6 text-primary"
              icon={faLocationDot}
            />
            <p className="mt-1 text-center text-lg font-light capitalize leading-[120%] text-slate-500 ">
              {tour.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
