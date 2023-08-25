import Banner from "~/components/utility/Banner";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

export default function Hero() {
  return (
    <div>
      <Banner
        img="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80"
        title="Destinations"
      />
      <div className="p-4 md:mx-auto md:max-w-7xl">
        <H3 title="Carefully Picked Destinations" />
        <H2>Handpicked Destinations Just For You</H2>
      </div>
    </div>
  );
}
