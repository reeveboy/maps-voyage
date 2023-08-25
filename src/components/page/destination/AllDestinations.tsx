import type { Destination } from "@prisma/client";
import DestinationCard from "~/components/utility/DestinationCard";

interface DestinationProps {
  destinations: Destination[];
}

export default function AllDestinations({ destinations }: DestinationProps) {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-2 p-4 md:mx-auto md:max-w-7xl md:grid-cols-4 md:grid-rows-2">
      {destinations.map((destination, index) => (
        <DestinationCard key={index} index={index} {...destination} />
      ))}
    </div>
  );
}
