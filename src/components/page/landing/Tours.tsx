import TourCard from "~/components/TourCard";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

export default function Tours() {
  return (
    <div className="my-12 flex flex-col px-4">
      <H3 title="FEATURED TOURS" />
      <H2>Most Popular Tours</H2>
      <div className="mt-4 flex">
        <TourCard />
      </div>
    </div>
  );
}
