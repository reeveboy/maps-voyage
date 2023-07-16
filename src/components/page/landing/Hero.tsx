import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-black/60">
      <Image
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src={"/images/hero.jpg"}
        alt="Hero Image"
        width={1920}
        height={1080}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <p className="max-w-md text-center text-6xl font-black leading-[85%] text-light drop-shadow-lg">
          Explore the World with Our Tours
        </p>
        <button className="mt-6 bg-primary px-8 py-3 text-light">
          Check out Destinations
        </button>
      </div>
    </div>
  );
}
