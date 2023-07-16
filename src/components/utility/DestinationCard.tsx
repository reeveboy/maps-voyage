import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface DestinationCardProps {
  destinationName: string;
  tours: number;
  imgUrl: string;
  variant?: "vertical" | "horizontal" | "square";
  index: number;
}

export default function DestinationCard({
  destinationName,
  imgUrl,
  tours,
  variant,
  index,
}: DestinationCardProps) {
  return (
    <div
      className={classNames(
        "relative h-52 w-full bg-black/60",
        index == 0 || index == 1
          ? "md:row-span-2 md:h-[500px]"
          : "md:col-span-2 md:h-full"
      )}
    >
      <img
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src={imgUrl}
        alt={destinationName}
      />
      <div className="relative flex h-full items-end justify-between p-4">
        <div>
          <p className="text-xl text-light">{destinationName}</p>
          <p className="text-md font-light text-slate-200">{tours} Tours</p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-light">
          <FontAwesomeIcon className="h-6 text-dark" icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}
