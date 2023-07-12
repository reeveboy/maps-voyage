import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function FilterBox() {
  return (
    <div className="my-8 px-4">
      <div className="flex flex-col bg-white p-8">
        <div className="flex flex-col">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-light text-dark">Categories</p>
            <FontAwesomeIcon className="h-6 text-dark" icon={faCaretDown} />
          </div>
          <div className="mt-4 h-[1px] w-full bg-slate-400"></div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-light text-dark">Reviews</p>
            <FontAwesomeIcon className="h-6 text-dark" icon={faCaretDown} />
          </div>
          <div className="mt-4 h-[1px] w-full bg-slate-400"></div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="flex items-end justify-between">
            <p className="text-2xl font-light text-dark">Duration</p>
            <FontAwesomeIcon className="h-6 text-dark" icon={faCaretDown} />
          </div>
          <div className="mt-4 h-[1px] w-full bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
}
