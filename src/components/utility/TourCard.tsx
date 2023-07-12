import {
  faClock,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface Tour {
  tourName: string;
  stars: number;
  description: string;
  days: number;
  groupSize: string;
  location: string;
  imgUrl: string;
}

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  return (
    <div className="my-2 w-full bg-white shadow-md">
      <img className="h-60 w-full object-cover" src={tour.imgUrl} alt="" />
      <div className="mt-2 flex flex-col p-4">
        <div className="flex">
          <FontAwesomeIcon icon={faStar} className="h-4 text-primary" />
          <p className="p-1"></p>
          <p className="text-md font-light text-slate-500">
            {tour.stars} Superb
          </p>
        </div>
        <p className="mt-2 text-3xl font-light text-dark">{tour.tourName}</p>
        <p className="mt-2 text-xl font-light leading-[120%] text-slate-600">
          {tour.description}
        </p>
        <p className="my-4 h-[1px] w-full bg-slate-500"></p>
        <div className="flex justify-center">
          <div className="mx-2 flex items-center text-slate-500">
            <FontAwesomeIcon icon={faClock} className="mr-1 h-5" />

            <p className="text-md font-light">{tour.days} Days</p>
          </div>

          <div className="mx-2 flex items-center text-slate-500">
            <FontAwesomeIcon icon={faUser} className="mr-1 h-5" />

            <p className="text-md font-light">{tour.groupSize}</p>
          </div>

          <div className="mx-2 flex items-center text-slate-500">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1 h-5" />

            <p className="text-md font-light">{tour.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
