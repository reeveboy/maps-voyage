import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import type { Destination } from "@prisma/client";

interface DestinationCardProps extends Destination {
  index: number;
}

export default function DestinationCard({
  id,
  banner,
  place,
  numberOfTours,
  index,
}: DestinationCardProps) {
  return (
    <Link
      href={`/destination/${id}`}
      className={classNames(
        "group relative h-52 w-full overflow-hidden bg-black/60",
        index % 8 == 0 || index % 8 == 1 || index % 8 == 5 || index % 8 == 6
          ? "md:row-span-2 md:h-[500px]"
          : "md:col-span-2 md:h-full"
      )}
    >
      <Image
        className="absolute h-full w-full object-cover mix-blend-overlay transition-transform duration-300 group-hover:scale-105"
        src={`/destinations${banner}`}
        alt={place}
        width={1000}
        height={1000}
      />
      <div className="relative flex h-full items-end justify-between p-4">
        <div>
          <p className="text-xl text-light">{place}</p>
          <p className="text-md font-light text-slate-200">
            {numberOfTours} Tours
          </p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-light transition-colors duration-150 group-hover:bg-primary">
          <FontAwesomeIcon
            className="h-6 text-dark transition-colors duration-150 group-hover:text-light"
            icon={faChevronRight}
          />
        </div>
      </div>
    </Link>
  );
}
