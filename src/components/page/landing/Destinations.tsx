import Link from "next/link";
import DestinationCard from "~/components/utility/DestinationCard";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

type Destination = {
  destinationName: string;
  tours: number;
  imgUrl: string;
};

const DESTINATIONS: Destination[] = [
  {
    destinationName: "Jaipur",
    tours: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=364&q=80",
  },
  {
    destinationName: "Shimla",
    tours: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
  },
  {
    destinationName: "Goa",
    tours: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    destinationName: "Andaman & Nicobar",
    tours: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1579317344982-256c49ab1e0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
];

export default function Destinations() {
  return (
    <div className="my-12 flex flex-col px-4 md:mx-auto md:max-w-6xl">
      <H3 title="POPULAR DESTINATIONS" />
      <H2>Top Notch Destinations</H2>
      <p className="mt-4 text-lg font-light leading-[120%] text-slate-600">
        From the bustling streets of Delhi to the serene backwaters of Kerala,
        we have curated an incredible collection of experiences for you to
        explore.
      </p>
      <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-2 md:grid-cols-4 md:grid-rows-2">
        {DESTINATIONS.map((destination, index) => (
          <DestinationCard
            key={index}
            index={index}
            destinationName={destination.destinationName}
            tours={destination.tours}
            imgUrl={destination.imgUrl}
          />
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
