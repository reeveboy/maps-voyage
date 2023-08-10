import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faChevronLeft,
  faChevronRight,
  faClock,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import type { TourWithDestination } from "~/types";
import Link from "next/link";
import { useMemo, useState } from "react";
import axios from "axios";

interface AllToursProps {
  tours: TourWithDestination[];
  total: number;
}

export default function AllTours({ tours, total }: AllToursProps) {
  // const [pageTours, setPageTours] = useState<TourWithDestination[]>(tours);
  // const [pageNumber, setPageNumber] = useState<number>(0);

  // const newPage = useMemo(() => {
  //   return axios.get("http://localhost:3000/api/getPaginatedTours", {
  //     data: {
  //       take: 10,
  //       skip: 10 * pageNumber,
  //     },
  //   });
  // }, [pageNumber]).then((data) => {
  //   console.log(data.data);
  // });

  return (
    <div className="my-8 flex flex-col px-4">
      <p className="text-3xl font-light text-dark">
        {tours.length} of {total} tours
      </p>
      <div className="mt-4 flex flex-col justify-center">
        {tours.map((tour, idx) => (
          <TourCard tour={tour} key={idx} />
        ))}
      </div>
      <div className="mt-4 flex">
        <button className="grid h-12 w-12 place-items-center rounded-full bg-primary hover:bg-primaryDark focus:bg-primaryDark">
          <FontAwesomeIcon className="h-6 text-light" icon={faChevronLeft} />
        </button>
        <button className="ml-4 grid h-12 w-12 place-items-center rounded-full bg-primary hover:bg-primaryDark focus:bg-primaryDark">
          <FontAwesomeIcon className="h-6 text-light" icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

interface TourCardProps {
  tour: TourWithDestination;
}

function TourCard({ tour }: TourCardProps) {
  return (
    <Link
      href={`/tour/${tour.id}`}
      className="my-2 grid w-full grid-cols-1 bg-white shadow-md md:grid-cols-3"
    >
      <Image
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
        <p className="text-xl font-light text-slate-500">
          {tour.destination.place}
        </p>
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
