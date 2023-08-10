import Link from "next/link";
import DestinationCard from "~/components/utility/DestinationCard";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

import type { Destination } from "@prisma/client";

interface DestinationsProps {
  destinations: Destination[];
}

export default function Destinations({ destinations }: DestinationsProps) {
  return (
    <div className="my-12 flex flex-col px-4 md:mx-auto md:max-w-5xl">
      <H3 title="POPULAR DESTINATIONS" />
      <H2>Top Notch Destinations</H2>
      <p className="mt-4 text-lg font-light leading-[120%] text-slate-600">
        From the bustling streets of Delhi to the serene backwaters of Kerala,
        we have curated an incredible collection of experiences for you to
        explore.
      </p>
      <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-4 md:grid-rows-2">
        {destinations?.map((destination, index) => (
          <DestinationCard key={index} index={index} {...destination} />
        ))}
      </div>
      <div className="mx-auto">
        <Link href={"/destinations"}>
          <button className="mt-4 border-2 border-primary px-12 py-3 uppercase text-primary transition-colors hover:border-primaryDark hover:bg-primaryDark hover:text-light focus:border-primaryDark focus:bg-primaryDark focus:text-light">
            More Destinations!
          </button>
        </Link>
      </div>
    </div>
  );
}
