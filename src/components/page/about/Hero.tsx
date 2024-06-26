import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative grid h-screen w-full place-items-center bg-dark/60">
      <Image
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src="/banner.jpg"
        alt="mountains background"
        width={1920}
        height={1080}
      />
      <div className="relative flex max-w-lg flex-col items-center justify-center p-4">
        <h2 className="border-b border-light text-center font-cursive text-6xl text-light">
          Who We Are
        </h2>
        <p className="mt-2 text-center text-xl font-light leading-[120%] tracking-[1%] text-slate-200">
          At <span className="font-black text-white">MAPS Voyage</span>, we
          believe that traveling is not just about reaching a destination;
          it&apos;s about embarking on a transformative journey that enriches
          your soul and leaves you with cherished memories.{" "}
        </p>
      </div>
    </div>
  );
}
