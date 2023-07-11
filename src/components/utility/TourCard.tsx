import {
  faClock,
  faLocationDot,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TourCard() {
  return (
    <div className="w-72 bg-white shadow-md">
      <div className="h-40">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
          alt=""
        />
      </div>
      <div className="mt-2 flex flex-col p-3">
        <div className="flex">
          <FontAwesomeIcon icon={faStar} className="h-3 text-primary" />
          <p className="p-1"></p>
          <p className="text-xs font-light text-slate-600">9.0 Superb</p>
        </div>
        <p className="text-md font-light text-dark">Andaman Island Tour</p>
        <p className="text-xs font-light leading-[120%] text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec
          ullam- ut elit tellus, luctus nec ullam elit tellpus.
        </p>
        <p className="my-4 h-[1px] w-full bg-slate-600"></p>
        <div className="flex justify-center">
          <div className="mx-2 flex">
            <FontAwesomeIcon
              icon={faClock}
              className="mr-1 h-4 text-slate-600"
            />

            <p className="text-xs font-light text-slate-600">2 Days</p>
          </div>

          <div className="mx-2 flex">
            <FontAwesomeIcon
              icon={faUser}
              className="mr-1 h-4 text-slate-600"
            />

            <p className="text-xs font-light text-slate-600">12+</p>
          </div>

          <div className="mx-2 flex">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-1 h-4 text-slate-600"
            />

            <p className="text-xs font-light text-slate-600">
              Andaman & Nicobar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
