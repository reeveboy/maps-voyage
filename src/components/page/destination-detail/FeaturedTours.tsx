import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function FeaturedTours() {
  return (
    <div className="flex flex-col">
      <p className="text-2xl text-dark">Featured Tours</p>
      <div className="mt-4 flex flex-col">
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <button className="text-md bg-primary px-12 py-3 text-center text-light shadow-md">
          View All Tours
        </button>
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <div>
      <div className="flex items-center">
        <Image
          className="mr-4 h-16 w-16 object-cover shadow-md"
          src="https://images.unsplash.com/photo-1600356604423-426d3363ffb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
          alt=""
          width={80}
          height={80}
        />
        <div className="flex flex-col">
          <p className="text-xl font-light text-dark">Adventure Tour</p>
          <div className="mt-1 flex">
            <div className="flex items-center text-slate-500">
              <FontAwesomeIcon className="mr-2 h-5 w-5" icon={faClock} />
              <p className="text-sm font-light">2 Days</p>
            </div>
            <div className="ml-4 flex items-center text-slate-500">
              <FontAwesomeIcon className="mr-2 h-5 w-5" icon={faUser} />
              <p className="text-sm font-light">2+ </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6 h-[1px] w-full bg-slate-600"></div>
    </div>
  );
};
