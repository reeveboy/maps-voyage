import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import type { TourWithDestination } from "~/types";
import { useEffect, useState } from "react";
import TourCard from "~/components/utility/TourCard";

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
          <TourCard tour={tour} place={tour.destination.place} key={idx} />
        ))}
      </div>
    </div>
  );
}
