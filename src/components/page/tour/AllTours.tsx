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
import { useEffect, useState } from "react";

interface AllToursProps {
  filteredTours: TourWithDestination[];
}

export default function AllTours({ filteredTours }: AllToursProps) {
  const [tours, setTours] = useState(filteredTours.slice(0, 10)); // [0, 10
  const [page, setPage] = useState(1);
  const lastPage = Math.ceil(filteredTours.length / 10);

  useEffect(() => {
    setTours(filteredTours.slice((page - 1) * 10, page * 10));
  }, [page, filteredTours]);

  const prevPage = () => {
    setPage((prev) => (prev == 1 ? prev : prev - 1));
  };

  const nextPage = () => {
    setPage((prev) => (prev == lastPage ? prev : prev + 1));
  };

  return (
    <div className="my-8 flex flex-col px-4">
      <div className="mt-3 flex items-center justify-between">
        <p className="text-2xl font-light text-dark">
          Showing {filteredTours.length} Results
        </p>
        <div className="flex">
          <button
            onClick={prevPage}
            className="grid h-12 w-12 place-items-center rounded-full bg-primary hover:bg-primaryDark"
          >
            <FontAwesomeIcon className="h-6 text-light" icon={faChevronLeft} />
          </button>
          <div className="ml-3 grid h-12 w-12 place-items-center rounded-full bg-slate-300">
            <p className="text-lg text-slate-600">{page}</p>
          </div>
          <button
            onClick={nextPage}
            className="ml-3 grid h-12 w-12 place-items-center rounded-full bg-primary hover:bg-primaryDark"
          >
            <FontAwesomeIcon className="h-6 text-light" icon={faChevronRight} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex flex-col justify-center">
        {tours.map((tour, idx) => (
          <TourCard tour={tour} key={idx} />
        ))}
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
      {/*  eslint-disable-next-line @next/next/no-img-element */}
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
