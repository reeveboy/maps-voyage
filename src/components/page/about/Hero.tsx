export default function Hero() {
  return (
    <div className="relative grid h-screen w-full place-items-center bg-dark/60">
      <img
        className="absolute h-full w-full object-cover mix-blend-overlay"
        src="https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=903&q=80"
        alt=""
      />
      <div className="relative flex flex-col items-center justify-center p-4">
        <h2 className="border-b border-light text-center font-cursive text-6xl text-light">
          Who We Are
        </h2>
        <p className="mt-2 text-center text-xl font-light leading-[120%] text-slate-200">
          At <span className="font-black text-white">MAPS Voyage</span>, we
          believe that traveling is not just about reaching a destination; it's
          about embarking on a transformative journey that enriches your soul
          and leaves you with cherished memories.{" "}
        </p>
      </div>
    </div>
  );
}