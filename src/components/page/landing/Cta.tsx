import Btn from "~/components/utility/Btn";

export default function Cta() {
  return (
    <div className="relative my-12 w-full bg-black/60">
      <img
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src="/images/sea.jpg"
        alt=""
      />
      <div className="relative flex flex-col items-center px-8 py-16">
        <h3 className="text-center font-cursive text-5xl leading-[85%] text-amber-400">
          Find next place to visit
        </h3>
        <h2 className="mt-6 text-center text-8xl font-black leading-[80%] text-light">
          EXPLORE THE WORLD
        </h2>
        <p className="p-2"></p>
        <Btn text="Contact Us!" />
      </div>
    </div>
  );
}