import Image from "next/image";
import Link from "next/link";

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
        <Link
          href={"/destinations"}
          className="mt-4 bg-primary px-8 py-3 text-light transition-colors hover:bg-primaryDark focus:bg-primaryDark"
        >
          Check out Destinations!
        </Link>
      </div>
    </div>
  );
}
