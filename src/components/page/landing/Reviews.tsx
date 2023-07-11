import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

export default function Reviews() {
  return (
    <div className="my-12 flex flex-col px-4">
      <H3 title="INSIGHTFUL REVIEWS" />
      <H2>Listen to what people have to say about us!</H2>
      <div className="mt-4 flex">
        <Review />
      </div>
    </div>
  );
}

const Review = () => {
  return (
    <div className="flex w-full flex-col rounded-lg bg-white px-8 py-6 shadow-lg">
      <div className="flex items-center">
        <img
          className="mr-2 h-14 w-14 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <div className="flex flex-col">
          <p className="text-2xl text-primary">Gabriel D'Souza</p>
          <div className="flex h-4 text-slate-600">
            <FontAwesomeIcon className="mr-1 h-full" icon={faStar} />
            <FontAwesomeIcon className="mr-1 h-full" icon={faStar} />
            <FontAwesomeIcon className="mr-1 h-full" icon={faStar} />
            <FontAwesomeIcon className="mr-1 h-full" icon={faStar} />
            <FontAwesomeIcon className="mr-1 h-full" icon={faStar} />
          </div>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-light leading-tight text-slate-600">
          Dui vivamus arcu felis bibendum ut. Etiam sit amet nisl purus in
          mollis nunc sed id. Justo laoreet sit amet cursus sit amet dictum sit
          amet. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
          vivamus at augue.
        </p>
      </div>
      <div className="mt-2 flex flex-row-reverse">
        <span className="text-sm font-light uppercase text-slate-600">
          30 JUNE 2023
        </span>
      </div>
    </div>
  );
};
