import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DestinationCardProps {
  destinationName: string;
  tours: number;
  imgUrl: string;
}

export default function DestinationCard(props: DestinationCardProps) {
  return (
    <div className="relative mt-2 h-52 w-full bg-black/60">
      <img
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src={props.imgUrl}
        alt={props.destinationName}
      />
      <div className="relative flex h-full items-end justify-between p-4">
        <div>
          <p className="text-xl text-light">{props.destinationName}</p>
          <p className="text-md font-light text-slate-200">
            {props.tours} Tours
          </p>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-full bg-light">
          <FontAwesomeIcon className="h-6 text-dark" icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}
