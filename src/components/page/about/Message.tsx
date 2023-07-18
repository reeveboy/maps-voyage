import Image from "next/image";

export default function Message() {
  return (
    <div className="p-6">
      <div className="mx-auto flex max-w-2xl flex-col justify-center bg-white p-6 shadow-md">
        <div className="flex flex-col">
          <span className="text-5xl text-dark">"</span>
          <p className="px-2 text-center text-xl font-light leading-[130%] text-slate-600">
            We invite you to embark on a remarkable journey with MAPS Voyage.
            Whether you are a solo traveler seeking new adventures, a family
            looking to create lifelong memories, or a group of friends ready for
            an unforgettable escape, we are here to make your travel dreams a
            reality.{" "}
          </p>
          <span className="ml-auto mt-2 text-5xl text-dark">"</span>
        </div>
        <div className="flex items-center justify-center">
          <Image
            className="h-20 w-20 rounded-full object-cover"
            src="https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Sarvesh Chavan"
            width={387}
            height={387}
          />
          <div className="ml-4 flex flex-col font-light">
            <p className="text-xl text-slate-600">Sarvesh Chavan</p>
            <p className="text-lg text-slate-500">
              <span className="font-normal italic">Founder</span>, Maps Voyage
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid w-full place-items-center">
        <button className=" bg-primary px-16 py-3 text-xl text-light shadow-md transition-colors hover:bg-primaryDark focus:bg-primaryDark">
          Travel With Us!
        </button>
      </div>
    </div>
  );
}
