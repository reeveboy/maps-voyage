import TourCard, { Tour } from "~/components/utility/TourCard";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

const TOURS: Tour[] = [
  {
    tourName: "The Sea Explorer",
    stars: 4.7,
    days: 3,
    description: "Exploring the jaw-dropping Andaman coast by foot and by boat",
    groupSize: "25",
    location: "Andaman Sea",
    imgUrl:
      "https://images.unsplash.com/photo-1538826421747-8fc0690ae387?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

export default function Tours() {
  return (
    <div className="my-12 flex flex-col px-4">
      <H3 title="FEATURED TOURS" />
      <H2>Most Popular Tours</H2>
      <div className="mt-4 flex">
        <TourCard tour={TOURS[0]!} />
      </div>
    </div>
  );
}
