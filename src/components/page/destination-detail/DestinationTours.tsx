import TourCard from "~/components/utility/TourCard";
import type { DestinationWithTours } from "~/types";

interface DestinationToursProps {
  destinationWithTours: DestinationWithTours;
}

export default function DestinationTours({
  destinationWithTours,
}: DestinationToursProps) {
  return (
    <div className="mt-4">
      <p className="text-3xl font-light text-dark">
        Our tours in {destinationWithTours.place}:
      </p>
      <div className="mt-4 flex flex-col justify-center">
        {destinationWithTours.tours.map((tour, idx) => (
          <TourCard tour={tour} place={destinationWithTours.place} key={idx} />
        ))}
      </div>
    </div>
  );
}
