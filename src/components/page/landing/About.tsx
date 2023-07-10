import Image from "next/image";
import Btn from "~/components/utility/Btn";
import H2 from "~/components/utility/H2";
import H3 from "~/components/utility/H3";

export default function About() {
  return (
    <div className="my-12 flex flex-col px-4">
      <div className="grid-col-1 grid gap-2">
        <div className="flex w-full justify-between">
          <Image
            src="/images/collage-1.png"
            alt="collage 1"
            width={1000}
            height={1000}
          />
        </div>
        <div className="flex w-full justify-between">
          <Image
            src="/images/collage-2.png"
            alt="collage 2"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="mt-6">
        <H3 title="LEARN ABOUT US" />
        <H2>
          Explore the World with{" "}
          <span className="text-primary"> Maps Voyage</span> And Forge
          Friendships and Bonds along the way!
        </H2>
        <p className="mt-4 text-lg font-light leading-[120%] text-slate-600">
          Let’s embark on a journey that combines unique experiences,
          affordability, exceptional service, and a whole load of fun. Let us be
          your trusted travel companion, as we create unforgettable memories
          together.
        </p>

        <div className="mt-4">
          <Itenary
            icon="wallet"
            title="Affordable Pricing"
            text="We strive to provide exceptional value for money, ensuring that you can enjoy a remarkable travel experience without breaking the bank."
          />
          <Itenary
            icon="map"
            title="Offbeat Experiences"
            text="Our itineraries are carefully designed to uncover hidden gems, allowing you to explore lesser-known destinations and immerse yourself in authentic local cultures."
          />
          <Itenary
            icon="journal"
            title="Personalized Itineraries"
            text="Our dedicated team will work closely with you to tailor the tour according to your specific requirements, ensuring that every aspect of your journey reflects your individual tastes and desires."
          />
        </div>

        <Btn text="Learn More!" />
      </div>
    </div>
  );
}

interface ItenaryProps {
  icon: string;
  title: string;
  text: string;
}
const Itenary = ({ icon, title, text }: ItenaryProps) => {
  return (
    <div className="mt-2 flex items-start">
      <Image
        className="h-16"
        src={`/icons/${icon}.svg`}
        alt={`${icon} icon`}
        width={100}
        height={100}
      />
      <p className="p-3"></p>
      <div className="flex flex-col">
        <p className="text-lg uppercase tracking-wider">{title}</p>
        <p className="text-sm font-light leading-[120%] text-slate-600">
          {text}
        </p>
      </div>
    </div>
  );
};
