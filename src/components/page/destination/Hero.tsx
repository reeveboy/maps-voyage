import Banner from "~/components/utility/Banner";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

export default function Hero() {
  return (
    <div>
      <Banner img="/banner.jpg" title="Destinations" />
      <div className="p-4 md:mx-auto md:max-w-7xl">
        <H3 title="Carefully Picked Destinations" />
        <H2>Handpicked Destinations Just For You</H2>
      </div>
    </div>
  );
}
