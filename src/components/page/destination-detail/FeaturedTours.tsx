import { faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FeaturedTours() {
  return (
    <div className="my-8 flex flex-col items-center px-4">
      <p className="text-3xl text-dark">Featured Tours</p>
      <div className="mt-4 flex flex-col items-center">
        <div className="flex items-center">
          <img
            className="mr-4 h-20 w-20 object-cover shadow-md"
            src="https://images.unsplash.com/photo-1600356604423-426d3363ffb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-2xl font-light text-dark">Adventure Tour</p>
            <div className="mt-1 flex">
              <div className="flex items-center text-slate-500">
                <FontAwesomeIcon className="mr-2 h-6 w-6" icon={faClock} />
                <p className="text-md font-light">2 Days</p>
              </div>
              <div className="ml-4 flex items-center text-slate-500">
                <FontAwesomeIcon className="mr-2 h-6 w-6" icon={faUser} />
                <p className="text-md font-light">2 Days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 h-[2px] w-full bg-slate-600"></div>
        <div className="flex items-center">
          <img
            className="mr-4 h-20 w-20 object-cover shadow-md"
            src="https://images.unsplash.com/photo-1600356604423-426d3363ffb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-2xl font-light text-dark">Adventure Tour</p>
            <div className="mt-1 flex">
              <div className="flex items-center text-slate-500">
                <FontAwesomeIcon className="mr-2 h-6 w-6" icon={faClock} />
                <p className="text-md font-light">2 Days</p>
              </div>
              <div className="ml-4 flex items-center text-slate-500">
                <FontAwesomeIcon className="mr-2 h-6 w-6" icon={faUser} />
                <p className="text-md font-light">2 Days</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8 h-[2px] w-full bg-slate-600"></div>
        <div className="flex items-center">
          <img
            className="mr-4 h-20 w-20 object-cover shadow-md"
            src="https://images.unsplash.com/photo-1600356604423-426d3363ffb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-2xl font-light text-dark">Adventure Tour</p>
            <div className="mt-1 flex">
              <div className="flex items-center text-slate-500">
                <FontAwesomeIcon className="mr-2 h-6 w-6" icon={faClock} />
                <p className="text-md font-light">2 Days</p>
              </div>
              <div className="ml-4 flex items-center text-slate-500">
                <FontAwesomeIcon className="mr-2 h-6 w-6" icon={faUser} />
                <p className="text-md font-light">2 Days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-8 bg-primary px-12 py-3 text-lg text-light shadow-md">
        View All Tours
      </button>
    </div>
  );
}
